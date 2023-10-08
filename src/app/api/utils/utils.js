import connectMongoDB from '../utils/mongodb';
import Project from '../utils/projectSchema';

export async function findByIdProject(id) {
  await connectMongoDB();
  const projects = await Project.findById(id);
  return projects;
}

export async function findFilteredProjects(query = {}) {
  await connectMongoDB();
  const projects = await Project.find(query);
  return projects;
}
