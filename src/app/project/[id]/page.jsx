// Usage example in another component

import React from 'react';
import Layout from '../../../components/Layout';
import ProjectDetails from './ProjectDetails';
import projectData from '../../projectData';

export default function ProductDetailsPage({ params }) {
  const project = projectData.find((val) => val.id == params.id);
  if (!project) {
    return <div>Error 404: No Project found.</div>;
  }
  return (
    <Layout>
      <ProjectDetails project={project} />
    </Layout>
  );
}
