import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Telhados e coberturas',
  description: 'Soluções para telhados e coberturas da BR GUEDES em Volta Redonda, Rio de Janeiro.',
  pathname: '/telhados-coberturas/',
});

export default function ConcretePipesPage() {
  return <ProductCategoryPage slug="telhados-coberturas" />;
}
