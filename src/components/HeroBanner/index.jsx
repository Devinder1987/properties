import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className='hero'>
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
