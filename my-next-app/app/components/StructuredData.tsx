export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fineline System & Services",
    "alternateName": "FSS",
    "url": "https://fineliness.com",
    "logo": "https://fineliness.com/fss-logo.jpg",
    "description": "Gujarat's premier audio-visual equipment rental company with 25+ years of experience serving weddings, corporate events, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Gujarat"
    },
    "telephone": "+91-98765-43210",
    "email": "info@fineliness.com",
    "priceRange": "₹₹",
    "areaServed": [
      {
        "@type": "City",
        "name": "Ahmedabad"
      },
      {
        "@type": "City",
        "name": "Surat"
      },
      {
        "@type": "City",
        "name": "Vadodara"
      },
      {
        "@type": "City",
        "name": "Rajkot"
      }
    ],
    "openingHours": "Mo-Sa 09:00-19:00, Su 10:00-17:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Audio Visual Equipment Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fineline System & Services"
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
            "name": "Wedding Equipment Rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Equipment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Equipment Rental"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visual Equipment Rental"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}

