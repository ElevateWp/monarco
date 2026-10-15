import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, Wrench, Waves } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SERVICES, CLINIC_INFO } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Sobre a Monarca',
  description: 'Conheça a Monarca Caça Vazamentos, desentupidora e empresa de manutenção geral em Caieiras.',
  pathname: '/sobre/',
});

const icons = [Droplets, Waves, Wrench];

export default function AboutPage() {
  return <main className="min-h-[70vh] bg-paper">
    <section className="border-b border-mist bg-paper-secondary py-12 md:py-20"><div className="mx-auto max-w-site px-6 md:px-12"><Breadcrumbs items={[{ name: 'Sobre a Monarca', path: '/sobre/' }]} /><p className="mt-8 font-body text-13 font-medium uppercase tracking-wider text-brand">Monarca Caça Vazamentos</p><h1 className="mt-3 max-w-3xl font-display text-41 text-forest-ink md:text-55">Cuidado hidráulico para sua casa ou comércio</h1><p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-forest-light">Caça vazamentos, desentupimento, reparos hidráulicos e manutenção geral com atendimento 24 horas em Caieiras e região.</p><a href="tel:+5511975475490" className="mt-7 inline-flex min-h-12 items-center bg-brand px-6 font-body text-15 font-semibold text-white hover:bg-brand-hover">Ligar: +55 11 97547-5490</a></div></section>
    <section className="mx-auto max-w-site px-6 py-12 md:px-12 md:py-20"><h2 className="font-display text-33 text-forest-ink md:text-41">Como podemos ajudar</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{SERVICES.slice(0,3).map((service,index)=>{const Icon=icons[index];return <Link key={service.slug} href={`/${service.slug}/`} className="border border-mist bg-paper p-6 hover:border-brand"><Icon className="text-brand" size={27}/><h3 className="mt-4 font-display text-21 text-forest-ink">{service.name}</h3><p className="mt-2 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p></Link>})}</div></section>
    <section className="bg-[#1A1A1A] py-10 text-white"><div className="mx-auto flex max-w-site flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between md:px-12"><div><h2 className="font-display text-26">Atendimento 24 horas</h2><p className="mt-2 font-body text-15 text-white/75">{CLINIC_INFO.primaryLocation.street} · Vera Tereza, Caieiras - SP</p></div><Link href="/contato/" className="inline-flex min-h-12 items-center bg-brand px-6 font-body text-15 font-semibold text-white hover:bg-brand-hover">Contato e endereço</Link></div></section>
  </main>;
}
