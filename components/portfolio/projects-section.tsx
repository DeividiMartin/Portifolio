'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  const { t, language } = useLanguage();

  return (
    <section className='mb-16'>
      <h2 className='text-2xl font-semibold mb-8 text-foreground'>
        {t('projects.title')}
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <Card
            key={project.id}
            className='p-6 hover:bg-card/80 transition-colors'
          >
            <div className='flex items-start justify-between mb-4'>
              <h3 className='text-lg font-semibold text-foreground'>
                {project.title[language]}
              </h3>
              <Button variant='ghost' size='sm' asChild>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  <ExternalLink className='w-4 h-4' />
                </a>
              </Button>
            </div>
            <p className='text-muted-foreground text-sm mb-4 leading-relaxed'>
              {project.description[language]}
            </p>
            <div className='flex flex-wrap gap-2'>
              {project.tech.map((tech) => (
                <Badge key={tech} variant='outline' className='text-xs'>
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
