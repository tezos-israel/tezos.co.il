import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './section.css';

function Section({ title, className, titleColor, direction, children }) {
  return (
    <div className={classnames('sm:py-20 py-10 xl:px-0 px-7', className)}>
      <div className="max-w-7xl mx-auto">
        <h3
          className={classnames(
            'section-title text-tezos-dark sm:text-2xl text-xl font-bold mb-7 relative font-museo',
            {
              'text-tezos-dark': titleColor === 'dark' || !titleColor,
              'text-white': titleColor === 'white',
            },
            {
              'text-center': direction === 'center' || !direction,
              'text-left': direction === 'left',
              'text-right': direction === 'right',
            }
          )}
        >
          {title}
        </h3>
        <div>{children}</div>
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  titleColor: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
