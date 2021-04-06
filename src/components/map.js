import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Map() {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <StaticImage
        src="../images/map.svg"
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Tezos Logo"
      />
    </div>
  );
}

export default Map;
