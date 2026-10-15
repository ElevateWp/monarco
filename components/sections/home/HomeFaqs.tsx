import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  { question: 'Quais serviços a Monarca oferece?', answer: 'Caça vazamentos, desentupimento, reparos hidráulicos e manutenção geral.', relatedLink: { href: '/servicos/', label: 'Ver todos os serviços →' } },
  { question: 'A Monarca atende 24 horas?', answer: 'Sim. O atendimento funciona 24 horas, todos os dias. Ligue para informar o que aconteceu e confirmar a disponibilidade.' },
  { question: 'Onde fica a Monarca?', answer: 'A empresa fica na Rua Tomás Parizotto, 354, Vera Tereza, Caieiras - SP. Ligue para confirmar atendimento na sua região.' },
  { question: 'Como solicitar atendimento?', answer: 'Ligue para a equipe e informe o endereço e os sinais do problema para combinar uma avaliação.' },
  { question: 'Qual é o telefone de contato?', answer: CLINIC_INFO.contact.phone, relatedLink: { href: '/contato/', label: 'Fale conosco →' } },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full overflow-hidden border-t border-mist bg-paper py-20 md:py-28">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="mx-auto grid max-w-site grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        <AnimateOnScroll animation="fade-right" className="lg:col-span-5">
          <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Perguntas frequentes</span>
          <h2 className="mb-6 font-display text-33 text-forest-ink md:text-41">Atendimento Monarca</h2>
          <p className="mb-6 font-body text-15 leading-relaxed text-forest-light">Informações sobre caça vazamentos, desentupimento e serviços hidráulicos em Caieiras.</p>
          <div className="border border-mist bg-paper-secondary p-6">
            <span className="mb-1 block font-body text-13 font-medium text-forest-ink">Precisa de ajuda agora?</span>
            <p className="mb-3 font-body text-13 text-forest-light">Ligue para atendimento 24 horas.</p>
            <a href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="font-body text-13 font-semibold text-brand underline underline-offset-4">Ligar para a Monarca</a>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-left" className="lg:col-span-7"><Accordion items={HOME_FAQS} /></AnimateOnScroll>
      </div>
    </section>
  );
}
