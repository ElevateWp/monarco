import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { SERVICES } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({ title: 'Serviços hidráulicos', description: 'Caça vazamentos, desentupimento, encanador 24 horas e manutenção em Caieiras.', pathname: '/servicos/' });

export default function ServicesPage() {
  return <main className="min-h-[70vh] bg-paper"><section className="border-b border-mist bg-paper-secondary py-12 md:py-20"><div className="mx-auto max-w-site px-6 md:px-12"><Breadcrumbs items={[{ name: 'Serviços', path: '/servicos/' }]} /><p className="mt-8 font-body text-13 font-medium uppercase tracking-wider text-brand">Monarca Caça Vazamentos</p><h1 className="mt-3 font-display text-41 text-forest-ink md:text-55">Serviços hidráulicos e manutenção</h1><p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-forest-light">Atendimento 24 horas em Caieiras e região. Ligue para explicar o problema e confirmar a disponibilidade.</p></div></section><section className="mx-auto max-w-site px-6 py-12 md:px-12 md:py-20"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map(service=><Link key={service.slug} href={`/${service.slug}/`} className="border border-mist bg-paper p-6 transition-colors hover:border-brand"><span className="font-body text-13 font-medium uppercase tracking-wider text-brand">Atendimento 24 horas</span><h2 className="mt-3 font-display text-26 text-forest-ink">{service.name}</h2><p className="mt-3 font-body text-15 leading-relaxed text-forest-light">{service.shortDescription}</p><span className="mt-5 inline-block font-body text-15 font-semibold text-brand">Saiba mais →</span></Link>)}</div></section></main>;
}
