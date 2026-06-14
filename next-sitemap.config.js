/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.shubhamsurveyors.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/portal', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/portal', '/api/'] },
    ],
  },
}
