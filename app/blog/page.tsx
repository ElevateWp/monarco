import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import TextureBackground from '@/components/layout/TextureBackground';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Dicas hidráulicas',
  description:
    'Orientações para identificar vazamentos, evitar entupimentos e cuidar das instalações hidráulicas.',
  pathname: '/dicas/',
});

export default function BlogIndexPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      {/* SECTION 1: Editorial Header with Signature Texture */}
      <section className="relative py-16 md:py-24 border-b border-mist overflow-hidden">
        <TextureBackground variant="blog" className="opacity-20" />

        <div className="relative z-10 max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Dicas hidráulicas', path: '/dicas/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Dicas hidráulicas
                </span>
                <WordRevealH1 text="Orientações úteis para cuidar da hidráulica do imóvel." />
                <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mt-6 max-w-2xl">
                  Leia dicas sobre vazamentos, entupimentos e manutenção hidráulica.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Editorial Article Index (Hairline-Ruled List) */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="divide-y divide-mist border-t border-b border-mist">
            {BLOG_POSTS.map((post, idx) => {
              return (
                <AnimateOnScroll key={post.slug} animation="fade-up" delay={idx * 0.1}>
                  <article className="py-8 md:py-10 group transition-colors">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                      {/* Category & Read Time */}
                      <div className="lg:col-span-3 flex lg:flex-col justify-between lg:justify-start gap-2 font-body text-13 text-forest-ink/60">
                        <span className="text-forest font-medium">{post.category}</span>
                        <span className="tabular-nums">{post.readTime}</span>
                      </div>

                      {/* Title & Excerpt */}
                      <div className="lg:col-span-7">
                        <h2 className="font-display text-21 md:text-26 text-forest-ink group-hover:text-forest transition-colors mb-2">
                          <Link href={`/dicas/${post.slug}/`} className="no-underline text-inherit">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <span className="font-body text-13 text-forest-ink/60 block">Por Monarca Caça Vazamentos</span>
                      </div>

                      {/* Action */}
                      <div className="lg:col-span-2 text-left lg:text-right">
                        <Link
                          href={`/dicas/${post.slug}/`}
                          className="font-body text-13 text-forest font-medium underline underline-offset-4 group-hover:text-forest-light"
                        >
                          Ler artigo →
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
