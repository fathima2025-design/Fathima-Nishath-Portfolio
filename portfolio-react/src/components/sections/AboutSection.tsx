import React from 'react';
import { Layers, Workflow, Network, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { ownerProfile } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface-subtle border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Engineering Mindset"
          title="About Me"
          subtitle="Transitioning full-stack cross-platform engineering rigor into high-impact React and Next.js web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="p-5 rounded-2xl bg-white border border-brand-200/80 shadow-subtle">
              <p className="text-lg font-bold text-slate-900 leading-snug">
                {ownerProfile.aboutBio.lead}
              </p>
            </div>

            {ownerProfile.aboutBio.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-brand-600 transition-colors shadow-sm"
              >
                <span>Connect with Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Principles / Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              Engineering Pillars &amp; Principles
            </div>

            <div className="space-y-3.5">
              {ownerProfile.aboutBio.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-subtle hover:border-slate-300 transition-colors space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
                      {idx === 0 && <Workflow className="w-4 h-4" />}
                      {idx === 1 && <Layers className="w-4 h-4" />}
                      {idx === 2 && <Network className="w-4 h-4" />}
                      {idx === 3 && <BookOpen className="w-4 h-4" />}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-10">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick summary pill */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200/60 text-xs text-slate-600 flex items-center gap-3">
              <Compass className="w-5 h-5 text-brand-600 shrink-0" />
              <span>
                Based in <strong className="text-slate-800">{ownerProfile.location}</strong>. Front-End Developer specializing in React &amp; Next.js.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
