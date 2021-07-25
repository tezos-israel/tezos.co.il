import React from 'react';
import PropTypes from 'prop-types';
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function TeamMember({ social, name, role, image }) {
  return (
    <div className="flex flex-col items-center text-tezos-blue museo p-1 lg:w-1/3 md:w-1/3 w-full mb-4">
      <GatsbyImage
        image={getImage(image)}
        alt={name}
        className="w-48 h-48 rounded-full m-6"
      />
      <div className="text-center mb-4">
        <p className="text-xl font-bold font-museo">{name}</p>
        <p className="text-s">{role}</p>
      </div>
      <div className="flex space-x-2">
        {social.map((item) => (
          <a
            key={item.socialNetwork}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            {item.socialNetwork === 'twitter' && <FaTwitter />}
            {item.socialNetwork === 'linkedin' && <FaLinkedinIn />}
            {item.socialNetwork === 'telegram' && <FaTelegramPlane />}
          </a>
        ))}
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.object.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      socialNetwork: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default TeamMember;
