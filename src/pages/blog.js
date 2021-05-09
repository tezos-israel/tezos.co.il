import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import RecentlyPosts from '../components/recentlyPosts';

import data from '../data/data.json';

function Blogs({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Layout>
      <SEO
        title="Blogs"
        description={data.configs.description}
        lang={data.configs.lang}
        meta={data.configs.meta}
      />

      {/* <MostPopular popularBlogs={data.popularBlogs} /> */}

      <RecentlyPosts recentlyBlogs={edges} />
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
            featuredimage {
              publicURL
            }
            tags
          }
        }
      }
    }
  }
`;
