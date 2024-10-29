export type Skill = {
  name: string;
  level: string;
}

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export type FormData = {
  // Personal Info
  fullName: string;
  profilePhoto: string;
  email: string;
  location: string;
  phone: string;
  
  // Roles and Skills
  title: string;
  skills: Skill[];
  primaryRole: string;
  
  // Expectations
  hourlyRate: string;
  availability: string;
  workPreference: string[];
  
  // Experience
  experiences: Experience[];
  
  // CV
  resume: string;
  
  // Diversity and Inclusion
  gender: string;
  pronouns: string;
  ethnicity: string;
}
