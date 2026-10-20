export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: {
    start: string;
    end: string;
  };
  location: string;
  isCurrent: boolean;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ErpModule {
  id: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  workflowStage: string;
  keyFeatures: string[];
  frontendTechFocus: string;
  metricBadge: string;
}

export interface FeaturedErpProjectData {
  title: string;
  subtitle: string;
  category: string;
  role: string;
  company: string;
  duration: string;
  overview: string;
  businessContext: string;
  responsibilities: string[];
  technicalImplementation: string[];
  modules: ErpModule[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
    technicalImpact: string;
  }[];
  technologies: string[];
}

export interface PreviousProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  keyHighlights: string[];
  documentedOutcome?: string;
  techStack: string[];
  architectureNotes: string;
}

export type SkillProficiencyStatus = 'production' | 'previous' | 'expanding';

export interface SkillItem {
  name: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  status: SkillProficiencyStatus;
  statusLabel: string;
  description: string;
  skills: SkillItem[];
}

export interface OwnerProfile {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  githubRepoUrl: string;
  livePortfolioUrl: string;
  aboutBio: {
    lead: string;
    paragraphs: string[];
    coreValues: {
      title: string;
      description: string;
    }[];
  };
}
