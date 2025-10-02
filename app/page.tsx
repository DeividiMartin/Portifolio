'use client';

import { Header } from '@/components/portfolio/header';
import { AboutSection } from '@/components/portfolio/about-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { CoursesSection } from '@/components/portfolio/courses-section';

export default function Portfolio() {
  return (
    <div className='space-y-16'>
      <Header />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <CoursesSection />
    </div>
  );
}
