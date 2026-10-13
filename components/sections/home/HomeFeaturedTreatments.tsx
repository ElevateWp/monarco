import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { SERVICES } from '@/lib/clinic-data';

const IMAGES = ['/images/stock-roof-structure.jpg', '/images/stock-industrial-welder.jpg', '/images/stock-metal-worker.jpg'];

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
          <span className="font-body text-13 text-brand block mb-2 font-medium uppercase tracking-wider">Serviços</span>
          <h2 className="font-display text-33 md:text-41 text-forest-ink">Engenharia e montagem para o seu projeto</h2>
        </AnimateOnScroll>
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, index) => (
            <AnimateOnScroll key={service.slug} animation="fade-up" delay={index * 0.1}>
              <article className="h-full overflow-hidden border border-mist bg-paper shadow-sm">
                <div className="relative aspect-[4/3] bg-paper-secondary">
                  <Image src={IMAGES[index]} alt={`${service.name}, imagem ilustrativa`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="mb-2 font-body text-13 font-medium uppercase tracking-wider text-brand">{service.tagline}</p>
                  <h3 className="font-display text-26 text-forest-ink">{service.name}</h3>
                  <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p>
                  <Link href={`/${service.slug}/`} className="mt-5 inline-flex font-body text-15 font-semibold text-[var(--navy-accent)] hover:underline">Saiba mais →</Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
