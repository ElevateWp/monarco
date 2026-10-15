import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';
export const metadata: Metadata = createMetadata({ title: 'Caça vazamentos', description: 'Caça vazamentos em Caieiras e região com atendimento 24 horas pela Monarca Caça Vazamentos.', pathname: '/caca-vazamentos/' });
export default function ServicePage() { return <ProductCategoryPage slug="caca-vazamentos" />; }