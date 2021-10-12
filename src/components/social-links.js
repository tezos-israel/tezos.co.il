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

function SocialLinks({ email, socialItems }) {
  return (
    <div
      className={classnames(
        'sm:text-left flex flex-col space-y-2 xsm:hidden sm:inline'
      )}
    >
      <a
        href={`mailto:${email}`}
        className="text-blue-300 flex items-center justify-center"
      >
        <FaEnvelope className="mr-2 text-xl" /> {email}
      </a>

      <div className="text-blue-300 flex justify-center sm:w-1/3 text-2xl mt-6 mx-auto space-x-4">
        {socialItems.map((item, index) => {
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
  email: PropTypes.string.isRequired,
  socialItems: PropTypes.array.isRequired,
};

export default SocialLinks;
