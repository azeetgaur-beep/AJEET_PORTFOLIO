
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import CaseStudy from './pages/CaseStudy';
import FloatingDoodles from './components/FloatingDoodles';



function App() {
  return (
    <Router>
      <div className="fixed inset-0 -z-50 bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      <FloatingDoodles />
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="max-w-[1080px] mx-auto px-6 md:px-[52px]"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </motion.main>
      <Footer />
    </Router>
  );
}

export default App;
