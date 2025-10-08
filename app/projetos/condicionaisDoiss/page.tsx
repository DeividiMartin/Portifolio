'use client';
import { useLanguage } from '@/contexts/language-context';
import { ImageCarousel } from '@/components/ui/image-carousel';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Zap,
  Link2,
  ShieldCheck,
  Users,
  Mail,
  Linkedin,
  Target,
  Lightbulb,
  Cog,
} from 'lucide-react';

export default function CondicionalProjectPage() {
  const { language } = useLanguage();

  const content = {
    hero: {
      title: {
        pt: 'Sistema de Gerenciamento de Vendas Condicionais',
        en: 'Conditional Sales Management System',
      },
      subtitle: {
        pt: 'Doiss Auto Peças',
        en: 'Doiss Auto Parts',
      },
      tagline: {
        pt: 'Transformando operações manuais em um sistema profissional e automatizado',
        en: 'Transforming manual operations into a professional and automated system',
      },
      overview: {
        pt: 'Sistema desktop completo desenvolvido para um Centro de Desmonte Veicular, substituindo controles manuais por uma solução profissional com integrações automáticas que sincroniza com ERP e Mercado Livre em tempo real.',
        en: 'Complete desktop system developed for a Vehicle Dismantling Center, replacing manual controls with a professional solution featuring automatic integrations that sync with ERP and Mercado Livre in real-time.',
      },
      cta: {
        pt: 'Precisa de um sistema personalizado?',
        en: 'Need a custom system?',
      },
    },

    problem: {
      title: {
        pt: 'O Desafio',
        en: 'The Challenge',
      },
      description: {
        pt: 'A empresa enfrentava dificuldades com controles manuais de vendas condicionais: impossibilidade de rastrear pagamentos, falta de histórico organizado, risco de perda de informações e trabalho manual intensivo para atualizar estoque e pausar anúncios após cada venda.',
        en: 'The company faced difficulties with manual conditional sales controls: inability to track payments, lack of organized history, risk of information loss, and intensive manual work to update stock and pause listings after each sale.',
      },
      solution: {
        pt: 'A Solução',
        en: 'The Solution',
      },
      solutionDescription: {
        pt: 'Sistema desktop completo que digitalizou todo o processo, automatizou integrações com sistemas externos (ERP e Mercado Livre), eliminou erros de cálculo e proporcionou uma imagem mais profissional e confiável para os clientes.',
        en: 'Complete desktop system that digitized the entire process, automated integrations with external systems (ERP and Mercado Livre), eliminated calculation errors, and provided a more professional and reliable image to clients.',
      },
    },

    features: [
      {
        icon: Users,
        title: {
          pt: 'Gestão Completa de Clientes',
          en: 'Complete Client Management',
        },
        description: {
          pt: 'Cadastro inteligente com validação automática de CPF/CNPJ e preenchimento de endereço via CEP',
          en: 'Smart registration with automatic CPF/CNPJ validation and address filling via ZIP code',
        },
        items: {
          pt: [
            'Validação automática de CPF/CNPJ com formatação inteligente',
            'Integração com API ViaCEP para preenchimento automático',
            'Histórico completo de vendas e pagamentos por cliente',
            'Filtros avançados e busca inteligente',
          ],
          en: [
            'Automatic CPF/CNPJ validation with smart formatting',
            'ViaCEP API integration for automatic filling',
            'Complete sales and payment history per client',
            'Advanced filters and smart search',
          ],
        },
      },
      {
        icon: ShieldCheck,
        title: {
          pt: 'Sistema de Vendas Condicionais',
          en: 'Conditional Sales System',
        },
        description: {
          pt: 'Criação rápida de vendas com busca automática de produtos e cálculos precisos',
          en: 'Quick sales creation with automatic product search and precise calculations',
        },
        items: {
          pt: [
            'Busca automática de produtos por SKU via API ERP',
            'Preenchimento automático de dados do produto',
            'Cálculo automático de totais e validações',
            'Suporte para múltiplas formas de pagamento',
          ],
          en: [
            'Automatic product search by SKU via ERP API',
            'Automatic product data filling',
            'Automatic total calculation and validations',
            'Support for multiple payment methods',
          ],
        },
      },
      {
        icon: Link2,
        title: {
          pt: 'Integrações Automáticas',
          en: 'Automatic Integrations',
        },
        description: {
          pt: 'Sincronização em tempo real com sistemas externos sem intervenção manual',
          en: 'Real-time synchronization with external systems without manual intervention',
        },
        items: {
          pt: [
            'Pausa automática de anúncios no Mercado Livre',
            'Atualização automática de estoque no ERP',
            'Cache inteligente de autenticação',
            'Tratamento robusto de erros com retry automático',
          ],
          en: [
            'Automatic pause of Mercado Livre listings',
            'Automatic stock update in ERP',
            'Smart authentication caching',
            'Robust error handling with automatic retry',
          ],
        },
      },
      {
        icon: Zap,
        title: {
          pt: 'Vendas Express no Balcão',
          en: 'Express Counter Sales',
        },
        description: {
          pt: 'Processo otimizado que reduz vendas de 5+ cliques para apenas 2 cliques',
          en: 'Optimized process that reduces sales from 5+ clicks to just 2 clicks',
        },
        items: {
          pt: [
            'Modal simplificado para vendas rápidas',
            'Cliente pré-selecionado automaticamente',
            'Integração com busca de produtos',
            'Confirmação e impressão instantânea',
          ],
          en: [
            'Simplified modal for quick sales',
            'Automatically pre-selected client',
            'Integration with product search',
            'Instant confirmation and printing',
          ],
        },
      },
    ],

    technologies: {
      title: {
        pt: 'Stack Tecnológica',
        en: 'Technology Stack',
      },
      subtitle: {
        pt: 'Tecnologias modernas para uma aplicação robusta e escalável',
        en: 'Modern technologies for a robust and scalable application',
      },
      frontend: [
        'React 18',
        'TypeScript',
        'React Router DOM',
        'Tailwind CSS',
        'Vite',
        'shadcn/ui',
      ],
      backend: ['Node.js', 'Express', 'SQLite3', 'TypeScript'],
      desktop: ['Electron 27', 'Electron Forge', 'IPC Communication'],
      integrations: [
        'API ERP',
        'API Mercado Livre',
        'API ViaCEP',
        'REST APIs',
        'Token Authentication',
      ],
    },

    process: {
      title: {
        pt: 'Processo de Desenvolvimento',
        en: 'Development Process',
      },
      subtitle: {
        pt: 'Metodologia ágil com foco em resultados',
        en: 'Agile methodology focused on results',
      },
      steps: [
        {
          icon: Target,
          title: {
            pt: 'Análise de Requisitos',
            en: 'Requirements Analysis',
          },
          description: {
            pt: 'Levantamento detalhado das necessidades do negócio e mapeamento de processos existentes',
            en: 'Detailed survey of business needs and mapping of existing processes',
          },
        },
        {
          icon: Lightbulb,
          title: {
            pt: 'Design e Arquitetura',
            en: 'Design and Architecture',
          },
          description: {
            pt: 'Planejamento da solução técnica, escolha de tecnologias e design de interface',
            en: 'Technical solution planning, technology selection, and interface design',
          },
        },
        {
          icon: Cog,
          title: {
            pt: 'Desenvolvimento Iterativo',
            en: 'Iterative Development',
          },
          description: {
            pt: 'Implementação em sprints com entregas incrementais e feedback constante',
            en: 'Implementation in sprints with incremental deliveries and constant feedback',
          },
        },
        {
          icon: CheckCircle2,
          title: {
            pt: 'Testes e Implantação',
            en: 'Testing and Deployment',
          },
          description: {
            pt: 'Testes rigorosos, treinamento da equipe e suporte pós-implantação',
            en: 'Rigorous testing, team training, and post-deployment support',
          },
        },
      ],
    },

    challenges: [
      {
        title: {
          pt: 'Sincronização de Estados Complexos',
          en: 'Complex State Synchronization',
        },
        description: {
          pt: 'Implementação de sistema robusto mantendo sincronizados lista de clientes, histórico de vendas, filtros, modais aninhados e dados de APIs externas em tempo real.',
          en: 'Implementation of robust system keeping synchronized client list, sales history, filters, nested modals and external API data in real-time.',
        },
      },
      {
        title: {
          pt: 'Integração Multi-API com Electron',
          en: 'Multi-API Integration with Electron',
        },
        description: {
          pt: 'Desenvolvimento de comunicação IPC entre renderer e main process para requisições HTTP, contornando limitações do Electron e garantindo segurança.',
          en: 'Development of IPC communication between renderer and main process for HTTP requests, bypassing Electron limitations and ensuring security.',
        },
      },
      {
        title: {
          pt: 'Performance com Grandes Volumes',
          en: 'Performance with Large Volumes',
        },
        description: {
          pt: 'Otimização de queries SQL, memoização de componentes React, lazy loading e cache inteligente para garantir performance mesmo com milhares de registros.',
          en: 'SQL query optimization, React component memoization, lazy loading and smart caching to ensure performance even with thousands of records.',
        },
      },
      {
        title: {
          pt: 'Validação de Dados em Tempo Real',
          en: 'Real-Time Data Validation',
        },
        description: {
          pt: 'Implementação de validadores de CPF/CNPJ com algoritmo oficial, formatação automática e verificação de sincronização antes de operações críticas.',
          en: 'Implementation of CPF/CNPJ validators with official algorithm, automatic formatting and synchronization check before critical operations.',
        },
      },
    ],

    testimonial: {
      quote: {
        pt: 'O sistema transformou completamente nossa operação. O que antes levava horas agora leva minutos, e nossos clientes percebem o profissionalismo.',
        en: 'The system completely transformed our operation. What used to take hours now takes minutes, and our clients notice the professionalism.',
      },
      author: {
        pt: 'Proprietário, Doiss Auto Peças',
        en: 'Owner, Doiss Auto Parts',
      },
    },

    screenshots: {
      title: {
        pt: 'Interface do Sistema',
        en: 'System Interface',
      },
      description: {
        pt: 'Design profissional e intuitivo focado em produtividade',
        en: 'Professional and intuitive design focused on productivity',
      },
    },
  };

  const carouselImages = [
    {
      src: '/images/condicionais-dashboard.png',
      alt: 'Dashboard Principal do Sistema',
      title: language === 'pt' ? 'Dashboard Principal' : 'Main Dashboard',
    },
    {
      src: '/images/condicionais-clientes.png',
      alt: 'Tela de Gestão de Clientes',
      title: language === 'pt' ? 'Gestão de Clientes' : 'Client Management',
    },
    {
      src: '/images/condicionais-cliente-status.png',
      alt: 'Detalhes e Status do Cliente',
      title: language === 'pt' ? 'Detalhes do Cliente' : 'Client Details',
    },
    {
      src: '/images/condicionais-venda.png',
      alt: 'Tela de Criação de Vendas',
      title: language === 'pt' ? 'Criação de Vendas' : 'Sales Creation',
    },
    {
      src: '/images/condicionais-controle.png',
      alt: 'Tela de Controle de Vendas',
      title: language === 'pt' ? 'Controle de Vendas' : 'Sales Control',
    },
  ];

  return (
    <div className='space-y-20 pb-20'>
      {/* Hero Section */}
      <section className='text-center space-y-8 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700'>
        <h1 className='text-5xl md:text-7xl font-bold text-balance leading-tight'>
          {content.hero.title[language]}
        </h1>

        <p className='text-2xl font-semibold text-primary'>
          {content.hero.subtitle[language]}
        </p>

        <p className='text-xl text-muted-foreground italic max-w-2xl mx-auto'>
          {content.hero.tagline[language]}
        </p>

        <p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
          {content.hero.overview[language]}
        </p>
      </section>

      {/* Problem & Solution Section */}
      <section className='grid md:grid-cols-2 gap-8'>
        <div className='bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300'>
          <div className='flex items-center gap-3'>
            <div className='p-3 rounded-xl bg-destructive/10 text-destructive'>
              <Target className='w-6 h-6' />
            </div>
            <h2 className='text-2xl font-bold'>
              {content.problem.title[language]}
            </h2>
          </div>
          <p className='text-muted-foreground leading-relaxed'>
            {content.problem.description[language]}
          </p>
        </div>

        <div className='bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300'>
          <div className='flex items-center gap-3'>
            <div className='p-3 rounded-xl bg-primary/10 text-primary'>
              <Lightbulb className='w-6 h-6' />
            </div>
            <h2 className='text-2xl font-bold'>
              {content.problem.solution[language]}
            </h2>
          </div>
          <p className='text-muted-foreground leading-relaxed'>
            {content.problem.solutionDescription[language]}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className='space-y-8'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl font-bold'>
            {language === 'pt' ? 'Funcionalidades Principais' : 'Key Features'}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {language === 'pt'
              ? 'Recursos desenvolvidos para maximizar eficiência e produtividade'
              : 'Features developed to maximize efficiency and productivity'}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {content.features.map((feature, idx) => (
            <div
              key={idx}
              className='bg-card border border-border rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50'
            >
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0'>
                  <feature.icon className='w-6 h-6' />
                </div>
                <div className='space-y-2 flex-1'>
                  <h3 className='text-xl font-semibold'>
                    {feature.title[language]}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {feature.description[language]}
                  </p>
                </div>
              </div>

              <ul className='space-y-3 pl-1'>
                {feature.items[language].map((item, itemIdx) => (
                  <li key={itemIdx} className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 mt-0.5 text-primary flex-shrink-0' />
                    <span className='text-sm text-muted-foreground'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className='space-y-8'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl font-bold'>
            {content.process.title[language]}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {content.process.subtitle[language]}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {content.process.steps.map((step, idx) => (
            <div
              key={idx}
              className='relative bg-card border border-border rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all duration-300'
            >
              <div className='absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm'>
                {idx + 1}
              </div>
              <div className='p-3 rounded-xl bg-primary/10 text-primary w-fit'>
                <step.icon className='w-6 h-6' />
              </div>
              <h3 className='font-semibold text-lg'>{step.title[language]}</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {step.description[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className='space-y-8'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl font-bold'>
            {content.technologies.title[language]}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {content.technologies.subtitle[language]}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='space-y-4'>
            <div className='flex items-center gap-3 text-primary'>
              <Layers className='w-5 h-5' />
              <h3 className='font-semibold text-lg'>Frontend</h3>
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
            <div className='flex items-center gap-3 text-primary'>
              <Database className='w-5 h-5' />
              <h3 className='font-semibold text-lg'>Backend</h3>
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
            <div className='flex items-center gap-3 text-primary'>
              <Code2 className='w-5 h-5' />
              <h3 className='font-semibold text-lg'>Desktop</h3>
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

          <div className='space-y-4'>
            <div className='flex items-center gap-3 text-primary'>
              <Link2 className='w-5 h-5' />
              <h3 className='font-semibold text-lg'>
                {language === 'pt' ? 'Integrações' : 'Integrations'}
              </h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {content.technologies.integrations.map((tech, idx) => (
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

      {/* Technical Challenges Section */}
      <section className='space-y-8'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl font-bold'>
            {language === 'pt'
              ? 'Desafios Técnicos Superados'
              : 'Technical Challenges Overcome'}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {language === 'pt'
              ? 'Soluções criativas para problemas complexos'
              : 'Creative solutions to complex problems'}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {content.challenges.map((challenge, idx) => (
            <div
              key={idx}
              className='bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-6 space-y-3 hover:shadow-lg transition-all duration-300'
            >
              <h3 className='text-lg font-semibold'>
                {challenge.title[language]}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {challenge.description[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-12'>
        <div className='max-w-3xl mx-auto text-center space-y-6'>
          <div className='text-6xl text-primary/20'>"</div>
          <p className='text-xl md:text-2xl font-medium leading-relaxed italic'>
            {content.testimonial.quote[language]}
          </p>
          <div className='pt-4'>
            <p className='font-semibold'>
              {content.testimonial.author[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className='space-y-8'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl font-bold'>
            {content.screenshots.title[language]}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {content.screenshots.description[language]}
          </p>
        </div>

        <div className='max-w-5xl mx-auto'>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
    </div>
  );
}
