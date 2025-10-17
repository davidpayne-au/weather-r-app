import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 className="navbar-title">Weather App</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/weather"
              className={`navbar-link ${isActive('/weather') ? 'active' : ''}`}
              aria-current={isActive('/weather') ? 'page' : undefined}
            >
              Weather
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
