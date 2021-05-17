import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import RecentlyPosts from '../components/recentlyPosts';

import Data from '../data/data.json';

function Blogs({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const SeoData = Data.configs;

  const recentlyBlogs = edges.map((item) => {
    return {
      slug: item.node.fields.slug,
      title: item.node.frontmatter.title,
      image: item.node.frontmatter.featuredImage
        ? item.node.frontmatter.featuredImage.publicURL
        : '',
      date: item.node.frontmatter.date,
      tags: item.node.frontmatter.tags,
      author: {
        username: item.node.frontmatter.authorFull.name,
        avatar: item.node.frontmatter.authorFull.authorimage.publicURL,
      },
    };
  });

  return (
    <Layout>
      <SEO
        title="Blogs"
        description={SeoData.description}
        lang={SeoData.lang}
        meta={SeoData.meta}
      />

      {/* <MostPopular popularBlogs={data.popularBlogs} /> */}

      <RecentlyPosts recentlyBlogs={recentlyBlogs} />
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
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
              publicURL
            }
            tags
            authorFull {
              name
              authorimage {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
