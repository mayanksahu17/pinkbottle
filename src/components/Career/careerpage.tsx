"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export function CareerPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for tracking submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    university: "",
    resume: "",
    resumeName: "",
    resumeMimeType: "",
    coverLetter: "",
    coverLetterName: "",
    coverLetterMimeType: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const file = files ? files[0] : null;
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result && typeof reader.result === "string") {
        setFormData({
          ...formData,
          [name]: reader.result.split(",")[1],
          [`${name}Name`]: file?.name || "",
          [`${name}MimeType`]: file?.type || "",
        });
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const removeFile = (fileType: string) => {
    setFormData({
      ...formData,
      [fileType]: "",
      [`${fileType}Name`]: "",
      [`${fileType}MimeType`]: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxWkP5Uvmg_CCqolbTOTc7jtxOklv-RetlaxJIf8L2TvnbN4iuSznjc_-c4H1OypwM/exec";
    const data = new URLSearchParams(formData as any);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Success!", response);
      alert("Application submitted successfully!");
      setModalOpen(false);
      resetForm();
    } catch (error) {
      console.error("Error!", error);
      alert("There was an error submitting your application.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const jobPositions = [
    {
      title: "Software Engineer",
      description:
        "We are seeking a skilled Software Engineer to join our dynamic team. You will be responsible for developing, testing, and maintaining cutting-edge web applications. You will collaborate with cross-functional teams to drive our innovative product roadmap forward. Ideal candidates will have a strong background in web technologies and a passion for creating high-quality software solutions.",
      experience: "2-5 years",
      location: "Remote, USA",
    },
    {
      title: "Data Analyst Intern",
      description:
        "We are looking for a motivated Data Analyst Intern to join our product team. As a Data Analyst Intern, you will drive product initiatives with a user-centered approach, collaborating closely with engineering and design teams to deliver exceptional user experiences. This role provides a unique opportunity to gain hands-on experience in data analysis and product development.",
      experience: "Internship",
      location: "USA",
    },
    {
      title: "Machine Learning Intern",
      description:
        "We are excited to offer an internship opportunity for a talented Machine Learning Intern. In this role, you will work on designing intuitive and delightful user interfaces, shaping the way users interact with our products from the ground up. You will be involved in various aspects of machine learning projects, from data preprocessing to model deployment. This is a great opportunity to apply your machine learning skills in a real-world setting.",
      experience: "Internship",
      location: "Remote, USA",
    },
    // More positions can be added here
  ];

  const openModal = (jobTitle: string) => {
    setCurrentJob(jobTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      address: "",
      university: "",
      resume: "",
      resumeName: "",
      resumeMimeType: "",
      coverLetter: "",
      coverLetterName: "",
      coverLetterMimeType: "",
    });
  };

  return (
    <>
      <Navbar />
      <header className="bg-teal-700 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-2">Join Our Team</h1>
          <p className="text-xl">
            At HiredEasy, we're revolutionizing the way the world works. Join
            our vibrant team and help us build an exciting future.
          </p>
        </div>
      </header>
      <main className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobPositions.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                  <p className="text-gray-700 mb-2">{job.description}</p>
                  <p className="text-gray-600 mb-2">
                    <strong>Experience:</strong> {job.experience}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <button
                    onClick={() => openModal(job.title)}
                    className="mt-auto inline-flex items-center justify-center px-5 py-3 bg-green-600 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center h-full w-full"
            id="my-modal"
          >
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 mx-auto">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-4 mr-4 p-2 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentJob} Job Application
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full p-4 border rounded"
                      onChange={handleInputChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full p-4 border rounded"
                      onChange={handleInputChange}
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    className="w-full p-4 border rounded"
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="university"
                    placeholder="University Name"
                    className="w-full p-4 border rounded"
                    onChange={handleInputChange}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="file-upload-wrapper relative">
                      <label className="block w-full px-5 py-3 bg-green-600 text-white rounded cursor-pointer text-center">
                        {formData.resumeName
                          ? `Uploaded: ${formData.resumeName}`
                          : "Upload Resume"}
                        <input
                          type="file"
                          name="resume"
                          required
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                      {formData.resumeName && (
                        <button
                          type="button"
                          onClick={() => removeFile("resume")}
                          className="absolute top-0 right-0 mt-2 mr-2 text-white bg-white-500 rounded-full h-6 w-6 flex items-center justify-center"
                        >
                          &times;
                        </button>
                      )}
                    </div>
                    <div className="file-upload-wrapper relative">
                      <label className="block w-full px-5 py-3 bg-green-600 text-white rounded cursor-pointer text-center">
                        {formData.coverLetterName
                          ? `Uploaded: ${formData.coverLetterName}`
                          : "Upload Cover Letter"}
                        <input
                          type="file"
                          name="coverLetter"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                      {formData.coverLetterName && (
                        <button
                          type="button"
                          onClick={() => removeFile("coverLetter")}
                          className="absolute top-0 right-0 mt-2 mr-2 text-white bg-red-500 rounded-full h-6 w-6 flex items-center justify-center"
                        >
                          &times;
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting} // Disable button when submitting
                    className="w-full px-5 py-4 bg-green-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-xl font-semibold"
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white inline"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6l4 2"
                        />
                      </svg>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
