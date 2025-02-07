'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import { Clock, Search, Briefcase, BookOpen, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"


// Airtable API setup
const AIRTABLE_API_URL = 'https://api.airtable.com/v0';
const BASE_ID = 'appzGIJzpA2DdUULP'; 
const GRADUATES_TABLE = 'Agencies'; 
const INTERNSHIPS_TABLE = 'interns'; 
const AIRTABLE_API_KEY = 'patiSLqkAqfA6qzug.3b7715f1f1b1faba7158f721e593b33bc2d7e6cf932af71cac52e0e832f0e17a'; 

// Function to fetch Airtable data
const fetchAirtableData = async (Interns) => {
  try {
    const response = await axios.get(`${AIRTABLE_API_URL}/${BASE_ID}/${Interns}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });
    return response.data.records;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    return [];
  }
};

export default function JobListingPage() {
  const [activeView, setActiveView] = useState('graduates');
  const [graduatesCount, setGraduatesCount] = useState(0);
  const [internshipsCount, setInternshipsCount] = useState(0);

  useEffect(() => {
    const fetchGraduates = async () => {
      const data = await fetchAirtableData(GRADUATES_TABLE);
      setGraduatesCount(data.length);
    };

    const fetchInternships = async () => {
      const data = await fetchAirtableData(INTERNSHIPS_TABLE);
      setInternshipsCount(data.length);
    };

    fetchGraduates();
    fetchInternships();
  }, []);

  const graduatesTableUrl = 'https://airtable.com/embed/app80LbegGdEENGZE/shrabnfURYxOUkZTn';
  const internshipTableUrl = 'https://airtable.com/embed/app80LbegGdEENGZE/shrabnfURYxOUkZTn';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 py-20 text-white">
      <div className="container mx-auto px-6 text-center">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-20">
    2025 Entry-Level Jobs for New Graduates
  </h1>
  <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
    Stay updated with hourly job listings for new graduates (0-2 years experience) across the U.S. 
    Find real opportunities to launch your career!
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <button className="bg-white shadow-lg text-emerald-600 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-xl transition-all flex items-center justify-center border border-emerald-300">
      Top AI/ML Jobs <ChevronRight className="ml-2" />
    </button>
    <button className="bg-white shadow-lg text-emerald-600 hover:bg-emerald-100 font-semibold py-3 px-8 rounded-xl transition-all flex items-center justify-center border border-emerald-300">
      2025 U.S. Internships <ChevronRight className="ml-2" />
    </button>
  </div>
</div>

      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-sm text-gray-600 mb-8">
            <Clock className="w-5 h-5 mr-2" />
            Last updated: January 15, 2025, 08:08 PM PST
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-emerald-50 p-8 rounded-lg shadow-md text-center">
              <Briefcase className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h2 className="text-5xl font-bold text-emerald-600 mb-2">{graduatesCount}</h2>
              <p className="text-gray-700 font-medium text-lg">Graduate Openings</p>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg shadow-md text-center">
              <BookOpen className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h2 className="text-5xl font-bold text-teal-600 mb-2">{internshipsCount}</h2>
              <p className="text-gray-700 font-medium text-lg">Internship Openings</p>
            </div>
          </div>
        </div>
      </section>

      {/* View Selection Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
            <button
              onClick={() => setActiveView('graduates')}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all flex-1 ${
                activeView === 'graduates'
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-emerald-50'
              }`}
            >
              Graduates (0-2 years)
            </button>
            <button
              onClick={() => setActiveView('internships')}
              className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all flex-1 ${
                activeView === 'internships'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-teal-50'
              }`}
            >
              Internships
            </button>
          </div>
        </div>
      </section>

      {/* Airtable Embedded Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe
              className="airtable-embed w-full h-[800px]"
              src={activeView === 'graduates' ? graduatesTableUrl : internshipTableUrl}
              frameBorder="0"
              width="100%"
              height="800"
              style={{ background: 'transparent', border: '1px solid #ccc' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Step-by-Step Guide to Securing a Full-Time Role in 2025
          </h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Step 1: Identify the Goal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                  • How to set clear career goals
                </a>
                <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                  • How To Choose a Career Path in 9 Steps (With Examples)
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Step 2: Build the Foundation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Prep Your Resume</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • How To Make a Comprehensive Resume (With Examples)
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • How to Use Keywords and Phrases in Your Resume
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • Do NOT make these resume mistakes!
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Build Your LinkedIn Profile</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • How To Make A LinkedIn Profile
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • How to Write a Professional LinkedIn Summary
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • Make Yourself a LinkedIn Headshot (Tool!)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Step 3: Take Action</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Apply to New Grad Roles</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • When to Apply?
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • The Essential Guide to Industry Recruiting Timelines: 2024-2025
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • Where to Find Jobs?
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • Need Help with Applications?
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Network</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • What is Networking? Why is it so important?
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • 5 tips with sample scripts for cold outreach in your job search
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • What to say in networking conversations?
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Step 4: Show Yourself</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Practice Interview Questions</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • How to Prepare for a Job Interview
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • How To Use the STAR Interview Method
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • 36 Questions To Ask in a Job Interview
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Interview Day</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • Advice for the day before and day of interview
                    </a>
                    <a href="#" className="block text-gray-700 hover:text-emerald-500 transition-colors">
                      • Remember to write a Thank-You Email after the interview!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
