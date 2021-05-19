const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      const slug = edge.node.fields.slug;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/pages/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          slug,
        },
      });
    });

    // Tag pages:
    // createTagPages(posts, createPage);
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter!
      related: [MarkdownRemark] 
    }
    type Frontmatter @infer {
      title: String!
      date: Date! @dateformat
      description: String!
      authorFull: AuthorsJson @link(by: "email", from: "author")
    }
`,
    schema.buildObjectType({
      name: 'MarkdownRemark',
      fields: {
        related: {
          type: '[MarkdownRemark]',
          //The resolve field is called when your page query looks for related posts
          //Here we can query our data for posts we deem 'related'
          //Exactly how you do this is up to you
          //I'm querying purely by category
          //But you could pull every single post and do a text match if you really wanted
          //(note that might slow down your build time a bit)
          //You could even query an external API if you needed
          resolve: (source, args, context) => {
            const tags = source.frontmatter.tags;

            //If this post has no categories, return an empty array
            if (!tags || !tags.length) {
              return [];
            }

            return context.nodeModel.runQuery({
              query: {
                filter: {
                  frontmatter: {
                    tags: { in: tags },
                    templateKey: { eq: '_blog-post' },
                  },
                  id: { ne: source.id },
                },
              },
              type: 'MarkdownRemark',
            });
          },
        },
      },
    }),
  ];
  createTypes(typeDefs);
};

// function createTagPages(posts, createPage) {
//   let tags = [];
//   // Iterate through each post, putting all found tags into `tags`
//   posts.forEach((edge) => {
//     if (_.get(edge, `node.frontmatter.tags`)) {
//       tags = tags.concat(edge.node.frontmatter.tags);
//     }
//   });
//   // Eliminate duplicate tags
//   tags = _.uniq(tags);

//   // Make tag pages
//   tags.forEach((tag) => {
//     const tagPath = `/tags/${_.kebabCase(tag)}/`;

//     createPage({
//       path: tagPath,
//       component: path.resolve(`src/templates/tags.js`),
//       context: {
//         tag,
//       },
//     });
//   });
// }
