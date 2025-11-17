import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fineliness.com'),
  title: {
    default: "Fineline System & Services | Premier AV Equipment Rental in Gujarat",
    template: "%s | FSS Gujarat"
  },
  description: "Leading audio-visual equipment rental company in Gujarat, India. Serving weddings, corporate events, and more for 25+ years. Projectors, LED screens, sound systems, and more.",
  keywords: ["AV rental Gujarat", "audio visual equipment", "wedding equipment rental", "corporate event equipment", "projector rental Gujarat", "LED screen rental", "sound system rental India", "Ahmedabad AV rental", "Surat equipment rental"],
  authors: [{ name: "Fineline System & Services" }],
  creator: "Fineline System & Services",
  publisher: "Fineline System & Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://fineliness.com',
    title: 'Fineline System & Services | Premier AV Equipment Rental in Gujarat',
    description: 'Gujarat\'s leading AV equipment rental company with 25+ years of experience',
    siteName: 'Fineline System & Services',
    images: [{
      url: '/fss-logo.jpg',
      width: 1200,
      height: 630,
      alt: 'FSS Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fineline System & Services',
    description: 'Gujarat\'s premier AV equipment rental company',
    images: ['/fss-logo.jpg'],
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
  verification: {
    google: 'google-site-verification-code', // Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/fss-logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <script type="text/javascript" src="https://www.justdial.com/Jd-Widget" async></script>
        <StructuredData />
      </head>
      <body className={`${figtree.variable} ${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
