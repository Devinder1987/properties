'use client';
import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '../../app/projectData';
import lakhCRconversion from '../../utils/lakhCRconversion';

const heading = 'Best Project for investment.';
const category = 'Flats';

export default function Carousel() {
  return (
    <div className='text-slate-950 p-2 m-2 shadow-md bg-slate-50 w-[98vw] max-w-[1300px] rounded-md'>
      <div className='flex justify-between border-b-2'>
        <div className='px-3 text-xl font-medium'> {heading}</div>
        <Link
          href={`/projectList/${category}`}
          className='px-3 self-end text-blue-800 underline'
        >
          See All
        </Link>
      </div>

      <div className='flex w-full overflow-scroll'>
        {projectData.map((val) => (
          <Link
            href={`/project/${val.id}`}
            key={val.id}
            className='p-4 w-[70vw] max-w-[240px]'
          >
            <Image
              src={val.images[0]}
              alt={val.title}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '65vw', height: '120px' }} // optional
            />
            <h3 className='text-lg font-medium overflow-hidden whitespace-nowrap text-ellipsis'>
              {val.title}
            </h3>
            <h2 className='text-sm font-light overflow-hidden whitespace-nowrap text-ellipsis'>
              {val.address}
            </h2>
            <h2 className='text-sm font-normal overflow-hidden whitespace-nowrap text-ellipsis'>
              {val.buildingType}
            </h2>
            <h2 className='text-sm font-normal overflow-hidden whitespace-nowrap text-ellipsis'>
              Starting: <b>{lakhCRconversion(val.minCost)}</b>
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
