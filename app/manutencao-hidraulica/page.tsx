import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';
export const metadata: Metadata = createMetadata({ title: 'Manutenção hidráulica', description: 'Manutenção hidráulica em Caieiras e região com atendimento 24 horas pela Monarca Caça Vazamentos.', pathname: '/manutencao-hidraulica/' });
export default function ServicePage() { return <ProductCategoryPage slug="manutencao-hidraulica" />; }