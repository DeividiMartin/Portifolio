'use client';

import { ThemeToggle } from '@/components/ui/theme-toggle';
import { LanguageToggle } from '@/components/ui/language-toggle';

export function ControlsBar() {
  return (
    <div className='fixed top-4 right-4 z-50 flex gap-2'>
      <LanguageToggle />
      <ThemeToggle />
    </div>
  );
}
