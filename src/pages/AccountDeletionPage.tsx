import React, { useEffect } from 'react';
import {
  ShieldAlert,
  Smartphone,
  Building2,
  Mail,
  Calendar,
  Trash2,
  FileText,
  AlertTriangle,
  Info,
  CheckCircle2,
  Clock,
  HelpCircle,
} from 'lucide-react';

export const AccountDeletionPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Spot News 24x7 — Account & Data Deletion';
  }, []);

  return (
    <article className="w-full max-w-4xl mx-auto">
      {/* ── Document Card Container ── */}
      <div className="bg-white border border-[#D0E2F7] rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden transition-all duration-300">
        {/* ── Document Top Header Banner ── */}
        <div className="bg-gradient-to-r from-[#E8F2FC] via-[#F0F7FD] to-[#E8F2FC] border-b border-[#D0E2F7] p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6E9FF] border border-[#B8D7FC] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#015BB3]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#015BB3] bg-white px-3 py-1 rounded-full border border-[#D0E2F7]">
              Legal & Privacy
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Account & Data Deletion — Spot News 24x7
          </h1>

          {/* Metadata Badges Card */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white/90 border border-[#D0E2F7] rounded-xl p-3 flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-[#015BB3] shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#6B7A90]">App</p>
                <p className="text-xs font-bold text-[#0A2540] truncate">Spot News 24x7</p>
              </div>
            </div>

            <div className="bg-white/90 border border-[#D0E2F7] rounded-xl p-3 flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#015BB3] shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#6B7A90]">Operated by</p>
                <p className="text-xs font-bold text-[#0A2540] truncate">FOUZIYA PUBLICATIONS</p>
              </div>
            </div>

            <div className="bg-white/90 border border-[#D0E2F7] rounded-xl p-3 flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#015BB3] shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#6B7A90]">Contact</p>
                <a
                  href="mailto:contactspotnews@gmail.com"
                  className="text-xs font-bold text-[#015BB3] hover:underline block truncate"
                >
                  contactspotnews@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/90 border border-[#D0E2F7] rounded-xl p-3 flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#015BB3] shrink-0" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase font-bold text-[#6B7A90]">Last Updated</p>
                <p className="text-xs font-bold text-[#0A2540]">14/09/2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Document Body Content ── */}
        <div className="p-6 sm:p-10 space-y-10 text-[#2D3E50] leading-relaxed">
          {/* Section 1 */}
          <section id="section-1" className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#E2EDF8] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F2FC] border border-[#D0E2F7] flex items-center justify-center font-bold text-sm text-[#015BB3]">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                1. How to Delete Your Account
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              Spot News 24x7 provides an account deletion option within the application.
            </p>

            <p className="text-sm sm:text-base font-semibold text-[#0A2540]">
              To delete your account:
            </p>

            <ol className="space-y-2.5 pt-1">
              {[
                'Open Spot News 24x7.',
                'Log in to your account.',
                'Open Settings.',
                'Select Delete Account.',
                'Review the deletion warning.',
                'Confirm that you want to permanently delete your account.',
                'The application will send the deletion request to our server.',
                'Your account and associated data will be processed for deletion.',
                'After successful deletion, you will be signed out of the application.',
              ].map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFD] border border-[#E2EDF8] text-sm sm:text-base"
                >
                  <span className="w-6 h-6 rounded-full bg-[#145AB1] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="text-[#0A2540] font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#E2EDF8] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F2FC] border border-[#D0E2F7] flex items-center justify-center font-bold text-sm text-[#015BB3]">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                2. What Will Be Deleted
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              When your account deletion is successfully processed, we will take reasonable steps to delete information associated with your account, including:
            </p>

            <div className="bg-[#F8FAFD] border border-[#E2EDF8] rounded-2xl p-5">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Account/profile information',
                  'Name',
                  'Email address',
                  'Phone number',
                  'Profile image',
                  'News articles',
                  'Posts',
                  'News-clipping records',
                  'Generated PNG files',
                  'Generated PDF files',
                  'Uploaded images',
                  'Other user-associated application data',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-[#0A2540]">
                    <Trash2 className="w-4 h-4 text-[#CC1E1E] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#E2EDF8] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F2FC] border border-[#D0E2F7] flex items-center justify-center font-bold text-sm text-[#015BB3]">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                3. Data That May Be Retained
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              Some information may need to be retained for a limited period when required for:
            </p>

            <div className="bg-[#F8FAFD] border border-[#E2EDF8] rounded-2xl p-5">
              <ul className="space-y-2">
                {[
                  'Legal compliance',
                  'Fraud prevention',
                  'Security purposes',
                  'Dispute resolution',
                  'Legal claims',
                  'Financial or regulatory obligations',
                  'Backup and disaster-recovery systems',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-[#0A2540]">
                    <Clock className="w-4 h-4 text-[#015BB3] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50] leading-relaxed bg-[#E8F2FC]/60 border-l-4 border-[#015BB3] p-4 rounded-r-xl">
              Where retention is required, the information will be retained only for the period reasonably necessary for that purpose and handled in accordance with applicable requirements.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#E2EDF8] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F2FC] border border-[#D0E2F7] flex items-center justify-center font-bold text-sm text-[#015BB3]">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                4. What Happens After Deletion
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              After your account has been successfully deleted:
            </p>

            <ul className="space-y-2.5">
              {[
                'You will be signed out.',
                'Your account will no longer be available for normal use.',
                'Your associated application data will be deleted according to our deletion process.',
                'You may need to create a new account if you want to use the service again.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFD] border border-[#E2EDF8] text-sm sm:text-base text-[#0A2540]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#015BB3] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base font-semibold leading-relaxed">
                Account deletion is intended to be permanent. Deleted information may not be recoverable.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#E2EDF8] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F2FC] border border-[#D0E2F7] flex items-center justify-center font-bold text-sm text-[#015BB3]">
                5
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                5. If You Cannot Access Your Account
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              If you cannot log in to Spot News 24x7 or cannot use the in-app deletion feature, you can contact us:
            </p>

            <div className="bg-[#E8F2FC] border border-[#D0E2F7] rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#D0E2F7] flex items-center justify-center text-[#015BB3] shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase text-[#6B7A90]">Email Support</p>
                <a
                  href="mailto:contactspotnews@gmail.com"
                  className="text-base sm:text-lg font-bold text-[#015BB3] hover:underline break-all"
                >
                  contactspotnews@gmail.com
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              Please include enough information for us to identify your account and process your request.
            </p>

            <p className="text-sm sm:text-base text-[#6B7A90] italic">
              For your security, we may need to verify that you are the account owner before processing a deletion request.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="space-y-4 pt-2">
            <div className="flex items-center gap-3 border-b border-[#E2EDF8] pb-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8F2FC] border border-[#D0E2F7] flex items-center justify-center font-bold text-sm text-[#015BB3]">
                6
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                6. Contact
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2D3E50]">
              For account deletion or data-related questions:
            </p>

            <div className="bg-gradient-to-br from-[#F8FAFD] to-[#E8F2FC] border border-[#D0E2F7] rounded-2xl p-6 space-y-2">
              <p className="text-base sm:text-lg font-bold text-[#0A2540]">
                FOUZIYA PUBLICATIONS
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#015BB3]">
                Spot News 24x7
              </p>
              <p className="text-sm sm:text-base text-[#2D3E50] pt-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#015BB3]" />
                <span>Email: </span>
                <a
                  href="mailto:contactspotnews@gmail.com"
                  className="font-bold text-[#015BB3] hover:underline break-all"
                >
                  contactspotnews@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
