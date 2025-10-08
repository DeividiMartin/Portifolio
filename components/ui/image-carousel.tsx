'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
  }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative w-full space-y-6'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold text-primary'>
          {images[currentIndex].title}
        </h3>
      </div>

      <div className='flex items-center gap-4'>
        {/* Left Arrow - Outside */}
        <Button
          variant='secondary'
          size='icon'
          className='rounded-full shadow-lg hover:scale-110 transition-transform flex-shrink-0'
          onClick={goToPrevious}
        >
          <ChevronLeft className='w-5 h-5' />
        </Button>

        {/* Main Image Display */}
        <div className='relative flex-1 overflow-hidden rounded-2xl bg-card border border-border'>
          <div
            className='flex transition-transform duration-500 ease-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className='min-w-full'>
                <div className='relative w-full aspect-video bg-muted'>
                  <img
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Image Counter */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-border'>
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Right Arrow - Outside */}
        <Button
          variant='secondary'
          size='icon'
          className='rounded-full shadow-lg hover:scale-110 transition-transform flex-shrink-0'
          onClick={goToNext}
        >
          <ChevronRight className='w-5 h-5' />
        </Button>
      </div>

      {/* Thumbnail Navigation */}
      <div className='flex gap-3 justify-center flex-wrap'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'relative overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105',
              currentIndex === index
                ? 'border-primary shadow-lg scale-105'
                : 'border-border opacity-60 hover:opacity-100'
            )}
          >
            <img
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              className='w-24 h-16 object-cover'
            />
            {currentIndex === index && (
              <div className='absolute inset-0 bg-primary/20' />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
