import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ArrowRight, Trash2, Smartphone, Building2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Spot News 24x7 — Privacy Policy';
  }, []);

  return (
    <article className="w-full max-w-4xl mx-auto">
      <div className="bg-white border border-[#D0E2F7] rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#E8F2FC] via-[#F0F7FD] to-[#E8F2FC] border-b border-[#D0E2F7] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] border border-[#B8D7FC] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#015BB3]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#015BB3] bg-white px-3 py-1 rounded-full border border-[#D0E2F7]">
              Legal Document
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Privacy Policy — Spot News 24x7
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-[#6B7A90]">
            <span>Operated by: <strong>FOUZIYA PUBLICATIONS</strong></span>
            <span>•</span>
            <span>App: <strong>Spot News 24x7</strong></span>
            <span>•</span>
            <span>Last Updated: <strong>14/09/2026</strong></span>
          </div>
        </div>

        {/* ── Callout: Account & Data Deletion Connection ── */}
        <div className="mx-6 sm:mx-10 mt-8 p-5 bg-gradient-to-r from-[#E8F2FC] to-[#F4F9FF] border-2 border-[#015BB3]/30 rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#015BB3] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Looking for Account & Data Deletion?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">
                Learn how to permanently delete your Spot News 24x7 account, in-app deletion steps, and what data is removed.
              </p>
            </div>
          </div>
          <Link
            to="/account-deletion"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#015BB3] text-white text-xs sm:text-sm font-bold hover:bg-[#0c4b8b] transition-all flex items-center gap-2 shadow-sm active:scale-95"
          >
            <span>Account & Data Deletion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8 text-[#2D3E50] leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0A2540]">1. Introduction</h2>
            <p>
              Welcome to <strong>Spot News 24x7</strong>, operated by <strong>FOUZIYA PUBLICATIONS</strong>. We value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, safeguard, and delete your data when you use our mobile application and related web services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0A2540]">2. Information We Collect</h2>
            <p>When you register and use Spot News 24x7, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#0A2540]">
              <li><strong>Profile Information:</strong> Name, email address, phone number, and profile picture.</li>
              <li><strong>Reporter Content:</strong> News articles, newspaper clippings generated, uploaded photos, and generated PDF/PNG records.</li>
              <li><strong>Device & Usage Data:</strong> Basic device identifiers and authentication tokens necessary to provide secure application features.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0A2540]">3. How We Use Your Information</h2>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#0A2540]">
              <li>Provide and maintain your Spot News 24x7 reporter account.</li>
              <li>Generate and export authentic digital newspaper clippings and social media graphics.</li>
              <li>Verify authorized reporters and prevent fraudulent misuse.</li>
              <li>Communicate essential administrative and security updates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0A2540]">4. Account & Data Deletion Rights</h2>
            <p>
              Users have the full right to delete their account and request complete removal of all associated data at any time. We provide an automated in-app deletion option as well as an email request process.
            </p>
            <div className="p-4 bg-[#F8FAFD] border border-[#E2EDF8] rounded-xl flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-[#0A2540] text-sm">
                  Dedicated Account Deletion Information Page
                </p>
                <p className="text-xs text-[#6B7A90] mt-0.5">
                  Detailed instructions, timelines, data deletion criteria, and contact channels.
                </p>
              </div>
              <Link
                to="/account-deletion"
                className="text-xs font-bold text-[#015BB3] hover:underline shrink-0"
              >
                View Deletion Policy →
              </Link>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0A2540]">5. Security & Confidentiality</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to ensure your credentials and published content remain secure. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#0A2540]">6. Contact Information</h2>
            <p>
              If you have any questions, feedback, or concerns regarding this Privacy Policy or your personal data, please contact:
            </p>
            <div className="bg-[#E8F2FC] border border-[#D0E2F7] rounded-xl p-4 text-sm">
              <p className="font-bold text-[#0A2540]">FOUZIYA PUBLICATIONS</p>
              <p className="text-[#015BB3] font-semibold">Spot News 24x7</p>
              <p className="mt-1">
                Email:{' '}
                <a
                  href="mailto:fouziyapublications@gmail.com"
                  className="font-bold text-[#015BB3] hover:underline"
                >
                  fouziyapublications@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
