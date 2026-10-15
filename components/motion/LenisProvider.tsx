'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION, isReducedMotion } from '@/lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Critical Exception: Disable Lenis inertia on Emergency Dentist page or when user prefers reduced motion
    const isEmergency = pathname?.includes('emergency-dentist');
    const reduced = isReducedMotion();

    if (reduced || isEmergency) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    const lenis = new Lenis({
      // The homepage hero maps scroll directly to image frames. Use less
      // inertia there so large wheel gestures do not leave the sequence behind.
      lerp: pathname === '/' ? 0.18 : MOTION.lenis.lerp,
      duration: MOTION.lenis.duration,
      wheelMultiplier: MOTION.lenis.wheelMultiplier,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll with GSAP Ticker for 60fps locked scroll triggers
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
