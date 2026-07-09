import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const Sitemap = () => {
  return (
    <div className="pt-[120px] pb-[80px] min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative z-10"
      >
        <h1 className="font-display text-4xl text-paper mb-12 border-b border-white/10 pb-6">Sitemap</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl text-paper mb-6">Main Pages</h2>
            <ul className="space-y-4 font-body font-light text-paper/80">
              <li><Link to="/" className="hover:text-paper hover:underline underline-offset-4 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-paper hover:underline underline-offset-4 transition-colors">About</Link></li>
              <li><Link to="/work" className="hover:text-paper hover:underline underline-offset-4 transition-colors">Work</Link></li>
              <li><Link to="/contact" className="hover:text-paper hover:underline underline-offset-4 transition-colors">Contact</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-paper mb-6">Case Studies</h2>
            <ul className="space-y-4 font-body font-light text-paper/80">
              {projects.map(project => (
                <li key={project.id}>
                  <Link 
                    to={`/case-study/${project.id}`}
                    className="hover:text-paper hover:underline underline-offset-4 transition-colors"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Sitemap;
