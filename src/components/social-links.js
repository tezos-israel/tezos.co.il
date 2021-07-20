import React from 'react';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaRss,
} from 'react-icons/fa';

import socialData from '../../data/settings/socials.yml';

function SocialLinks({ role }) {
  return (
    <div
      className={classnames(
        'sm:text-left flex flex-col space-y-2 xsm:hidden sm:inline',
        {
          'relative self-center right-8': role === 'footer',
          'mx-8': role === 'header',
        }
      )}
    >
      <a
        href={`mailto:${socialData.email}`}
        className="text-tezos-blue flex items-center justify-center"
      >
        <FaEnvelope className="mr-2 text-xl" /> {socialData.email}
      </a>

      <div className="text-tezos-blue flex justify-center sm:w-1/3 text-2xl mt-6 mx-auto space-x-4">
        {socialData.socialItems.map((item, index) => {
          return (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              {item.type === 'facebook' && <FaFacebookF />}
              {item.type === 'linkedin' && <FaLinkedinIn />}
              {item.type === 'instagram' && <FaInstagram />}
              {item.type === 'telegram' && <FaTelegramPlane />}
              {item.type === 'twitter' && <FaTwitter />}
              {item.type === 'rss' && <FaRss />}
            </a>
          );
        })}
      </div>
    </div>
  );
}

SocialLinks.propTypes = {
  role: PropTypes.string,
};

export default SocialLinks;
