import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/industries', label: 'Industries' },
  { to: '/use-cases', label: 'Use Cases' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative z-10 text-base font-medium whitespace-nowrap transition-colors ${
      isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setOpen(false)}>
            <img src={logo} alt="Ei8" className="h-10 w-auto" />
          </Link>

          {/* Center nav */}
          <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition shadow-md shadow-blue-600/20 flex-shrink-0"
          >
            Get in touch
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-base font-semibold"
              >
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
