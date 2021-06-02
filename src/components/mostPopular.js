import React from 'react';
import PropTypes from 'prop-types';

import MostPopularItem from '../components/mostPopularItem';

function MostPopular({ popularBlogs }) {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-7">
        <h2 className="xl:text-xl sm:text-lg text-center font-museo">
          Most Popular
        </h2>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col flex-wrap">
          {popularBlogs.map((item, index) => {
            return (
              <MostPopularItem
                key={index}
                title={item.title}
                image={item.image}
                date={item.date}
                author={item.author}
                type={item.type}
                category={item.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

MostPopular.propTypes = {
  popularBlogs: PropTypes.array,
};

export default MostPopular;
