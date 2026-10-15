import React from 'react';
import Link from 'next/link';
import { Droplets, Waves, Wrench } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { SERVICES } from '@/lib/clinic-data';

const icons = [Droplets, Waves, Wrench];

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full overflow-hidden border-t border-mist bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Serviços</span>
          <h2 className="font-display text-33 text-forest-ink md:text-41">Soluções para vazamentos e entupimentos</h2>
        </AnimateOnScroll>
        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, index) => {
            const Icon = icons[index];
            return <AnimateOnScroll key={service.slug} animation="fade-up" delay={index * 0.1}>
              <article className="h-full border border-mist bg-paper-secondary p-7 md:p-8">
                <div className="flex h-14 w-14 items-center justify-center bg-softBlue text-brand"><Icon size={26} /></div>
                <p className="mb-2 mt-6 font-body text-13 font-medium uppercase tracking-wider text-brand">{service.tagline}</p>
                <h3 className="font-display text-26 text-forest-ink">{service.name}</h3>
                <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p>
                <Link href={`/${service.slug}/`} className="mt-5 inline-flex font-body text-15 font-semibold text-brand hover:underline">Saiba mais →</Link>
              </article>
            </AnimateOnScroll>;
          })}
        </div>
      </div>
    </section>
  );
}
