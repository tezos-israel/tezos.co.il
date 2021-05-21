import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function About({ title, content, image }) {
  return (
    <div className="sm:py-20 py-10 xl:px-0 px-7 bg-tezos-blue text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center xl:text-4xl lg:text-3xl text-2xl xl:leading-normal font-semibold mb-7 font-museo">
          {title}
        </h2>
        <div className="flex items-center">
          <div className="sm:text-xl text-md  xl:w-2/3 lg:w-3/5 w-full leading-normal relative z-10">
            {content}
          </div>
          <div className="text-right xl:w-1/3 lg:w-2/5 w-1/4 sm:opacity-100 opacity-30 sm:relative absolute right-4">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              width={200}
              className="max-w-full float-right"
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
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      gatsbyImageData: PropTypes.object,
    }),
  }),
};

export default About;
