import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import Button from './shared/button';

function Featured({ data }) {
  const slug = data.fields.slug;
  const frontmatter = data.frontmatter;
  const author = frontmatter.author;
  return (
    <div className="bg-gray-100">
      <div className="sm:max-w-7xl max-w-full mx-auto py-9">
        <h2 className="xl:text-xl text-lg font-museo px-4 mb-4 sm:text-left text-center capitalize">
          Featured Post
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="flex sm:flex-row flex-col space-x-2 sm:rounded-md rounded-none bg-gray-300 lg:p-8 p-4 lg:shadow-md shadow-sm">
            <div className="lg:h-56 sm:h-56 h-24 max-w-full m-auto rounded-md overflow-hidden">
              <GatsbyImage
                image={getImage(frontmatter.image)}
                alt={frontmatter.title}
                className="rounded-md margin-auto lg:w-full lg:h-full h-48"
              />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <h2 className="font-museo text-xl xl:w-3/4 lg:w-2/3 md:w-3/4 mx-auto my-4">
                  {frontmatter.title}
                </h2>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                <GatsbyImage image={getImage(author.image)} alt={author.name} />
              </div>
              <div className="text-sm mb-3">
                <h4>{author.name}</h4>
                <div className="text-black text-opacity-50">
                  {format(new Date(frontmatter.date), 'yyyy-MM-dd')}
                </div>
              </div>
              <Link to={slug} className="self-center my-4">
                <Button
                  title="Go To Post"
                  className="bg-tezos-blue text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Featured.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.any,
      }),
      image: PropTypes.any,
      date: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

export default Featured;
