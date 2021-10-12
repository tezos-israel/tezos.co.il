import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { format } from 'date-fns';

function FeaturedPost({ url, title, author, image, date, category, tags }) {
  return (
    <div className="bg-gray-100">
      <div className="md:max-w-7xl max-w-full mx-auto py-9">
        <div className="flex flex-col space-y-4">
          <div className="flex md:flex-row flex-col space-x-2 sm:rounded-md rounded-none bg-gray-300 lg:p-8 p-4 lg:shadow-md shadow-sm">
            <div className="lg:h-56 md:h-56 h-24 max-w-full m-auto rounded-md overflow-hidden">
              <Link to={url}>
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="rounded-md margin-auto lg:w-full lg:h-full h-48"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <Link to={url}>
                  <h2 className="font-museo text-xl xl:w-3/4 lg:w-2/3 md:w-3/4 mx-auto my-4">
                    {title}
                  </h2>
                </Link>
              </div>
              <Link to={`/blog/authors/${author.email}`} className="space-y-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                  <GatsbyImage
                    image={getImage(author.image)}
                    alt={author.name}
                  />
                </div>
                <div className="text-sm mb-3">
                  <h4>{author.name}</h4>
                  <div className="text-black text-opacity-50">
                    {format(new Date(date), 'yyyy-MM-dd')}
                  </div>
                </div>
              </Link>
              <div className="mt-1 space-x-3">
                <Link
                  to={`/blog/${_.kebabCase(category)}`}
                  className="bg-indigo-400 bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-md"
                >
                  {category}
                </Link>
                {tags.map((tag) => {
                  return (
                    <Link
                      key={tag}
                      to={`/blog/tags/${tag}`}
                      className="bg-tezos-blue bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-xs"
                    >
                      {tag}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FeaturedPost.propTypes = {
  author: PropTypes.shape({
    image: PropTypes.object.isRequired,
    name: PropTypes.string,
    email: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeaturedPost;
