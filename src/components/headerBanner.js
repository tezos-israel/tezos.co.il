import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Button from './shared/button';

import './headerBanner.css';

function HeaderBanner({ bannerText }) {
  return (
    <div className="main-header flex justify-between items-center min-h-screen sm:mt-0 mt-7">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:w-2/3 w-full sm:text-left sm:px-0 px-3 text-center">
          <h1 className="text-tezos-dark font-semibold sm:text-5xl text-3xl leading-normal mb-3 ">
            {bannerText}
          </h1>
          <Button
            title="Sign up"
            className="bg-tezos-blue text-white px-8 py-3"
          />
        </div>
        <div className="sm:block hidden">
          <StaticImage
            src="../images/tezos_machine.svg"
            width={460.56}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Tezos Machine"
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
