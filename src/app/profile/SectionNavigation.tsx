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

  React.useEffect(() => {
    // Prevent scrolling on the body when sidebar is open
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSidebarOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed z-[60] top-1/2 left-4 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0 z-[55]' : '-translate-x-full z-[10]'}
        md:translate-x-0 md:static md:w-1/4 md:z-[5]`}
      >
        <div className="p-4 space-y-2 h-full overflow-y-auto">
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
          className="fixed inset-0 bg-black/50 z-[50] md:hidden"
        />
      )}
    </>
  );
};

export default SectionNavigation;
