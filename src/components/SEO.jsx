import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ESCOVIDRIO",
      "description": "Soluciones profesionales en vidrio y aluminio en San Bernardo, Chile. Ventanas, mamparas, terrazas y más.",
      "image": "https://escovidrio.cl/logo.png",
      "@id": "https://escovidrio.cl",
      "url": "https://escovidrio.cl",
      "telephone": "+56953215308",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "América 01135",
        "addressLocality": "San Bernardo",
        "addressRegion": "Región Metropolitana",
        "postalCode": "8050000",
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.5927,
        "longitude": -70.7003
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/escovidrio",
        "https://www.instagram.com/escovidrio"
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "San Bernardo"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Vidrio y Aluminio",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ventanas de Aluminio"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mamparas de Baño"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cierre de Terrazas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vitrinas Comerciales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Termopaneles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Espejos a Medida"
            }
          }
        ]
      }
    };

    // Create script element for JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SEO;
