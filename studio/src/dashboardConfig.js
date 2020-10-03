export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f78b2edfd7957916e27e82d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rzfsncve',
                  apiId: 'f856dd0b-7085-4f2c-9063-9a312805ab13'
                },
                {
                  buildHookId: '5f78b2ed888846c2e623096a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4hnbev5h',
                  apiId: 'f64a58c2-ff75-45cb-b240-379f24be7f0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rossmawd/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4hnbev5h.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
