import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.finelinesystem.com';

  const mainPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/equipment`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const cityPages = [
    'av-equipment-rental-in-rajkot',
    'projector-on-rent-in-rajkot',
    'led-screen-on-rent-in-rajkot',
    'sound-system-on-rent-in-rajkot',
    'laptop-on-rent-in-rajkot',
    'av-equipment-rental-in-ahmedabad',
    'av-equipment-rental-in-jamnagar',
    'av-equipment-rental-in-morbi',
    'av-equipment-rental-in-junagadh',
    'av-equipment-rental-in-bhavnagar',
    'av-equipment-rental-in-surat',
    'av-equipment-rental-in-vadodara',
    'av-equipment-rental-in-gandhidham',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainPages, ...cityPages];
}
