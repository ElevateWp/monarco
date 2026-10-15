import React from 'react';
import Link from 'next/link';
import { Wrench, Pipette, ShowerHead, Building2, Clock3, CircleHelp } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { SERVICES } from '@/lib/clinic-data';

const icons = [Pipette, ShowerHead, Wrench, Building2, Clock3, CircleHelp];

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full overflow-hidden border-t border-mist bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Monarca Caça Vazamentos</span>
          <h2 className="font-display text-33 text-forest-ink md:text-41">Serviços para cuidar das instalações</h2>
        </AnimateOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return <AnimateOnScroll key={service.slug} animation="fade-up" delay={(index % 3) * 0.08}>
              <Link href={`/${service.slug}/`} className="group flex h-full min-h-44 items-start gap-4 border border-mist bg-paper-secondary p-6 transition-colors hover:border-brand">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-softBlue text-brand"><Icon size={23} /></span>
                <span><span className="block font-display text-21 text-forest-ink group-hover:text-brand">{service.name}</span><span className="mt-2 block font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</span></span>
              </Link>
            </AnimateOnScroll>;
          })}
        </div>
      </div>
    </section>
  );
}
