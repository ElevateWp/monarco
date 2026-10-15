'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) {
      setIsVisible(false);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false);
          document.body.style.overflow = '';
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
          }
        },
      });

      // Prevent scrolling during intro
      document.body.style.overflow = 'hidden';

      // Set initial states
      gsap.set(containerRef.current, { yPercent: 0 });
      gsap.set(logoRef.current, { scale: 0.78, rotation: -8, opacity: 0, y: 24, filter: 'blur(6px)' });
      gsap.set(titleRef.current, { opacity: 0, y: 25, letterSpacing: '0.2em' });
      gsap.set(subtitleRef.current, { opacity: 0, y: 15 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'center center' });

      tl.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.1,
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: '0.04em',
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '-=0.35'
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
          },
          '-=0.25'
        )
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: -25,
            duration: 0.45,
            ease: 'power2.in',
            delay: 0.25,
          }
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: 'power3.inOut',
        });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#FFF5EF] text-[#222222] select-none"
      style={{ willChange: 'transform' }}
          aria-label="Carregando Monarca Caça Vazamentos"
    >
      {/* Warm orange light keeps the entry on the Monarca palette. */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,104,31,0.1)_0%,rgba(255,104,31,0.025)_32%,transparent_66%)]" />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-xl mx-auto"
      >
        {/* Brand mark */}
        <div
          ref={logoRef}
          className="relative mb-7 flex h-28 w-28 items-center justify-center border border-[#FF681F]/30 bg-[#FFF5EF] p-2 shadow-[0_12px_44px_rgba(255,104,31,.16)] sm:h-32 sm:w-32"
        >
          <Image
            src="/images/logo.png"
            alt="Monarca Caça Vazamentos"
            width={104}
            height={104}
            priority
            className="object-contain"
          />
        </div>

        <h1
          ref={titleRef}
          className="font-display text-22 sm:text-30 md:text-36 font-semibold text-[#222222] uppercase tracking-[0.04em] leading-tight mb-3"
        >
          Monarca Caça Vazamentos
        </h1>

        <div className="relative mb-3 h-[3px] w-40 overflow-hidden bg-white/15 sm:w-52">
          <div ref={lineRef} className="h-full w-full origin-center bg-brand" />
        </div>

        <p
          ref={subtitleRef}
          className="font-body text-12 sm:text-13 text-[#6F6F6F] uppercase tracking-[0.1em]"
        >
          Caça vazamentos · Desentupimento · Atendimento 24 horas
        </p>
      </div>
    </div>
    </>
  );
}
