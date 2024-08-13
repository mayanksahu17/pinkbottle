import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

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

  return (
    <div className="p-8 font-calibri">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Cold Email Templates</h1>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full text-left text-gray-800">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">NAME</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">SUBJECT</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-700">UPDATED</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {FAQ_CONTENT.map((faq) => (
              <tr
                key={faq.id}
                className="hover:bg-gray-50 cursor-pointer transition duration-200"
                onClick={() => openModal(faq)}
              >
                <td className="px-6 py-4">{faq.name}</td>
                <td className="px-6 py-4">{faq.subject}</td>
                <td className="px-6 py-4">{faq.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedFAQ && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl transform transition-transform duration-500 scale-105">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              <AiOutlineClose size={28} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedFAQ.subject}</h2>
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
                onClick={() => navigator.clipboard.writeText(selectedFAQ.content)}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
              >
                Copy Content
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQTable;
