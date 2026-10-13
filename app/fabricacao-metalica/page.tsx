import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Fabricação metálica',
  description: 'Serviços de fabricação metálica da BR GUEDES em Volta Redonda, Rio de Janeiro.',
  pathname: '/fabricacao-metalica/',
});

export default function ConstructionMaterialsPage() {
  return <ProductCategoryPage slug="fabricacao-metalica" />;
}
