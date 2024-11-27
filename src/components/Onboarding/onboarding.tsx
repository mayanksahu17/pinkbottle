"use client"
import { useEffect, useState } from "react"
import { Label } from "./label"
import { Input } from "./input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select"
import { Button } from "../ui/button"
import React from "react"
import Navbar from '../navbar/navbar';
import Banner from './FullPageImage';
import Modal from './Call'; // Import the modal component
import Footer from "../footer/footer"
import  ParallaxBanner  from "./Scroll";

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
            resume: base64String, // Ensure the value is a string
            resumename: file.name, // Ensure the value is a string
            resumemimetype: file.type  // Ensure the value is a string
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
    const isValid = Object.values(formData).every(value => value !== "" && value !== null);
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <>
      <Navbar />
      <div style={{ filter: isModalOpen ? "blur(5px)" : "none" }} className="min-h-screen w-full lg:grid lg:grid-cols-[300px_1fr] bg-gray-100 py-16">
        <div className="flex flex-col border-r bg-white shadow-md p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800" style={{ fontFamily: 'Calibri, sans-serif' }}>Onboarding Form</h2>
          </div>
          <div className="flex-1 space-y-4 overflow-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 1 ? "text-blue-600" : "text-gray-600"}`} style={{ fontFamily: 'Calibri, sans-serif' }}>Personal Information</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>Step 1</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 2 ? "text-blue-600" : "text-gray-600"}`} style={{ fontFamily: 'Calibri, sans-serif' }}>Education</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>Step 2</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 3 ? "text-blue-600" : "text-gray-600"}`} style={{ fontFamily: 'Calibri, sans-serif' }}>Work Experience</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>Step 3</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 4 ? "text-blue-600" : "text-gray-600"}`} style={{ fontFamily: 'Calibri, sans-serif' }}>Resume</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 4 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>Step 4</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-6">
          <form onSubmit={handleFinalSubmit}>
            <main className="flex-1 space-y-6 bg-white shadow-md rounded-lg p-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstname" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>First Name</Label>
                      <Input id="firstname"
                        placeholder="Alex"
                        className="border border-gray-300 rounded-lg"
                        value={formData.firstname}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Last Name</Label>
                      <Input id="lastname"
                        placeholder="Doe"
                        className="border border-gray-300 rounded-lg"
                        value={formData.lastname}
                        onChange={handleChange}
                        required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Email</Label>
                    <Input id="email"
                      type="email"
                      placeholder="alex@gmail.com"
                      className="border border-gray-300 rounded-lg"
                      value={formData.email}
                      onChange={handleChange}
                      required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Phone</Label>
                    <Input id="phone"
                      type="tel"
                      placeholder="+1 (555) 555-5555"
                      className="border border-gray-300 rounded-lg"
                      value={formData.phone}
                      onChange={handleChange}
                      required />
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="education" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Education</Label>
                    <Select value={formData.education} onValueChange={(value) => setFormData(prevState => ({ ...prevState, education: value }))}>
                      <SelectTrigger
                        id="education"
                        className="border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:border-blue-500"
                      >
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent
                        className="border border-gray-300 rounded-lg bg-white shadow-lg mt-1 z-10"
                      >
                        <SelectItem value="bachelor" className="hover:bg-blue-100">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="master" className="hover:bg-blue-100">
                          Master's Degree
                        </SelectItem>
                        <SelectItem value="doctorate" className="hover:bg-blue-100">
                          PHD
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="major" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Major</Label>
                    <Input id="major"
                      placeholder="Computer Science"
                      className="border border-gray-300 rounded-lg"
                      value={formData.major}
                      onChange={handleChange}
                      required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Graduation Year</Label>
                    <Input id="graduationyear"
                      type="number"
                      placeholder="2023"
                      className="border border-gray-300 rounded-lg"
                      value={formData.graduationyear}
                      onChange={handleChange}
                      required />
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentrole" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Current Role</Label>
                    <Input id="currentrole"
                      placeholder="Software Engineer"
                      className="border border-gray-300 rounded-lg"
                      value={formData.currentrole}
                      onChange={handleChange}
                      required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentcompany" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Current Company</Label>
                    <Input id="currentcompany"
                      placeholder="Acme Inc"
                      className="border border-gray-300 rounded-lg"
                      value={formData.currentcompany}
                      onChange={handleChange}
                      required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsofexperience" className="text-gray-700" style={{ fontFamily: 'Calibri, sans-serif' }}>Years of Experience</Label>
                    <Input
                      id="yearsofexperience"
                      type="number"
                      placeholder="5"
                      className="border border-gray-300 rounded-lg"
                      value={formData.yearsofexperience}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-gray-700 font-semibold" style={{ fontFamily: 'Calibri, sans-serif' }}>
                      Upload Resume
                    </Label>
                    <div className="relative border border-gray-300 rounded-lg p-4 flex items-center justify-center hover:border-blue-500 transition-colors duration-200">
                      <input
                        id="resume"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
                        required
                      />
                      <img
                        src="resumeUpload.svg"
                        alt="Upload Icon"
                        className="w-16 h-16 text-gray-500 mr-2"
                      />
                      <span className="text-gray-500">{formData.resumename || "Choose file"}</span>
                    </div>
                  </div>
                </div>
              )}
            </main>
            <div className="bg-white shadow-md rounded-lg p-4 mt-4">
              <div className="flex items-center justify-between mb-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-transform transform active:scale-95"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Previous
                  </Button>
                )}
                {currentStep < 4 && (
                  <Button
                    type="button"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-transform transform active:scale-95"
                    onClick={() => setCurrentStep(currentStep + 1)}
                  >
                    Next
                  </Button>
                )}
                {currentStep === 4 && (
                  <Button
                    type="submit"
                    className="ml-auto px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-transform transform active:scale-95"
                    disabled={!isFormValid}
                    onClick={handleFinalSubmit}
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
            {/* <Banner /> */}
            <ParallaxBanner/>
          </form>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onScheduleCall={handleScheduleCall}
      />
      <Footer />
    </>
  )
}
