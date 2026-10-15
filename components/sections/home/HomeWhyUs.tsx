import React from 'react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const points = [
  { title: 'Atendimento 24 horas', description: 'Ajuda disponível todos os dias para situações hidráulicas urgentes.' },
  { title: 'Caça vazamentos', description: 'Investigação de sinais de vazamento e umidade em imóveis.' },
  { title: 'Desentupimento', description: 'Serviços para tubulações, ralos, pias e instalações sanitárias.' },
  { title: 'Manutenção geral', description: 'Reparos e cuidados hidráulicos para residências e comércios.' },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-site gap-12 px-6 md:px-12 lg:grid-cols-[.85fr_1.15fr]">
        <AnimateOnScroll animation="fade-right">
          <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">Monarca Caça Vazamentos</span>
          <h2 className="font-display text-33 leading-tight text-forest-ink md:text-41">Pronto atendimento para problemas hidráulicos</h2>
          <p className="mt-5 font-body text-17 leading-relaxed text-forest-light">Atendimento 24 horas em Caieiras e região para vazamentos, entupimentos e serviços de manutenção geral.</p>
          <a href="tel:+5511975475490" className="mt-7 inline-flex min-h-12 items-center bg-brand px-6 font-body text-15 font-semibold text-white transition-colors hover:bg-brand-hover">Ligar: +55 11 97547-5490</a>
        </AnimateOnScroll>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((point, index) => (
            <AnimateOnScroll key={point.title} animation="fade-up" delay={index * 0.08}>
              <article className="h-full border border-mist bg-paper-secondary p-6">
                <span className="font-display text-26 text-brand">0{index + 1}</span>
                <h3 className="mt-3 font-display text-21 text-forest-ink">{point.title}</h3>
                <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{point.description}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
