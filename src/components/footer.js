import React from 'react';
import PropTypes from 'prop-types';

function Footer({ logo }) {
  return (
    <footer className="bg-tezos-dark text-white text-center py-8">
      <img src={logo} width={200} alt="Tezos Logo" className="inline-block" />
      <div className="mt-5 text-sm">
        © Copyright {new Date().getFullYear()}, Tezos Isreal - All Rights
        Reserved
      </div>
    </footer>
  );
}

Footer.propTypes = {
  logo: PropTypes.string,
};

export default Footer;
