import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// FAQ content array
const FAQ_CONTENT = [
  {
    id: '1',
    name: 'LinkedIn Connection Request',
    subject: 'Connecting on LinkedIn',
    content: `Hi [Name],

I came across your profile and was impressed by your experience in [Industry/Skill]. I'd love to connect and learn more about your work at [Company Name]. Looking forward to connecting!

Best,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '2',
    name: 'Requesting a Referral on LinkedIn',
    subject: 'Referral Request for [Job Title] at [Company Name]',
    content: `Hi [Connection's Name],

I hope you're doing well. I noticed that [Company Name] is hiring for a [Job Title] role. Given your experience at the company, I wanted to see if you might be open to referring me for this position. I'm confident that my skills in [Skill 1] and [Skill 2] would make me a strong fit.

Thank you for considering my request.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '3',
    name: 'Cold Email to HR for a Job with a Job Link',
    subject: 'Application for [Job Title] at [Company Name]',
    content: `Dear [HR Manager's Name],

I hope this message finds you well. I recently came across the [Job Title] position at [Company Name] and I am very interested in applying. My background in [Your Field/Industry] aligns well with the requirements of this role. Here is the link to the job posting: [Job Link].

Could you please let me know the best way to proceed with my application?

Thank you for your time and consideration.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '4',
    name: 'Cold Email to a Hiring Manager',
    subject: 'Interest in [Job Title] Position at [Company Name]',
    content: `Dear [Hiring Manager's Name],

I hope you're doing well. I'm writing to express my interest in the [Job Title] position at [Company Name]. With my experience in [Skill 1], [Skill 2], and a strong passion for [Industry/Field], I believe I would be a valuable addition to your team.

I would love the opportunity to discuss how my background and skills could contribute to the success of your team.

Looking forward to your reply.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '5',
    name: 'Cold Email to a Tech Manager',
    subject: 'Exploring Opportunities in [Specific Field/Tech]',
    content: `Dear [Tech Manager's Name],

I hope this message finds you well. I'm reaching out to explore any opportunities in [Specific Field/Technology] at [Company Name]. My experience in [Skill 1] and [Skill 2] has equipped me with the technical expertise needed for such roles.

Please let me know if there are any relevant openings or if we could set up a time to discuss potential opportunities.

Thank you for your time.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '6',
    name: 'Requesting a Referral from a School Alumni',
    subject: 'Fellow Alumni Seeking Referral for [Job Title]',
    content: `Hi [Alumni's Name],

I hope you're doing well. I noticed that you're working at [Company Name], and I’m interested in the [Job Title] position there. As a fellow [School Name] alum, I would greatly appreciate it if you could refer me for this role.

Thank you so much for your support!

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '7',
    name: 'Cold Email to HR Asking for Any Opportunity',
    subject: 'Exploring Opportunities at [Company Name]',
    content: `Dear [HR Manager's Name],

I hope you're well. I'm writing to express my interest in any current or upcoming opportunities at [Company Name]. My background in [Your Industry/Field] and passion for [Specific Area] align with the values and work at [Company Name].

Please let me know if there are any suitable openings.

Thank you for considering my application.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '8',
    name: 'Cold Email for a Job Follow-Up',
    subject: 'Follow-Up on [Job Title] Application',
    content: `Dear [HR Manager's Name],

I hope you're doing well. I wanted to follow up on my application for the [Job Title] position at [Company Name]. I’m very excited about the opportunity and would appreciate any updates on the status of my application.

Thank you for your time and consideration.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '9',
    name: 'Cold Email to a Senior Executive',
    subject: 'Interest in Discussing [Job Title] at [Company Name]',
    content: `Dear [Executive's Name],

I hope this email finds you well. I am reaching out to express my interest in the [Job Title] position at [Company Name]. With my extensive experience in [Skill 1] and [Skill 2], I am confident that I could make a significant contribution to your team.

I would greatly appreciate the opportunity to discuss how I could bring value to [Company Name].

Thank you for your time and consideration.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
  {
    id: '10',
    name: 'Thank You Email After an Interview',
    subject: 'Thank You for the Opportunity',
    content: `Dear [Interviewer's Name],

Thank you for taking the time to meet with me to discuss the [Job Title] position at [Company Name]. I enjoyed our conversation and am even more excited about the possibility of joining your team.

Please don't hesitate to reach out if you need any additional information.

Thank you once again for your consideration.

Best regards,
[Your Name]`,
    updated: '8/17/2024',
  },
];


const FAQTable: React.FC = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<typeof FAQ_CONTENT[0] | null>(null);

  const openModal = (faq: typeof FAQ_CONTENT[0]) => {
    setSelectedFAQ(faq);
  };

  const closeModal = () => {
    setSelectedFAQ(null);
  };

  const handleCopyContent = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success('Content copied to clipboard!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">Cold Email Templates</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full text-left text-gray-800">
          <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold">NAME</th>
              <th className="px-6 py-4 text-sm font-semibold">SUBJECT</th>
              <th className="px-6 py-4 text-sm font-semibold">UPDATED</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {FAQ_CONTENT.map((faq) => (
              <tr
                key={faq.id}
                className="hover:bg-gray-100 cursor-pointer transition duration-200"
                onClick={() => openModal(faq)}
              >
                <td className="px-6 py-4 font-medium">{faq.name}</td>
                <td className="px-6 py-4">{faq.subject}</td>
                <td className="px-6 py-4">{faq.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {selectedFAQ && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
          >
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              className="bg-white rounded-xl shadow-xl p-6 sm:p-10 max-w-3xl w-full relative"
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={closeModal}
              >
                <AiOutlineClose size={28} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">{selectedFAQ.subject}</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">To</label>
                  <input
                    type="text"
                    value="hr@example.com" // Hardcoded "To" field
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 bg-gray-50 text-gray-800 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    value={selectedFAQ.subject} // Dynamic subject
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 bg-gray-50 text-gray-800 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Content</label>
                  <textarea
                    value={selectedFAQ.content} // Dynamic content
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 mt-1 bg-gray-50 text-gray-800 shadow-sm h-40 resize-none"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => handleCopyContent(selectedFAQ.content)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
                >
                  <FiCopy className="mr-2" /> Copy Content
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer />
    </div>
  );
};

export default FAQTable;