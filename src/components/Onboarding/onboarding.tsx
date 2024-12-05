"use client"
import { useEffect, useState } from "react"
import { Label } from "./label"
import { Input } from "./input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select"
import { Button } from "../ui/button"
import Navbar from '../navbar/navbar';
import ParallaxBanner from "./Scroll";
import Footer from "../footer/footer"
import Modal from './Call'; // Import the modal component

export function Onboarding() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    education: string;
    major: string;
    graduationyear: string;
    currentrole: string;
    currentcompany: string;
    yearsofexperience: string;
    resume: string | null;
    resumename: string;
    resumemimetype: string;
  }>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    education: "",
    major: "",
    graduationyear: "",
    currentrole: "",
    currentcompany: "",
    yearsofexperience: "",
    resume: null,
    resumename: "",
    resumemimetype: ""
  });

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e: { target: { id: any; files: any } }) => {
    const { id, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const base64String = reader.result.split(',')[1];
          setFormData(prevState => ({
            ...prevState,
            resume: base64String,
            resumename: file.name,
            resumemimetype: file.type
          }));
        } else {
          console.error('FileReader result is not a string');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbxhS88w-PVah8s2Htyj8IinBGpcWUtCZ6LYvO5qO3aaZBuIgfx4HEZVs1jkRNLAH7ALyw/exec';
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value as string);
    });

    // Show the modal immediately after clicking submit
    setIsModalOpen(true);

    // Continue the submission in the background
    fetch(url, {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => response.text())
    .then(result => {
      console.log("Server response:", result);
    })
    .catch(error => console.error('Error:', error));
  };

  const handleFinalSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isFormValid) {
      handleSubmit(e); // Submit form data
    }
  };

  const handleScheduleCall = () => {
    // Redirect to the scheduling link
    window.location.href = "https://apply.neetocal.com/meeting-with-nikhil-jain";
  };

  useEffect(() => {
    let valid = false;
    
    switch (currentStep) {
      case 1:
        valid = formData.firstname !== "" && formData.lastname !== "" && formData.email !== "" && formData.phone !== "";
        break;
      case 2:
        valid = formData.education !== "" && formData.major !== "" && formData.graduationyear !== "";
        break;
      case 3:
        valid = formData.currentrole !== "" && formData.currentcompany !== "" && formData.yearsofexperience !== "";
        break;
      case 4:
        valid = formData.resume !== null;
        break;
      default:
        valid = false;
    }

    setIsFormValid(valid);
  }, [formData, currentStep]);

  const timelineSteps = [
    { title: 'Personal Information', isActive: currentStep >= 1 },
    { title: 'Education', isActive: currentStep >= 2 },
    { title: 'Work Experience', isActive: currentStep >= 3 },
    { title: 'Resume', isActive: currentStep >= 4 },
  ];

  return (
    <>
      <Navbar />
      <div style={{ filter: isModalOpen ? "blur(5px)" : "none" }} className="min-h-screen w-full bg-gray-100 py-16">
        {/* Timeline Steps */}
        <div className="flex justify-between px-6 mb-6">
          {timelineSteps.map((step, index) => (
            <div key={index} className={`text-center flex-1 ${step.isActive ? 'text-blue-600' : 'text-gray-600'}`}>
              <p className={`text-2xl font-medium ${step.isActive ? 'font-bold' : 'font-normal'}`}>
                {step.title}
              </p>
              {step.isActive && <div className="h-1 bg-blue-600 rounded-full mt-1"></div>}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:grid lg:grid-cols-1 bg-gray-100 px-[8rem]">
          <div className="space-y-6 bg-white shadow-md p-6 rounded-lg">
            <form onSubmit={handleFinalSubmit}>
              <main className="flex-1 space-y-6">
                {/* Step 1 - Personal Information */}
                {currentStep === 1 && (
                  <>
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input
                          id="firstname"
                          type="text"
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input
                          id="lastname"
                          type="text"
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Step 2 - Education */}
                {currentStep === 2 && (
                  <>
                    <div>
                      <Label htmlFor="education">Education</Label>
                      <Select id="education" value={formData.education} onValueChange={handleChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Education Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="High School">High School</SelectItem>
                          <SelectItem value="Associate's Degree">Associate's Degree</SelectItem>
                          <SelectItem value="Bachelor's Degree">Bachelor's Degree</SelectItem>
                          <SelectItem value="Master's Degree">Master's Degree</SelectItem>
                          <SelectItem value="Ph.D.">Ph.D.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="major">Major</Label>
                      <Input
                        id="major"
                        type="text"
                        value={formData.major}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="graduationyear">Graduation Year</Label>
                      <Input
                        id="graduationyear"
                        type="number"
                        value={formData.graduationyear}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Step 3 - Work Experience */}
                {currentStep === 3 && (
                  <>
                    <div>
                      <Label htmlFor="currentrole">Current Role</Label>
                      <Input
                        id="currentrole"
                        type="text"
                        value={formData.currentrole}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentcompany">Current Company</Label>
                      <Input
                        id="currentcompany"
                        type="text"
                        value={formData.currentcompany}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="yearsofexperience">Years of Experience</Label>
                      <Input
                        id="yearsofexperience"
                        type="number"
                        value={formData.yearsofexperience}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Step 4 - Resume */}
                {currentStep === 4 && (
                  <div>
                    <div>
                      <Label htmlFor="resume">Upload Resume</Label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(prevStep => prevStep - 1)}
                      className="bg-gray-400 text-white py-2 px-4 rounded"
                    >
                      Back
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(prevStep => prevStep + 1)}
                      disabled={!isFormValid}
                      className="bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-blue-600 text-white py-2 px-4 rounded"
                      disabled={!isFormValid}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </main>
            </form>
          </div>
        </div>
      </div>
      <ParallaxBanner />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onScheduleCall={handleScheduleCall} />
    </>
  );
}
