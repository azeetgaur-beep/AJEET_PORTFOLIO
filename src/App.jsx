import { motion } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="max-w-[1080px] mx-auto px-6 md:px-[52px]"
      >
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </motion.main>
    </>
  );
}

export default App;
