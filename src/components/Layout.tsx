import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEF3F8] text-[#0A2540] relative overflow-x-hidden font-sans">
      {/* ══ Background Watermark ══ */}
      <div
        aria-hidden="true"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] pointer-events-none z-0 w-screen max-w-[550px] opacity-[0.06] select-none"
        style={{ mixBlendMode: 'multiply' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}rti_express_watermark.png`}
          alt=""
          draggable={false}
          className="w-full h-auto block"
        />
      </div>

      {/* ── Main Site Header ── */}
      <Header />

      {/* ── Main Content Area ── */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {children}
      </main>

      {/* ── Main Site Footer ── */}
      <Footer />
    </div>
  );
};
