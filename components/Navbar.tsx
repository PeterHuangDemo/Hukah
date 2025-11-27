import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Wind, Calendar, Menu, X, Home } from 'lucide-react';
import { useTranslation } from '../utils/i18nContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { path: '/', label: t('nav.home'), icon: <Home size={18} /> },
    { path: '/coffee', label: t('nav.coffee'), icon: <Coffee size={18} /> },
    { path: '/hookah', label: t('nav.hookah'), icon: <Wind size={18} /> },
    { path: '/reservations', label: t('nav.reservations'), icon: <Calendar size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-smoke-900/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-serif font-bold text-brand-400 tracking-tighter">Hukah</span>
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-brand-400 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-smoke-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand-400 bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};