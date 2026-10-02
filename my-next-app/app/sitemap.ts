import { MetadataRoute } from 'next';
import { allLocationSlugs } from './data/gujaratCityPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.finelinesystem.com';
  const lastModified = new Date('2026-10-01');

  const mainPages = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/equipment`, lastModified, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/packages`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const cityPages = allLocationSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: slug === 'av-equipment-rental-in-rajkot' ? 0.9 : 0.75,
  }));

  return [...mainPages, ...cityPages];
}
