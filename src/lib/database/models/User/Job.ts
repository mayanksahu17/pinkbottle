import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  applyLink: String,
  company: String,
  location: String,
  title: String,
  clerkId: String,
});

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;
