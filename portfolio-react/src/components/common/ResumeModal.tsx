import React from 'react';
import { X, FileText, Mail, CheckCircle2, Phone, MapPin, Briefcase, Code } from 'lucide-react';
import { ownerProfile, experiences } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ownerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-premium border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-200/50 shadow-sm">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-slate-900">
                Professional Credentials &amp; Resume
              </h3>
              <p className="text-xs text-slate-500">
                {ownerProfile.name} • {ownerProfile.headline}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto">

          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="truncate">{ownerProfile.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{ownerProfile.phoneFormatted}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
              <span>{ownerProfile.location}</span>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </div>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brand-200 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="font-bold text-slate-900 text-sm">
                      {exp.role} <span className="text-slate-400 font-normal">at</span> <span className="text-brand-700">{exp.company}</span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">{exp.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 uppercase">
              <Code className="w-3.5 h-3.5" />
              <span>Core Frontend Competencies</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-semibold block text-slate-900">React & Next.js</span>
                <span className="text-[11px] text-slate-500">Modular ERP pages</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-semibold block text-slate-900">Redux Toolkit & RTK Query</span>
                <span className="text-[11px] text-slate-500">API caching & data flows</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-semibold block text-slate-900">Tailwind CSS</span>
                <span className="text-[11px] text-slate-500">Responsive enterprise UI</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-semibold block text-slate-900">Complex Workflows</span>
                <span className="text-[11px] text-slate-500">Forms & manufacturing stages</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-semibold block text-slate-900">REST API Integration</span>
                <span className="text-[11px] text-slate-500">Asynchronous token handling</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-semibold block text-slate-900">Backend &amp; Databases</span>
                <span className="text-[11px] text-slate-500">Node.js, Express, MongoDB, SQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Email copied to clipboard</span>
              </>
            ) : (
              <>
                <span>Click to copy email ({ownerProfile.email})</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`mailto:${ownerProfile.email}?subject=Resume%20Request%20-%20Fathima%20Nishath`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-medium text-xs sm:text-sm hover:bg-brand-700 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Request Resume via Email</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
