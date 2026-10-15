import { MetadataRoute } from 'next';
import { BLOG_POSTS, SERVICES } from '@/lib/clinic-data';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', '/servicos', '/sobre', '/avaliacoes', '/contato', '/orcamento', '/dicas',
    ...SERVICES.map((service) => `/${service.slug}`),
  ];
  const coreRoutes = routes.map((route) => ({
    url: `${BASE_URL}${route ? `${route}/` : '/'}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/dicas/${post.slug}/`,
    lastModified: new Date(post.lastUpdated).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...coreRoutes, ...blogRoutes];
}
