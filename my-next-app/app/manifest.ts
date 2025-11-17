import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fineline System & Services - Premier AV Equipment Rental',
    short_name: 'FSS AV Rental',
    description: 'Gujarat\'s leading audio-visual equipment rental company for weddings, corporate events, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F5A623',
    icons: [
      {
        src: '/fss-logo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  };
}

