"use client"
import { useState } from "react"
import { Label } from "./label"
import { Input } from "./input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./select"
import { Button } from "../ui/button"
import React from "react"
import Navbar from '../navbar/navbar';

export function Onboarding() {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
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
    resumename: ""
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
        console.log('FileReader Result Type:', typeof reader.result);  // Check the type of reader.result
        if (typeof reader.result === 'string') {
          const base64String = reader.result.split(',')[1];
          setFormData(prevState => {
            const newState = {
              ...prevState,
              [id]: base64String,  // Storing the Base64 string
              resumename: file.name
            };
            console.log('New FormData after file read:', newState);  // Log new state
            return newState;
          });
        } else {
          console.error('FileReader result is not a string');
        }
      };
      reader.readAsDataURL(file);
    }
  };
    
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const url = 'https://script.google.com/macros/s/AKfycbwpFIT9xSffmstRR-Q3ju7al_xifk3q1sBuCJg4IPLbXKW6clcuVJmZH7pMI5lTNbCQbA/exec';
    const formDataToSend = new FormData();
  
    console.log('Final formData before submission:', formData);
  
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`Appending to FormData: ${key}:`, value);
      formDataToSend.append(key, value);
    });
  
    fetch(url, {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => response.text())
    .then(result => console.log("Server response:", result))
    .catch(error => console.error('Error:', error));
  };
  
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full lg:grid lg:grid-cols-[300px_1fr] bg-gray-100">
        <div className="flex flex-col border-r bg-white shadow-md p-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Onboarding Form</h2>
          </div>
          <div className="flex-1 space-y-4 overflow-auto">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 1 ? "text-primary" : "text-gray-600"}`}>Personal Information</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>Step 1</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 2 ? "text-primary" : "text-gray-600"}`}>Education</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>Step 2</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 3 ? "text-primary" : "text-gray-600"}`}>Work Experience</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>Step 3</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className={`text-base font-medium ${currentStep === 4 ? "text-primary" : "text-gray-600"}`}>Resume</h3>
                <span className={`rounded-full px-2 py-1 text-xs font-medium ${currentStep === 4 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"}`}>Step 4</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-6">
          <form onSubmit={handleSubmit}>
            <main className="flex-1 space-y-6 bg-white shadow-md rounded-lg p-6">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstname" className="text-gray-700">First Name</Label>
                      <Input id="firstname"
                        placeholder="John"
                        className="border border-gray-300 rounded-lg"
                        value={formData.firstname}
                        onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname" className="text-gray-700">Last Name</Label>
                      <Input id="lastname"
                        placeholder="Doe"
                        className="border border-gray-300 rounded-lg"
                        value={formData.lastname}
                        onChange={handleChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border border-gray-300 rounded-lg"
                      value={formData.email}
                      onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                    <Input id="phone"
                      type="tel"
                      placeholder="+1 (555) 555-5555"
                      className="border border-gray-300 rounded-lg"
                      value={formData.phone}
                      onChange={handleChange} />
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="education" className="text-gray-700">Education</Label>
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
                    <Label htmlFor="major" className="text-gray-700">Major</Label>
                    <Input id="major"
                      placeholder="Computer Science"
                      className="border border-gray-300 rounded-lg"
                      value={formData.major}
                      onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear" className="text-gray-700">Graduation Year</Label>
                    <Input id="graduationyear"
                      type="number"
                      placeholder="2023"
                      className="border border-gray-300 rounded-lg"
                      value={formData.graduationyear}
                      onChange={handleChange} />
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentrole" className="text-gray-700">Current Role</Label>
                    <Input id="currentrole"
                      placeholder="Software Engineer"
                      className="border border-gray-300 rounded-lg"
                      value={formData.currentrole}
                      onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentcompany" className="text-gray-700">Current Company</Label>
                    <Input id="currentcompany"
                      placeholder="Acme Inc"
                      className="border border-gray-300 rounded-lg"
                      value={formData.currentcompany}
                      onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsofexperience" className="text-gray-700">Years of Experience</Label>
                    <Input
                      id="yearsofexperience"
                      type="number"
                      placeholder="5"
                      className="border border-gray-300 rounded-lg"
                      value={formData.yearsofexperience}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-gray-700 font-semibold">
                      Upload Resume
                    </Label>
                    <div className="relative border border-gray-300 rounded-lg p-4 flex items-center justify-center hover:border-blue-500 transition-colors duration-200">
                      <input
                        id="resume"
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileChange}
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
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
