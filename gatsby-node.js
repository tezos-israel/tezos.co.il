const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { kebabCase } = require('lodash');

exports.createPages = async function createPages({
  actions: { createPage },
  graphql,
  reporter,
}) {
  const result = await graphql(`
    {
      posts: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "_blog-post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    return reporter.panic(result.errors);
  }

  // create posts
  result.data.posts.edges.forEach(({ node }) => {
    const { id } = node;
    const slug = node.fields.slug;
    createPage({
      path: slug,
      component: path.resolve('src/templates/blog-post.js'),
      // additional data can be passed via context
      context: {
        id,
        slug,
      },
    });
  });
  // Tag pages:
  // createTagPages(posts, createPage);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'MarkdownRemark' &&
    node.frontmatter.templateKey === '_blog-post'
  ) {
    const filePath = createFilePath({ node, getNode });
    const value = `/blog/${kebabCase(node.frontmatter.category)}${filePath}`;

    createNodeField({
      name: 'slug',
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
                    published: { eq: true },
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
