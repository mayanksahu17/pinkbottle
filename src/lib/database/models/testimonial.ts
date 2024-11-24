import mongoose, { Document, Schema } from 'mongoose';

// Interface to define the shape of the data
interface IPerson extends Document {
  name: string;
  role: string;
  company: string;
  linkedIn: string;
  image: string;
  logo: string;
  content: string;
}

// Define the schema for the Person model
const personSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    linkedIn: { type: String, required: true },
    image: { type: String, required: true },
    logo: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the model from the schema
const Person = mongoose.models.Person || mongoose.model<IPerson>('Person', personSchema);

export default Person;
