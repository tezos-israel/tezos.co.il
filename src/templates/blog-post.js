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
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RecentPosts from '../components/recentPosts';
import RelatedPosts from '../components/relatedPosts';
import '../styles/blog-post.css';
function BlogPost({ data }) {
  const post = data.post;

  const recentPosts = transformPosts(data.recentPosts.nodes);

  const relatedBlogs = transformPosts(post.related);
  const postUrl = typeof window !== 'undefined' ? window.location.href : '';
  const tags = post.frontmatter.tags;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.featuredImage.publicURL}
        description={post.frontmatter.description}
      />

      <div className="border-t border-gray-100 mt-2 py-6">
        <div className="max-w-7xl mx-auto xl:px-3 px-7">
          <div className="text-center">
            {tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="bg-tezos-blue bg-opacity-20 mx-2 py-1 px-2 rounded-full text-tezos-blue text-xs capitalize"
                >
                  {item}
                </span>
              );
            })}
            <h2 className="font-museo text-xl xl:w-3/4 lg:w-2/3 md:w-3/4 mx-auto my-4">
              {post.frontmatter.title}
            </h2>
          </div>
          <div className="relative mt-24">
            <div className="absolute right-0 left-0 -top-20 mx-auto  flex-col text-center w-max z-10">
              <div className="text-sm mb-3">
                <h4>{post.frontmatter.authorFull.name}</h4>
                <div className="text-black text-opacity-50">
                  {format(new Date(post.frontmatter.date), 'yyyy-MM-dd')}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                <GatsbyImage
                  image={getImage(post.frontmatter.authorFull.image)}
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

                <TwitterShareButton
                  url={postUrl}
                  title={`Read ${post.frontmatter.title} `}
                  hashtags={tags || ['tezos']}
                >
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
              <GatsbyImage
                image={getImage(post.frontmatter.featuredImage)}
                alt={post.frontmatter.title}
                className="rounded-md margin-auto w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap mt-12">
            <div
              className="blog-content lg:w-2/3 w-full"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
            <div className="lg:w-1/3 w-full xl:mt-0 lg:mt-0 mt-4">
              <RelatedPosts posts={relatedBlogs} limit={3} />
            </div>
          </div>
        </div>
      </div>

      <RecentPosts posts={recentPosts} limit={3} />
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
        description: PropTypes.string.isRequired,
        authorFull: PropTypes.shape({
          name: PropTypes.string,
          image: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
          email: PropTypes.string,
        }).isRequired,
      }),
      related: PropTypes.array.isRequired,
    }),
    recentPosts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        category
        title
        date
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        tags
        authorFull {
          name
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          email
        }
        description
      }
      related {
        fields {
          slug
        }
        frontmatter {
          category
          title
          date
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          tags
          authorFull {
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
          category
          title
          date
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
            email
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
      image: post.frontmatter.featuredImage,
      date: post.frontmatter.date,
      tags: post.frontmatter.tags,
      author: {
        name: post.frontmatter.authorFull.name,
        image: post.frontmatter.authorFull.image,
        email: post.frontmatter.authorFull.email,
      },
      category: post.frontmatter.category,
    };
  });
}
