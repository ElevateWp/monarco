'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeLocation() {
  const todayDayName = useMemo(() => {
    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return days[new Date().getDay()];
  }, []);

  return (
    <section className="w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8}>
          <div className="mb-16">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Contato e horário
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Fale com a BR GUEDES
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columns 1–6: Address, Contact & Opening Hours Table */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <div>
                <h3 className="font-display text-21 text-forest-ink mb-3">
                  {CLINIC_INFO.name}
                </h3>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-4">
                  Engenharia, fabricação e montagem de estruturas metálicas e coberturas em Volta Redonda, RJ.
                </p>
                {CLINIC_INFO.primaryLocation.landmarks && (
                  <p className="font-body text-13 text-forest-ink/70 leading-relaxed">
                    {CLINIC_INFO.primaryLocation.landmarks}
                  </p>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_INFO.primaryLocation.directions)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-body text-13 text-[#E5242A] font-medium hover:underline"
                >
                  Ver no mapa →
                </a>
                <div className="flex flex-wrap gap-2 mt-4">
                  {CLINIC_INFO.identityHighlights.map((highlight) => (
                    <span key={highlight} className="bg-[#F2F6FC] border border-[#D9E2EF] px-3 py-1.5 text-12 text-[#18243A]">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Horário da loja com o dia atual em destaque */}
            <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.15}>
              <div>
                <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-3 font-semibold">
                  Horário de funcionamento
                </span>
                <div className="border border-mist overflow-hidden bg-paper shadow-sm">
                  <table className="w-full text-left font-body text-13">
                    <tbody className="divide-y divide-mist">
                      {CLINIC_INFO.schedule.map((item) => {
                        const isToday = item.day === todayDayName;
                        return (
                          <tr
                            key={item.day}
                            className={`transition-colors ${
                              isToday ? 'bg-lime text-forest-ink font-semibold' : 'text-forest-ink/80'
                            }`}
                          >
                            <td className="py-2.5 px-4">
                              <span>{item.day}</span>
                              {isToday && (
                                <span className="ml-2 text-13 uppercase text-forest-ink/80 font-normal">
                                  (Hoje)
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-4 text-right tabular-nums">
                              {item.hours}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Button
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  variant="ghost"
                  size="md"
                >
                  Ligar para a empresa
                </Button>
                <Button href="/contact/" variant="forest" size="md">
                  Página de contato
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Store photo and contact details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/stock-roof-structure.jpg"
                  alt="Estrutura metálica para cobertura, imagem ilustrativa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-paper/95 backdrop-blur-sm text-forest-ink font-body text-13 px-3 py-1 font-medium border border-mist/50">
                  BR GUEDES Engenharia e Montagem
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.85} delay={0.1}>
              <div className="bg-paper border border-mist p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-body text-13 text-forest block mb-1 font-medium uppercase tracking-wider">
                  Estruturas metálicas e coberturas
                  </span>
                  <h3 className="font-display text-21 text-forest-ink mb-2">
                    Serviços de engenharia e montagem
                  </h3>
                  <p className="font-body text-13 text-forest-ink/80 mb-3 leading-relaxed">
                    Converse com a equipe sobre o escopo do seu projeto e solicite um orçamento.
                  </p>
                  <p className="font-body text-13 text-forest-ink/70 mb-3 leading-relaxed">

                  </p>
                  <div className="flex items-center gap-2 text-13 font-body text-forest">
                    <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                    <span>Telefone: {CLINIC_INFO.contact.phone}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-mist flex flex-wrap items-center justify-between gap-4">
                  <span className="font-body text-13 text-forest-ink/60">
                    {CLINIC_INFO.primaryLocation.directions}
                  </span>
                  <Button
                    href="/contact/"
                    variant="forest"
                    size="sm"
                  >
                    Entre em contato
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
