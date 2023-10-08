// Usage example in another component

import React from 'react';
import Layout from '../../../components/Layout';
import ProjectTiles from './ProjectTiles';
import { findFilteredProjects } from '../../api/utils/utils';

export default async function ProductListsPage({ params }) {
  const query = {}; // { minCost: { $gt: 100 }, maxCost: { $lt: 200 } };
  const projects = await findFilteredProjects(query);
  if (!projects) {
    return <div>No Projects Found!</div>;
  }
  return (
    <Layout>
      <div className='flex flex-col max-w-[1300px]'>
        <p className='text-xl font-semibold mb-2 border-b-2'>
          {params.category}
        </p>
        <div className='flex flex-col md:flex-row flex-wrap'>
          {projects.map((project) => (
            <ProjectTiles key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
