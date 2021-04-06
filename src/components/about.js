import React from 'react';
import PropTypes from 'prop-types';
function About({ title, content, image }) {
  return (
    <div className="sm:py-20 py-10 sm:px-0 px-7 bg-tezos-blue text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center sm:text-4xl text-2xl font-semibold mb-7">
          {title}
        </h2>
        <div className="flex items-center">
          <div className="sm:text-xl text-md w-2/3 leading-normal">
            {content}
          </div>
          <div className="text-right w-1/3">
            <img src={image} width="200" />
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default About;
