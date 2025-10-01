import { Link, NavLink } from 'react-router-dom';
import profile from '../profile';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-brand">
          <Link to="/">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.role}</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
