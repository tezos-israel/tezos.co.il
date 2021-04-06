import React from 'react';
import PropTypes from 'prop-types';

function Partners({ partnersList }) {
  return (
    <div className="text-center max-w-7xl mx-auto pt-7">
      <div className="flex justify-center items-center">
        {partnersList.map((item, index) => {
          return (
            <a href={item.url} key={index}>
              <img src={item.image} width="300" />
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
      image: PropTypes.string,
    })
  ),
};

export default Partners;
