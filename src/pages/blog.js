import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import RecentPosts from '../components/recentPosts';
import Featured from '../components/featured';

function Blogs({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const recentPosts = edges.map(
    ({
      node: {
        fields: { slug },
        frontmatter,
      },
    }) => {
      return {
        slug,
        ...frontmatter,
      };
    }
  );

  console.log(recentPosts[0]);

  return (
    <Layout>
      <SEO title="Blog" />

      {/* <MostPopular popularBlogs={data.popularBlogs} /> */}

      <Featured />
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
    reacentPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "_blog-post" }
          published: { eq: true }
        }
      }
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
            category
            title
            date
            image: featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            tags
            author: authorFull {
              name
              email
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
    featuredPost: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "_blog-post" }
          published: { eq: true }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            category
            title
            date
            image: featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            tags
            author: authorFull {
              name
              email
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
          html
        }
      }
    }
  }
`;
