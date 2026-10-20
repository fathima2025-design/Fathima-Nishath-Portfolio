import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Copy, CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';
import { ownerProfile } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { GithubIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  const [copyState, setCopyState] = useState<'idle' | 'email' | 'phone'>('idle');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopyState(type);
    setTimeout(() => setCopyState('idle'), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Get In Touch"
          title="Direct Contact &amp; Channels"
          subtitle="Feel free to reach out directly via email, phone, or messaging."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Channels */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-brand-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-200/50">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${ownerProfile.email}`}
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      {ownerProfile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(ownerProfile.email, 'email')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors border border-slate-200"
                    aria-label="Copy email address"
                  >
                    {copyState === 'email' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${ownerProfile.email}?subject=Frontend%20Developer%20Inquiry%20-%20Fathima%20Nishath`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-brand-600 transition-colors shadow-xs"
                  >
                    <span>Send Email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-emerald-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/50">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${ownerProfile.phone}`}
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {ownerProfile.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(ownerProfile.phone, 'phone')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors border border-slate-200"
                    aria-label="Copy phone number"
                  >
                    {copyState === 'phone' ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:${ownerProfile.phone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-600 transition-colors shadow-xs"
                  >
                    <span>Call Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card (Preserved from Flutter portfolio) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-emerald-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/50">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Direct Messaging
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 block">
                      WhatsApp Quick Chat
                    </span>
                  </div>
                </div>

                <a
                  href={ownerProfile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  <span>Open WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Details & Location Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-surface-subtle border border-slate-200 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-white text-slate-700 flex items-center justify-center border border-slate-200">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Current Location</h4>
                  <p className="text-xs text-slate-500">{ownerProfile.location}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Current Role:</span>
                  <span className="font-semibold text-slate-800">Front-End Developer @ Kairox AI Tech</span>
                </div>
              </div>
            </div>

            {/* Verified Repositories & Original Link */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Authentic Profile Links
              </h4>

              <div className="space-y-2">
                <a
                  href={ownerProfile.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 transition-colors text-xs"
                >
                  <div className="flex items-center gap-2.5 text-slate-800 font-semibold">
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Portfolio Repository</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={ownerProfile.livePortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 transition-colors text-xs"
                >
                  <div className="flex items-center gap-2.5 text-slate-800 font-semibold">
                    <ExternalLink className="w-4 h-4 text-brand-600" />
                    <span>Previous Netlify Deployment (Flutter)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              <p className="text-[11px] text-slate-400 pt-1 leading-normal">
                No fake submission forms: direct mailto and telephone protocols guarantee immediate communication with no dropped messages.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
