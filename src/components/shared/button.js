import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Button({ title, className }) {
  return (
    <button
      className={classnames(
        'capitalize py-2 px-6 rounded-full text-sm focus:outline-none',
        className
      )}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
