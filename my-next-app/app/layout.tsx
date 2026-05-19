import type { Metadata } from "next";
import { Figtree, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import WhatsAppButton from "./components/WhatsAppButton";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.finelinesystem.com'),
  title: {
    default: "AV Equipment Rental in Rajkot & Gujarat | Fineline System & Services",
    template: "%s | Fineline System & Services"
  },
  description: "Rent projectors, LED walls, sound systems, displays, laptops, and lighting for events in Rajkot and across Gujarat. Setup planning and crew support available.",
  keywords: [
    "projector on rent in Rajkot",
    "LED screen rental Rajkot",
    "sound system on rent Rajkot",
    "AV equipment rental Gujarat",
    "laptop on rent Rajkot",
    "LED wall for wedding Rajkot",
    "projector rental near me",
    "LED screen on rent for event",
    "audio visual equipment hire Gujarat",
    "PA system on rent",
    "digital standee on rent",
    "conference equipment rental",
    "AV rental Saurashtra",
    "projector on rent in Ahmedabad",
    "sound system rental Jamnagar"
  ],
  authors: [{ name: "Fineline System & Services" }],
  creator: "Fineline System & Services",
  publisher: "Fineline System & Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.finelinesystem.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.finelinesystem.com',
    title: 'AV Equipment Rental in Rajkot & Gujarat - Fineline System & Services',
    description: 'Projectors, LED walls, sound systems, displays, laptops, and lighting for events across Gujarat.',
    siteName: 'Fineline System & Services',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Fineline System & Services - AV Equipment Rental in Rajkot & Gujarat',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AV Equipment Rental in Rajkot & Gujarat - Fineline System & Services',
    description: 'Projectors, LED walls, sound systems, displays, laptops, and lighting for events across Gujarat.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': 'ADD_YOUR_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/fss-logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Rajkot" />
        <meta name="geo.position" content="22.2952;70.7984" />
        <meta name="ICBM" content="22.2952, 70.7984" />
        <StructuredData />
      </head>
      <body className={`${figtree.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
