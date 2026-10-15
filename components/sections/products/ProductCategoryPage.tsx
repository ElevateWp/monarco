import Link from 'next/link';
import { Droplets, Clock3, MapPin, Wrench } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

export default function ProductCategoryPage({ slug }: { slug: string }) {
  const category = SERVICES.find((item) => item.slug === slug);
  if (!category) return null;
  const relatedServices = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);
  return <main className="w-full bg-paper">
    <section className="border-b border-mist bg-paper-secondary py-12 md:py-20">
      <div className="mx-auto grid max-w-site items-center gap-10 px-6 md:px-12 lg:grid-cols-[1.2fr_.8fr]">
        <div><Breadcrumbs items={[{ name: category.name, path: `/${slug}/` }]} /><AnimateOnScroll animation="fade-right">
          <span className="mb-3 mt-8 block font-body text-13 font-medium uppercase tracking-wider text-brand">Monarca Caça Vazamentos · Atendimento 24 horas</span>
          <h1 className="font-display text-41 text-forest-ink md:text-55">{category.name}</h1>
          <p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-forest-light">{category.shortDescription}</p>
          <p className="mt-4 max-w-2xl font-body text-15 leading-relaxed text-forest-light">{category.clinicalExplanation}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="forest" size="lg">Ligar 24 horas</Button><Link href="/contato/" className="inline-flex min-h-12 items-center border border-mist bg-paper px-6 font-body text-15 text-forest-ink hover:border-brand">Ver endereço</Link></div>
        </AnimateOnScroll></div>
        <AnimateOnScroll animation="zoom-in"><div className="flex min-h-[280px] flex-col justify-between border border-mist bg-[#1A1A1A] p-7 text-white md:min-h-[340px] md:p-9">
          <div className="flex h-16 w-16 items-center justify-center bg-brand text-white"><Droplets size={32}/></div>
          <div><p className="font-body text-13 font-medium uppercase tracking-wider text-[#FFE2D1]">Monarca · Caieiras, SP</p><p className="mt-3 font-display text-26">Problema hidráulico?</p><p className="mt-2 font-body text-15 text-white/75">Ligue para informar o endereço e explicar o que está acontecendo.</p></div>
          <a href="tel:+5511975475490" className="mt-5 font-body text-17 font-semibold text-white underline underline-offset-4">+55 11 97547-5490</a>
        </div></AnimateOnScroll>
      </div>
    </section>
    <section className="py-12 md:py-20"><div className="mx-auto grid max-w-site gap-10 px-6 md:px-12 lg:grid-cols-[1.1fr_.9fr]">
      <AnimateOnScroll animation="fade-right"><span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Quando solicitar</span><h2 className="font-display text-33 text-forest-ink md:text-41">Avaliação do problema e próximos passos</h2><p className="mt-5 font-body text-17 leading-relaxed text-forest-light">{category.shortDescription} Entre em contato para explicar os sinais e confirmar o atendimento no seu endereço.</p><ul className="mt-6 space-y-3">{category.whoNeeds.map((item)=><li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><span className="text-brand">✓</span>{item}</li>)}</ul></AnimateOnScroll>
      <AnimateOnScroll animation="fade-left"><div className="border border-mist bg-paper-secondary p-6 md:p-8"><h3 className="font-display text-21 text-forest-ink">O que pode ajudar no contato</h3><ul className="mt-5 space-y-4">{category.benefits.map((item)=><li key={item} className="flex gap-3 font-body text-15 leading-relaxed text-forest-light"><Wrench className="mt-0.5 shrink-0 text-brand" size={18}/>{item}</li>)}</ul><div className="mt-6 border-t border-mist pt-5"><p className="font-body text-13 font-medium uppercase tracking-wider text-brand">Antes da visita</p><p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{category.recoveryTimeline[0]?.careProtocol}</p></div></div></AnimateOnScroll>
    </div></section>
    <ProcedurePin steps={category.procedureSteps} title={`Como funciona ${category.name.toLowerCase()}`} subtitle="Etapas do atendimento" className="bg-paper-secondary" />
    <section className="py-12 md:py-20"><div className="mx-auto max-w-site px-6 md:px-12"><AnimateOnScroll animation="fade-up"><span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Perguntas frequentes</span><h2 className="font-display text-33 text-forest-ink md:text-41">Dúvidas sobre {category.name.toLowerCase()}</h2><p className="mt-4 max-w-3xl font-body text-15 leading-relaxed text-forest-light">O atendimento funciona 24 horas. Ligue para confirmar o serviço e a disponibilidade na sua região.</p></AnimateOnScroll><div className="mt-8"><Accordion items={category.faqs.map((faq)=>({question:faq.question,answer:faq.answer,relatedLink:faq.relatedSlug?{href:`/${faq.relatedSlug}/`,label:'Conheça outro serviço'}:undefined}))}/></div></div></section>
    <section className="bg-paper-secondary py-12 md:py-20"><div className="mx-auto max-w-site px-6 md:px-12"><h2 className="font-display text-33 text-forest-ink md:text-41">Outros serviços da Monarca</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{relatedServices.map((service)=><Link key={service.slug} href={`/${service.slug}/`} className="border border-mist bg-paper p-6 hover:border-brand"><span className="font-body text-13 font-medium uppercase tracking-wider text-brand">Manutenção hidráulica</span><h3 className="mt-3 font-display text-21 text-forest-ink">{service.name}</h3><p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p></Link>)}</div></div></section>
    <section className="bg-[#1A1A1A] py-10 text-white"><div className="mx-auto flex max-w-site flex-col justify-between gap-5 px-6 sm:flex-row sm:items-center md:px-12"><div><h2 className="font-display text-26">Atendimento hidráulico 24 horas</h2><p className="mt-2 flex items-center gap-2 font-body text-15 text-white/75"><Clock3 size={17}/>Todos os dias · {CLINIC_INFO.primaryLocation.city} e região</p><p className="mt-2 flex items-center gap-2 font-body text-15 text-white/75"><MapPin size={17}/>{CLINIC_INFO.primaryLocation.street}, Vera Tereza</p></div><Button href="tel:+5511975475490" variant="lime" size="lg">Ligar para a Monarca</Button></div></section>
  </main>;
}
