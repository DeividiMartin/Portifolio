'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/DeividiMartin',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/deividi-martin-4b02391a3/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:deividi_97@hotmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className='border-t border-border bg-background'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-col items-center justify-center gap-8'>
          {/* Social Links */}
          <div className='flex items-center gap-4'>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all'
                  aria-label={social.name}
                >
                  <Icon className='w-5 h-5' />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className='text-sm text-muted-foreground text-center'>
            © {currentYear} Deividi Martin.{' '}
            {language === 'pt'
              ? 'Todos os direitos reservados.'
              : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
