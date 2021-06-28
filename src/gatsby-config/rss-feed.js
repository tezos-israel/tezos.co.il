module.exports = function rssFeedConfig(siteUrl) {
  return {
    resolve: 'gatsby-plugin-feed',
    options: {
      feeds: [
        {
          serialize: ({ query: { allMarkdownRemark } }) => {
            return allMarkdownRemark.nodes.map((node) => {
              const url = `${siteUrl}${node.fields.slug}`;
              const author = node.frontmatter.authorFull;
              const mediumHandle = `@${author.mediumHandle}`;

              return {
                ...node.frontmatter,
                description: node.excerpt,
                date: node.frontmatter.date,
                author: `${author.name} (@${author.mediumHandle})`,
                url,
                guid: url,
                custom_elements: [
                  {
                    'content:encoded': `
                      <p>This post was originally publish on our <a href="${url}">blog</a> by ${
                      author.mediumHandle ? mediumHandle : author.name
                    }</p>
                      
                      ${node.frontmatter.mediumContent || node.html}
                      `,
                  },
                  { tags: node.frontmatter.tags.join(',') },
                  { author: `${author.name} (@${author.mediumHandle})` },
                  {
                    featuredImage: `${siteUrl}/${node.frontmatter.featuredImage.childImageSharp.fixed.src}`,
                  },
                ],
              };
            });
          },
          query: `
              {
              allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "_blog-post"}}}
                sort: {order: DESC, fields: [frontmatter___date]}
              ) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    tags
                    mediumContent
                    authorFull {
                      name
                      email
                      mediumHandle
                    }
                    featuredImage {
                      childImageSharp {
                        fixed {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
            `,
          output: '/rss.xml',
          title: 'Tezos Israel\'s RSS Feed',
          // optional configuration to insert feed reference in pages:
          // if `string` is used, it will be used to create RegExp and then test if pathname of
          // current page satisfied this regular expression;
          // if not provided or `undefined`, all pages will have feed reference inserted
          match: '^/blog/',
        },
      ],
    },
  };
};
