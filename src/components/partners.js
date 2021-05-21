import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Partners({ partnersList }) {
  return (
    <div className="text-center max-w-7xl mx-auto pt-7">
      <div className="flex justify-center items-center">
        {partnersList.map((item, index) => {
          console.log(item);
          return (
            <a href={item.url} key={index} target="_blank" rel="noreferrer">
              <GatsbyImage image={getImage(item.partnerImage)} alt={item.url} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

Partners.propTypes = {
  partnersList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      partnerImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.object,
        }),
      }),
    })
  ),
};

export default Partners;
