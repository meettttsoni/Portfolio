import { motion } from 'framer-motion';
import profile from '../profile';

export default function Contact() {
  return (
    <section className="page contact reveal">
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Contact
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a> · {profile.phone}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
        <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </motion.p>
    </section>
  );
}
