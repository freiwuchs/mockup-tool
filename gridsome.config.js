// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  templates: {
    ContentfulProject: '/project/:id',
  },
  siteUrl: 'https://freiwuchs.github.io',
  pathPrefix: '/mockup-tool',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.SOME_API_KEY,
        accessToken: process.env.SECRET_KEY,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
}
