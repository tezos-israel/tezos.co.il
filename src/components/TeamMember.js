import React from 'react';
import PropTypes from 'prop-types';
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

function TeamMember({ social, name, role, image }) {
  const socialList = Object.keys(social).map((key) => (
    <a key={key} href={social[key]} target="_blank" rel="noreferrer">
      {key === 'twitter' && <FaTwitter />}
      {key === 'linkedin' && <FaLinkedinIn />}
      {key === 'telegram' && <FaTelegramPlane />}
    </a>
  ));

  return (
    <div className="flex flex-col items-center text-tezos-blue museo p-1 lg:w-1/3 md:w-1/3 w-full mb-4">
      <img src={image} className="w-48 h-48 rounded-full m-6" alt={name} />
      <div className="text-center mb-4">
        <p className="text-xl font-bold font-museo">{name}</p>
        <p className="text-xs font-light">{role}</p>
      </div>
      <div className="flex space-x-2">{socialList}</div>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
  social: PropTypes.objectOf({
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    telegram: PropTypes.string,
  }),
};

export default TeamMember;
