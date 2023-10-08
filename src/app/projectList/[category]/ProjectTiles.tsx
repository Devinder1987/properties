import Image from 'next/image';
import Link from 'next/link';
interface ProjectData {
  id: string;
  show: string;
  images: string;
  title: string;
  minCost: number;
  maxCost: number;
  buildingType: string;
  buildingSubType: string;
  minArea: number;
  maxArea: number;
  unit: string;
  numberOfUnits: number;
  address_locality: string;
  address_city: string;
  possessionDate: string;
  features: string;
  builder_name: string;
  builder_about: string;
  project_area: number;
  project_area_unit: string;
  project_youtubeLink: string;
  project_amenities: string;
  project_location_latitude: number;
  project_location_longitude: number;
  priceTrend: string;
  createdAt: Date;
  updatedAt: Date;
}
interface ProjectTiilsProps {
  project: ProjectData;
}
const ProjectTiles: React.FC<ProjectTiilsProps> = ({ project }) => {
  const lakhCRconversion = (cost: number) => {
    if (cost > 100) {
      return (cost / 100).toFixed(2) + ' Cr';
    }
    return cost + ' lakh';
  };
  return (
    <div className='p-4 m-2 mt-4 md:min-w-[46%] shadow-xl rounded-md bg-slate-50'>
      <Link href={`/project/${project.id}`} key={project.id} className='py-2'>
        <Image
          src={project.images.split(',')[0]}
          alt={project.title}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '280px' }} // optional
        />
        <h3 className='text-lg font-medium overflow-hidden whitespace-nowrap text-ellipsis'>
          {project.title}
        </h3>
        <h2 className='text-sm font-light overflow-hidden whitespace-nowrap text-ellipsis'>
          {project.address_locality}, {project.address_city}
        </h2>
        <h2 className='text-sm font-normal overflow-hidden whitespace-nowrap text-ellipsis'>
          {project.buildingSubType}
        </h2>
        <h2 className='text-sm font-normal overflow-hidden whitespace-nowrap text-ellipsis'>
          Starting: <b>{lakhCRconversion(project.minCost)}</b>
        </h2>
      </Link>
    </div>
  );
};

export default ProjectTiles;
