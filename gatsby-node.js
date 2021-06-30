const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

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
            frontmatter {
              tags
              category
              authorFull {
                email
              }
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

  const {
    posts: { edges: posts },
  } = result.data;

  // create posts
  posts.forEach(({ node }) => {
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

  createTagPages(posts, createPage);
  createCategoryPages(posts, createPage);
  createAuthorPages(posts, createPage);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'MarkdownRemark' &&
    node.frontmatter.templateKey === '_blog-post'
  ) {
    const filePath = createFilePath({ node, getNode });
    const value = `/blog/${_.kebabCase(node.frontmatter.category)}${filePath}`;

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
            const category = source.frontmatter.category;

            //If this post has no categories, return an empty array
            if (!category || !category.length) {
              return [];
            }

            return context.nodeModel.runQuery({
              query: {
                filter: {
                  frontmatter: {
                    category: { eq: category },
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

function createTagPages(posts, createPage) {
  const tags = _.uniq(
    _.compact(
      posts.flatMap((edge) => {
        return _.get(edge, 'node.frontmatter.tags');
      })
    )
  );

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag)}`,
      component: path.resolve('src/templates/tags.js'),
      context: {
        tag,
      },
    });
  });
}

function createCategoryPages(posts, createPage) {
  const categories = _.uniq(
    _.compact(
      posts.flatMap((edge) => {
        return _.get(edge, 'node.frontmatter.category');
      })
    )
  );

  categories.forEach((category) => {
    createPage({
      path: `/blog/${_.kebabCase(category)}`,
      component: path.resolve(`src/templates/category.js`),
      context: {
        category,
      },
    });
  });
}

function createAuthorPages(posts, createPage) {
  const authors = _.uniq(
    _.compact(
      posts.flatMap((edge) => {
        return _.get(edge, 'node.frontmatter.authorFull.email');
      })
    )
  );

  authors.forEach((email) => {
    createPage({
      path: `/blog/authors/${email}`,
      component: path.resolve(`src/templates/author.js`),
      context: {
        author: email,
      },
    });
  });
}
