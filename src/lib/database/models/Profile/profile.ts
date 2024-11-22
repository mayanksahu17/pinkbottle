import mongoose, { Schema, Document } from 'mongoose';

export interface ProfileDocument extends Document {
  personalInfo: {
    fullName: string;
    profilePhoto: string;
    englishLevel:string;
    email: string;
    location: string;
    postcode:string;
    phone: string;
  };
  rolesSkills: {
    title: string;
    skills: { name: string}[];
    roles: string[];
  };
  expectations: {
    hourlyRate: string;
    availability: string;
    workPreference: string[];
    rightToWork: string;
    securityClearance: string;
  };
  experiences: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }[];
  cv: {
    resume: string;
  };
  diversityInclusion: {
    gender: string;
    pronouns: string;
    ethnicity: string;
    disability:string;
    veteranStatus:string;
  };
}

const ProfileSchema = new Schema({
  personalInfo: {
    fullName: { type: String, required: true, default: '' },
    profilePhoto: { type: String, required: true, default: '' },
    email: { type: String, required: true, default: '' },
    postcode:{type:String , require:false,default:''},
    englishLevel:{type:String , required:false,default:''},
    location: { type: String, required: true, default: '' },
    phone: { type: String, required: true, default: '' },

  },
  rolesSkills: {
    title: { type: String, required: true, default: '' },
    skills: [
      {
        name: { type: String, required: true, default: '' },
      },
    ],
    roles: { type: [String], required: true, default: [] },
  },
  expectations: {
    hourlyRate: { type: String, required: true, default: '' },
    availability: { type: String, required: true, default: '' },
    workPreference: { type: [String], required: true, default: [] },
    rightToWork: { type: String, required: true, default: '' },
    securityClearance: { type: String, required: true, default: '' },
  },
  experiences: [
    {
      title: { type: String, required: true, default: '' },
      company: { type: String, required: true, default: '' },
      startDate: { type: String, required: true, default: '' },
      endDate: { type: String, required: false, default: '' },
      current: { type: Boolean, required: false, default: false },
      description: { type: String, required: false, default: '' },
    },
  ],
  cv: {
    resume: { type: String, required: true, default: '' },
  },
  diversityInclusion: {
    gender: { type: String, required: true, default: '' },
    pronouns: { type: String, required: true, default: '' },
    ethnicity: { type: String, required: true, default: '' },
    disability: { type: String, required: false, default: '' },
    veteranStatus: { type: String, required: false, default: '' },
  },
});

export type Profile = mongoose.InferSchemaType<typeof ProfileSchema>;

const ProfileModel =
  mongoose.models.Profile || mongoose.model<ProfileDocument>('Profile', ProfileSchema);

export { ProfileModel, ProfileSchema };
