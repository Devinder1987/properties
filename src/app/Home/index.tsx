import AboutUs from '../../components/AboutUs';
import ContactUs from '../../components/ContactUs';
import HeroBanner from '../../components/HeroBanner';
import Search from '../../components/Search';
import Services from '../../components/Services';
import Carousel from '../../components/Carousel';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Search />
      <Services />
      <Carousel />
      <AboutUs />
      <ContactUs />
    </>
  );
}
