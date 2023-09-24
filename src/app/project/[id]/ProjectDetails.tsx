// projectDetails.tsx
import React from 'react';
import Image from 'next/image';
import ImageGallery from '../../../components/ImageGallery';
import Youtube from '../../../components/Youtube';
import lakhCRconversion from '../../../utils/lakhCRconversion';

interface BuildingLocation {
  latitude: string;
  longitude: string;
}

interface Amenity {
  icon: string;
  title: string;
}

interface PriceTrend {
  year: number;
  quarter: number;
  price: number;
}

interface Builder {
  builderName: string;
  about: string;
}

interface Project {
  area: string;
  unit: string;
  youtubeLink: string;
  amenities: Amenity[];
  location: BuildingLocation;
}

interface ProjectData {
  id: number;
  images: string[];
  title: string;
  minCost: number;
  maxCost: number;
  buildingType: string[];
  buildingSubType: string;
  minArea: number;
  maxArea: number;
  unit: string;
  numberOfUnits: number;
  address: string;
  possessionDate: string;
  features: string;
  builder: Builder;
  project: Project;
  priceTrend: PriceTrend[];
}

// You can now use the propertyData object with the defined TypeScript interface.
interface ProjectDetailsProps {
  project: ProjectData;
}
const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className='bg-white w-full'>
      <ImageGallery images={project.images} />
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
          {project.buildingType.map((val) => (
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
            {project.minArea} - {project.maxArea} <span>{project.unit}</span>
          </p>
          <p className='text-gray-600 mt-2'>
            <b>Total Units: </b>
            {project.numberOfUnits}
          </p>
        </div>
        <p className='text-gray-600 mt-4'>
          <b>{project.address}</b>
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
        <Youtube src={project.project.youtubeLink} title={project.title} />
      </div>
      <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
        <h3 className='text-xl font-semibold mb-2 border-b-2'>Amenities</h3>
        {project.project.amenities.map((val) => (
          <div key={val.title} className='flex'>
            <div className='self-center mx-2'>
              <Image
                src={val.icon}
                width={0}
                height={0}
                alt={val.title}
                sizes='1rem'
                style={{ width: '1rem', height: '1rem' }}
              />
            </div>
            <div>{val.title}</div>
          </div>
        ))}
      </div>
      <div className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'>
        <h3 className='text-xl font-semibold mb-2 border-b-2'>About Builder</h3>
        <p>{project.builder.builderName}</p>
        <div dangerouslySetInnerHTML={{ __html: project.builder.about }} />
      </div>
    </div>
  );
};

export default ProjectDetails;
