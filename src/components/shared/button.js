import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Button({ title, className, disabled }) {
  return (
    <button
      disabled={disabled}
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Button;
