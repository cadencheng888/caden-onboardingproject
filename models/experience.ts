import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ExperienceSchema: Schema = new Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },
});

// The "||" check prevents "OverwriteModelError" in Next.js
const Experience = mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);

export default Experience;