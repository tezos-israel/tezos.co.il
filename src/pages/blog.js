/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import RecentPosts from '../components/recentPosts';
import FeaturedPost from '../components/FeaturedPost';

function Blog({
  data: {
    recentPosts: { edges },
    featuredPost: featuredPostQueryResult,
  },
}) {
  if (edges.length === 0) {
    return (
      <Layout>
        <SEO title="Blog" />
        <div className="md:max-w-7xl max-w-full mx-auto py-9 text-center">
          No posts published yet
        </div>
      </Layout>
    );
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

  const featuredPost =
    featuredPostQueryResult.nodes.length > 0
      ? featuredPostQueryResult.nodes[0]
      : edges[0].node;

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

Blog.propTypes = {
  data: PropTypes.shape({
    recentPosts: PropTypes.shape({
      edges: PropTypes.array,
    }),
    featuredPost: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          fields: PropTypes.shape({
            slug: PropTypes.string.isRequired,
          }),
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default Blog;

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
      nodes {
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
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
