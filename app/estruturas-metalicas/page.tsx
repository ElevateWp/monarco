import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Estruturas metálicas',
  description: 'Serviços de fabricação e montagem de estruturas metálicas da BR GUEDES, em Volta Redonda, Rio de Janeiro.',
  pathname: '/estruturas-metalicas/',
});

export default function BuildingMaterialsPage() {
  return <ProductCategoryPage slug="estruturas-metalicas" />;
}
