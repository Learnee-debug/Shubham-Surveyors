/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shubhamsurveyors.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ['/portal', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/portal', '/api/'] },
    ],
  },
}
