import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeDentists() {
  return (
    <section className="relative z-20 w-full bg-paper-secondary py-20 md:py-28 border-t border-mist">
      <div className="mx-auto grid max-w-site items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
        <AnimateOnScroll animation="fade-right" duration={0.8}>
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">BR GUEDES Engenharia e Montagem</span>
          <h2 className="font-display text-33 text-forest-ink md:text-41">Engenharia e montagem com compromisso</h2>
          <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">Clientes destacam a qualidade do serviço, a pontualidade e o cuidado da equipe em projetos de telhados e estruturas metálicas.</p>
          <Link href="/about/" className="mt-6 inline-flex font-body text-15 font-semibold text-[var(--primary-brand)] hover:underline">Conheça a empresa →</Link>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-left" duration={0.8}>
          <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper">
            <Image src="/images/stock-welding-brazil.jpg" alt="Profissional soldando uma estrutura metálica, imagem ilustrativa" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
