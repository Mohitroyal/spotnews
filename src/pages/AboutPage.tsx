import React, { useEffect } from 'react';
import { Building2, Newspaper, Mail, Phone, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us — Spot News 24x7 | FOUZIYA PUBLICATIONS';
  }, []);

  return (
    <article className="w-full max-w-4xl mx-auto">
      <div className="bg-white border border-[#D0E2F7] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-b border-[#D0E2F7] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#015BB3] bg-[#E8F2FC] px-3 py-1 rounded-full border border-[#D0E2F7]">
            About Us
          </span>
          <h1
            className="text-2xl sm:text-3xl font-bold text-[#0A2540] mt-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            About Spot News 24x7 & FOUZIYA PUBLICATIONS
          </h1>
        </div>

        <p className="text-base text-[#2D3E50] leading-relaxed">
          <strong>Spot News 24x7</strong> is a digital newspaper clipping, reporting, and news dissemination application published and maintained by <strong>FOUZIYA PUBLICATIONS</strong>.
        </p>

        <p className="text-base text-[#2D3E50] leading-relaxed">
          Our mission is to provide local reporters, journalists, and community writers with rapid digital tools to compose, format, and share verified news updates across regional editions including Telangana, Andhra Pradesh, and National desks.
        </p>

        <div className="bg-[#E8F2FC] border border-[#D0E2F7] rounded-2xl p-6 space-y-3">
          <h3 className="font-bold text-lg text-[#0A2540]">Company Information</h3>
          <div className="space-y-1.5 text-sm text-[#0A2540]">
            <p><strong>Legal Entity:</strong> FOUZIYA PUBLICATIONS</p>
            <p><strong>Application:</strong> Spot News 24x7</p>
            <p><strong>Official e-Paper:</strong> fouziyapublications.com</p>
            <p><strong>Support Email:</strong> fouziyapublications@gmail.com</p>
            <p><strong>Helpline:</strong> 7668886666</p>
          </div>
        </div>
      </div>
    </article>
  );
};
