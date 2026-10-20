import React from 'react';
import { ScanFace, Mic, Hourglass, CheckCircle2, Cpu, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { previousProjects } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const PreviousProjects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'face-attendance-system':
        return <ScanFace className="w-5 h-5 text-brand-600" />;
      case 'voice-grocery-app':
        return <Mic className="w-5 h-5 text-brand-600" />;
      case 'queue-management-app':
        return <Hourglass className="w-5 h-5 text-brand-600" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-surface-subtle border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Foundation &amp; Mobile Experience"
          title="Previous Engineering Projects"
          subtitle="Cross-platform Flutter applications, AI vision models, and real-time systems built during earlier professional and full-stack engagements."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {previousProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:shadow-elevated hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                    {getProjectIcon(proj.id)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    Flutter &amp; Dart
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-brand-700 font-medium block mt-0.5">
                    {proj.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Outcome Highlight if present */}
                {proj.documentedOutcome && (
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="font-medium leading-snug">
                      {proj.documentedOutcome}
                    </span>
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Features
                  </span>
                  <ul className="space-y-1.5">
                    {proj.keyHighlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                        <span className="text-brand-500 font-bold">•</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Flutter Background */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
            <span>
              All Flutter projects listed above reflect original development work from my prior professional experience and portfolio.
            </span>
          </div>
          <a
            href="https://fathima1996.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 font-medium whitespace-nowrap"
          >
            <span>View Original Flutter Web Deployment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
