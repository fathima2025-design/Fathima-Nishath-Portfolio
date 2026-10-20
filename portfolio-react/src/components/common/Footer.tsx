import React from 'react';
import { ArrowUp, Mail, Phone, MessageSquare, ExternalLink, MapPin } from 'lucide-react';
import { ownerProfile, navigationLinks } from '../../data/portfolioData';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm">
                FN
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {ownerProfile.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Front-End Developer experienced in building enterprise ERP interfaces, reusable React components, complex business workflows, and REST API integrations with Redux Toolkit.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
              <span>{ownerProfile.location}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Links & Profiles */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact &amp; Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${ownerProfile.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-brand-400" />
                  <span className="truncate">{ownerProfile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${ownerProfile.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>{ownerProfile.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={ownerProfile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={ownerProfile.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={ownerProfile.livePortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors text-xs text-slate-400"
                >
                  <span>Previous Flutter Web URL</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {ownerProfile.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with React, TypeScript &amp; Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
