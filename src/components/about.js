import React from 'react';
import PropTypes from 'prop-types';
function About({ title, content, image }) {
  return (
    <div className="sm:py-20 py-10 xl:px-0 px-7 bg-tezos-blue text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center xl:text-4xl lg:text-3xl text-2xl xl:leading-normal font-semibold mb-7 font-museo">
          {title}
        </h2>
        <div className="flex items-center">
          <div className="sm:text-xl text-md  xl:w-2/3 lg:w-3/5 w-3/4 leading-normal">
            {content}
          </div>
          <div className="text-right xl:w-1/3 lg:w-2/5 w-1/4">
            <img
              src={image}
              width="200"
              className="max-w-full float-right"
              alt={title}
            />
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
