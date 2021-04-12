import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';

function TeamMember({ social, name, role }) {
  return (
    <div className="flex flex-col items-center text-tezos-blue museo p-1 w-1/3">
      <StaticImage
        src="../images/map.svg"
        alt="Sample"
        className="w-56 h-56 rounded-full m-6"
      />
      <div className="flex flex-col items-center m-4 space-y-2">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-xs font-light">{role}</p>
      </div>
      <div className="flex space-x-2">
        {social.map((item, index) => {
          return (
            <a key={index} href={item.url}>
              {item.type === 'twitter' && <FaTwitter />}
              {item.type === 'linkedin' && <FaLinkedinIn />}
              {item.type === 'telegram' && <FaTelegramPlane />}
              {item.type === 'facebook' && <FaFacebookF />}
              {item.type === 'instagram' && <FaInstagram />}
            </a>
          );
        })}
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.any,
  social: PropTypes.any,
};

export default TeamMember;
