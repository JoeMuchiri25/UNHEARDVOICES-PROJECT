import { NavLink } from 'react-router-dom';
import ThemeToggle from '../context/ThemeToggle';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/submit', label: 'Submit Story' },
    { path: '/stories', label: 'Explore' },
    { path: '/donate', label: 'Donate' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className={`flex items-center justify-between px-4 transition-all duration-300
        ${scrolled
          ? 'py-2 bg-gradient-to-r from-pink-400 to-purple-600 shadow-lg'
          : 'py-3 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600'}
        text-white`}>

        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
          VoicesUnheard
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex gap-4 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? 'underline font-semibold text-white' : 'hover:underline'
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <NavLink
            to="/admin/login"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold hidden sm:inline' : 'hover:underline hidden sm:inline'
            }
          >
            Admin
          </NavLink>

          {/* Mobile Toggle */}
          <button onClick={toggleMobile} className="md:hidden text-white focus:outline-none">
            {isMobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-400 to-purple-600 text-white px-4 py-4 flex flex-col gap-2 text-sm transition-all">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/admin/login"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : 'hover:underline'
            }
          >
            Admin
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;