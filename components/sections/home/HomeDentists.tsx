import React from 'react';
import { MapPin, Clock3, Phone } from 'lucide-react';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

export default function HomeDentists() {
  return (
    <section className="relative z-20 w-full border-t border-mist bg-paper-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-site items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
        <AnimateOnScroll animation="fade-right">
          <span className="mb-3 block font-body text-13 font-medium uppercase tracking-wider text-brand">Caieiras e região</span>
          <h2 className="font-display text-33 text-forest-ink md:text-41">Atendimento hidráulico perto de você</h2>
          <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">A Monarca está na Rua Tomás Parizotto, em Vera Tereza, Caieiras. Ligue para confirmar atendimento no seu endereço.</p>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-left">
          <div className="space-y-4 border border-mist bg-paper p-7 md:p-9">
            <p className="flex items-start gap-3 font-body text-15 leading-relaxed text-forest-ink"><MapPin className="mt-0.5 shrink-0 text-brand" size={19} />{CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.city} - SP, {CLINIC_INFO.primaryLocation.postalCode}</p>
            <p className="flex items-center gap-3 font-body text-15 text-forest-ink"><Clock3 className="shrink-0 text-brand" size={19} />Atendimento 24 horas, todos os dias</p>
            <a href="tel:+5511975475490" className="flex items-center gap-3 font-body text-17 font-semibold text-brand hover:underline"><Phone className="shrink-0" size={19} />+55 11 97547-5490</a>
            <a className="inline-flex min-h-11 items-center border border-mist px-4 font-body text-13 font-medium text-forest-ink hover:border-brand" href="https://www.google.com/maps/search/?api=1&query=Rua+Tom%C3%A1s+Parizotto%2C+354%2C+Vera+Tereza%2C+Caieiras+-+SP%2C+07718-000" target="_blank" rel="noreferrer">Ver endereço no mapa</a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
