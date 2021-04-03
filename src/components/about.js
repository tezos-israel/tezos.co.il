import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function About() {
  return (
    <div className="py-20 bg-tezos-blue text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-7">
          Tezos stands as the world leader in blockchain technology with
          institutional grade security standards.
        </h2>
        <div className="flex items-center">
          <div className="text-xl w-2/3 leading-normal">
            <p>
              <b>As the world’s fully democratic blockchain,</b> the Tezos
              open-source platform, has an ever-growing community and ecosystem
              with to go along with it.
            </p>
            <p className="mt-3">
              <b>Due to its ethical approach</b> it is already used and
              supported by the French and Singaporean Governments, French
              Military, and over 50 startups and projects worldwide.
            </p>
          </div>
          <div className="text-right w-1/3">
            <StaticImage
              src="../images/about_tezos.svg"
              width={200}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="about tezos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
