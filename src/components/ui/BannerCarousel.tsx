'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'

import AutoScroll, { AutoScrollType } from 'embla-carousel-auto-scroll'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface BannerSlide {
  title: string
  description: string
  image: string
  cta?: { label: string; href: string }
}

interface BannerCarouselProps {
  slides: BannerSlide[]
  className?: string
}

export function BannerCarousel({ slides, className }: BannerCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState<AutoScrollType | null>(null)

  // Initialize with AutoScroll plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      AutoScroll({
        speed: 2,
        startDelay: 2000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  )

  // Get reference to plugin + track index
  useEffect(() => {
    if (!emblaApi) return

    const plugin = emblaApi.plugins().autoScroll as AutoScrollType
    setAutoScroll(plugin)

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select', updateSelected)
    updateSelected()
  }, [emblaApi])

  // Restart auto-scroll after 7s of inactivity
  useEffect(() => {
    if (!autoScroll) return
    const timer = setTimeout(() => {
      autoScroll.play()
    }, 7000)
    return () => clearTimeout(timer)
  }, [selectedIndex, autoScroll])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  return (
    <div className={cn('relative w-full overflow-hidden rounded-2xl mb-12', className)}>
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative flex-[0_0_100%] h-[220px] sm:h-[280px] lg:h-[320px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="absolute inset-0 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 drop-shadow">
                  {slide.title}
                </h2>
                <p className="max-w-xl text-sm sm:text-base mb-3 opacity-90">
                  {slide.description}
                </p>
                {slide.cta && (
                  <Button
                    asChild
                    size="sm"
                    className="rounded-xl bg-primary text-white shadow-md hover:shadow-lg"
                  >
                    <a href={slide.cta.href}>{slide.cta.label}</a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all',
              idx === selectedIndex
                ? 'bg-primary scale-125'
                : 'bg-white/70 hover:bg-white'
            )}
          />
        ))}
      </div>
    </div>
  )
}
