// Usage example in another component

import React from 'react';
import Layout from '../../../components/Layout';
import ProjectTiles from './ProjectTiles';
import { projectData } from '../../projectData';

export default function ProductListsPage({ params }) {
  return (
    <Layout>
      <div className='flex flex-col max-w-[1300px]'>
        <p className='text-xl font-semibold mb-2 border-b-2'>
          {params.category}
        </p>
        <div className='flex flex-col md:flex-row flex-wrap'>
          {projectData.map((project) => (
            <ProjectTiles key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
