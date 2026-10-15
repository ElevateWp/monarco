import type { Metadata } from 'next';
import { Clock3, MapPin, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { CLINIC_INFO } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contato 24 horas',
  description: 'Fale com a Monarca Caça Vazamentos para atendimento 24 horas em Caieiras e região.',
  pathname: '/contato/',
});

export default function ContactPage() {
  const phone = CLINIC_INFO.contact.phone;
  const address = `${CLINIC_INFO.primaryLocation.street} - Vera Tereza, ${CLINIC_INFO.primaryLocation.city} - SP, ${CLINIC_INFO.primaryLocation.postalCode}, Brasil`;
  return <main className="min-h-[70vh] bg-paper">
    <section className="border-b border-mist bg-paper-secondary py-12 md:py-20">
      <div className="mx-auto max-w-site px-6 md:px-12"><Breadcrumbs items={[{ name: 'Contato', path: '/contato/' }]} />
        <p className="mt-8 font-body text-13 font-medium uppercase tracking-wider text-brand">Monarca Caça Vazamentos</p>
        <h1 className="mt-3 max-w-3xl font-display text-41 text-forest-ink md:text-55">Precisa de um encanador agora?</h1>
        <p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-forest-light">Atendimento 24 horas para caça vazamentos, desentupimento e manutenção hidráulica em Caieiras e região.</p>
      </div>
    </section>
    <section className="mx-auto grid max-w-site gap-6 px-6 py-12 md:grid-cols-2 md:px-12 md:py-20">
      <article className="border border-mist bg-paper p-7 md:p-9">
        <Phone className="text-brand" size={28} />
        <h2 className="mt-5 font-display text-26 text-forest-ink">Atendimento telefônico</h2>
        <p className="mt-3 font-body text-15 leading-relaxed text-forest-light">Ligue e informe o endereço, o tipo de problema e quando começou.</p>
        <a className="mt-5 inline-flex font-display text-26 font-semibold text-brand hover:underline" href="tel:+5511975475490">{phone}</a>
        <p className="mt-3 font-body text-13 font-medium text-forest-light">24 horas, todos os dias</p>
      </article>
      <article className="border border-mist bg-paper p-7 md:p-9">
        <MapPin className="text-brand" size={28} />
        <h2 className="mt-5 font-display text-26 text-forest-ink">Endereço</h2>
        <address className="mt-3 not-italic font-body text-15 leading-relaxed text-forest-light">{address}</address>
        <p className="mt-2 font-body text-13 text-forest-light">Plus Code: {CLINIC_INFO.primaryLocation.landmarks}</p>
        <a className="mt-5 inline-flex border border-mist px-5 py-3 font-body text-15 font-medium text-forest-ink hover:border-brand" href="https://www.google.com/maps/search/?api=1&query=Rua+Tom%C3%A1s+Parizotto%2C+354%2C+Vera+Tereza%2C+Caieiras+-+SP%2C+07718-000" target="_blank" rel="noreferrer">Abrir no Google Maps</a>
        <a className="ml-3 mt-5 inline-flex min-h-12 items-center bg-brand px-5 font-body text-15 font-semibold text-white hover:bg-brand-hover" href="https://wa.me/5511975475490" target="_blank" rel="noreferrer">WhatsApp</a>
      </article>
      <article className="border border-mist bg-paper-secondary p-7 md:col-span-2 md:p-9">
        <Clock3 className="text-brand" size={28} />
        <h2 className="mt-5 font-display text-26 text-forest-ink">Horário de atendimento</h2>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{CLINIC_INFO.schedule.map((item) => <div key={item.day} className="flex justify-between border border-mist bg-paper px-4 py-3 font-body text-13"><span className="font-medium text-forest-ink">{item.day}</span><span className="text-brand">24 horas</span></div>)}</div>
      </article>
    </section>
  </main>;
}
