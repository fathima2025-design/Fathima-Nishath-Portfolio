import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FeaturedErpProject } from './components/sections/FeaturedErpProject';
import { PreviousProjects } from './components/sections/PreviousProjects';
import { SkillsSection } from './components/sections/SkillsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';
import { ResumeModal } from './components/common/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <ExperienceSection />
        <FeaturedErpProject />
        <PreviousProjects />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Controlled Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
