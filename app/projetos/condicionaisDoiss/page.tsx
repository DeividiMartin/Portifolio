'use client';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Rocket,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CondicionalProjectPage() {
  const { language } = useLanguage();

  const content = {
    title: {
      pt: 'Sistema de Gerenciamento de Vendas Condicionais',
      en: 'Conditional Sales Management System',
    },
    subtitle: {
      pt: 'Doiss Auto Peças',
      en: 'Doiss Auto Parts',
    },
    overview: {
      pt: 'Sistema desktop completo e robusto desenvolvido para um CDV (Centro de Desmanche Veicular), criado para substituir controles de vendas condicionais feitos manualmente e proporcionar um gerenciamento mais eficiente das contas dos clientes. Solução local que garante total autonomia operacional sem dependência de conexão com internet.',
      en: 'Complete and robust desktop system developed for a CDV (Vehicle Dismantling Center), designed to replace manually handled conditional sales controls and provide more efficient management of customer accounts. Local solution that ensures full operational autonomy without internet connection dependency.',
    },

    problem: {
      title: {
        pt: 'Problema Resolvido',
        en: 'Problem Solved',
      },
      description: {
        pt: 'Digitalizou e otimizou o processo de vendas condicionais que anteriormente era feito manualmente, eliminando problemas como dificuldade em rastrear pagamentos, falta de histórico, impossibilidade de gerar relatórios e risco de perda de informações. Além disso, conferiu ao CDV um tom mais profissional, organizado e confiável diante dos clientes.',
        en: 'Digitized and optimized the conditional sales process that was previously handled manually, eliminating issues such as difficulty tracking payments, lack of history, inability to generate reports, and risk of information loss. In addition, it gave the CDV a more professional, organized, and reliable image in front of its customers.',
      },
    },
    features: [
      {
        icon: 'users',
        title: {
          pt: 'Gestão Completa de Clientes',
          en: 'Complete Client Management',
        },
        items: {
          pt: [
            'Cadastro com informações detalhadas',
            'Histórico completo de vendas por cliente',
            'Filtros avançados por período',
            'Modal detalhado com todas as transações',
            'Busca e ordenação inteligente',
          ],
          en: [
            'Registration with detailed information',
            'Complete sales history per client',
            'Advanced period filters',
            'Detailed modal with all transactions',
            'Smart search and sorting',
          ],
        },
      },
      {
        icon: 'shopping-cart',
        title: {
          pt: 'Sistema de Vendas Condicionais',
          en: 'Conditional Sales System',
        },
        items: {
          pt: [
            'Criação de vendas com múltiplos itens',
            'Campos detalhados por produto',
            'Cálculo automático de totais',
            'Suporte para vendas parcialmente pagas',
            'Três formas de pagamento: PIX, Cartão e Dinheiro',
          ],
          en: [
            'Sales creation with multiple items',
            'Detailed fields per product',
            'Automatic total calculation',
            'Support for partially paid sales',
            'Three payment methods: PIX, Card and Cash',
          ],
        },
      },
      {
        icon: 'zap',
        title: {
          pt: 'Vendas no Balcão (Express)',
          en: 'Counter Sales (Express)',
        },
        items: {
          pt: [
            'Modal simplificado para vendas rápidas',
            'Cliente pré-selecionado automaticamente',
            'Reduz processo de 5+ cliques para 2 cliques',
          ],
          en: [
            'Simplified modal for quick sales',
            'Automatically pre-selected client',
            'Reduces process from 5+ clicks to 2 clicks',
          ],
        },
      },
      {
        icon: 'chart',
        title: {
          pt: 'Dashboard Analítico',
          en: 'Analytical Dashboard',
        },
        items: {
          pt: [
            'Resumo financeiro em tempo real',
            'Vendas recentes com status',
            'Top 5 clientes com maior débito',
            'Ações rápidas integradas',
            'Atualização automática dos dados',
          ],
          en: [
            'Real-time financial summary',
            'Recent sales with status',
            'Top 5 clients with highest debt',
            'Integrated quick actions',
            'Automatic data update',
          ],
        },
      },
    ],
    technologies: {
      frontend: [
        'React 18',
        'TypeScript',
        'React Router DOM',
        'Tailwind CSS',
        'Vite',
        'shadcn/ui',
      ],
      backend: ['Node.js', 'Express', 'SQLite3', 'TypeScript'],
      desktop: ['Electron 27', 'Electron Forge'],
    },
    challenges: [
      {
        title: {
          pt: 'Sincronização de Estados Complexos',
          en: 'Complex State Synchronization',
        },
        description: {
          pt: 'Sistema robusto mantendo sincronizados lista de clientes, histórico de vendas, filtros e modais aninhados.',
          en: 'Robust system keeping synchronized client list, sales history, filters and nested modals.',
        },
      },
      {
        title: {
          pt: 'Performance com Grandes Volumes',
          en: 'Performance with Large Volumes',
        },
        description: {
          pt: 'Queries SQL otimizadas, memoização de componentes React, lazy loading e debounce em filtros.',
          en: 'Optimized SQL queries, React component memoization, lazy loading and filter debounce.',
        },
      },
      {
        title: {
          pt: 'Cálculos Financeiros Precisos',
          en: 'Precise Financial Calculations',
        },
        description: {
          pt: 'Lógica robusta usando centavos como unidade base, validações de consistência e prevenção de erros.',
          en: 'Robust logic using cents as base unit, consistency validations and error prevention.',
        },
      },
    ],
    results: [
      {
        metric: '80%',
        label: {
          pt: 'Redução no tempo de consulta',
          en: 'Reduction in query time',
        },
      },
      {
        metric: '100%',
        label: {
          pt: 'Eliminação de erros de cálculo',
          en: 'Elimination of calculation errors',
        },
      },
      {
        metric: 'Offline',
        label: {
          pt: 'Funciona sem internet',
          en: 'Works without internet',
        },
      },
    ],
    screenshots: {
      title: {
        pt: 'Funcionalidades em Ação',
        en: 'Features in Action',
      },
      description: {
        pt: 'Capturas de tela das principais funcionalidades do sistema',
        en: 'Screenshots of the main system features',
      },
    },
  };

  return (
    <div className='space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500'>
      <section className='text-center space-y-6 py-12 animate-in fade-in slide-in-from-top-4 duration-700'>
        <h1 className='text-5xl md:text-7xl font-bold text-balance bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent'>
          {content.title[language]}
        </h1>
        <p className='text-2xl font-semibold text-primary'>
          {content.subtitle[language]}
        </p>
        <p className='text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed'>
          {content.overview[language]}
        </p>
      </section>

      <section className='bg-card border border-border rounded-2xl p-8 shadow-lg animate-in fade-in slide-in-from-left-4 duration-700 delay-200'>
        <div className='flex items-start gap-4'>
          <div className='p-3 rounded-xl bg-primary/10 text-primary'>
            <Rocket className='w-6 h-6' />
          </div>
          <div className='space-y-3 flex-1'>
            <h2 className='text-2xl font-bold'>
              {content.problem.title[language]}
            </h2>
            <p className='text-muted-foreground leading-relaxed'>
              {content.problem.description[language]}
            </p>
          </div>
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-300'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl font-bold'>
            {language === 'pt' ? 'Funcionalidades Principais' : 'Main Features'}
          </h2>
          <p className='text-muted-foreground'>
            {language === 'pt'
              ? 'Sistema completo com recursos avançados para gestão de vendas'
              : 'Complete system with advanced features for sales management'}
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          {content.features.map((feature, idx) => (
            <div
              key={idx}
              className='bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 space-y-4'
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                  <Zap className='w-5 h-5' />
                </div>
                <h3 className='text-xl font-semibold'>
                  {feature.title[language]}
                </h3>
              </div>
              <ul className='space-y-2'>
                {feature.items[language].map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className='flex items-start gap-2 text-muted-foreground'
                  >
                    <CheckCircle2 className='w-4 h-4 mt-1 text-primary flex-shrink-0' />
                    <span className='text-sm'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-400'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl font-bold'>
            {language === 'pt' ? 'Stack Tecnológica' : 'Technology Stack'}
          </h2>
          <p className='text-muted-foreground'>
            {language === 'pt'
              ? 'Tecnologias modernas para uma aplicação robusta e escalável'
              : 'Modern technologies for a robust and scalable application'}
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-primary'>
              <Layers className='w-5 h-5' />
              <h3 className='font-semibold'>Frontend</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {content.technologies.frontend.map((tech, idx) => (
                <span
                  key={idx}
                  className='bg-card text-card-foreground rounded-lg px-3 py-2 text-sm border border-border hover:border-primary/50 transition-all duration-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-primary'>
              <Database className='w-5 h-5' />
              <h3 className='font-semibold'>Backend</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {content.technologies.backend.map((tech, idx) => (
                <span
                  key={idx}
                  className='bg-card text-card-foreground rounded-lg px-3 py-2 text-sm border border-border hover:border-primary/50 transition-all duration-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-primary'>
              <Code2 className='w-5 h-5' />
              <h3 className='font-semibold'>Desktop</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {content.technologies.desktop.map((tech, idx) => (
                <span
                  key={idx}
                  className='bg-card text-card-foreground rounded-lg px-3 py-2 text-sm border border-border hover:border-primary/50 transition-all duration-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-500'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl font-bold'>
            {language === 'pt'
              ? 'Desafios Técnicos Superados'
              : 'Technical Challenges Overcome'}
          </h2>
          <p className='text-muted-foreground'>
            {language === 'pt'
              ? 'Soluções implementadas para problemas complexos'
              : 'Solutions implemented for complex problems'}
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {content.challenges.map((challenge, idx) => (
            <div
              key={idx}
              className='bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300'
            >
              <h3 className='text-lg font-semibold mb-3'>
                {challenge.title[language]}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {challenge.description[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-700'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl font-bold'>
            {content.screenshots.title[language]}
          </h2>
          <p className='text-muted-foreground'>
            {content.screenshots.description[language]}
          </p>
        </div>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold text-center'>
              {language === 'pt' ? 'Dashboard Principal' : 'Main Dashboard'}
            </h3>
            <div className='relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <Image
                src='/images/condicionais-dashboard.png'
                alt='Dashboard Principal do Sistema'
                fill
                className='object-cover object-top'
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-center'>
                {language === 'pt' ? 'Gestão de Clientes' : 'Client Management'}
              </h3>
              <div className='relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image
                  src='/images/condicionais-clientes.png'
                  alt='Tela de Gestão de Clientes'
                  fill
                  className='object-cover object-top'
                />
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-center'>
                {language === 'pt' ? 'Detalhes do Cliente' : 'Client Details'}
              </h3>
              <div className='relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image
                  src='/images/condicionais-cliente-status.png'
                  alt='Detalhes e Status do Cliente'
                  fill
                  className='object-cover object-top'
                />
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-center'>
                {language === 'pt' ? 'Criação de Vendas' : 'Sales Creation'}
              </h3>
              <div className='relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image
                  src='/images/condicionais-venda.png'
                  alt='Tela de Criação de Vendas'
                  fill
                  className='object-cover object-top'
                />
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold text-center'>
                {language === 'pt' ? 'Controle de Vendas' : 'Sales Control'}
              </h3>
              <div className='relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <Image
                  src='/images/condicionais-controle.png'
                  alt='Tela de Controle de Vendas'
                  fill
                  className='object-cover object-top'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
