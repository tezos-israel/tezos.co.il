import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { BlogLayout } from '../components/blog-layout';
import SEO from '../components/seo';
import PostsList from '../components/recentPosts';
// import MostPopular from '../components/mostPopular';

export default function PostsByTagPage({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { category },
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

  return (
    <BlogLayout title={`Posts for category "${category}"`}>
      <SEO title={`${category} | Blog`} />

      {/* <MostPopular posts={recentPosts} /> */}

      <PostsList posts={recentPosts} />
    </BlogLayout>
  );
}

PostsByTagPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    category: PropTypes.string,
  }),
};

export const pageQuery = graphql`
  query CategoryPosts($category: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "_blog-post" }
          published: { eq: true }
          category: { eq: $category }
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
