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
