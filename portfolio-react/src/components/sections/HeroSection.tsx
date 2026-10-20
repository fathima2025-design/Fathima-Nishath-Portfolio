import React from 'react';
import { ArrowRight, Mail, MessageSquare, Phone, ShieldCheck, Layers, Database, Sparkles } from 'lucide-react';
import { ownerProfile } from '../../data/portfolioData';
import { GithubIcon } from '../common/Icons';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-subtle text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-900 font-bold">Front-End Developer</span>
            <span className="text-slate-300">|</span>
            <span className="text-brand-700 font-medium">Kairox AI Tech</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Building Reliable, Scalable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-800">
                Frontend Experiences
              </span>
            </h1>
            
            {/* Supporting Text */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Front-End Developer experienced in building enterprise ERP interfaces, reusable React components, complex business workflows, and REST API integrations. Previously worked on Flutter applications and full-stack features.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#featured-project"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-brand-600 transition-all shadow-elevated group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-all border border-slate-200 shadow-subtle"
            >
              <Mail className="w-4 h-4 text-brand-600" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200/70 hover:text-slate-900 transition-all border border-slate-200"
            >
              <span>Resume Details</span>
            </button>
          </div>

          {/* Quick Real Contact & Repository Links */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <a
              href={ownerProfile.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
              <span>GitHub Repository</span>
            </a>

            <a
              href={`mailto:${ownerProfile.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-brand-600" />
              <span>{ownerProfile.email}</span>
            </a>

            <a
              href={ownerProfile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${ownerProfile.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span>{ownerProfile.phoneFormatted}</span>
            </a>
          </div>

          {/* Enterprise Capabilities Highlights */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-2.5">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Modular UI</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Reusable components &amp; pages</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">State &amp; Caching</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Redux Toolkit &amp; RTK Query</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Enterprise ERP</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Manufacturing floor workflows</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-subtle hover:border-brand-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-slate-900">Backend &amp; Full-Stack</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Node, Express, MongoDB, C#</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
