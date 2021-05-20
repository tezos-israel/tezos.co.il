import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RecentlyPosts from '../components/recentPosts';
import RelatedPosts from '../components/relatedPosts';
import '../styles/blog-post.css';
function BlogPost({ data }) {
  const post = data.post;

  const recentPosts = transformPosts(data.recentPosts.nodes);

  const relatedBlogs = transformPosts(post.related);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';
  const siteUrl = typeof window !== 'undefined' ? window.location.host : '';
  const title = `Read ${data.post.frontmatter.title} `;
  const tags = data.post.frontmatter.tags;
  const cardUrl = `${siteUrl}${post.frontmatter.authorFull.image.publicURL}`;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} cardUrl={cardUrl} />

      <div className="border-t border-gray-100 mt-2 py-6">
        <div className="max-w-7xl mx-auto xl:px-3 px-7">
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
                <img
                  src={post.frontmatter.authorFull.image.publicURL}
                  alt={post.frontmatter.authorFull.name}
                />
              </div>
            </div>
            <div className="absolute right-0 lg:-top-10 lg:bottom-auto sm:-top-10 sm:bottom-auto -bottom-10 flex items-center text-sm">
              <div className="mr-3">Share post on</div>
              <div className="flex">
                <FacebookShareButton url={postUrl}>
                  <span className="bg-gray-300 text-tezos-blue hover:text-tezos-dark w-7 h-7 rounded-full flex justify-center items-center mr-2">
                    <FaFacebookF />
                  </span>
                </FacebookShareButton>

                <TwitterShareButton url={postUrl} title={title} hashtags={tags}>
                  <span className="bg-gray-300 text-tezos-blue hover:text-tezos-dark w-7 h-7 rounded-full flex justify-center items-center mr-2">
                    <FaTwitter />
                  </span>
                </TwitterShareButton>

                <LinkedinShareButton url={postUrl}>
                  <span className="bg-gray-300 text-tezos-blue hover:text-tezos-dark w-7 h-7 rounded-full flex justify-center items-center">
                    <FaLinkedinIn />
                  </span>
                </LinkedinShareButton>
              </div>
            </div>
            <div className="lg:h-96 sm:h-96 h-48 rounded-md overflow-hidden">
              <img
                src={post.frontmatter.featuredImage.publicURL}
                className="rounded-md margin-auto w-full"
                alt={post.frontmatter.title}
              />
            </div>
          </div>

          <div className="flex flex-wrap mt-12">
            <div
              className="blog-content lg:w-2/3 w-full"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
            <div className="lg:w-1/3 w-full xl:mt-0 lg:mt-0 mt-4">
              <RelatedPosts posts={relatedBlogs} />
            </div>
          </div>
        </div>
      </div>

      <RecentlyPosts posts={recentPosts} limit={3} />
    </Layout>
  );
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
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
          image: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }).isRequired,
      }),
      related: PropTypes.array.isRequired,
    }),
    recentPosts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
          image {
            publicURL
          }
        }
      }
      related {
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
            image {
              publicURL
            }
          }
        }
      }
    }
    recentPosts: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "_blog-post" } }
        fields: { slug: { ne: $slug } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
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
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;

function transformPosts(posts) {
  return posts.map((post) => {
    return {
      slug: post.fields.slug,
      title: post.frontmatter.title,
      image: post.frontmatter.featuredImage.publicURL,
      date: post.frontmatter.date,
      tags: post.frontmatter.tags,
      author: {
        username: post.frontmatter.authorFull.name,
        avatar: post.frontmatter.authorFull.image.publicURL,
      },
    };
  });
}
