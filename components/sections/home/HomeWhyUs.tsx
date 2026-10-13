import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  { title: 'Estruturas metálicas', description: 'Fabricação e montagem para projetos comerciais, industriais e outros espaços.' },
  { title: 'Telhados e coberturas', description: 'Soluções de cobertura planejadas de acordo com as necessidades de cada projeto.' },
  { title: 'Engenharia e montagem', description: 'Serviços de engenharia e montagem com escopo alinhado junto ao cliente.' },
  { title: 'Compromisso com o serviço', description: 'Clientes destacam o profissionalismo, a pontualidade e a qualidade do trabalho.' },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-light block mb-2 font-medium uppercase tracking-wider">O que fazemos</span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">Soluções para estruturas e coberturas</h2>
              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll key={reason.title} animation="fade-up" delay={idx * 0.1} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">{reason.title}</h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{reason.description}</p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image src="/images/stock-roof-structure.jpg" alt="Estrutura de cobertura metálica em obra, imagem ilustrativa" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#10264B]/90 text-paper font-body text-12 px-3 py-1">Estruturas metálicas</div>
                </div>
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image src="/images/stock-welding-brazil.jpg" alt="Soldador trabalhando em uma estrutura metálica, imagem ilustrativa" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                </div>
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image src="/images/stock-steel-beams.jpg" alt="Estrutura de aço de uma cobertura em construção, imagem ilustrativa" fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#10264B]/85 text-paper font-body text-12 px-3 py-2 text-center">Telhados e coberturas</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
