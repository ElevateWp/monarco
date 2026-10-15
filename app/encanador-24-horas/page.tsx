import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';
export const metadata: Metadata = createMetadata({ title: 'Encanador 24 horas', description: 'Encanador 24 horas em Caieiras e região com atendimento 24 horas pela Monarca Caça Vazamentos.', pathname: '/encanador-24-horas/' });
export default function ServicePage() { return <ProductCategoryPage slug="encanador-24-horas" />; }