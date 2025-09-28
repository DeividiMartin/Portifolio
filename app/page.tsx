'use client';

import { Header } from '@/components/portfolio/header';
import { AboutSection } from '@/components/portfolio/about-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { CoursesSection } from '@/components/portfolio/courses-section';
import { Footer } from '@/components/portfolio/footer';
import { ControlsBar } from '@/components/portfolio/controls-bar';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-background'>
      <ControlsBar />
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <Header />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <CoursesSection />
        <Footer />
      </div>
    </div>
  );
}
