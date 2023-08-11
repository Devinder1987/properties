// Usage example in another component

import React from 'react';
import Layout from '../../../components/Layout';
import ProjectTiles from './ProjectTiles';
import projectData from '../../projectData';

export default function ProductListsPage({ params }) {
  return (
    <Layout>
      <p className='text-xl font-semibold mb-2 border-b-2'>{params.category}</p>
      {projectData.map((project) => (
        <ProjectTiles key={project.id} project={project} />
      ))}
    </Layout>
  );
}
