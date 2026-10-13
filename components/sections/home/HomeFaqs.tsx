import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'Quais serviços a BR GUEDES oferece?',
    answer: 'A empresa atua com soluções em engenharia, fabricação e montagem de estruturas metálicas, telhados e coberturas.',
    relatedLink: { href: '/contact/', label: 'Fale com a equipe →' },
  },
  {
    question: 'Onde fica o BR GUEDES Engenharia e Montagem?',
    answer: CLINIC_INFO.primaryLocation.directions,
    relatedLink: { href: '/contact/', label: 'Como chegar →' },
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer: 'Entre em contato pelo telefone ou formulário e compartilhe as informações do projeto para conversar com a equipe.',
    relatedLink: { href: '/contact/', label: 'Fale com a equipe →' },
  },
  {
    question: 'Qual é o horário de atendimento?',
    answer: 'De segunda a quinta-feira, das 8h às 18h; às sextas-feiras, das 8h às 17h. A empresa fecha aos sábados e domingos.',
    relatedLink: { href: '/contact/', label: 'Entre em contato →' },
  },
  {
    question: 'Qual é o telefone de contato?',
    answer: CLINIC_INFO.contact.phone,
    relatedLink: { href: '/contact/', label: 'Fale conosco →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Perguntas frequentes
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Sobre a empresa
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Conheça nossos serviços de engenharia, estruturas metálicas e coberturas.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Ficou com alguma dúvida?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Ligue para a equipe para conversar sobre o seu projeto.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Ligar para a BR GUEDES
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
