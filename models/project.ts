import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  projectName: string;
  startDate: string;
  endDate: string;
  description: string;
  deploymentLink: string;
  githubLink: string;
}

const ProjectSchema: Schema = new Schema({
  projectName: { type: String, required: true }, // Matches "Project Name"
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },
  deploymentLink: { type: String, required: true }, // Matches "Deployment Link"
  githubLink: { type: String, required: true },     // Matches "Github Link"
});

const Project = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;