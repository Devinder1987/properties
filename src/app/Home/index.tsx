import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import HeroBanner from '../../components/HeroBanner';
import Filter from '../../components/Filter';
import Services from '../../components/Services';
import Carousel from '../../components/Carousel';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Filter />
      <Services />
      <Carousel />
      <div>
        More Sections like-{' '}
        <ul>
          <li>Ready to move</li>
          <li>Luxary appartments</li>
          <li>etc...</li>
        </ul>
      </div>
      <hr />
      <p>Projects Story Telling</p>
      <hr />
      <p>Patners</p>
      <AboutUs />
      <ContactUs />
      <div>FAQ</div>
      <div> Menu bar or Footer options</div>
    </>
  );
}
