import Image from 'next/image';
import { partnerData } from '../../app/projectData';

export default function Partner() {
  return (
    <div className='p-2 m-2 shadow-xl rounded-md bg-slate-50'>
      <h1 className='text-xl font-semibold mb-2 border-b-2'>Our partners</h1>
      <div className='flex w-[94vw] max-w-[1300px] overflow-scroll justify-around'>
        {partnerData.map((val) => {
          return (
            <div
              key={val.name}
              className='m-2 p-2 text-center bg-slate-100 rounded'
            >
              <div className='mx-2 w-[40vw] text-center'>
                <Image
                  src={val.logo}
                  width={0}
                  height={0}
                  alt={val.name}
                  sizes='1rem'
                  style={{ width: '4rem', height: '2rem', display: 'initial' }}
                />
              </div>
              <h1 className='text-md'>{val.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
