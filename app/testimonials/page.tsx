import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import { CLINIC_INFO, TESTIMONIALS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Depoimentos de Clientes',
  description: 'Leia as avaliações de clientes da BR GUEDES Engenharia e Montagem em Volta Redonda, Rio de Janeiro.',
  pathname: '/testimonials/',
});

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-paper">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <Breadcrumbs items={[{ name: 'Depoimentos', path: '/testimonials/' }]} />
      </div>

      <section className="border-b border-mist bg-paper-secondary py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-forest-light">
              Opiniões de clientes
            </span>
            <h1 className="max-w-4xl font-display text-41 text-forest-ink md:text-65">
              Depoimentos
            </h1>
            <p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-forest-light">
              Veja o que os clientes contam sobre o BR GUEDES Engenharia e Montagem.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.1} className="mt-10 inline-flex items-center gap-4 border border-mist bg-paper px-6 py-5">
            <span className="font-display text-41 text-forest-ink">4,9</span>
            <span>
              <span className="mb-1 flex gap-1" aria-label="4,9 de 5 estrelas">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden="true" className="h-4 w-4 fill-brand text-brand" />
                ))}
              </span>
              <span className="block font-body text-13 text-forest-light">Com base em 60 avaliações no Google</span>
            </span>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimateOnScroll key={testimonial.name} animation="fade-up" delay={index * 0.1}>
                <article className="h-full border border-mist bg-paper p-7 shadow-sm md:p-9">
                  <div className="mb-5 flex gap-1" aria-label={`${testimonial.rating} de 5 estrelas`}>
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <Star key={starIndex} aria-hidden="true" className="h-5 w-5 fill-brand text-brand" />
                    ))}
                  </div>
                  <blockquote className="min-h-20 font-display text-33 text-forest-ink">“{testimonial.quote}”</blockquote>
                  <div className="mt-7 border-t border-mist pt-5">
                    <p className="font-body text-15 font-semibold text-forest-ink">{testimonial.name}</p>
                    <p className="mt-1 font-body text-13 text-forest-light">{testimonial.source} · {testimonial.age}</p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-paper md:py-20">
        <AnimateOnScroll animation="fade-up" className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-12">
          <div>
            <h2 className="font-display text-33 md:text-41">Visite o BR GUEDES Engenharia e Montagem</h2>
            <p className="mt-3 font-body text-15 text-paper/75">{CLINIC_INFO.primaryLocation.directions}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="lime" size="md">
              Ligar para a empresa
            </Button>
            <Link href="/" className="inline-flex min-h-11 items-center rounded-pill border border-paper/40 px-6 font-body text-15 text-paper hover:bg-paper/10">
              Voltar ao início
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
