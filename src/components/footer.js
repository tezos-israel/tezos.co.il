import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './social-links';

import socialData from '../../data/settings/socials.yml';

function Footer({ logo }) {
  return (
    <footer className="bg-tezos-dark text-white text-center py-8 flex">
      <div className="flex flex-col w-full space-y-5">
        <img
          src={logo}
          width={200}
          alt="Tezos Logo"
          className="inline-block self-center"
        />
        <SocialLinks
          role="footer"
          email={socialData.email}
          socialItems={socialData.socialItems}
        />
        <div className="text-sm">
          © Copyright {new Date().getFullYear()}, Tezos Israel - All Rights
          Reserved
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  logo: PropTypes.string,
};

export default Footer;
