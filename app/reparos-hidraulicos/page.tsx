import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';
export const metadata: Metadata = createMetadata({ title: 'Reparos hidráulicos', description: 'Reparos hidráulicos em Caieiras e região com atendimento 24 horas pela Monarca Caça Vazamentos.', pathname: '/reparos-hidraulicos/' });
export default function ServicePage() { return <ProductCategoryPage slug="reparos-hidraulicos" />; }