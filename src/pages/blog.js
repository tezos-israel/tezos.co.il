import React, { useState, useEffect } from 'react';
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
  const [recentlyBlogs, setRecentlyBlogs] = useState([]);
  const SeoData = Data.configs;

  useEffect(() => {
    prepareDate();
  }, []);
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

  function prepareDate() {
    let recentlyBlogs = [];

    edges.forEach((item) => {
      let node = item.node;
      recentlyBlogs.push({
        slug: node.fields.slug,
        title: node.frontmatter.title,
        image: node.frontmatter.featuredImage
          ? item.node.frontmatter.featuredImage.publicURL
          : '',
        date: node.frontmatter.date,
        tags: node.frontmatter.tags,
        author: node.frontmatter.author,
      });

      setRecentlyBlogs(recentlyBlogs);
    });
  }
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
            author
          }
        }
      }
    }
  }
`;
