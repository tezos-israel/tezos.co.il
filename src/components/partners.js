import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Partners() {
  return (
    <div className="text-center max-w-7xl mx-auto pt-7">
      {/* TODO: This will replaced with the plugin used in owr old website */}
      <div className="flex justify-center items-center">
        <a href="">
          <StaticImage
            src="../images/logo_long_bleu_couleur-1.png"
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Tezos Logo"
          />
        </a>
        <a href="">
          <StaticImage
            src="../images/tf_logo.png"
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Tezos Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Partners;
