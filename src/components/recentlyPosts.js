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
            const data = item.node.frontmatter;
            const slug = item.node.fields.slug;
            return (
              <MostPopularItem
                key={index}
                title={data.title}
                image={data.featuredimage}
                date={data.date}
                author={data.author}
                tags={data.tags}
                slug={slug}
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
