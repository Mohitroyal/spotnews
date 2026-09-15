import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Newspaper, ExternalLink } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const headerBg = '#015BB3';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Account & Data Deletion', path: '/account-deletion' },
  ];

  const currentDateFormatted = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="w-full flex flex-col relative z-40 bg-[#EAF2FB]">
      {/* ── Main Top Bar ── */}
      <div style={{ background: headerBg }} className="pb-3 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3.5 pb-2 flex items-center justify-between gap-3">
          {/* Brand Column: Logo + Title + Date */}
          <div className="flex flex-col gap-1 shrink-0">
            <div className="flex items-center gap-3">
              {/* Logo badge box */}
              <Link
                to="/"
                className="rounded-lg flex items-center justify-center h-[50px] overflow-hidden bg-white p-1 border border-[#0B56A6]/30 shrink-0 shadow-sm hover:opacity-95 transition-opacity"
                title="Spot News 24x7"
              >
                <img
                  src={`${import.meta.env.BASE_URL}rti_express_logo.png`}
                  alt="Spot News 24x7 Logo"
                  className="h-full w-auto object-contain"
                  style={{ maxWidth: '96px', borderRadius: '4px' }}
                />
              </Link>
              <Link to="/" className="flex flex-col justify-center text-white no-underline">
                <span
                  className="font-bold text-white text-[22px] sm:text-[25px] leading-[1.15] tracking-wide"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Spot News<br />24x7
                </span>
              </Link>
            </div>

            {/* Date text (italic serif font) */}
            <span className="text-white/90 text-[11px] sm:text-[12px] tracking-wide font-medium italic pt-1 whitespace-nowrap">
              {currentDateFormatted}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-white text-[#015BB3] shadow-sm'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://www.fouziyapublications.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-3 py-1.5 rounded-lg text-[13px] font-bold bg-[#CC1E1E] text-white hover:bg-[#b01818] transition-colors flex items-center gap-1.5 shadow-sm"
              title="Open Official E-paper"
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>e-Paper</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://www.fouziyapublications.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#CC1E1E] text-white flex items-center gap-1"
            >
              <Newspaper className="w-3 h-3" />
              <span>e-Paper</span>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/15 bg-[#0152A1] px-4 py-3 space-y-1 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-white text-[#015BB3] font-bold shadow-sm'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Signature Wave Divider Transition with Wanted Reporters banner ── */}
      <div className="w-full overflow-hidden leading-none bg-[#EAF2FB] relative">
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="relative block w-full h-[52px]"
        >
          <path
            d="M0,0 L1440,0 L1440,100 C1100,240 500,10 0,170 Z"
            fill={headerBg}
          />
        </svg>

        {/* Wanted reporters banner inside the wave */}
        <div className="absolute top-[3px] left-0 w-full flex justify-center items-center z-10 pointer-events-auto">
          <a
            href="tel:7668886666"
            className="text-[#FF3838] hover:text-[#ff1a1a] text-[13px] sm:text-[14px] font-black tracking-wide no-underline transition-transform active:scale-95"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 1px 2px rgba(0,0,0,0.4)',
            }}
          >
            Wanted reporters:-7668886666
          </a>
        </div>
      </div>
    </header>
  );
};
