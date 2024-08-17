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
    name: 'Asking a mutual Connection to do a Warm Intro',
    subject: 'Request you to connect with a Mutual',
    content: 'Here is the template content for requesting a warm introduction through a mutual connection.',
    updated: '8/12/2024',
  },
  {
    id: '2',
    name: 'Referral Request for 1st Connections via LinkedIn/Gmail - Variation 1',
    subject: 'Referral Request for PM role',
    content: 'Here is the template content for a referral request via LinkedIn or Gmail.',
    updated: '8/12/2024',
  },
  {
    id: '3',
    name: 'Request for Virtual/Inperson Coffee if in same area',
    subject: 'Request for Coffee Chat',
    content: 'Here is the template content for requesting a coffee chat if you are in the same area.',
    updated: '8/12/2024',
  },
  // Add more FAQs as needed
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
