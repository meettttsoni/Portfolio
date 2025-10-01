import { motion } from 'framer-motion';
import profile from '../profile';

export default function About() {
  return (
    <section className="page about">
      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        About Me
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        {profile.summary}
      </motion.p>

      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>Skills</motion.h3>
      <ul className="chip-list reveal">
        {profile.skills.map((s, i) => (
          <li key={s} className={`chip reveal delay-${(i%3)+1}`}>{s}</li>
        ))}
      </ul>

      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>Experience</motion.h3>
      <div className="timeline">
        {profile.experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <h4>{exp.title}</h4>
            <p>{exp.company} • {exp.location}</p>
            <ul>
              {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
            </ul>
          </div>
        ))}
      </div>

      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>Education</motion.h3>
      <div className="edu">
        {profile.education.map((e, i) => (
          <div key={i} className="edu-item">
            <strong>{e.degree}</strong>
            <p>{e.institute}, {e.location} — {e.date}</p>
          </div>
        ))}
      </div>

      <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>Languages</motion.h3>
      <ul>
        {profile.languages.map((l) => (
          <li key={l.name}>{l.name}: {l.level}</li>
        ))}
      </ul>

      <div className="section">
        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>Activities & Honors</motion.h3>
        <div className="timeline">
          {profile.activities?.map((a, i) => (
            <div key={i} className="timeline-item">
              <p>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
