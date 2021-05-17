import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RecentlyPosts from '../components/recentlyPosts';
import RelatedPosts from '../components/relatedPosts';

import Data from '../data/data.json';

function BlogPost({ data }) {
  const post = data.markdownRemark;
  const SeoData = Data.configs;
  const recentlyBlogs = data.allMarkdownRemark.edges.map((item) => {
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

  let relatedBlogs = [];

  data.allMarkdownRemark.edges.forEach((item) => {
    if (
      post.frontmatter.tags.some((i) =>
        item.node.frontmatter.tags.includes(i)
      ) &&
      item.node.frontmatter.title !== post.frontmatter.title
    ) {
      relatedBlogs.push({
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
      });
    }
  });

  return (
    <Layout>
      <SEO
        title="Blog title"
        description={SeoData.description}
        lang={SeoData.lang}
        meta={SeoData.meta}
      />

      <div className="border-t border-gray-100 mt-2 py-6">
        <div className="max-w-7xl mx-auto xl:px-0 px-7">
          <div className="text-center  ">
            <span className="bg-tezos-blue bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-xs capitalize">
              {post.frontmatter.tags}
            </span>
            <h2 className="font-museo text-xl xl:w-3/4 lg:w-2/3 md:w-3/4 mx-auto my-4">
              {post.frontmatter.title}
            </h2>
          </div>
          <div className="relative mt-24">
            <div className="absolute right-0 left-0 -top-20 mx-auto  flex-col text-center w-auto">
              <div className="text-sm mb-3">
                <h4>{post.frontmatter.authorFull.name}</h4>
                <div className="text-black text-opacity-50">
                  {format(new Date(post.frontmatter.date), 'MM-dd-yyyy')}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                <img src={post.frontmatter.authorFull.authorimage.publicURL} />
              </div>
            </div>
            <div className="absolute right-0 lg:-top-10 lg:bottom-auto sm:-top-10 sm:bottom-auto -bottom-10 flex items-center text-sm">
              <div className="mr-3">Share post on</div>
              <div className="flex">
                <a
                  href=""
                  className="bg-gray-300 text-tezos-blue hover:text-tezos-dark w-7 h-7 rounded-full flex justify-center items-center"
                >
                  <FaTwitter />
                </a>
                <a
                  href=""
                  className="bg-gray-300 text-tezos-blue hover:text-tezos-dark w-7 h-7 rounded-full flex justify-center items-center mx-2"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  className="bg-gray-300 text-tezos-blue hover:text-tezos-dark w-7 h-7 rounded-full flex justify-center items-center"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="lg:h-96 sm:h-96 h-48 rounded-md  overflow-hidden">
              <img
                src={post.frontmatter.featuredImage.publicURL}
                className="rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-wrap mt-12">
            <div
              className="lg:w-2/3 w-full"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
            <div className="lg:w-1/3 w-full xl:mt-0 lg:mt-0 mt-4">
              <RelatedPosts recentlyBlogs={relatedBlogs} />
            </div>
          </div>
        </div>
      </div>

      <RecentlyPosts recentlyBlogs={recentlyBlogs} limit={3} />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        tags: PropTypes.array,
        featuredImage: PropTypes.shape({
          publicURL: PropTypes.string,
        }).isRequired,
        authorFull: PropTypes.shape({
          name: PropTypes.string,
          authorimage: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }).isRequired,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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

export default BlogPost;
