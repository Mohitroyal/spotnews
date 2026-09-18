import React, { useEffect } from 'react';
import { Mail, Phone, Building2, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us — Spot News 24x7 | FOUZIYA PUBLICATIONS';
  }, []);

  return (
    <article className="w-full max-w-4xl mx-auto">
      <div className="bg-white border border-[#D0E2F7] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-b border-[#D0E2F7] pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#015BB3] bg-[#E8F2FC] px-3 py-1 rounded-full border border-[#D0E2F7]">
            Support & Inquiries
          </span>
          <h1
            className="text-2xl sm:text-3xl font-bold text-[#0A2540] mt-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contact Us
          </h1>
          <div className="mt-4 text-[#2D3E50]">
            <p className="text-lg font-bold text-[#0A2540]">Spot News 24x7</p>
            <p className="text-base mt-1">Published by: <strong>FOUZIYA PUBLICATIONS</strong></p>
          </div>
        </div>

        <p className="text-base text-[#2D3E50] leading-relaxed">
          For technical assistance, reporter registration, feedback, or account and data deletion requests, reach out to our team:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div className="bg-[#F8FAFD] border border-[#D0E2F7] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] flex items-center justify-center text-[#015BB3]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-[#0A2540]">Email</h3>
            <p className="text-xs text-[#6B7A90]">For all official correspondence, inquiries, and deletion requests</p>
            <a
              href="mailto:fouziyapublications@gmail.com"
              className="text-base font-bold text-[#015BB3] hover:underline block break-all"
            >
              fouziyapublications@gmail.com
            </a>
          </div>

          <div className="bg-[#F8FAFD] border border-[#D0E2F7] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] flex items-center justify-center text-[#CC1E1E]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-[#0A2540]">Phone</h3>
            <p className="text-xs text-[#6B7A90]">Wanted reporters and editorial queries</p>
            <a
              href="tel:7668886666"
              className="text-base font-bold text-[#CC1E1E] hover:underline block"
            >
              7668886666
            </a>
          </div>
        </div>

        <div className="bg-[#E8F2FC] border border-[#D0E2F7] rounded-2xl p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#015BB3] shrink-0" />
            <div>
              <p className="font-bold text-[#0A2540] text-sm">Need to delete your account or data?</p>
              <p className="text-xs text-[#6B7A90]">View step-by-step instructions and data retention policies</p>
            </div>
          </div>
          <Link
            to="/account-deletion"
            className="shrink-0 px-4 py-2 rounded-xl bg-[#015BB3] text-white text-xs font-bold hover:bg-[#0c4b8b] transition-colors"
          >
            Account Deletion →
          </Link>
        </div>
      </div>
    </article>
  );
};
