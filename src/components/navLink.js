import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function NavLink({ title, path }) {
  return (
    <li>
      <Link
        to={path}
        className={
          'capitalize py-2 px-6 text-tezos-blue text-sm hover:text-tezos-dark'
        }
      >
        {title}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

NavLink.defaultProps = {
  title: '',
  path: '/',
};

export default NavLink;
