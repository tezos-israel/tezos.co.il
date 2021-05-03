import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import classnames from 'classnames';

function MostPopularItem({
  title,
  image,
  date,
  author,
  type,
  layout = 'col',
  rowItems,
  size,
}) {
  return (
    <div
      className={classnames('w-full', {
        'lg:w-1/4 md:w-1/2': rowItems === 4 || !rowItems,
        'lg:w-1/3 md:w-1/3': rowItems === 3,
        'lg:w-1/2 md:w-1/2': rowItems === 2,
        'w-full': rowItems === 1 || !rowItems,
      })}
    >
      <Link
        to="/blog"
        className={classnames('lg:p-4 lg:mt-0 md:mt-4 mt-4 flex flex-wrap', {
          'flex-col': layout === 'col',
          'flex-row': layout === 'row',
        })}
      >
        <div
          className={classnames(
            'block  overflow-hidden rounded-md',
            {
              'w-full mb-4': layout === 'col',
              'w-1/3': layout === 'row',
            },
            {
              'h-24 ': size === 'small' && layout === 'row',
              'xl:h-36 lg:h-28 md:h-24 h-auto':
                size !== 'small' && layout === 'row',
            }
          )}
        >
          <img
            src={image}
            className={classnames(
              'rounded-md',
              {
                'w-full': layout === 'col',
                ' w-auto': layout === 'row',
              },
              {
                'h-24': size === 'small',
                'lg:h-full md:h-full h-28': size !== 'small' || !size,
              }
            )}
          />
        </div>
        <div
          className={classnames('', {
            'w-full': layout === 'col',
            'w-2/3 pl-4': layout === 'row',
          })}
        >
          <h3
            title={title}
            className={classnames(
              'font-museo mb-3 block  w-full overflow-hidden whitespace-nowrap overflow-ellipsis line-clamp-2',
              {
                'text-sm': size === 'small',
              }
            )}
          >
            {title}
          </h3>
          <div
            className={classnames('flex justify-between', {
              'flex-row items-center': layout === 'col',
              'flex-col h-2/3': layout === 'row',
            })}
          >
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={author.avatar} alt={author.username} />
              </div>
              <div className="text-sm ml-3">
                <h4>{author.username}</h4>
                <div className="text-black text-opacity-50">{date}</div>
              </div>
            </div>
            <div className="mt-1">
              <span className="bg-tezos-blue bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-xs capitalize ">
                {type}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

MostPopularItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
  }),
  type: PropTypes.string,
  layout: PropTypes.oneOf(['col', 'row']),
  rowItems: PropTypes.number,
  size: PropTypes.oneOf(['normal', 'small']),
};

export default MostPopularItem;
