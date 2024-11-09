import React from 'react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const SectionNavigation = ({ sections, activeSection, onSectionChange }: SectionNavigationProps) => {
  return (
    <nav className="w-1/4 bg-white rounded-lg border p-4 space-y-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            activeSection === section.id
              ? 'bg-green-50 text-green-600 font-medium'
              : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default SectionNavigation;