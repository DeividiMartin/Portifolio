'use client';
import { useLanguage } from '@/contexts/language-context';
import { ImageZoom } from '@/components/ui/image-zoom';
import {
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Rocket,
  Zap,
  Link2,
  ShieldCheck,
} from 'lucide-react';

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
      pt: 'Sistema desktop completo e robusto desenvolvido para um CDV (Centro de Desmonte Veicular), criado para substituir controles de vendas condicionais feitos manualmente e proporcionar um gerenciamento mais eficiente das contas dos clientes. Solução local com integrações avançadas que sincroniza automaticamente com sistemas externos (ERP e Mercado Livre), garantindo controle total de estoque e anúncios em tempo real, sem dependência de conexão constante com internet.',
      en: 'Complete and robust desktop system developed for a CDV (Vehicle Dismantling Center), designed to replace manually handled conditional sales controls and provide more efficient management of customer accounts. Local solution with advanced integrations that automatically syncs with external systems (ERP and Mercado Livre), ensuring full stock and listing control in real-time, without constant internet connection dependency.',
    },

    problem: {
      title: {
        pt: 'Problema Resolvido',
        en: 'Problem Solved',
      },
      description: {
        pt: 'Digitalizou e otimizou o processo de vendas condicionais que anteriormente era feito manualmente, eliminando problemas como dificuldade em rastrear pagamentos, falta de histórico, impossibilidade de gerar relatórios e risco de perda de informações. Além disso, automatizou a integração com sistemas externos, eliminando a necessidade de pausar anúncios do Mercado Livre e atualizar estoque manualmente no sistema ERP após cada venda, conferindo ao CDV um tom mais profissional, organizado e confiável diante dos clientes.',
        en: 'Digitized and optimized the conditional sales process that was previously handled manually, eliminating issues such as difficulty tracking payments, lack of history, inability to generate reports, and risk of information loss. Additionally, it automated integration with external systems, eliminating the need to manually pause Mercado Livre listings and update stock in the ERP system after each sale, giving the CDV a more professional, organized, and reliable image in front of its customers.',
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
            'Cadastro com informações detalhadas e endereço completo',
            'Validação automática de CPF/CNPJ com formatação inteligente',
            'Integração com API ViaCEP para preenchimento automático de endereço',
            'Histórico completo de vendas por cliente',
            'Filtros avançados por período',
            'Modal detalhado com todas as transações',
            'Busca e ordenação inteligente',
          ],
          en: [
            'Registration with detailed information and complete address',
            'Automatic CPF/CNPJ validation with smart formatting',
            'ViaCEP API integration for automatic address filling',
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
            'Busca automática de produtos por SKU via API ERP',
            'Preenchimento automático de dados do produto',
            'Campos detalhados por produto com validação numérica',
            'Cálculo automático de totais',
            'Suporte para vendas parcialmente pagas',
            'Três formas de pagamento: PIX, Cartão e Dinheiro',
          ],
          en: [
            'Sales creation with multiple items',
            'Automatic product search by SKU via ERP API',
            'Automatic product data filling',
            'Detailed fields per product with numeric validation',
            'Automatic total calculation',
            'Support for partially paid sales',
            'Three payment methods: PIX, Card and Cash',
          ],
        },
      },
      {
        icon: 'link',
        title: {
          pt: 'Integrações Automáticas',
          en: 'Automatic Integrations',
        },
        items: {
          pt: [
            'Integração com API ERP para busca de produtos',
            'Pausa automática de anúncios no Mercado Livre após venda',
            'Atualização automática de estoque no sistema ERP',
            'Modal de confirmação para controle de estoque',
            'Sincronização em tempo real com sistemas externos',
            'Cache inteligente de tokens de autenticação',
          ],
          en: [
            'ERP API integration for product search',
            'Automatic pause of Mercado Livre listings after sale',
            'Automatic stock update in ERP system',
            'Confirmation modal for stock control',
            'Real-time synchronization with external systems',
            'Smart authentication token caching',
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
            'Busca de produtos integrada com API externa',
            'Reduz processo de 5+ cliques para 2 cliques',
          ],
          en: [
            'Simplified modal for quick sales',
            'Automatically pre-selected client',
            'Product search integrated with external API',
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
      {
        icon: 'shield',
        title: {
          pt: 'Validações e Segurança',
          en: 'Validations and Security',
        },
        items: {
          pt: [
            'Validação de CPF/CNPJ com algoritmo oficial',
            'Formatação automática de documentos',
            'Campos numéricos com validação em tempo real',
            'Verificação de sincronização antes de atualizações',
            'Tratamento robusto de erros de API',
          ],
          en: [
            'CPF/CNPJ validation with official algorithm',
            'Automatic document formatting',
            'Numeric fields with real-time validation',
            'Synchronization check before updates',
            'Robust API error handling',
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
      desktop: ['Electron 27', 'Electron Forge', 'IPC Communication'],
      integrations: [
        'API ERP (Busca de Produtos)',
        'API Mercado Livre (Pausa de Anúncios)',
        'API ViaCEP (Endereços)',
        'REST APIs',
        'Token Authentication',
      ],
    },
    challenges: [
      {
        title: {
          pt: 'Sincronização de Estados Complexos',
          en: 'Complex State Synchronization',
        },
        description: {
          pt: 'Sistema robusto mantendo sincronizados lista de clientes, histórico de vendas, filtros, modais aninhados e dados de APIs externas em tempo real.',
          en: 'Robust system keeping synchronized client list, sales history, filters, nested modals and external API data in real-time.',
        },
      },
      {
        title: {
          pt: 'Integração Multi-API com Electron',
          en: 'Multi-API Integration with Electron',
        },
        description: {
          pt: 'Implementação de comunicação IPC entre renderer e main process para requisições HTTP, contornando limitações do Electron e garantindo segurança com cache de tokens.',
          en: 'Implementation of IPC communication between renderer and main process for HTTP requests, bypassing Electron limitations and ensuring security with token caching.',
        },
      },
      {
        title: {
          pt: 'Performance com Grandes Volumes',
          en: 'Performance with Large Volumes',
        },
        description: {
          pt: 'Queries SQL otimizadas, memoização de componentes React, lazy loading, debounce em filtros e cache inteligente de requisições externas.',
          en: 'Optimized SQL queries, React component memoization, lazy loading, filter debounce and smart caching of external requests.',
        },
      },
      {
        title: {
          pt: 'Cálculos Financeiros Precisos',
          en: 'Precise Financial Calculations',
        },
        description: {
          pt: 'Lógica robusta usando centavos como unidade base, validações de consistência, prevenção de erros e sincronização com sistema externo de estoque.',
          en: 'Robust logic using cents as base unit, consistency validations, error prevention and synchronization with external stock system.',
        },
      },
      {
        title: {
          pt: 'Validação de Dados em Tempo Real',
          en: 'Real-Time Data Validation',
        },
        description: {
          pt: 'Implementação de validadores de CPF/CNPJ com algoritmo oficial, formatação automática de campos e verificação de sincronização antes de operações críticas.',
          en: 'Implementation of CPF/CNPJ validators with official algorithm, automatic field formatting and synchronization check before critical operations.',
        },
      },
      {
        title: {
          pt: 'Tratamento de Erros de Integração',
          en: 'Integration Error Handling',
        },
        description: {
          pt: 'Sistema robusto de tratamento de erros para APIs externas, com mensagens claras ao usuário, retry automático e fallback para operação offline.',
          en: 'Robust error handling system for external APIs, with clear user messages, automatic retry and fallback for offline operation.',
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
        metric: '90%',
        label: {
          pt: 'Redução em trabalho manual',
          en: 'Reduction in manual work',
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
              ? 'Sistema completo com recursos avançados e integrações automáticas'
              : 'Complete system with advanced features and automatic integrations'}
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
                  {feature.icon === 'link' ? (
                    <Link2 className='w-5 h-5' />
                  ) : feature.icon === 'shield' ? (
                    <ShieldCheck className='w-5 h-5' />
                  ) : (
                    <Zap className='w-5 h-5' />
                  )}
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
              ? 'Tecnologias modernas e integrações avançadas para uma aplicação robusta'
              : 'Modern technologies and advanced integrations for a robust application'}
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
          <div className='space-y-4'>
            <div className='flex items-center gap-2 text-primary'>
              <Link2 className='w-5 h-5' />
              <h3 className='font-semibold'>
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

      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-500'>
        <div className='text-center space-y-3'>
          <h2 className='text-3xl font-bold'>
            {language === 'pt'
              ? 'Desafios Técnicos Superados'
              : 'Technical Challenges Overcome'}
          </h2>
          <p className='text-muted-foreground'>
            {language === 'pt'
              ? 'Soluções implementadas para problemas complexos de integração e performance'
              : 'Solutions implemented for complex integration and performance problems'}
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
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
          <ImageZoom
            src='/images/condicionais-dashboard.png'
            alt='Dashboard Principal do Sistema'
            title={language === 'pt' ? 'Dashboard Principal' : 'Main Dashboard'}
          />

          <div className='grid md:grid-cols-2 gap-6'>
            <ImageZoom
              src='/images/condicionais-clientes.png'
              alt='Tela de Gestão de Clientes'
              title={
                language === 'pt' ? 'Gestão de Clientes' : 'Client Management'
              }
            />

            <ImageZoom
              src='/images/condicionais-cliente-status.png'
              alt='Detalhes e Status do Cliente'
              title={
                language === 'pt' ? 'Detalhes do Cliente' : 'Client Details'
              }
            />
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            <ImageZoom
              src='/images/condicionais-venda.png'
              alt='Tela de Criação de Vendas'
              title={language === 'pt' ? 'Criação de Vendas' : 'Sales Creation'}
            />

            <ImageZoom
              src='/images/condicionais-controle.png'
              alt='Tela de Controle de Vendas'
              title={language === 'pt' ? 'Controle de Vendas' : 'Sales Control'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
