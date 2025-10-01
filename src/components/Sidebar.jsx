import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profile from '../profile';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <motion.div className="sidebar-card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="sidebar-avatar">
          <img src={profile.photo} alt={profile.name} onError={(e) => { e.currentTarget.src = '/fallback-avatar.svg'; }} />
        </div>
        <h2 className="sidebar-name">{profile.name}</h2>
        <p className="sidebar-role">{profile.role}</p>
        <p className="sidebar-loc">{profile.location}</p>
        <div className="cta-row">
          <a className="btn primary" href={`mailto:${profile.email}`}>Email</a>
        </div>
        <div className="sidebar-socials">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="sidebar-meta">
          <div className="badge available">Available for internship</div>
          <p className="muted">Based in {profile.location}. Open to remote roles.</p>
          <p className="muted">Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
      </motion.div>
    </aside>
  );
} 