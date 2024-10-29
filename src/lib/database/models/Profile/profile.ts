
import mongoose, { Document, Schema } from 'mongoose';

export interface ProfileDocument extends Document {
  personalInfo: Record<string, any>;
  rolesSkills: Record<string, any>;
  expectations: Record<string, any>;
  experience: Array<Record<string, any>>;
  cv: string;
  diversityInclusion: Record<string, any>;
}

const ProfileSchema = new Schema({
  personalInfo: { type: Object, required: true },
  rolesSkills: { type: Object, required: true },
  expectations: { type: Object, required: true },
  experience: { type: Array, required: true },
  cv: { type: String, required: true },
  diversityInclusion: { type: Object, required: true },
});

export default mongoose.models.Profile || mongoose.model<ProfileDocument>('Profile', ProfileSchema);
