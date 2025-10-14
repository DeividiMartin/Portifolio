'use client';

import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Database,
  Zap,
  Shield,
  Printer,
  Users,
  DollarSign,
  FileText,
  Wrench,
  Package,
} from 'lucide-react';
import Link from 'next/link';
import { ImageCarousel } from '@/components/ui/image-carousel';

export default function OrcamentoProjectPage() {
  const { language } = useLanguage();

  const screenshots = [
    {
      src: '/images/fgt-dashboard.png',
      alt: language === 'pt' ? 'Dashboard Principal' : 'Main Dashboard',
      title: language === 'pt' ? 'Dashboard Principal' : 'Main Dashboard',
    },
    {
      src: '/images/fgt-clientes.png',
      alt: language === 'pt' ? 'Gestão de Clientes' : 'Client Management',
      title: language === 'pt' ? 'Gestão de Clientes' : 'Client Management',
    },
    {
      src: '/images/fgt-orcamento.png',
      alt: language === 'pt' ? 'Criação de Orçamento' : 'Quote Creation',
      title: language === 'pt' ? 'Criação de Orçamento' : 'Quote Creation',
    },
    {
      src: '/images/fgt-pagamentos.png',
      alt: language === 'pt' ? 'Controle de Pagamentos' : 'Payment Control',
      title: language === 'pt' ? 'Controle de Pagamentos' : 'Payment Control',
    },
  ];

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

      <section className='text-center space-y-6 animate-in fade-in slide-in-from-top-4 duration-700'>
        <div className='inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20'>
          <span className='text-sm font-medium text-primary'>
            {language === 'pt' ? 'Sistema Desktop' : 'Desktop System'}
          </span>
        </div>
        <h1 className='text-5xl font-bold text-balance'>
          {language === 'pt'
            ? 'Sistema de Orçamentos Automotivos'
            : 'Automotive Quotation System'}
        </h1>
        <p className='text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed'>
          {language === 'pt'
            ? 'Sistema desktop completo desenvolvido em Electron para gestão de orçamentos automotivos. Controle clientes, crie orçamentos detalhados, gerencie pagamentos e imprima documentos, tudo funcionando offline.'
            : 'Complete desktop system developed in Electron for managing automotive quotes. Control clients, create detailed quotes, manage payments, and print documents, all working offline.'}
        </p>
      </section>

      <section className='space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200'>
        <ImageCarousel images={screenshots} />
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-300'>
        <h2 className='text-3xl font-bold text-center'>
          {language === 'pt' ? 'Funcionalidades Principais' : 'Main Features'}
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              icon: Users,
              title:
                language === 'pt' ? 'Gestão de Clientes' : 'Client Management',
              description:
                language === 'pt'
                  ? 'Cadastro completo com busca em tempo real, edição, exclusão e histórico de orçamentos por cliente'
                  : 'Complete registration with real-time search, editing, deletion, and quote history per client',
            },
            {
              icon: FileText,
              title:
                language === 'pt' ? 'Orçamentos Detalhados' : 'Detailed Quotes',
              description:
                language === 'pt'
                  ? 'Criação de orçamentos com separação inteligente entre peças e mão de obra, cálculos automáticos'
                  : 'Quote creation with intelligent separation between parts and labor, automatic calculations',
            },
            {
              icon: DollarSign,
              title:
                language === 'pt' ? 'Controle Financeiro' : 'Financial Control',
              description:
                language === 'pt'
                  ? 'Pagamentos parciais e integrais, múltiplos métodos, histórico completo e barra de progresso visual'
                  : 'Partial and full payments, multiple methods, complete history, and visual progress bar',
            },
            {
              icon: Printer,
              title:
                language === 'pt' ? 'Sistema de Impressão' : 'Printing System',
              description:
                language === 'pt'
                  ? 'Impressão de orçamentos formatados com layout profissional, suporte a impressoras térmicas'
                  : 'Formatted quote printing with professional layout, thermal printer support',
            },
            {
              icon: Wrench,
              title:
                language === 'pt'
                  ? 'Informações do Veículo'
                  : 'Vehicle Information',
              description:
                language === 'pt'
                  ? 'Registro completo de marca, modelo e placa do veículo para cada orçamento'
                  : 'Complete registration of brand, model, and license plate for each quote',
            },
            {
              icon: Package,
              title: language === 'pt' ? 'Gestão de Itens' : 'Item Management',
              description:
                language === 'pt'
                  ? 'Adição, edição e exclusão de itens em tempo real com cálculos automáticos de totais'
                  : 'Real-time addition, editing, and deletion of items with automatic total calculations',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className='group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg space-y-3'
            >
              <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <feature.icon className='w-6 h-6 text-primary' />
              </div>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-500'>
        <h2 className='text-3xl font-bold text-center'>
          {language === 'pt' ? 'Arquitetura do Sistema' : 'System Architecture'}
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            {
              icon: Zap,
              title: 'Frontend',
              items: [
                'React 18',
                'TypeScript',
                'Tailwind CSS',
                'React Router DOM',
              ],
            },
            {
              icon: Database,
              title: 'Backend',
              items: ['Node.js', 'Express', 'SQLite3', 'API REST'],
            },
            {
              icon: Shield,
              title: 'Desktop',
              items: ['Electron', 'Electron Forge', 'IPC Communication'],
            },
          ].map((layer, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 space-y-4'
            >
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                  <layer.icon className='w-5 h-5 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>{layer.title}</h3>
              </div>
              <ul className='space-y-2'>
                {layer.items.map((item, i) => (
                  <li
                    key={i}
                    className='text-sm text-muted-foreground flex items-center gap-2'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-primary' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 delay-700'>
        <h2 className='text-3xl font-bold text-center'>
          {language === 'pt' ? 'Destaques Técnicos' : 'Technical Highlights'}
        </h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {[
            {
              title:
                language === 'pt'
                  ? 'Funcionamento Offline'
                  : 'Offline Operation',
              description:
                language === 'pt'
                  ? 'Sistema totalmente funcional sem conexão com internet, ideal para oficinas e ambientes sem conectividade'
                  : 'Fully functional system without internet connection, ideal for workshops and environments without connectivity',
            },
            {
              title:
                language === 'pt' ? 'Banco de Dados Local' : 'Local Database',
              description:
                language === 'pt'
                  ? 'SQLite3 com migrations automáticas, garantindo integridade e persistência dos dados'
                  : 'SQLite3 with automatic migrations, ensuring data integrity and persistence',
            },
            {
              title:
                language === 'pt' ? 'Interface Moderna' : 'Modern Interface',
              description:
                language === 'pt'
                  ? 'Design responsivo e profissional com feedback visual em todas as ações e modais de confirmação'
                  : 'Responsive and professional design with visual feedback on all actions and confirmation modals',
            },
            {
              title:
                language === 'pt'
                  ? 'Performance Otimizada'
                  : 'Optimized Performance',
              description:
                language === 'pt'
                  ? 'Lazy loading de componentes, busca com debounce e otimização de re-renders para máxima eficiência'
                  : 'Component lazy loading, debounced search, and re-render optimization for maximum efficiency',
            },
          ].map((highlight, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 space-y-3'
            >
              <h3 className='text-lg font-semibold text-primary'>
                {highlight.title}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-900'>
        <h2 className='text-3xl font-bold text-center'>
          {language === 'pt' ? 'Estrutura de Dados' : 'Data Structure'}
        </h2>
        <div className='grid md:grid-cols-2 gap-6'>
          {[
            {
              title: language === 'pt' ? 'Clientes' : 'Customers',
              fields: [
                'ID',
                'Nome',
                'Telefone',
                'Endereço',
                'Observações (CPF/CNPJ)',
              ],
            },
            {
              title: language === 'pt' ? 'Orçamentos' : 'Quotes',
              fields: [
                'ID',
                'Cliente',
                'Data',
                'Total',
                'Valor Pago',
                'Veículo (Marca/Modelo/Placa)',
                'Número do Orçamento',
                'Observações',
              ],
            },
            {
              title: language === 'pt' ? 'Itens' : 'Items',
              fields: [
                'ID',
                'Orçamento',
                'Produto',
                'Quantidade',
                'Preço',
                'Total',
                'Tipo (Peça/Mão de Obra)',
              ],
            },
            {
              title: language === 'pt' ? 'Pagamentos' : 'Payments',
              fields: [
                'ID',
                'Orçamento',
                'Valor',
                'Data',
                'Método de Pagamento',
                'Observações',
              ],
            },
          ].map((table, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 space-y-4'
            >
              <h3 className='text-lg font-semibold text-primary'>
                {table.title}
              </h3>
              <ul className='space-y-2'>
                {table.fields.map((field, i) => (
                  <li
                    key={i}
                    className='text-sm text-muted-foreground flex items-center gap-2'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-primary/50' />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className='space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1100'>
        <h2 className='text-3xl font-bold text-center'>
          {language === 'pt' ? 'Casos de Uso' : 'Use Cases'}
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {[
            {
              title:
                language === 'pt' ? 'Oficina Mecânica' : 'Mechanic Workshop',
              description:
                language === 'pt'
                  ? 'Orçamentos de reparos automotivos'
                  : 'Automotive repair quotes',
            },
            {
              title: language === 'pt' ? 'Loja de Peças' : 'Parts Store',
              description:
                language === 'pt'
                  ? 'Vendas com instalação'
                  : 'Sales with installation',
            },
            {
              title:
                language === 'pt'
                  ? 'Prestador de Serviços'
                  : 'Service Provider',
              description:
                language === 'pt'
                  ? 'Serviços + materiais'
                  : 'Services + materials',
            },
            {
              title: language === 'pt' ? 'Concessionária' : 'Dealership',
              description:
                language === 'pt'
                  ? 'Orçamentos de manutenção'
                  : 'Maintenance quotes',
            },
          ].map((useCase, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center space-y-3'
            >
              <h3 className='text-lg font-semibold'>{useCase.title}</h3>
              <p className='text-sm text-muted-foreground'>
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
