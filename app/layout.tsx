// app/layout.tsx
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Suspense } from 'react';
import { ThemeProvider } from '@/lib/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageToggle } from '@/components/ui/language-toggle';
import Link from 'next/link';
import { Footer } from '@/components/portfolio/footer';

export const metadata: Metadata = {
  title: 'Deividi Martin - Desenvolvedor Backend',
  description:
    'Portfólio profissional de Deividi Martin, desenvolvedor backend especializado em Java e Spring Boot',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={`flex flex-col min-h-screen font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <Suspense>
              {/* HEADER FIXO */}
              <header className='fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-sm border-b border-border shadow-sm'>
                <div className='max-w-5xl mx-auto flex items-center justify-between px-6 py-4'>
                  <Link href='/'>
                    <button className='px-4 py-2 text-white rounded hover:bg-primary-dark transition'>
                      Início
                    </button>
                  </Link>
                  <div className='flex items-center gap-3'>
                    <ThemeToggle />
                    <LanguageToggle />
                  </div>
                </div>
              </header>

              {/* CONTEÚDO DINÂMICO */}
              <main className='flex-1 px-6 pt-28 max-w-5xl mx-auto w-full'>
                {children}
              </main>

              <Footer />
              <Analytics />
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
