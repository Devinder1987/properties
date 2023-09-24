'use client';
import { projectData } from '../../app/projectData';

const heading = 'Best Project for investment.';
const category = 'Flats';

function fetchProjects() {
  fetch(`/api/projects?id=${params.id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      setProjectData(data.projects);
    })
    .catch((error) => {
      setProjectData([]);
    });
}

export default function ReadyToMove() {
  projectData;
  const heading = 'Best Project for investment.';
  const category = 'Flats';
  return <div className='text-slate-950 p-2 m-2 shadow-md bg-slate-50'></div>;
}
