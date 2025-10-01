import { motion } from 'framer-motion';
import profile from '../profile';

export default function Home() {
  return (
    <section className="page home reveal">
      <div className="hero">
        <motion.div className="avatar" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <img src={profile.photo} alt={profile.name} onError={(e) => { e.currentTarget.src = '/fallback-avatar.svg'; }} />
        </motion.div>
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {profile.location} · {profile.phone}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {profile.name}
          </motion.h1>
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
            {profile.role}
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
            {profile.summary}
          </motion.p>
          <motion.div className="cta-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}>
            <a className="btn primary" href={`mailto:${profile.email}`}>Email Me</a>
            <a className="btn" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
