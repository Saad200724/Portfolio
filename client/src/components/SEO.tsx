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
    "alternateName": ["Tahsin", "Saad Tahsin", "PhantomsByte"],
    "url": siteUrl,
    "image": fullImageUrl,
    "description": description,
    "jobTitle": "Python Developer & Fullstack Engineer",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "MIT Aspirant"
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "ZnForge",
        "description": "Technology startup focusing on innovative solutions",
        "foundingDate": "2024",
        "founder": {
          "@type": "Person",
          "name": "Saad Bin Tofayel Tahsin"
        }
      },
      {
        "@type": "Organization",
        "name": "CyberHub - The IT Club",
        "description": "Student IT organization"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "ZnForge"
      },
      {
        "@type": "Organization",
        "name": "CyberHub - The IT Club"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressRegion": "Dhaka Division",
      "addressCountry": "Bangladesh"
    },
    "email": "saadbintofayeltahsin@gmail.com",
    "telephone": "+880-1521-308894",
    "knowsAbout": [
      "Python Programming",
      "JavaScript Development",
      "TypeScript",
      "React.js Framework",
      "Node.js Backend",
      "Express.js API",
      "PostgreSQL Database",
      "MongoDB NoSQL",
      "Supabase Backend",
      "Web Development",
      "Backend Development",
      "Frontend Development",
      "Full Stack Development",
      "RESTful API Design",
      "Database Architecture",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Responsive Web Design",
      "Git Version Control"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Bengali",
        "alternateName": "bn"
      }
    ],
    "sameAs": [
      "https://github.com/saadbintahsin",
      "https://www.facebook.com/saadtahsin",
      "https://medium.com/@saadbintofayeltahsin",
      "https://www.upwork.com/freelancers/~01d0f8b9c5c5c5c5c5"
    ],
    "seeks": {
      "@type": "JobPosting",
      "title": "Freelance Development Projects",
      "employmentType": "CONTRACTOR",
      "description": "Seeking freelance opportunities in web development, Python programming, and fullstack engineering"
    }
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
