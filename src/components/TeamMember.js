import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

function TeamMember({ social, name, role }) {
  return (
    <div className="flex flex-col items-center text-tezos-blue museo p-1 lg:w-1/3 md:w-1/3 w-full mb-4">
      <StaticImage
        src="../images/map.svg"
        className="w-48 h-48 rounded-full m-6"
        alt={name}
      />
      <div className="text-center mb-4">
        <p className="text-xl font-bold font-museo">{name}</p>
        <p className="text-xs font-light">{role}</p>
      </div>
      <div className="flex space-x-2">
        {social.map((item, index) => {
          return (
            <a key={index} href={item.url}>
              {item.type === 'twitter' && <FaTwitter />}
              {item.type === 'linkedin' && <FaLinkedinIn />}
              {item.type === 'telegram' && <FaTelegramPlane />}
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
  email: PropTypes.string,
  image: PropTypes.string,
  social: PropTypes.any,
};

export default TeamMember;
