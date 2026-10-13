import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Engenharia e montagem',
  description: 'Conheça os serviços de engenharia e montagem da BR GUEDES em Volta Redonda, Rio de Janeiro.',
  pathname: '/engenharia-montagem/',
});

export default function DecorativeBlocksPage() {
  return <ProductCategoryPage slug="engenharia-montagem" />;
}
