import React from 'react';
import PropTypes from 'prop-types';

function Partners({ partnersData }) {
  return (
    <div className="text-center max-w-7xl mx-auto pt-7">
      {/* TODO: This will replaced with the plugin used in owr old website */}
      <div className="flex justify-center items-center">
        {partnersData.map((item, index) => {
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
  partnersData: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Partners;
