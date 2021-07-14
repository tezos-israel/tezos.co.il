import React from 'react';
import PropTypes from 'prop-types';

import MostPopularItem from './mostPopularItem';

function RecentPosts({ posts }) {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-9">
        <h2 className="xl:text-xl text-lg font-mono px-4 mb-4 sm:text-left text-center capitalize">
          Recently posted
        </h2>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-wrap xl:px-0 lg:px-0 px-4">
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
                layout="row"
                rowItems={2}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

RecentPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default RecentPosts;
