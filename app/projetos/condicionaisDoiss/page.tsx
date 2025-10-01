'use client';

import React from 'react';
import { useLanguage } from '@/contexts/language-context';

export default function CondicionalProjectPage() {
  const { language } = useLanguage();

  const content = {
    title: {
      pt: 'CDV Doiss — Sistema de condicionais',
      en: 'Doiss CDV — Quotation System',
    },
    overview: {
      pt: 'Sistema desktop completo desenvolvido em Electron, React 18 e TypeScript, para gestão de condicionais automotivos. Permite controlar clientes, criar condicionais detalhados, gerenciar pagamentos e imprimir documentos, tudo offline.',
      en: 'Complete desktop system developed in Electron, React 18, and TypeScript for managing automotive quotes. It allows managing clients, creating detailed quotes, handling payments, and printing documents, all offline.',
    },
    features: {
      pt: [
        'Gestão completa de clientes',
        'Criação e controle de condicionais automotivos',
        'Controle financeiro com pagamentos parciais/integral',
        'Impressão de condicionais com layout profissional',
        'Persistência de filtro na lista de clientes',
        'Interface moderna e responsiva',
      ],
      en: [
        'Complete client management',
        'Creation and management of automotive quotes',
        'Financial control with partial/full payments',
        'Printing quotes with professional layout',
        'Filter persistence on the client list',
        'Modern and responsive interface',
      ],
    },
    technologies: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'SQLite3',
      'Electron',
    ],
    usageFlow: {
      pt: [
        'Cadastre clientes com informações completas',
        'Crie condicionais detalhados (peças + mão de obra)',
        'Registre pagamentos parciais ou integrais',
        'Imprima os orçamentos em layout profissional',
        'Volte para a lista de clientes sem perder filtros aplicados',
      ],
      en: [
        'Register clients with complete information',
        'Create detailed quotes (parts + labor)',
        'Record partial or full payments',
        'Print quotes with professional layout',
        'Return to client list without losing applied filters',
      ],
    },
    roadmap: {
      pt: [' '],
      en: [' '],
    },
    cta: {
      pt: ' ',
      en: ' ',
    },
  };

  return (
    <main className='min-h-screen bg-background text-foreground py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-16'>
        {/* Título */}
        <section className='text-center space-y-4'>
          <h1 className='text-4xl font-bold'>{content.title[language]}</h1>
          <p className='text-lg text-muted-foreground'>
            {content.overview[language]}
          </p>
        </section>

        {/* Funcionalidades */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>
            {' '}
            {language === 'pt'
              ? 'Funcionalidades Principais'
              : 'Main Features'}{' '}
          </h2>
          <ul className='list-disc pl-6 space-y-2'>
            {content.features[language].map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Tecnologias */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Technologies</h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {content.technologies.map((tech, idx) => (
              <span
                key={idx}
                className='bg-card text-card-foreground rounded px-3 py-2 text-sm text-center shadow'
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Fluxo de Uso */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>
            {language === 'pt' ? 'Fluxo de Uso' : 'Usage Flow'}
          </h2>
          <ol className='list-decimal pl-6 space-y-2'>
            {content.usageFlow[language].map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Roadmap */}
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>
            {language === 'pt'
              ? 'Próximas Funcionalidades'
              : 'Upcoming Features'}
          </h2>
          <ul className='list-disc pl-6 space-y-2'>
            {content.roadmap[language].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className='text-center'>
          <p className='text-lg font-medium'>{content.cta[language]}</p>
        </section>
      </div>
    </main>
  );
}
