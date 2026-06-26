/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shubhamsurveyors.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/portal', '/api/*'],
  transform: async (config, path) => {
    let priority = config.priority
    if (path === '/') priority = 1.0
    else if (path === '/land-surveyors-pune') priority = 0.95
    else if (['/services', '/quote', '/contact', '/locations', '/industries'].includes(path)) priority = 0.9
    else if (path.startsWith('/locations/')) priority = 0.85
    else if (path.startsWith('/industries/')) priority = 0.8
    else if (path.startsWith('/knowledge/')) priority = 0.75
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/portal', '/api/'] },
    ],
  },
}
