import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className='max-h-[340px] overflow-y-hidden'>
      <Image
        src='/images/HouseBanner.jpg'
        alt='Hero image'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto' }} // optional
      />
    </section>
  );
};

export default HeroBanner;
