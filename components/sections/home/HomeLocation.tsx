import React from 'react';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeLocation() {
  return (
    <section className="w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Contato e horário
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">Fale com a Monarca Caça Vazamentos</h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <AnimateOnScroll animation="fade-right" duration={0.85}>
            <div className="h-full border border-mist bg-paper-secondary p-7 md:p-10">
              <h3 className="font-display text-26 text-forest-ink mb-3">Conte o que aconteceu</h3>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
                Ligue para solicitar caça vazamentos, desentupimento ou manutenção hidráulica. Atendimento 24 horas.
              </p>
              <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-display text-26 text-brand hover:underline">
                {CLINIC_INFO.contact.phone}
              </a>
              <div className="mt-8 border-t border-mist pt-5">
                <span className="font-body text-13 text-forest-light uppercase tracking-wider">Horário de atendimento</span>
                <p className="mt-2 font-body text-17 font-semibold text-forest-ink">24 horas, todos os dias</p>
              </div>
              <Button href="/contato/" variant="forest" size="md" className="mt-7">Solicitar atendimento</Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} delay={0.1}>
            <div className="h-full border border-mist bg-paper p-7 md:p-10 flex flex-col justify-center">
              <span className="font-body text-13 text-brand block mb-3 font-medium uppercase tracking-wider">Monarca Caça Vazamentos</span>
              <h3 className="font-display text-33 text-forest-ink mb-5">Caça vazamentos, desentupimento e manutenção geral</h3>
              <div className="flex flex-wrap gap-2">
                {CLINIC_INFO.identityHighlights.map((highlight) => (
                  <span key={highlight} className="bg-softBlue border border-mist px-3 py-1.5 text-12 text-forest-ink">{highlight}</span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
