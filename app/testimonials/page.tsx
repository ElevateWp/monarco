import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { TESTIMONIALS } from '@/lib/clinic-data';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Avaliações de clientes',
  description: 'Avaliações positivas sobre o atendimento hidráulico da Monarca Caça Vazamentos.',
  pathname: '/avaliacoes/',
});

export default function TestimonialsPage() {
  return (
    <main className="min-h-[70vh] bg-paper">
      <div className="mx-auto max-w-site px-6 pt-7 md:px-12"><Breadcrumbs items={[{ name: 'Avaliações', path: '/avaliacoes/' }]} /></div>
      <section className="mx-auto max-w-site px-6 py-12 md:px-12 md:py-20">
        <span className="font-body text-13 font-medium uppercase tracking-wider text-brand">Opiniões de clientes</span>
        <h1 className="mt-3 font-display text-41 text-forest-ink md:text-55">Atendimento que inspira confiança</h1>
        <p className="mt-5 max-w-2xl font-body text-17 leading-relaxed text-forest-light">Relatos de clientes destacam rapidez no atendimento, cuidado no serviço e preços justos.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((review) => (
            <article key={review.name} className="border border-mist bg-paper-secondary p-6 md:p-8">
              <div className="flex gap-1 text-brand" aria-label={`${review.rating} estrelas`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
              <blockquote className="mt-5 font-body text-17 leading-relaxed text-forest-ink">“{review.quote}”</blockquote>
              <div className="mt-6 border-t border-mist pt-4">
                <p className="font-body text-15 font-semibold text-forest-ink">{review.name}</p>
                <p className="mt-1 font-body text-13 text-forest-light">{review.source} · {review.age}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
