import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface-subtle border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Career History"
          title="Professional Experience"
          subtitle="Proven track record in building enterprise frontends, complex manufacturing workflows, and full-stack cross-platform applications."
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`relative bg-white rounded-2xl border transition-all duration-300 p-6 sm:p-8 lg:p-10 ${
                exp.isCurrent
                  ? 'border-brand-200 shadow-elevated ring-1 ring-brand-100'
                  : 'border-slate-200 shadow-subtle hover:border-slate-300'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {exp.role}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-600">
                    <span className="text-brand-700 font-bold text-base flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-brand-600" />
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {exp.duration}
                    </span>
                    <span className="hidden sm:inline text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 self-start border border-slate-200/80">
                  {exp.employmentType}
                </div>
              </div>

              {/* Summary */}
              <div className="py-6">
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {exp.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 pb-6">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  Key Responsibilities &amp; Contributions
                </h4>
                <ul className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${exp.isCurrent ? 'text-brand-600' : 'text-slate-400'}`} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-1">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
                      exp.isCurrent
                        ? 'bg-brand-50/70 text-brand-800 border-brand-200/60'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
