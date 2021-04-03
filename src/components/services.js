import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from './shared/button';

function Services() {
  return (
    <div className="max-w-7xl mx-auto py-20 text-center">
      <h2 className="text-tezos-blue font-semibold mb-14 text-3xl leading-normal">
        We are constantly developing new technology and work with our partners
        to understand the potential advantages of Tezos, and through our R&D
        center, create new innovative ways for their practical business use
        cases.
      </h2>

      <div className="flex justify-around -m-5">
        <div className="shadow-3xl shadwo-tezos-blue bg-white p-10 rounded-xl m-5 w-full">
          <div>
            <StaticImage
              src="../images/corporates_icon.svg"
              width={100}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Corporates icon"
            />
            <h4 className="font-semibold text-xl text-tezos-blue mt-5">
              Corporates
            </h4>
            <p className="text-tezos-dark text-md my-5 ">
              We work with our clients to create groundbreaking innovative
              solutions that will serve their global customer base.
            </p>
          </div>
          <Button title="Learn More" className="bg-tezos-blue text-white" />
        </div>
        <div className="shadow-3xl shadwo-tezos-blue bg-white p-10 rounded-xl m-5 w-full">
          <div>
            <StaticImage
              src="../images/startups_icon.svg"
              width={100}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Startups icon"
            />
            <h4 className="font-semibold text-xl text-tezos-blue mt-5">
              Startups
            </h4>
            <p className="text-tezos-dark text-md my-5 ">
              Tezos Israel is always looking for talented teams and
              entrepreneurs to build great ventures and join the Tezos
              ecosystem.
            </p>
          </div>
          <Button title="Learn More" className="bg-tezos-blue text-white" />
        </div>
        <div className="shadow-3xl shadwo-tezos-blue bg-white p-10  rounded-xl m-5 w-full">
          <div>
            <StaticImage
              src="../images/governments_icon.svg"
              width={80}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Governments icon"
            />
            <h4 className="font-semibold text-xl text-tezos-blue mt-5">
              Governments
            </h4>
            <p className="text-tezos-dark text-md my-5 ">
              Tezos Israel aims to help create solutions that impact countries
              and cities worldwide.
            </p>
          </div>
          <Button
            title="Learn More"
            className="bg-tezos-blue text-white w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
