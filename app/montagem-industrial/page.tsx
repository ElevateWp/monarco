import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Montagem industrial',
  description: 'Serviços de montagem industrial da BR GUEDES em Volta Redonda, Rio de Janeiro.',
  pathname: '/montagem-industrial/',
});

export default function CurbsidePickupPage() {
  return <ProductCategoryPage slug="montagem-industrial" />;
}
