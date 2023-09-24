import mongoose, { Schema } from 'mongoose';
const projectSchema = new Schema({
  show: String,
  images: String,
  title: String,
  minCost: Number,
  maxCost: Number,
  buildingType: String,
  buildingSubType: String,
  minArea: Number,
  maxArea: Number,
  unit: String,
  numberOfUnits: Number,
  address_locality: String,
  address_city: String,
  possessionDate: String,
  features: String,
  builder_name: String,
  builder_about: String,
  project_area: Number,
  project_area_unit: String,
  project_youtubeLink: String,
  project_amenities: String,
  project_location_latitude: Number,
  project_location_longitude: Number,
  priceTrend: String,
  createdAt: Date,
  updatedAt: Date,
});

const Projects =
  mongoose.models.Projects || mongoose.model('Projects', projectSchema);

export default Projects;
