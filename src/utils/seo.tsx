import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

export function useSEO({
  title,
  description,
  keywords = '',
  ogImage = 'https://pixmedia.b-cdn.net/wp-content/uploads/2023/11/lOGO1.png',
  ogType = 'website',
  schema
}: SEOProps) {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://pixmedia.agency';
  const currentUrl = `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic SEO
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('last-modified', new Date().toISOString().split('T')[0]);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'pixmedia', true);
    updateMetaTag('og:locale', 'es_MX', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);

    // Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.querySelector('script[data-schema="page"]');
      
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('data-schema', 'page');
        document.head.appendChild(schemaScript);
      }
      
      schemaScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        ...schema,
        url: currentUrl
      });
    }

    // Cleanup function
    return () => {
      const schemaScript = document.querySelector('script[data-schema="page"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, currentUrl, schema]);
}

// Helper function to generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://pixmedia.agency';
  
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`
    }))
  };
}

// Helper function to generate Service schema
export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}) {
  return {
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider || 'pixmedia',
      url: import.meta.env.VITE_SITE_URL || 'https://pixmedia.agency'
    },
    areaServed: service.areaServed || 'MX'
  };
}

// Helper function to generate Article schema
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://pixmedia.agency';
  
  return {
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image || 'https://pixmedia.b-cdn.net/wp-content/uploads/2023/11/lOGO1.png',
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'pixmedia',
      url: siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'pixmedia',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: 'https://pixmedia.b-cdn.net/wp-content/uploads/2023/11/lOGO1.png'
      }
    }
  };
}