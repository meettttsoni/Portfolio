import { motion } from 'framer-motion';
import profile from '../profile';

export default function Projects() {
  return (
    <section className="page projects reveal">
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Projects
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        Explore detailed repositories, commits, and readme demos on my GitHub profile.
      </motion.p>
      <motion.div className="cta-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
        <a className="btn primary" href={profile.links.github} target="_blank" rel="noreferrer">Visit GitHub</a>
        <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </motion.div>
    </section>
  );
}
