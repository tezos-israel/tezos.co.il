import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import Button from './shared/button';

function Featured({ data }) {
  const maxLength = 1000;
  const slug = data.fields.slug;
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-9">
        <h2 className="xl:text-xl text-2xl font-museo px-4 mb-4 sm:text-left text-center capitalize">
          Featured Post
        </h2>
        <div>
          <div className="text-center">
            <h2 className="font-museo text-xl xl:w-3/4 lg:w-2/3 md:w-3/4 mx-auto my-4">
              {data.frontmatter.title}
            </h2>
          </div>
          <div className="relative mt-24">
            <div className="absolute right-0 left-0 -top-20 mx-auto  flex-col text-center w-max z-10">
              <div className="text-sm mb-3">
                <h4>{data.frontmatter.author.name}</h4>
                <div className="text-black text-opacity-50">
                  {format(new Date(data.frontmatter.date), 'yyyy-MM-dd')}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-white border-5 shadow-lg">
                <GatsbyImage
                  image={getImage(data.frontmatter.author.image)}
                  alt={data.frontmatter.author.name}
                />
              </div>
            </div>
            <div className="lg:h-96 sm:h-96 h-48 rounded-md overflow-hidden">
              <GatsbyImage
                image={getImage(data.frontmatter.image)}
                alt={data.frontmatter.title}
                className="rounded-md margin-auto w-full h-full"
              />
            </div>
          </div>
        </div>
        <div
          className="blog-content lg:w-2/3 w-full"
          dangerouslySetInnerHTML={{
            __html: `${data.html.slice(0, maxLength)}...`,
          }}
        ></div>
        <Link to={slug}>
          <Button title="Go To Post" className="bg-tezos-blue text-white" />
        </Link>
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
    html: PropTypes.string,
  }).isRequired,
};

export default Featured;
