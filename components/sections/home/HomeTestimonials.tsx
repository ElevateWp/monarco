import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO, TESTIMONIALS } from '@/lib/clinic-data';

export default function HomeTestimonials() {
  const featured = TESTIMONIALS[0];
  if (!featured) return null;

  return (
    <section className="relative z-20 w-full border-t border-mist bg-paper-secondary py-20 md:py-28">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">
                Depoimentos de clientes
              </span>
              <h2 className="font-display text-33 text-forest-ink md:text-41">
                O que dizem nossos clientes
              </h2>
            </div>
            <Link href="/testimonials/" className="font-body text-15 font-medium text-forest hover:underline">
              Ver depoimentos →
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1}>
          <article className="grid gap-8 border border-mist bg-paper p-6 shadow-sm sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
            <div>
              <div className="mb-4 flex gap-1" aria-label={`${featured.rating} de 5 estrelas`}>
                {Array.from({ length: featured.rating }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="h-5 w-5 fill-brand text-brand" />
                ))}
              </div>
              <blockquote className="font-display text-26 text-forest-ink">“{featured.quote}”</blockquote>
              <p className="mt-3 font-body text-13 text-forest-light">
                {featured.name} · {featured.age} · {featured.source}
              </p>
            </div>
            <div className="border-t border-mist pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <p className="font-display text-33 text-forest-ink">{CLINIC_INFO.verifiedStats[0].value}{CLINIC_INFO.verifiedStats[0].suffix}</p>
              <p className="font-body text-13 text-forest-light">Nota média de 60 avaliações no Google</p>
            </div>
          </article>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
