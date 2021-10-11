import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import RecentPosts from '../components/recentPosts';
import FeaturedPost from '../components/FeaturedPost';

function Blogs({
  data: {
    recentPosts: { edges },
    featuredPost: featuredPostQueryResult,
  },
}) {
  if (featuredPostQueryResult.edges.length === 0) {
    throw new Error('must define a featured post');
  }

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

  const featuredPost = featuredPostQueryResult.edges[0];

  return (
    <Layout>
      <SEO title="Blog" />

      {/* <MostPopular popularBlogs={data.popularBlogs} /> */}

      <FeaturedPost
        url={featuredPost.fields.slug}
        title={featuredPost.frontmatter.title}
        author={featuredPost.frontmatter.author}
        image={featuredPost.frontmatter.image}
        date={featuredPost.frontmatter.date}
      />
      <RecentPosts posts={recentPosts} />
    </Layout>
  );
}

Blogs.propTypes = {
  data: PropTypes.shape({
    recentPosts: PropTypes.shape({
      edges: PropTypes.array,
    }),
    featuredPost: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default Blogs;

export const pageQuery = graphql`
  query PostsTemplate {
    featuredPost: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "_blog-post" }
          featuredPost: { eq: true }
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
        }
      }
    }
    recentPosts: allMarkdownRemark(
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
  }
`;
