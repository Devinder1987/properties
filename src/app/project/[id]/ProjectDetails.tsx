// projectDetails.tsx
import React from 'react';
import Image from 'next/image';
import ImageGallery from '../../../components/ImageGallery';
import Youtube from '../../../components/Youtube';
import lakhCRconversion from '../../../utils/lakhCRconversion';
interface ProjectData {
  id: String;
  show: String;
  images: String;
  title: string;
  minCost: Number;
  maxCost: Number;
  buildingType: String;
  buildingSubType: String;
  minArea: Number;
  maxArea: Number;
  unit: String;
  numberOfUnits: Number;
  address_locality: String;
  address_city: String;
  possessionDate: String;
  features: String;
  builder_name: String;
  builder_about: String;
  project_area: Number;
  project_area_unit: String;
  project_youtubeLink: string;
  project_amenities: String;
  project_location_latitude: Number;
  project_location_longitude: Number;
  priceTrend: String;
  createdAt: Date;
  updatedAt: Date;
}

// You can now use the propertyData object with the defined TypeScript interface.
interface ProjectDetailsProps {
  project: ProjectData;
}
const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className='bg-white w-full lg:max-w-[1300px]'>
      <ImageGallery images={project.images.split(',')} />
      <div className='p-4 m-2 shadow-xl rounded-md bg-slate-50'>
        <div className='flex flex-row justify-between text-xl font-semibold mb-2 border-b-2'>
          <h1 className='text-2xl font-semibold'>{project.title}</h1>
          <h3>
            {lakhCRconversion(project.minCost)} -{' '}
            {lakhCRconversion(project.maxCost)}
          </h3>
        </div>
        <p className='text-gray-600 mt-2'>{project.buildingSubType}</p>
        <div className='flex flex-wrap'>
          {project.buildingType.split(',').map((val) => (
            <p
              key={val}
              className='text-gray-600 mt-2 border rounded-md py-1 px-4 mr-2'
            >
              {val}
            </p>
          ))}
        </div>
        <div className='flex justify-between'>
          <p className='text-gray-600 mt-2'>
            <b>Area: </b>
            {project.minArea.toString()} - {project.maxArea.toString()}{' '}
            <span>{project.unit}</span>
          </p>
          <p className='text-gray-600 mt-2'>
            <b>Total Units: </b>
            {project.numberOfUnits.toString()}
          </p>
        </div>
        <p className='text-gray-600 mt-4'>
          <b>
            {project.address_locality}, {project.address_city}
          </b>
        </p>
        <p className='text-gray-600 mt-1'>
          <b>Possession in: </b>
          {project.possessionDate}
        </p>
      </div>
      <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
        <h3 className='text-xl font-semibold mb-2 border-b-2'>Features</h3>
        <div dangerouslySetInnerHTML={{ __html: project.features }} />
      </div>
      <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
        <h3 className='text-xl font-semibold mb-2 border-b-2'>
          A tour to {project.title}
        </h3>
        <Youtube src={project.project_youtubeLink} title={project.title} />
      </div>
      <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
        <h3 className='text-xl font-semibold mb-2 border-b-2'>Amenities</h3>
        {project.project_amenities.split(',').map((val) => (
          <div key={val} className='flex'>
            <div className='self-center mx-2'>
              <Image
                src={`/icons/${val
                  .toLowerCase()
                  .trim()
                  .replaceAll(' ', '_')}.svg`}
                width={0}
                height={0}
                alt={val}
                sizes='1rem'
                style={{ width: '1rem', height: '1rem' }}
              />
            </div>
            <div>{val}</div>
          </div>
        ))}
      </div>
      <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
        <h3 className='text-xl font-semibold mb-2 border-b-2'>About Builder</h3>
        <p>{project.builder_name}</p>
        <div dangerouslySetInnerHTML={{ __html: project.builder_about }} />
      </div>
    </div>
  );
};

export default ProjectDetails;
