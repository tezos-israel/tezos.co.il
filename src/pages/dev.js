import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { FaGlobeAmericas, FaCodeBranch } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';

function Blog() {
  return (
    <Layout>
      <SEO title="Dev Tools" />
      <div className="bg-tezos-dark py-7">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl text-center font-museo">
            Dev Tools
          </h2>
          <div className="lg:w-2/3 md:w-2/3 mx-auto flex lg:flex-row md:flex-row flex-col my-14 lg:px-0 md:px-0 px-8">
            <div className="bg-white bg-opacity-20 text-center text-white w-full lg:mx-2 md:mx-2 p-8 rounded-3xl lg:mb-0 md:mb-0 mb-5">
              <StaticImage
                src="../images/dev_portal.svg"
                width={57.87}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Dev portal icon"
              />
              <h3 className="font-museo text-xl mt-5">Dev Portal</h3>
              <p className="text-gray-100 opacity-70 text-sm my-5">
                The Official Tezos Developer Portal.
              </p>
              <a
                href="https://developers.tezos.com/"
                className="inline-block bg-tezos-blue text-white rounded-full lg:py-3 lg:px-8 md:py-3 md:px-8 py-2 px-6 text-sm"
              >
                View Details
              </a>
            </div>

            <div className="bg-white bg-opacity-20 text-center text-white w-full lg:mx-2 md:mx-2 p-8 rounded-3xl">
              <StaticImage
                src="../images/deep_dev.svg"
                width={57.87}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Deep dive icon"
              />
              <h3 className="font-museo text-xl mt-5"> Deep Dive on Tezos</h3>
              <p className="text-gray-100 opacity-70 text-sm my-5">
                Here you will learn more about the Tezos Project
              </p>
              <a
                href="https://opentezos.com/"
                className="inline-block bg-tezos-blue text-white rounded-full lg:py-3 lg:px-8 md:py-3 md:px-8 py-2 px-6 text-sm"
              >
                View Details
              </a>
            </div>
          </div>

          <div className="text-center text-white mt-12 lg:px-0 md:px-0 px-7">
            <h2 className="text-2xl font-museo">Smart Contracts Examples </h2>
            <p className="my-8">
              We’ve Built an edu website that has a list of smart contract
              examples with it’s source code
            </p>
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center">
              <a
                href="http://edu.tezos.co.il/"
                className="inline-flex w-60 text-center my-auto items-center justify-center bg-tezos-blue text-white rounded-full py-3 px-8 text-sm lg:mr-6 md:mr-4 lg:mb-0 md:mb-0 mb-5"
              >
                <FaGlobeAmericas className="mr-2 text-xl" /> Visit our edu
                website
              </a>
              <a
                href="https://gitlab.com/tezosisrael/smart-contracts-examples"
                className="inline-flex w-60 text-center my-auto items-center justify-center bg-white bg-opacity-20 text-white rounded-full py-3 px-8 text-sm"
              >
                <FaCodeBranch className="mr-2 text-xl" /> Check our Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
