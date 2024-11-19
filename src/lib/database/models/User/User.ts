// File: models/User.ts
import mongoose from 'mongoose';

// Define the Skill type
export type Skill = {
  name: string;
  level: string;
};

// Define the Experience type
export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

// Define the Profile type
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

// Define the User schema
const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  payment: {
    status: {
      type: String,
      enum: ['Paid', 'Unpaid'],
      default: 'Unpaid',
    },
  },
  jobs: [
    {
      image: String,
      title: String,
      position: String,
      date: Date,
      status: String,
      location: String,
    },
  ],
  resume: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  profiles: [  // Profiles will be an array of Profile objects
    {
      personalInfo: {
        fullName: String,
        profilePhoto: String,
        email: String,
        location: String,
        phone: String,
      },
      rolesSkills: {
        title: String,
        skills: [{ name: String, level: String }],
        roles: [String],
      },
      expectations: {
        hourlyRate: String,
        availability: String,
        workPreference: [String],
        rightToWork: String,
        securityClearance: String,
      },
      experiences: [
        {
          title: String,
          company: String,
          startDate: String,
          endDate: String,
          current: Boolean,
          description: String,
        },
      ],
      cv: {
        resume: String,
      },
      diversityInclusion: {
        gender: String,
        pronouns: String,
        ethnicity: String,
      },
    },
  ],
});

// Create the User model
const User = mongoose.models?.User || mongoose.model('User', userSchema);

export default User;
