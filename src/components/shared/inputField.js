import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function InputField({
  id,
  className = '',
  type = 'text',
  placeholder = '',
  label = null,
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-tezos-blue mb-1">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          row="20"
          className={classnames(
            'rounded-3xl bg-tezos-blue bg-opacity-20 px-4 py-4 focus:outline-none',
            className
          )}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={classnames(
            'rounded-full  bg-tezos-blue bg-opacity-20 px-4 py-3 focus:outline-none',
            className
          )}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
