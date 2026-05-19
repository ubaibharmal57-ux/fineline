import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fineline System & Services - AV Equipment Rental Rajkot & Gujarat',
    short_name: 'Fineline AV',
    description: 'AV equipment rental in Rajkot and Gujarat for events that need screens, sound, displays, laptops, lighting, and setup support.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/fss-logo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  };
}
