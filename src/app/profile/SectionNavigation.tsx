import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  sections, 
  activeSection, 
  onSectionChange 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed z-50 top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav 
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40
          md:static md:w-1/4 md:block
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="p-4 space-y-2 h-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sections</h3>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-green-100 text-green-700 font-semibold shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default SectionNavigation;