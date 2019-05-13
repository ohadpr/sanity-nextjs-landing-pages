export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd9db2c47a84951cdbcfe65',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j3eihiq7',
                  apiId: 'd8717620-7923-4b41-90cf-40ddd9929d9c'
                },
                {
                  buildHookId: '5cd9db2c47a84905e3bcfe9a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9g9na4es',
                  apiId: 'af28aedb-e58e-46ef-8699-03f6bfb4ca31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ohadpr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9g9na4es.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
