import Link from 'next/link';
import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import HeroBanner from '../../components/HeroBanner';
import Filter from '../../components/Filter';
import Services from '../../components/Services';
import Carousel from '../../components/Carousel';
import Partner from '../../components/Partner';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Filter />
      <Services />
      <Carousel />
      <Partner />
      <div>
        <Link href='/admin/showprojects'>
          <div className='my-4 w-full py-2 px-4 bg-black text-center text-white rounded'>
            Project Admin page
          </div>
        </Link>
      </div>
      <div>
        More Sections like-
        <ul>
          <li>Ready to move</li>
          <li>Luxary appartments</li>
          <li>etc...</li>
        </ul>
      </div>
      <hr />
      <p>Projects Story Telling</p>
      <hr />
      <AboutUs />
      <ContactUs />
      <div>FAQ</div>
      <div> Menu bar or Footer options</div>
    </>
  );
}
