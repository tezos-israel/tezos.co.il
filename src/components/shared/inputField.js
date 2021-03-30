import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputField = ({ className, type, placeholder, label }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-tezos-blue mb-1">{label}</label>}
      {type !== 'textarea' && (
        <input
          type={type}
          className={classnames(
            'rounded-full  bg-tezos-blue bg-opacity-20 px-4 py-3 focus:outline-none',
            className
          )}
          placeholder={placeholder}
        />
      )}
      {type === 'textarea' && (
        <textarea
          placeholder={placeholder}
          row="20"
          className={classnames(
            'rounded-3xl bg-tezos-blue bg-opacity-20 px-4 py-4 focus:outline-none',
            className
          )}
        ></textarea>
      )}
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  label: null,
  placeholder: '',
  type: 'text',
};

export default InputField;
