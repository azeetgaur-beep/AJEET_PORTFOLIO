import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Nav from './components/Nav';
import Footer from './components/Footer';
import FloatingDoodles from './components/FloatingDoodles';

const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <h1 className="sr-only">Ajeet Gaur - Portfolio</h1>
      <div className="fixed inset-0 -z-50 bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      <FloatingDoodles />
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="max-w-[1080px] mx-auto px-6 md:px-[52px]"
      >
        <Suspense fallback={<div className="h-screen w-full" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
