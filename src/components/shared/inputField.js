import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function InputField({
  id,
  className = '',
  type = 'text',
  placeholder = '',
  label = null,
  onChange,
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="text-tezos-blue mb-1 sm:text-base text-sm"
        >
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
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={classnames(
            'rounded-full bg-tezos-blue bg-opacity-20 px-4 sm:py-3 py-1 focus:outline-none',
            className
          )}
          onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
};

export default InputField;
