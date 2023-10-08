import Image from 'next/image';
import { partnerData } from '../../app/projectData';

export default function Partner() {
  return (
    <div className='p-2 m-2 shadow-xl rounded-md bg-slate-50 w-[98vw] max-w-[1300px]'>
      <h1 className='text-xl font-semibold mb-2 border-b-2'>Our partners</h1>
      <div className='flex w-full flex-wrap justify-around'>
        {partnerData.map((val) => {
          return (
            <div
              key={val.name}
              className='m-2 p-2  w-[40vw] max-w-[240px] text-center bg-slate-100 rounded'
            >
              <div className='mx-2'>
                <Image
                  src={val.logo}
                  width={0}
                  height={0}
                  alt={val.name}
                  sizes='250px'
                  style={{
                    width: '150px',
                    height: '120px',
                    display: 'initial',
                  }}
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
