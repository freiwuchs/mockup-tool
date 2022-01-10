// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  templates: {
    ContentfulProject: '/project/:id',
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '55d9ve2bwiry', // required
        accessToken: 'R5Uy69BbDB6I7jgUc9H45wh8tWbhLPqDxBYLF_pEHNg', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ],
}
