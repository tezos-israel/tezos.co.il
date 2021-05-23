import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import RecentPosts from '../components/recentPosts';

function Blogs({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const recentPosts = edges.map((item) => {
    return {
      slug: item.node.fields.slug,
      title: item.node.frontmatter.title,
      image: item.node.frontmatter.featuredImage,
      date: item.node.frontmatter.date,
      tags: item.node.frontmatter.tags,
      author: {
        username: item.node.frontmatter.authorFull.name,
        avatar: item.node.frontmatter.authorFull.image,
      },
    };
  });

  return (
    <Layout>
      <SEO title="Blog" />

      {/* <MostPopular popularBlogs={data.popularBlogs} /> */}

      <RecentPosts posts={recentPosts} />
    </Layout>
  );
}

Blogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export default Blogs;

export const pageQuery = graphql`
  query PostsTemplate {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "_blog-post" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            tags
            authorFull {
              name
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;
