import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';
function JoinUs({ membersTypes }) {
  return (
    <div
      className={classnames(
        'text-center max-w-7xl mx-auto text-white flex sm:mt-16 sm:flex-row flex-col sm:px-0 px-7',
        {
          'justify-center': membersTypes.length === 1,
          'justify-between': membersTypes.length !== 1,
        }
      )}
    >
      {membersTypes.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white bg-opacity-20 rounded-3xl sm:py-7 py-4 px-10 sm:mx-3 sm:w-1/3 sm:mt-0 mt-4 w-full flex flex-col justify-between"
          >
            <div>
              <h4 className="font-semibold sm:text-xl text-lg font-museo">
                {item.title}
              </h4>
              <p className="sm:text-sm text-xs sm:my-6 my-4 text-opacity-60">
                {item.description}
              </p>
            </div>
            <div>
              <Link
                to={item.url}
                className="bg-tezos-blue text-white capitalize py-2 px-6 rounded-full text-sm focus:outline-none"
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

JoinUs.propTypes = {
  membersTypes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default JoinUs;
