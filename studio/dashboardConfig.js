export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc81c48378b41f48dcf5799',
                  name: 'Content Studio',
                  siteId: '350e4a6c-0f0e-48d4-9515-4e8e2f16a31d'
                },
                {
                  buildHookId: '5cc81c48464bf5a85f1c04e0',
                  name: 'Portfolio Website',
                  siteId: '7de2e1bf-c309-463e-ac61-03bff227dbb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-portfolio-web-sui62n4x.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
