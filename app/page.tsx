'use client';

import { Header } from '@/components/portfolio/header';
import { AboutSection } from '@/components/portfolio/about-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { CoursesSection } from '@/components/portfolio/courses-section';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <Header />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <CoursesSection />
      </div>
    </div>
  );
}
