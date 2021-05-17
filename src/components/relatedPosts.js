import React from 'react';
import PropTypes from 'prop-types';

import MostPopularItem from './mostPopularItem';

function RelatedPost({ recentlyBlogs }) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto lg:border-l border-gray-300 lg:ml-5">
        <h2 className="xl:text-xl sm:text-lg font-museo lg:px-4">
          Related posted
        </h2>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-wrap">
          {recentlyBlogs.map((item, index) => {
            return (
              <MostPopularItem
                key={index}
                title={item.title}
                image={item.image}
                date={item.date}
                author={item.author}
                authorImage={item.authorImage}
                tags={item.tags}
                slug={item.slug}
                layout="row"
                rowItems={1}
                size="small"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

RelatedPost.propTypes = {
  recentlyBlogs: PropTypes.array,
};

export default RelatedPost;
