import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import Button from './shared/button';

import './headerBanner.css';

function HeaderBanner({ bannerText }) {
  return (
    <div className="main-header flex justify-between items-center min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-2/3">
          <h1 className="text-tezos-dark font-semibold text-5xl leading-normal mb-3">
            {bannerText}
          </h1>
          <Button
            title="Sing up"
            className="bg-tezos-blue text-white px-8 py-3"
          />
        </div>
        <div className="">
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
