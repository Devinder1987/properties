'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '../../../../components/Layout';
const inputFields = {
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
};
function convertObjectToArray(
  inputObj: { [s: string]: unknown } | ArrayLike<unknown>
) {
  return Object.entries(inputObj).map(([field, type]) => ({
    field,
    type: typeof type === 'function' ? type.name : type,
  }));
}
export default function EditProject({ params }: { params: { id: string } }) {
  const [projectData, setProjectData] = useState({});
  const [formData, setFormData] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    fetchProjects();
  }, []);
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
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetch(`/api/projects?id=${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccessMsg(data.message);
        setErrorMsg('');
      })
      .catch((error) => {
        setSuccessMsg('');
        setErrorMsg(`Error! ${error}`);
      });
    console.log(formData);
  };
  const arrayOfObjects = convertObjectToArray(inputFields);
  console.log('Dev--->', JSON.stringify(arrayOfObjects));
  return (
    <Layout>
      <div className='underline text-2xl'>
        Edit Project: {projectData.title}
      </div>
      <form onSubmit={handleSubmit}>
        <ul className='flex flex-col'>
          {arrayOfObjects.map((val) => (
            <li className='m-2 text-left flex' key={val.field}>
              <label className='w-[220px]'>
                <b>{val.field}: </b>
              </label>
              <input
                type={val.type}
                name={val.field}
                value={projectData[val.field]}
                onChange={handleChange}
                className='w-[250px] border border-gray-500 px-1'
              />
            </li>
          ))}
        </ul>
        <div className='p-2 mt-4 border-t-2'>
          Editied Data: {JSON.stringify(formData)}
        </div>
        <div>
          <button
            type='submit'
            className='my-4 w-full py-2 px-4 bg-black text-center text-white rounded'
          >
            Save Changes
          </button>
          {successMsg && <div className='p-1 text-green-800'>{successMsg}</div>}
          {errorMsg && <div className='p-1 text-red-700'>{errorMsg}</div>}
        </div>
      </form>
      <div>
        <Link href='/admin/showprojects'>
          <div className='my-4 w-full py-2 px-4 bg-black text-center text-white rounded'>
            Show All Projects
          </div>
        </Link>
      </div>
    </Layout>
  );
}
