import React from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  className : string;
}

const SectionNavigation = ({ sections, activeSection, onSectionChange,className }: SectionNavigationProps) => {
  return (
    <nav className="w-full md:w-1/4 bg-white rounded-xl shadow-lg border p-4 space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Sections</h3>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
            activeSection === section.id
              ? 'bg-green-100 text-green-700 font-semibold shadow-sm'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default SectionNavigation;
