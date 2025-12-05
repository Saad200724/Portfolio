import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "Saad Bin Tofayel Tahsin - Python Developer & Fullstack Engineer",
  description = "Experienced Python developer and fullstack engineer with 2.5+ years building scalable systems. Specializing in React, Node.js, and data science. Available for freelance projects.",
  keywords = "python developer, fullstack engineer, react developer, node.js, data science, freelancer, bangladesh developer, web development",
  image = "/og-image.jpg",
  url = "/"
}: SEOProps) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${siteUrl}${url}`;
  const fullImageUrl = `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saad Bin Tofayel Tahsin",
    "alternateName": "Tahsin",
    "url": siteUrl,
    "image": fullImageUrl,
    "description": description,
    "jobTitle": "Python Developer & Fullstack Engineer",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "ZnForge",
        "role": "Cofounder & CEO"
      },
      {
        "@type": "Organization",
        "name": "CyberHub - The IT Club",
        "role": "President"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "email": "saadbintofayeltahsin@gmail.com",
    "knowsAbout": [
      "Python Programming",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Web Development",
      "Backend Development",
      "Frontend Development",
      "AI/ML",
      "Data Science"
    ],
    "sameAs": [
      "https://github.com/saadbintahsin",
      "https://www.facebook.com/saadtahsin"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Saad Bin Tofayel Tahsin" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Saad Bin Tofayel Tahsin" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@saadbintahsin" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="geo.region" content="BD-13" />
      <meta name="geo.placename" content="Dhaka" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
