import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`wedding-nav ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className={`nav-brand ${location.pathname === '/' ? 'active' : ''}`}
        >
          V & A
        </Navbar.Brand>
      </motion.div>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto" onClick={() => setExpanded(false)}>
          {[
            { path: '/invitacion', name: 'Invitacion' },
            { path: '/ceremonia', name: 'Ceremonia' },
            { path: '/celebracion', name: 'Celebración' },
            { path: '/fotos', name: 'Fotos' },
          ].map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Nav.Link
                as={Link}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Nav.Link>
            </motion.div>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
