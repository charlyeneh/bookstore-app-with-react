import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const HeaderStyle = {
  fontFamily: 'Montserrat',
  fontSize: '2rem',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: '#0290ff',
};

const userLogoStyle = {
  fontSize: '1rem',
  padding: '0.5rem 1.5rem',
  color: '#0290ff',
};

const Navbar = () => (
  <nav className="nav-main">
    <div className="nav1">
      <h1 style={HeaderStyle}>Bookstore CMS</h1>
      <ul className="nav_links">
        <Link to="/"><li>Books</li></Link>
        <Link to="/Catagories"><li>Catagories</li></Link>
      </ul>
    </div>
    <div style={userLogoStyle}>
      <h4><FaUserAlt /></h4>
    </div>
  </nav>
);

export default Navbar;
