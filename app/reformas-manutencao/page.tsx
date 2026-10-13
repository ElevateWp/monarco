import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Reformas e manutenção',
  description: 'Converse com a BR GUEDES sobre reformas e manutenção de estruturas e coberturas em Volta Redonda, Rio de Janeiro.',
  pathname: '/reformas-manutencao/',
});

export default function MaterialsDeliveryPage() {
  return <ProductCategoryPage slug="reformas-manutencao" />;
}
