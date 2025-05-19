/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.example.co.il',
  generateRobotsTxt: false, // כבר יצרנו קובץ robots.txt ידנית
  outDir: './public',
  generateIndexSitemap: false,
  exclude: ['/404', '/500', '/_app', '/_document', '/_error'],
  alternateRefs: [
    {
      href: 'https://www.example.co.il',
      hreflang: 'he-IL',
    },
  ],
  transform: async (config, path) => {
    // השתמש בתבנית ברירת המחדל של next-sitemap עבור כל הנתיבים
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
}; 