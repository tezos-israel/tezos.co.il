import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function footer() {
  return (
    <footer className="bg-tezos-dark text-white text-center py-8">
      <StaticImage
        src="../images/logo_blue.svg"
        width={57.87}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
      />
      <div className="mt-5 text-sm">
        © Copyright {new Date().getFullYear()}, Tezos Isreal - All Rights
        Reserved
      </div>
    </footer>
  );
}

export default footer;
