import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Newspaper,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Building2,
  Mail,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Phone,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Spot News 24x7 — Official Website | FOUZIYA PUBLICATIONS';
  }, []);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* ── Hero Card ── */}
      <div className="bg-white border border-[#D0E2F7] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2FC] border border-[#D0E2F7] text-xs font-bold text-[#015BB3]">
            <Building2 className="w-3.5 h-3.5" />
            <span>FOUZIYA PUBLICATIONS</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Welcome to <span className="text-[#015BB3]">Spot News 24x7</span>
          </h1>

          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            The dedicated digital publishing platform and reporter application operated by <strong>FOUZIYA PUBLICATIONS</strong>. Empowering reporters and citizens with authentic newspaper clipping generation, regional news coverage, and digital publishing tools.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/account-deletion"
              className="px-5 py-3 rounded-xl bg-[#015BB3] text-white text-sm font-bold hover:bg-[#0c4b8b] transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Account & Data Deletion</span>
            </Link>

            <Link
              to="/privacy-policy"
              className="px-5 py-3 rounded-xl bg-[#E8F2FC] text-[#0A2540] border border-[#D0E2F7] text-sm font-bold hover:bg-[#d6e9ff] transition-all flex items-center gap-2 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-[#015BB3]" />
              <span>Privacy Policy</span>
            </Link>

            <a
              href="https://www.fouziyapublications.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#CC1E1E] text-white text-sm font-bold hover:bg-[#b01818] transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              <Newspaper className="w-4 h-4" />
              <span>Read e-Paper</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Key Highlights Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-[#D0E2F7] rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] flex items-center justify-center text-[#015BB3]">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-[#0A2540]">Spot News 24x7 App</h3>
          <p className="text-xs sm:text-sm text-[#6B7A90] leading-relaxed">
            Generate customized newspaper clippings, front-page templates, and breaking news banners on the go.
          </p>
        </div>

        <div className="bg-white border border-[#D0E2F7] rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] flex items-center justify-center text-[#015BB3]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-[#0A2540]">Data Privacy & Control</h3>
          <p className="text-xs sm:text-sm text-[#6B7A90] leading-relaxed">
            Full compliance with Google Play safety requirements. Users have full control over their account data and deletion.
          </p>
          <Link
            to="/account-deletion"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#015BB3] hover:underline pt-1"
          >
            <span>Learn about deletion</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white border border-[#D0E2F7] rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] flex items-center justify-center text-[#015BB3]">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg text-[#0A2540]">Wanted Reporters</h3>
          <p className="text-xs sm:text-sm text-[#6B7A90] leading-relaxed">
            Join our regional reporting network across Telangana and Andhra Pradesh. Call helpline 7668886666.
          </p>
          <a
            href="tel:7668886666"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#CC1E1E] hover:underline pt-1"
          >
            <span>Call 7668886666</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
