'use client';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ShoppingCart,
  Lock,
  Truck,
  CreditCard,
  Package,
  Users,
  Search,
  BarChart,
} from 'lucide-react';
import Link from 'next/link';

export default function EcommerceProjectPage() {
  const { language } = useLanguage();

  const content = {
    title: {
      pt: 'E-commerce ',
      en: ' E-commerce',
    },
    subtitle: {
      pt: 'Plataforma Full-Stack de Vendas Online',
      en: 'Full-Stack Online Sales Platform',
    },
    overview: {
      pt: 'Plataforma de e-commerce completa desenvolvida para o segmento de auto peças, oferecendo uma experiência de compra moderna e intuitiva. Projeto desenvolvido em colaboração, onde atuei em funcionalidades críticas do sistema, incluindo integração de frete, validação de CEP, autenticação de usuários e páginas institucionais.',
      en: 'Complete e-commerce platform developed for the auto parts segment, offering a modern and intuitive shopping experience. Project developed in collaboration, where I worked on critical system functionalities, including freight integration, ZIP code validation, user authentication, and institutional pages.',
    },
    myContributions: {
      pt: 'Minhas Contribuições Específicas',
      en: 'My Specific Contributions',
    },
    contributions: [
      {
        title: { pt: 'Sistema de Frete', en: 'Shipping System' },
        description: {
          pt: 'Integração completa com a API do Melhor Envio para cálculo de frete em tempo real, Context API para gerenciamento de estado, componentes reutilizáveis e tratamento de erros.',
          en: 'Complete integration with Melhor Envio API for real-time freight calculation, Context API for state management, reusable components, and error handling.',
        },
        icon: Truck,
      },
      {
        title: { pt: 'Validação de CEP', en: 'ZIP Code Validation' },
        description: {
          pt: 'Integração com API de consulta de CEP, preenchimento automático de endereço, validação e formatação de dados com feedback visual.',
          en: 'Integration with ZIP code lookup API, automatic address filling, data validation and formatting with visual feedback.',
        },
        icon: Search,
      },
      {
        title: { pt: 'Autenticação', en: 'Authentication' },
        description: {
          pt: 'Design e implementação das páginas de login e cadastro com validação completa, integração com NextAuth.js e tratamento de erros.',
          en: 'Design and implementation of login and registration pages with complete validation, NextAuth.js integration, and error handling.',
        },
        icon: Lock,
      },
      {
        title: {
          pt: 'Componentes Institucionais',
          en: 'Institutional Components',
        },
        description: {
          pt: 'Footer responsivo, página de sucatas com listagem paginada e componentes reutilizáveis bem estruturados.',
          en: 'Responsive footer, scrap parts page with paginated listing, and well-structured reusable components.',
        },
        icon: Package,
      },
    ],
    features: [
      {
        title: { pt: 'Autenticação Completa', en: 'Complete Authentication' },
        description: {
          pt: 'Login com credenciais e Google OAuth, cadastro com validação, gerenciamento de sessões seguras com JWT.',
          en: 'Login with credentials and Google OAuth, registration with validation, secure session management with JWT.',
        },
        icon: Users,
      },
      {
        title: { pt: 'Catálogo de Produtos', en: 'Product Catalog' },
        description: {
          pt: 'Listagem paginada, busca avançada, categorização, página de sucatas e detalhes com galeria de imagens.',
          en: 'Paginated listing, advanced search, categorization, scrap parts page, and details with image gallery.',
        },
        icon: ShoppingCart,
      },
      {
        title: { pt: 'Carrinho e Checkout', en: 'Cart and Checkout' },
        description: {
          pt: 'Carrinho persistente via cookies, cálculo de frete integrado, múltiplas transportadoras e validação de dados.',
          en: 'Persistent cart via cookies, integrated freight calculation, multiple carriers, and data validation.',
        },
        icon: Package,
      },
      {
        title: { pt: 'Sistema de Pagamentos', en: 'Payment System' },
        description: {
          pt: 'Integração com Mercado Pago, webhooks para notificações em tempo real, páginas de confirmação e retry.',
          en: 'Mercado Pago integration, webhooks for real-time notifications, confirmation pages, and retry system.',
        },
        icon: CreditCard,
      },
      {
        title: { pt: 'Gestão de Pedidos', en: 'Order Management' },
        description: {
          pt: 'Histórico completo de compras, rastreamento de status, detalhes de envio e painel administrativo.',
          en: 'Complete purchase history, status tracking, shipping details, and administrative panel.',
        },
        icon: BarChart,
      },
      {
        title: { pt: 'Cálculo de Frete', en: 'Freight Calculation' },
        description: {
          pt: 'Integração com Melhor Envio para cálculo em tempo real baseado em CEP origem/destino.',
          en: 'Melhor Envio integration for real-time calculation based on origin/destination ZIP code.',
        },
        icon: Truck,
      },
    ],
    techStack: {
      pt: 'Stack Tecnológica',
      en: 'Tech Stack',
    },
    frontend: {
      pt: 'Frontend',
      en: 'Frontend',
    },
    frontendTech: [
      'Next.js 15.1.7',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HeroUI',
      'shadcn/ui',
      'Zod',
    ],
    backend: {
      pt: 'Backend',
      en: 'Backend',
    },
    backendTech: [
      'Next.js API Routes',
      'Server Actions',
      'PostgreSQL',
      'Prisma ORM',
      'Redis',
      'NextAuth.js',
    ],
    integrations: {
      pt: 'Integrações',
      en: 'Integrations',
    },
    integrationsTech: [
      'Mercado Pago SDK',
      'Melhor Envio API',
      'API Externa (ERP)',
      'Google OAuth',
    ],
    infrastructure: {
      pt: 'Infraestrutura',
      en: 'Infrastructure',
    },
    infrastructureTech: [
      'Docker Compose',
      '4 Containers',
      'Redis',
      'PostgreSQL',
      'Token Manager',
      'WebApp',
    ],
    highlights: {
      pt: 'Destaques Técnicos',
      en: 'Technical Highlights',
    },
    highlightsList: [
      {
        pt: 'Arquitetura Moderna com Server Components e Server Actions do Next.js 15',
        en: 'Modern Architecture with Next.js 15 Server Components and Server Actions',
      },
      {
        pt: 'Performance otimizada com lazy loading, code splitting e otimização de imagens',
        en: 'Optimized performance with lazy loading, code splitting, and image optimization',
      },
      {
        pt: 'Segurança robusta com hash de senhas bcrypt, validação de webhooks e proteção de rotas',
        en: 'Robust security with bcrypt password hashing, webhook validation, and route protection',
      },
      {
        pt: 'Design responsivo mobile-first com breakpoints bem definidos',
        en: 'Mobile-first responsive design with well-defined breakpoints',
      },
      {
        pt: 'Experiência do usuário aprimorada com loading states, animações suaves e feedback visual',
        en: 'Enhanced user experience with loading states, smooth animations, and visual feedback',
      },
      {
        pt: 'Arquitetura containerizada escalável pronta para produção',
        en: 'Scalable containerized architecture ready for production',
      },
    ],
    results: {
      pt: 'Resultados',
      en: 'Results',
    },
    resultsList: [
      {
        pt: 'Sistema completo de e-commerce em produção',
        en: 'Complete e-commerce system in production',
      },
      {
        pt: 'Integração robusta com múltiplas APIs externas',
        en: 'Robust integration with multiple external APIs',
      },
      {
        pt: 'Experiência de usuário fluida e moderna',
        en: 'Fluid and modern user experience',
      },
      {
        pt: 'Código bem estruturado e manutenível',
        en: 'Well-structured and maintainable code',
      },
      {
        pt: 'Infraestrutura escalável com Docker',
        en: 'Scalable infrastructure with Docker',
      },
    ],
    learnings: {
      pt: 'Aprendizados',
      en: 'Learnings',
    },
    learningsList: [
      {
        pt: 'Integração de APIs de pagamento e frete',
        en: 'Payment and freight API integration',
      },
      {
        pt: 'Arquitetura de aplicações Next.js modernas',
        en: 'Modern Next.js application architecture',
      },
      {
        pt: 'Gerenciamento de estado complexo',
        en: 'Complex state management',
      },
      { pt: 'Autenticação e segurança', en: 'Authentication and security' },
      { pt: 'Docker e containerização', en: 'Docker and containerization' },
      { pt: 'Trabalho colaborativo em equipe', en: 'Collaborative teamwork' },
    ],
  };

  return (
    <div className='space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500'>
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

      {/* Hero Section */}
      <section className='text-center space-y-6 animate-in fade-in slide-in-from-top-4 duration-700'>
        <div className='inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20'>
          <span className='text-sm font-medium text-primary'>
            {content.subtitle[language]}
          </span>
        </div>
        <h1 className='text-5xl md:text-7xl font-bold text-balance leading-tight'>
          {content.title[language]}
        </h1>
        <p className='text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed'>
          {content.overview[language]}
        </p>
      </section>

      {/* My Contributions Section */}
      <section className='space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-200'>
        <h2 className='text-3xl font-bold text-center'>
          {content.myContributions[language]}
        </h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {content.contributions.map((contribution, idx) => {
            const Icon = contribution.icon;
            return (
              <div
                key={idx}
                className='group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg'
              >
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='flex-1 space-y-2'>
                    <h3 className='text-lg font-semibold'>
                      {contribution.title[language]}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {contribution.description[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-300'>
        <h2 className='text-3xl font-bold text-center'>
          {language === 'pt' ? 'Funcionalidades Principais' : 'Main Features'}
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {content.features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className='group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg'
              >
                <div className='space-y-4'>
                  <div className='p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-semibold'>
                      {feature.title[language]}
                    </h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>
                      {feature.description[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className='space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-400'>
        <h2 className='text-3xl font-bold text-center'>
          {content.techStack[language]}
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {/* Frontend */}
          <div className='space-y-4 p-6 rounded-xl border border-border bg-card'>
            <h3 className='text-lg font-semibold text-primary'>
              {content.frontend[language]}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {content.frontendTech.map((tech, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className='space-y-4 p-6 rounded-xl border border-border bg-card'>
            <h3 className='text-lg font-semibold text-primary'>
              {content.backend[language]}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {content.backendTech.map((tech, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div className='space-y-4 p-6 rounded-xl border border-border bg-card'>
            <h3 className='text-lg font-semibold text-primary'>
              {content.integrations[language]}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {content.integrationsTech.map((tech, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className='space-y-4 p-6 rounded-xl border border-border bg-card'>
            <h3 className='text-lg font-semibold text-primary'>
              {content.infrastructure[language]}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {content.infrastructureTech.map((tech, idx) => (
                <span
                  key={idx}
                  className='px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-500'>
        <h2 className='text-3xl font-bold text-center'>
          {content.highlights[language]}
        </h2>
        <div className='grid md:grid-cols-2 gap-4 max-w-4xl mx-auto'>
          {content.highlightsList.map((highlight, idx) => (
            <div
              key={idx}
              className='flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300'
            >
              <div className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {highlight[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results & Learnings */}
      <section className='grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600'>
        {/* Results */}
        <div className='space-y-6 p-8 rounded-xl border border-border bg-card'>
          <h2 className='text-2xl font-bold text-primary'>
            {content.results[language]}
          </h2>
          <ul className='space-y-3'>
            {content.resultsList.map((result, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0' />
                <span className='text-sm text-muted-foreground'>
                  {result[language]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div className='space-y-6 p-8 rounded-xl border border-border bg-card'>
          <h2 className='text-2xl font-bold text-primary'>
            {content.learnings[language]}
          </h2>
          <ul className='space-y-3'>
            {content.learningsList.map((learning, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0' />
                <span className='text-sm text-muted-foreground'>
                  {learning[language]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className='text-center space-y-6 p-12 rounded-2xl border border-primary/20 bg-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700'>
        <h2 className='text-2xl font-bold'>
          {language === 'pt'
            ? 'Visite o Site em Produção'
            : 'Visit the Production Site'}
        </h2>
        <p className='text-muted-foreground max-w-2xl mx-auto'>
          {language === 'pt'
            ? 'Explore a plataforma completa de e-commerce em funcionamento e veja todas as funcionalidades em ação.'
            : 'Explore the complete e-commerce platform in operation and see all features in action.'}
        </p>
        <Button asChild size='lg' className='bg-primary hover:bg-primary/90'>
          <a
            href='https://doissautopecas.com.br'
            target='_blank'
            rel='noopener noreferrer'
          >
            {language === 'pt' ? 'Acessar Site' : 'Visit Site'}
          </a>
        </Button>
      </section>
    </div>
  );
}
