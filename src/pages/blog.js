import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RecentlyPosts from '../components/recentlyPosts';
import RelatedPosts from '../components/relatedPosts';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import data from '../data/data.json';

function Blog() {
  const blogData = data.blog;
  return (
    <Layout>
      <SEO title="Blog title" />

      <div className="border-t border-gray-100 mt-2 py-6">
        <div className="max-w-7xl mx-auto xl:px-0 px-7">
          <div className="text-center  ">
            <span className="bg-tezos-blue bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-xs capitalize">
              {blogData.type}
            </span>
            <h2 className="font-museo text-xl xl:w-1/4 lg:w-1/3 md:w-3/4 mx-auto my-4">
              {blogData.title}
            </h2>
          </div>
          <div className="relative mt-24">
            <div className="absolute right-0 left-0 -top-20 mx-auto  flex-col text-center w-auto">
              <div className="text-sm mb-3">
                <h4>{blogData.author.name}</h4>
                <div className="text-black text-opacity-50">
                  {blogData.createdDate}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                <img src={blogData.author.avatar} />
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
              <img src={blogData.imageURL} className="rounded-md" />
            </div>
          </div>

          <div className="flex flex-wrap mt-12">
            <div className="lg:w-2/3 w-full">{blogData.content}</div>
            <div className="lg:w-1/3 w-full xl:mt-0 lg:mt-0 mt-4">
              <RelatedPosts recentlyBlogs={data.recentlyBlogs} />
            </div>
          </div>
        </div>
      </div>

      <RecentlyPosts recentlyBlogs={data.recentlyBlogs} />
    </Layout>
  );
}

export default Blog;
