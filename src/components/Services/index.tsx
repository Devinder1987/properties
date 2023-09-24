import Image from 'next/image';
import Link from 'next/link';
import { serviceData } from '../../app/projectData';

export default function Services() {
  return (
    <div className='p-2 m-2 shadow-xl rounded-md bg-slate-50'>
      <div className='flex flex-wrap justify-around'>
        {serviceData.slice(0, 4).map((val) => {
          return (
            <div
              key={val.name}
              className='m-2 p-2 w-[40vw] text-center bg-slate-100 rounded'
            >
              <div className='mx-2 text-center'>
                <Image
                  src={val.icon}
                  width={0}
                  height={0}
                  alt={val.name}
                  sizes='1rem'
                  style={{ width: '2rem', height: '2rem', display: 'initial' }}
                />
              </div>
              <h1 className='text-md'>{val.name}</h1>
            </div>
          );
        })}
      </div>
      <div className='text-center p-3'>
        <Link
          href={`/services`}
          className='py-2 px-4 bg-black text-white rounded'
        >
          View all
        </Link>
      </div>
    </div>
  );
}
