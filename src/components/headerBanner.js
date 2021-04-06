import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Button from './shared/button';

import './headerBanner.css';

function HeaderBanner({ bannerText }) {
  return (
    <div className="main-header flex justify-between items-center lg:min-h-screen sm:min-h-half lg:mt-0 sm:mt-32 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center xl:px-0 sm:px-10">
        <div className="sm:w-2/3 w-full sm:text-left sm:px-0 px-3 text-center">
          <h1 className="text-tezos-dark font-semibold xl:text-5xl lg:text-4xl sm:text-3xl text-2xl xl:leading-normal lg:leading-normal mb-8 font-museo">
            {bannerText}
          </h1>
          <Button
            title="Sign up"
            className="bg-tezos-blue text-white px-8 py-3"
          />
        </div>
        <div className="lg:block sm:block hidden sm:w-1/3 sm:mt-5">
          <StaticImage
            src="../images/tezos_machine.svg"
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Tezos Machine"
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
HeaderBanner.propTypes = {
  bannerText: PropTypes.string,
};
export default HeaderBanner;
