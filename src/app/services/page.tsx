import Image from 'next/image';
import Layout from '../../components/Layout';
import { serviceData } from '../projectData';

export default function Services() {
  return (
    <Layout>
      <div className='w-full p-2 bg-white'>
        {serviceData.map((val) => {
          return (
            <div
              key={val.name}
              className='p-4 m-2 mt-4 shadow-xl rounded-md bg-slate-50'
            >
              <h1 className='text-xl font-semibold mb-2 border-b-2'>
                <Image
                  src={val.icon}
                  width={0}
                  height={0}
                  alt={val.name}
                  sizes='1rem'
                  className='inline w-10 h-10 p-1'
                />{' '}
                {val.name}
              </h1>
              <div
                className='p-2'
                dangerouslySetInnerHTML={{ __html: val.description }}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
