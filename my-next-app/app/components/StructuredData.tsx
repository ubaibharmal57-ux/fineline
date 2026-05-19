export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fineline System & Services",
    "alternateName": "FSS",
    "url": "https://www.finelinesystem.com",
    "logo": "https://www.finelinesystem.com/fss-logo.jpg",
    "image": "https://www.finelinesystem.com/fss-logo.jpg",
    "description": "Professional AV equipment rental in Rajkot and Gujarat. Projectors, LED screens, sound systems, laptops on rent with delivery, setup and technician.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kandoi Bazar Chowk, nr. Aziz Traders, Kandoi Bazar, Para Bazar, Dela Vadi, Lohana Para",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.2952",
      "longitude": "70.7984"
    },
    "telephone": ["+919714595111", "+919825214052"],
    "email": "info@finelinesystem.com",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "areaServed": [
      { "@type": "City", "name": "Rajkot" },
      { "@type": "City", "name": "Ahmedabad" },
      { "@type": "City", "name": "Surat" },
      { "@type": "City", "name": "Vadodara" },
      { "@type": "City", "name": "Jamnagar" },
      { "@type": "City", "name": "Bhavnagar" },
      { "@type": "City", "name": "Junagadh" },
      { "@type": "City", "name": "Morbi" },
      { "@type": "City", "name": "Gandhidham" },
      { "@type": "City", "name": "Gandhinagar" },
      { "@type": "City", "name": "Anand" },
      { "@type": "State", "name": "Gujarat" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "foundingDate": "2001",
    "founder": {
      "@type": "Person",
      "name": "Fineline System & Services"
    },
    "sameAs": [
      "https://www.facebook.com/finelinesystem",
      "https://www.instagram.com/finelinesystem"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Audio Visual Equipment Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fineline System & Services",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360001",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Gujarat"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AV Equipment Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Projector Rental",
            "description": "HD and 4K projector rental with screen, delivery and setup in Rajkot and Gujarat"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Screen & LED Wall Rental",
            "description": "Indoor and outdoor LED wall rental for weddings, corporate events and exhibitions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sound System Rental",
            "description": "PA system and DJ sound system rental with wireless microphones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laptop Rental",
            "description": "Laptop and desktop computer rental for corporate events, exams and training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding AV Rental",
            "description": "Wedding AV setups with LED wall, sound system and lighting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Equipment Rental",
            "description": "Conference and corporate event AV equipment rental with setup and technician"
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.finelinesystem.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
