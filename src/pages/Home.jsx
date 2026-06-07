
import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';
import SectionDivider from '../components/SectionDivider';
import BackgroundGallery from '../components/BackgroundGallery';

const Home = () => {
  return (
    <div className="pt-[10px]">
      <BackgroundGallery />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Work />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </div>
  );
};

export default Home;
