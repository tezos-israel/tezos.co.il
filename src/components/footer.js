import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './social-links';

function Footer({ logo }) {
  return (
    <footer className="bg-tezos-dark text-white text-center py-8 flex">
      <div className="flex flex-col w-full">
        <img
          src={logo}
          width={200}
          alt="Tezos Logo"
          className="inline-block self-center"
        />
        <div className="mt-5 text-sm">
          © Copyright {new Date().getFullYear()}, Tezos Isreal - All Rights
          Reserved
        </div>
      </div>
      <SocialLinks role="footer" />
    </footer>
  );
}

Footer.propTypes = {
  logo: PropTypes.string,
};

export default Footer;
