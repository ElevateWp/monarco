import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';
export const metadata: Metadata = createMetadata({ title: 'Desentupimento', description: 'Desentupimento em Caieiras e região com atendimento 24 horas pela Monarca Caça Vazamentos.', pathname: '/desentupimento/' });
export default function ServicePage() { return <ProductCategoryPage slug="desentupimento" />; }