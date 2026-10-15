import React from 'react';
import { Metadata } from 'next';
import { CLINIC_INFO } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BookingForm from '@/components/sections/booking/BookingForm';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Solicite atendimento 24 horas',
  description:
    'Solicite um orçamento para caça vazamentos, desentupimento ou manutenção geral. Atendimento 24 horas em Caieiras e região.',
  pathname: '/orcamento/',
});

const BOOKING_STEPS = [
  {
    step: 1,
    title: 'Descreva o problema',
    description: 'Informe o endereço, o tipo de problema e quando começou.',
  },
  {
    step: 2,
    title: 'Avaliação do serviço',
    description: 'A equipe avalia sua solicitação e confirma a disponibilidade.',
  },
  {
    step: 3,
    title: 'Entraremos em contato',
    description: 'A equipe entrará em contato para combinar os próximos passos.',
  },
  {
    step: 4,
    title: 'Alinhamento das etapas',
    description: 'O serviço e o valor serão alinhados antes da execução.',
  },
];

export default function BookAppointmentPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Appointment Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Solicitar atendimento', path: '/orcamento/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Atendimento 24 horas
                </span>
                  <WordRevealH1 text="Solicite atendimento hidráulico." />
                <div className="mt-8">
                    <ScrubbedParagraph text="Conte à Monarca sobre vazamento, entupimento ou reparo hidráulico." />
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <span className="font-medium text-forest block">Ligue para nossa equipe:</span>
                  <p className="text-forest-ink/70">
                    O atendimento funciona 24 horas. Ligue para explicar o problema.
                  </p>
                  <a
                    href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-display text-17 text-forest font-semibold block hover:underline"
                  >
                    {CLINIC_INFO.contact.phone}
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: Interactive Form & 4-Step Process Explanation */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: 4-Step Sequential Process */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <div>
                  <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                    Como funciona
                  </span>
                  <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                    Próximas etapas
                  </h2>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                    Conte o que você precisa e nossa equipe ajudará a esclarecer dúvidas sobre o serviço.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Numbered Step Sequence */}
              <div className="space-y-6">
                {BOOKING_STEPS.map((step, idx) => (
                  <AnimateOnScroll key={step.step} animation="fade-up" delay={idx * 0.1}>
                    <div className="flex items-start gap-4 p-4 bg-paper border border-mist shadow-sm">
                      <span className="w-8 h-8 rounded-full bg-forest text-paper flex items-center justify-center font-display text-15 flex-shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-17 text-forest-ink mb-1">
                          {step.title}
                        </h3>
                        <p className="font-body text-13 text-forest-ink/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Right: Interactive Form with in-place confirmation */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
                <BookingForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6: Contact Options, Opening Hours, Service Area */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Options */}
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Contato</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Fale com nossa equipe</h3>
                <div className="space-y-3 font-body text-13 text-forest-ink/80">
                  <div>
                    <span className="text-forest-ink/60 block">Telefone:</span>
                    <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-medium text-forest hover:underline">
                      {CLINIC_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Opening Hours */}
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Horários</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Horário de atendimento</h3>
                <div className="space-y-1.5 font-body text-13 text-forest-ink/80">
                  {CLINIC_INFO.schedule.map((item) => (
                    <div key={item.day} className="flex justify-between">
                      <span>{item.day}</span>
                      <span className="tabular-nums">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Service Area */}
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-body text-13 text-forest block mb-2 font-medium uppercase tracking-wider">Localização</span>
                <h3 className="font-display text-21 text-forest-ink mb-4">Endereço</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-3">
                  Atendimento 24 horas para caça vazamentos, desentupimento e manutenção.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
