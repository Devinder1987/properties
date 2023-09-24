'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../../../components/Layout';

function ShowProjects() {
  const [projectData, setProjectData] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    if (projectData.length == 0) {
      fetchProjects();
    }
  }, []);
  function fetchProjects() {
    fetch('/api/projects', {
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

  async function handleDelete(id) {
    setSuccessMsg('');
    const confirmed = window.confirm(
      'Are you sure you want to delete this project?'
    );
    if (!confirmed) {
      return;
    }
    const res = await fetch(`http://localhost:3000/api/projects?id=${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      setSuccessMsg('');
      setErrorMsg('Failed to Delete, Try again later!');
      throw new Error('Failed to fetch data');
    }
    setErrorMsg('');
    setSuccessMsg('Project Deleted!!!');
    fetchProjects();
  }
  return (
    <Layout>
      <div className='p-2 w-[100vw] max-w-[1300px]'>
        <h1 className='p-2 text-2xl underline text-center'>Projects</h1>
        <div className='text-center p-4'>
          <Link
            href={'/admin/addproject/'}
            className='my-4 py-2 px-4 bg-black text-center text-white rounded'
          >
            Add Project
          </Link>
        </div>
        {!projectData || projectData.length == 0 ? (
          <div className='text-center'> Fetching or No Project listed.</div>
        ) : (
          <div>
            {successMsg && (
              <div className='p-1 text-green-800'>{successMsg}</div>
            )}
            {errorMsg && <div className='p-1 text-red-700'>{errorMsg}</div>}
            <ul className='flex flex-wrap'>
              {projectData.map((project) => (
                <li
                  key={project._id}
                  className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'
                >
                  <div>
                    <strong>Title:</strong> {project.title}
                  </div>
                  <div>
                    <strong>Builder Name:</strong> {project.builder_name}
                  </div>
                  <div>
                    <strong>Location:</strong> {project.address_locality},
                    {project.address_city}
                  </div>
                  <div>
                    <strong>Show:</strong> {project.address_locality},
                    {project.show}
                  </div>
                  <Link href={`/admin/updateproject/${project._id}`}>
                    <div className='my-4 w-full py-2 px-4 bg-black text-center text-white rounded'>
                      Edit
                    </div>
                  </Link>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className='w-full bg-red-600 text-white p-2 my-2'
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ShowProjects;
