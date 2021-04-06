import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import classnames from 'classnames';

function NavLink({ title = '', path = '/', className }) {
  return (
    <Link
      to={path}
      className={classnames(
        'capitalize py-2 sm:px-3 lg:px-6 text-tezos-blue text-sm hover:text-tezos-dark',
        className
      )}
    >
      {title}
    </Link>
  );
}

NavLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.string,
};

export default NavLink;
