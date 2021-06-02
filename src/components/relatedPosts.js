import React from 'react';
import PropTypes from 'prop-types';

import MostPopularItem from './mostPopularItem';

function RelatedPost({ posts }) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto lg:border-l border-gray-300 lg:ml-5">
        <h2 className="xl:text-xl sm:text-lg font-museo lg:px-4 capitalize">
          Related posts
        </h2>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-wrap">
          {posts.map((item) => {
            return (
              <MostPopularItem
                key={item.slug}
                title={item.title}
                image={item.image}
                date={item.date}
                author={item.author}
                tags={item.tags}
                slug={item.slug}
                category={item.category}
                layout="col"
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
  posts: PropTypes.array.isRequired,
};

export default RelatedPost;
