import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Newspaper, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0C447C] text-white pt-10 pb-8 mt-auto border-t-4 border-[#CC1E1E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 pb-8 border-b border-white/15 text-sm font-medium text-center">
          <Link to="/" className="text-white/90 hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/30">•</span>
          <Link to="/about" className="text-white/90 hover:text-white transition-colors">
            About Us
          </Link>
          <span className="text-white/30">•</span>
          <Link to="/contact-us" className="text-white/90 hover:text-white transition-colors">
            Contact Us
          </Link>
          <span className="text-white/30">•</span>
          <Link to="/privacy-policy" className="text-white/90 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/30">•</span>
          <Link
            to="/account-deletion"
            className="text-white font-bold underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-300 transition-colors"
          >
            Account & Data Deletion
          </Link>
          <span className="text-white/30">•</span>
          <a
            href="https://www.fouziyapublications.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white inline-flex items-center gap-1 transition-colors"
          >
            <span>e-Paper</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Company & Legal Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs text-white/80">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-sm tracking-wide">FOUZIYA PUBLICATIONS</span>
              <span className="bg-white/15 text-white/90 px-2 py-0.5 rounded text-[10px] font-semibold">
                Spot News 24x7
              </span>
            </div>
            <p className="text-white/70">
              Official application and publishing services under FOUZIYA PUBLICATIONS.
            </p>
            <p className="flex items-center justify-center md:justify-start gap-1.5 text-white/90 font-medium">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact: </span>
              <a
                href="mailto:contactspotnews@gmail.com"
                className="text-white hover:underline font-semibold"
              >
                contactspotnews@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 text-white/70">
            <p>
              <strong>Copyright © {new Date().getFullYear()} Fouziya Publications.</strong> All Rights Reserved.
            </p>
            <p className="text-[11px] text-white/50">
              Spot News 24x7 App · Free Platform · No Paid Subscriptions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
