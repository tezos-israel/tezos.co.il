import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavLink = ({ title, path }) => (
  <Link
    to={path}
    className={
      'capitalize py-2 px-6 text-tezos-blue text-sm hover:text-tezos-dark'
    }
  >
    {title}
  </Link>
);

NavLink.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

NavLink.defaultProps = {
  title: '',
  path: '/',
};

export default NavLink;
