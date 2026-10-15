import React from 'react';
import Link from 'next/link';
import { Droplet, Gauge, Waves, Wind } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const signs = [
  { Icon: Droplet, title: 'Umidade ou manchas', text: 'Marcas que persistem em paredes, pisos ou tetos.' },
  { Icon: Gauge, title: 'Conta de água alta', text: 'Aumento de consumo sem mudança no uso habitual.' },
  { Icon: Waves, title: 'Escoamento lento', text: 'Pias, ralos ou vasos que demoram a esvaziar.' },
  { Icon: Wind, title: 'Mau cheiro', text: 'Odor vindo de ralos ou tubulações.' },
];

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full overflow-hidden border-t border-mist bg-paper-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12">
        <AnimateOnScroll animation="fade-right" className="lg:col-span-5">
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Quando chamar um profissional</span>
          <h2 className="mb-6 font-display text-33 text-forest-ink md:text-41">Reconheça os sinais de um problema hidráulico</h2>
          <p className="mb-6 font-body text-15 leading-relaxed text-forest-light">Se notar vazamento ou entupimento, a equipe Monarca atende 24 horas. Descreva o que está acontecendo para receber orientação sobre a visita.</p>
          <Link href="/contato/" className="font-body text-15 font-semibold text-brand underline-offset-4 hover:underline">Fale com a equipe →</Link>
        </AnimateOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {signs.map(({ Icon, title, text }, index) => <AnimateOnScroll key={title} animation="fade-up" delay={index * 0.07}>
            <article className="h-full border border-mist bg-paper p-6">
              <Icon className="text-brand" size={25} />
              <h3 className="mt-4 font-display text-21 text-forest-ink">{title}</h3>
              <p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{text}</p>
            </article>
          </AnimateOnScroll>)}
        </div>
      </div>
    </section>
  );
}
