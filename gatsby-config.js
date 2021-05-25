const siteUrl = 'https://tezos.co.il';

module.exports = {
  siteMetadata: {
    title: `Tezos Israel`,
    description: `Tezos Israel is an innovation lab that serves the Israeli ecosystem in educating, training, and onboarding blockchain technology.`,
    author: `@TezosIsrael`,
    siteUrl,
    lang: `en-US`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        path: `${__dirname}/data/pages/blog`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `src/images/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
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
            title: "Tezos Israel's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
  ],
};
