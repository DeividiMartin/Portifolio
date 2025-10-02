'use client';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function OrcamentoProjectPage() {
  const { language } = useLanguage();

  const content = {
    title: {
      pt: 'Mecanica FGT — Sistema de Orçamentos',
      en: 'FGT Mechanics — Quotation System',
    },
    overview: {
      pt: 'Sistema desktop completo desenvolvido em Electron, React 18 e TypeScript, para gestão de orçamentos automotivos. Permite controlar clientes, criar orçamentos detalhados, gerenciar pagamentos e imprimir documentos, tudo offline.',
      en: 'Complete desktop system developed in Electron, React 18, and TypeScript for managing automotive quotes. It allows managing clients, creating detailed quotes, handling payments, and printing documents, all offline.',
    },
    features: {
      pt: [
        'Gestão completa de clientes',
        'Criação e controle de orçamentos automotivos',
        'Controle financeiro com pagamentos parciais/integral',
        'Impressão de orçamentos com layout profissional',
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
        'Crie orçamentos detalhados (peças + mão de obra)',
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
    <div className='space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500'>
      <Link
        href='/#projects'
        className='inline-block transition-transform hover:scale-105'
      >
        <Button
          variant='ghost'
          size='sm'
          className='transition-all duration-200 hover:bg-accent'
        >
          <ArrowLeft className='w-4 h-4 mr-2' />
          {language === 'pt' ? 'Voltar' : 'Back'}
        </Button>
      </Link>

      {/* Título */}
      <section className='text-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-700'>
        <h1 className='text-4xl font-bold text-balance'>
          {content.title[language]}
        </h1>
        <p className='text-lg text-muted-foreground text-pretty max-w-3xl mx-auto'>
          {content.overview[language]}
        </p>
      </section>

      {/* Funcionalidades */}
      <section className='space-y-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-300'>
        <h2 className='text-2xl font-semibold'>
          {language === 'pt' ? 'Funcionalidades Principais' : 'Main Features'}
        </h2>
        <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
          {content.features[language].map((feature, idx) => (
            <li key={idx} className='transition-colors hover:text-foreground'>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Tecnologias */}
      <section className='space-y-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-500'>
        <h2 className='text-2xl font-semibold'>Technologies</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {content.technologies.map((tech, idx) => (
            <span
              key={idx}
              className='bg-card text-card-foreground rounded-lg px-4 py-3 text-sm text-center shadow-sm border border-border transition-all duration-200 hover:shadow-md hover:scale-105 hover:border-primary/50'
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Fluxo de Uso */}
      <section className='space-y-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-700'>
        <h2 className='text-2xl font-semibold'>
          {language === 'pt' ? 'Fluxo de Uso' : 'Usage Flow'}
        </h2>
        <ol className='list-decimal pl-6 space-y-2 text-muted-foreground'>
          {content.usageFlow[language].map((step, idx) => (
            <li key={idx} className='transition-colors hover:text-foreground'>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Roadmap */}
      <section className='space-y-4 animate-in fade-in slide-in-from-right-4 duration-700 delay-900'>
        <h2 className='text-2xl font-semibold'>
          {language === 'pt' ? 'Próximas Funcionalidades' : 'Upcoming Features'}
        </h2>
        <ul className='list-disc pl-6 space-y-2'>
          {content.roadmap[language].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className='text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1100'>
        <p className='text-lg font-medium'>{content.cta[language]}</p>
      </section>
    </div>
  );
}
