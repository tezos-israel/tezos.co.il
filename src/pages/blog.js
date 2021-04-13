import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RecentlyPosts from '../components/recentlyPosts';
import RelatedPosts from '../components/relatedPosts';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import data from '../data/data.json';

function Blog() {
  return (
    <Layout>
      <SEO title="Blog title" />

      <div className="border-t border-gray-100 mt-2 py-6">
        <div className="max-w-7xl mx-auto xl:px-0 px-7">
          <div className="text-center  ">
            <span className="bg-tezos-blue bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-xs capitalize">
              Devs
            </span>
            <h2 className="font-museo text-xl xl:w-1/4 lg:w-1/3 md:w-3/4 mx-auto my-4">
              Why “Proof of Stake” Blockchain Solutions Are Best for Busineses
            </h2>
          </div>
          <div className="relative mt-24">
            <div className="absolute right-0 left-0 -top-20 mx-auto  flex-col text-center w-auto">
              <div className="text-sm mb-3">
                <h4>Alex</h4>
                <div className="text-black text-opacity-50">24.8.2021</div>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                <img src="https://pbs.twimg.com/profile_images/1352350142393966592/j5oUEbAP_400x400.jpg" />
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
                src="https://cdn.lifehack.org/wp-content/uploads/2015/01/workstation-405768_1280.jpg"
                className="rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-wrap mt-12">
            <div className="lg:w-2/3 w-full">
              While the Proof of Work (PoW) consensus mechanism was implemented
              in the first successful blockchain, the system suffers from a
              myriad of issues when applying the technology for commercial
              business use. Designed specifically for business use cases, the
              next generation of blockchains called Proof of Stake (PoS) is now
              available and ready for deployment. But what is PoS, and why is it
              better for businesses than PoW? In a Proof of Work system,
              computers (miners) seeking to validate transactions must first
              compete against one another in a race to solve a cryptographic
              puzzle. The first computer which solves the puzzle earns the right
              to validate the transaction for that block (hence the term Proof
              of Work), and earns a reward as compensation. As time goes on, and
              more computers join the network, the cryptographic puzzle becomes
              more difficult, and one must add more computing power in order to
              compete. So while PoW enables a secure network, there are many
              drawbacks as well. To begin, PoW is an energy intensive process,
              so much so that PoW blockchains consume more electricity than the
              country of Switzerland. The increased need to compete with
              computing power leads miners to constantly spend money to upgrade
              their computers and group together their computing power in mining
              pools, leading to a more centralized network. Right now, 70% of
              the largest PoW blockchain’s computing power is controlled by just
              5 mining pools concentrated in China, a worrying thought
              considering that 51% is needed to attack the network. Lastly, PoW
              is limited in its transaction speed, being able to process 7-15
              transactions per second, a small amount when you think about how
              Visa processes 1,700 transactions per second. So, what if I told
              you there was a way to have increased decentralization, no need to
              upgrade hardware, and faster transactions without the heavy
              electricity use? Let’s take a dive into the next generation of
              blockchain consensus mechanisms called Proof of Stake. To begin,
              the basic model of Proof of Stake relies on an algorithm to
              randomly choose the next validator, rather than wastefully
              expending resources in a competition. In order to become a
              validator, users deposit a “stake” of digital assets as a bond
              into the network, and the larger the stake is, the higher the
              probability their node will be chosen to validate transactions.
              The bond also works which acts as a security deposit against
              malicious behavior, by making sure the validator has “skin in the
              game”. This way, if a validator attempts to authorize a fraudulent
              transaction, they are penalized by losing their bond. So why is
              Proof of Stake more advantageous for businesses? Reduced Energy
              Consumption While some Russian nuclear power plants are renting
              space to PoW mining farms, businesses that want to operate nodes
              on PoS systems will be able to do so for just pennies on the
              dollar. A computer wanting to validate transactions simply
              requires staying powered on & connected to the network, which
              means a dramatic cost savings. Leaving a MacBook Pro on 24/7 would
              only cost about $47 per month, without needing to set up a
              $50,000,000 wind farm in order to power the operation, as one PoW
              based company has done in Texas. For companies looking to build a
              blockchain based system, and run it’s own node to cover
              transaction costs, this is a huge savings towards their costs of
              goods sold (COGS). Businesses will even be able to market their
              PoS system as a green alternative to energy sapping PoW networks.
              Blockchain based carbon credits anyone? Less Hardware Requirements
              & Maintenance A PoS node only requires one computer rather than
              hundreds of machines currently needed for PoW. As the bond
              placement is digital rather than a physical expenditure, companies
              can set up just one computer to run a node rather than an entire
              warehouse full of computers. PoW nodes require hundreds if not
              thousands of specialized computers in order to remain cash flow
              positive, and the latest models are costing $1500 per machine. So
              rather than spending capital on upfront computer costs, businesses
              can put their capital towards increasing their bond or elsewhere.
              Furthermore, if a company wants to expand their operation they
              just need to increase the size of their bond rather than spending
              thousands on extra hardware. The growing difficulty of PoW
              networks means businesses must spend capital on constantly
              upgrading to more powerful machines, which makes older machines
              obsolete & unprofitable. On PoS, companies can just increase the
              size of their bond if they want to increase their validating
              capability. The reverse is beneficial as well, if companies want
              to decrease their operation, they may do so without having to sell
              used computers on the secondhand market, but rather withdrawing a
              portion of their stake from the network. Increased
              Decentralization & Security As companies have less hardware
              requirements and annual maintenance costs, this lowers the barrier
              of entry for new validators to run a node. The net result is a
              more robust, secure, and decentralized, with one current PoS
              system currently running almost 500 nodes worldwide. This
              increased level of decentralization brings an added layer of
              security, by highly decreasing the probability in which a
              consortium or cartel may band together and wreak havoc on the
              network with a 51% attack. On a PoS network, a malicious attacker
              would need to own more than 51% of the funds of the network rather
              than controlling 51% of the computing power, making attacks a much
              more expensive venture. Faster Transaction Times Lastly, PoS
              allows for faster transaction rates by eliminating the wasted
              competition, and streamlining the validation process. PoS systems
              are running at more than 100 transactions per second (TPS) and can
              theoretically reach over 30,000 TPS, rather than 7-15 TPS with 10
              minute block times on PoW. Imagine paying for a coffee on a PoW
              network, and having to wait 10 minutes for your payment
              confirmation. It is simply not practical for mainstream use. The
              ability to transact in real time allows for the creation of
              financial applications to thrive on PoS systems, such as digitized
              currency, private equity, and more. So there you have it, not only
              is Proof of Stake more advantageous for businesses to utilize, but
              it is also more convenient for their clients and the environment.
              PoS offers a more energy efficient system that is more secure,
              highly decentralized, and offers near instant settlement times. If
              you’re a business looking to build on a blockchain network, then
              Proof of Stake is for you.
            </div>
            <div className="lg:w-1/3 w-full xl:mt-0 lg:mt-0 mt-4">
              {data.recentlyBlogs && (
                <RelatedPosts recentlyBlogs={data.recentlyBlogs} />
              )}
            </div>
          </div>
        </div>
      </div>

      {data.recentlyBlogs && (
        <RecentlyPosts recentlyBlogs={data.recentlyBlogs} />
      )}
    </Layout>
  );
}

export default Blog;
