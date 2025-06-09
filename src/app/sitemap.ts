
import { MetadataRoute } from 'next';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  // Define main pages
  const mainPages = [
    '/',
    '/climate-change',
    '/ecosystems',
    '/challenges',
    '/sustainability',
    '/green-tech',
    '/global-efforts',
    '/resources',
    '/contact',
    '/legal',
    '/profile', 
    // Add other main static pages here
  ];

  const sitemapEntries: MetadataRoute.Sitemap = mainPages.map((path) => ({
    url: `${siteURL}${path}`,
    lastModified: lastModified,
    changeFrequency: path === '/' ? 'daily' : 'weekly', // Homepage might change more often
    priority: path === '/' ? 1.0 : 0.8, // Higher priority for homepage
  }));

  // Example for dynamic routes if you had them (e.g., blog posts)
  // const blogPosts = await fetchBlogPosts(); // Replace with your actual data fetching
  // blogPosts.forEach(post => {
  //   sitemapEntries.push({
  //     url: `${siteURL}/blog/${post.slug}`,
  //     lastModified: post.updatedAt,
  //     changeFrequency: 'monthly',
  //     priority: 0.7,
  //   });
  // });

  return sitemapEntries;
}
