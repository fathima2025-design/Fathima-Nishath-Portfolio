import React, { useState } from 'react';
import { Layers, Database, Globe, Palette, Wrench, History, GraduationCap, Server } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import type { SkillProficiencyStatus } from '../../types';

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | SkillProficiencyStatus>('all');

  const filteredCategories = filter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.status === filter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend-core':
        return <Layers className="w-4 h-4 text-brand-600" />;
      case 'backend-databases':
        return <Server className="w-4 h-4 text-emerald-600" />;
      case 'state-management':
        return <Database className="w-4 h-4 text-emerald-600" />;
      case 'api-integration':
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 'ui-visualization':
        return <Palette className="w-4 h-4 text-purple-600" />;
      case 'developer-tools':
        return <Wrench className="w-4 h-4 text-slate-700" />;
      case 'previous-stack':
        return <History className="w-4 h-4 text-amber-600" />;
      case 'expanding-depth':
        return <GraduationCap className="w-4 h-4 text-cyan-600" />;
      default:
        return <Layers className="w-4 h-4 text-brand-600" />;
    }
  };

  const getStatusBadge = (status: SkillProficiencyStatus) => {
    switch (status) {
      case 'production':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Current Production
          </span>
        );
      case 'previous':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Prior Experience
          </span>
        );
      case 'expanding':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            Actively Expanding / Proficient
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills &amp; Competencies"
          subtitle="Clear, honest categorization separating active production technologies from prior full-stack background and expanding depth."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <span className="text-xs font-semibold text-slate-400 mr-2">Filter by Status:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          <button
            onClick={() => setFilter('production')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'production'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            Current Production
          </button>
          <button
            onClick={() => setFilter('previous')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'previous'
                ? 'bg-amber-700 text-white shadow-xs'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            Prior Experience (Flutter / .NET)
          </button>
          <button
            onClick={() => setFilter('expanding')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'expanding'
                ? 'bg-cyan-700 text-white shadow-xs'
                : 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100'
            }`}
          >
            Actively Expanding (TypeScript)
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {cat.categoryName}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {getStatusBadge(cat.status)}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Chips */}
                <div className="space-y-2 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                      >
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] font-normal text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {cat.id === 'expanding-depth' && (
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600 italic">
                  * Note: TypeScript is actively practiced across modern personal engineering and portfolio components rather than claimed as legacy production code.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
