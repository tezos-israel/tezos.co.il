import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function MostPopularItem({
  title,
  image,
  date,
  author,
  tags,
  category,
  slug,
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
      <div
        className={classnames('lg:p-4 lg:mt-0 mt-4 flex flex-wrap', {
          'flex-col': layout === 'col',
          'flex-row': layout === 'row',
        })}
      >
        <Link
          to={slug}
          className={classnames(
            'block overflow-hidden rounded-md',
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
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className={classnames('rounded-md w-full', {
              'h-24': size === 'small',
              'lg:h-full md:h-full h-28': size !== 'small' || !size,
            })}
          />
        </Link>
        <div
          className={classnames('', {
            'w-full': layout === 'col',
            'w-2/3 pl-4': layout === 'row',
          })}
        >
          <Link to={slug}>
            <h3
              title={title}
              className={classnames(
                'font-museo mb-3 block w-full overflow-hidden whitespace-nowrap overflow-ellipsis line-clamp-2',
                {
                  'text-sm': size === 'small',
                }
              )}
            >
              {title}
            </h3>
          </Link>
          <div
            className={classnames('flex justify-between', {
              'flex-row items-center': layout === 'col',
              'flex-col h-2/3': layout === 'row',
            })}
          >
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <GatsbyImage image={getImage(author.image)} alt={author.name} />
              </div>
              <div className="text-sm ml-3">
                <Link to={`../../authors/${author.email}`}>
                  <h4>{author.name}</h4>
                </Link>
                <div className="text-black text-opacity-50">
                  {format(new Date(date), 'yyyy-MM-dd')}
                </div>
              </div>
            </div>
            <div></div>
            <div className="mt-1 space-x-3">
              <Link
                to={`/blog/${_.kebabCase(category)}`}
                className="bg-indigo-400 bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-md"
              >
                {category}
              </Link>
              {tags.map((tag) => {
                return (
                  <Link
                    key={tag}
                    to={`/blog/tags/${tag}`}
                    className="bg-tezos-blue bg-opacity-20 py-1 px-2 rounded-full text-tezos-blue text-xs"
                  >
                    {tag}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MostPopularItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
  date: PropTypes.string,
  author: PropTypes.shape({
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  layout: PropTypes.oneOf(['col', 'row']),
  rowItems: PropTypes.number,
  size: PropTypes.oneOf(['normal', 'small']),
  category: PropTypes.string.isRequired,
};

export default MostPopularItem;
