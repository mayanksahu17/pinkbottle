// File: lib/database/models/User/types.ts

import { Document } from 'mongoose';
import { ISubscription } from '../Subscription/types';

export type Skill = {
  name: string;
  level: string;
};

export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

export type Profile = {
  personalInfo: {
    fullName: string;
    profilePhoto: string;
    email: string;
    location: string;
    phone: string;
  };
  rolesSkills: {
    title: string;
    skills: Skill[];
    roles: string[];
  };
  expectations: {
    hourlyRate: string;
    availability: string;
    workPreference: string[];
    rightToWork: string;
    securityClearance: string;
  };
  experiences: Experience[];
  cv: {
    resume: string;
  };
  diversityInclusion: {
    gender: string;
    pronouns: string;
    ethnicity: string;
  };
};

export type FormData = {
  profiles: {
    personalInfo: {
      fullName: string;
      profilePhoto: string;
      email: string;
      location: string;
      phone: string;
    };
    rolesSkills: {
      title: string;
      skills: Skill[];
      roles: string[];
    };
    expectations: {
      hourlyRate: string;
      availability: string;
      workPreference: string[];
      rightToWork: string;
      securityClearance: string;
    };
    experiences: Experience[];
    cv: {
      resume: string;
    };
    diversityInclusion: {
      gender: string;
      pronouns: string;
      ethnicity: string;
    };
  }[];
};

export type Jobs = {
  [x: string]: string;
  _id?: string;
  image: string;
  title: string;
  position: string;
  date: string;
  status: string;
  location: string;
};

export interface IUser extends Document {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  payment: {
    status: 'Paid' | 'Unpaid';
    subscription: ISubscription;
  };
  jobs: Jobs[];
  profiles: Profile[];
  resume: string;
coverLetter: string;
}

