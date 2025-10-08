'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';

interface ImageZoomProps {
  src: string;
  alt: string;
  title?: string;
}

export function ImageZoom({ src, alt, title }: ImageZoomProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='space-y-4'>
        {title && (
          <h3 className='text-lg font-semibold text-center'>{title}</h3>
        )}
        <div
          className='relative aspect-video rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 cursor-zoom-in group'
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={src || '/placeholder.svg'}
            alt={alt}
            fill
            className='object-cover object-top transition-transform duration-300 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 rounded-full p-3'>
              <ZoomIn className='w-6 h-6' />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 cursor-zoom-out'
          onClick={() => setIsOpen(false)}
        >
          <div className='relative w-full h-full max-w-7xl max-h-[90vh]'>
            <Image
              src={src || '/placeholder.svg'}
              alt={alt}
              fill
              className='object-contain cursor-zoom-out'
            />
          </div>
        </div>
      )}
    </>
  );
}
