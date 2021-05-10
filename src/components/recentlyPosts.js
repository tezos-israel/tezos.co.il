import React from 'react';
import PropTypes from 'prop-types';

import MostPopularItem from './mostPopularItem';

function RecentlyPost({ recentlyBlogs }) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-7">
        <h2 className="xl:text-xl sm:text-lg font-museo px-4">
          Recently posted
        </h2>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-wrap xl:px-0 lg:px-0 px-4">
          {recentlyBlogs.map((item, index) => {
            return (
              <MostPopularItem
                key={index}
                title={item.title}
                image={item.image}
                date={item.date}
                author={item.author}
                tags={item.tags}
                slug={item.slug}
                layout="row"
                rowItems={2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

RecentlyPost.propTypes = {
  recentlyBlogs: PropTypes.array.isRequired,
};

export default RecentlyPost;
