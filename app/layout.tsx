import type React from 'react';
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
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Deividi Martin - Desenvolvedor Backend',
  description: 'Portfólio profissional de Deividi Martin',
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
            {/* HEADER FIXO */}
            <header className='fixed top-0 left-0 w-full z-40 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm transition-all duration-300'>
              <div className='max-w-5xl mx-auto flex items-center justify-between px-6 py-3'>
                <Link href='/' className='transition-transform hover:scale-105'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2 bg-transparent transition-all duration-200 hover:bg-accent'
                  >
                    Inicio
                  </Button>
                </Link>
                <div className='flex items-center gap-3'>
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>
            </header>

            {/* CONTEÚDO DINÂMICO */}
            <Suspense
              fallback={
                <div className='flex-1 flex items-center justify-center'>
                  <div className='animate-pulse text-muted-foreground'>
                    Carregando...
                  </div>
                </div>
              }
            >
              <main className='flex-1 px-6 pt-24 pb-12 max-w-5xl mx-auto w-full animate-in fade-in duration-300'>
                {children}
              </main>
            </Suspense>

            <Footer />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
