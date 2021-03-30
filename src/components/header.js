import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import NavLink from './navLink';
import Button from './shared/button';

function Header({ headerData }) {
  return (
    <header className="mb-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <StaticImage
          src="../images/horizontal_logo_blue.svg"
          width={127.87}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="A Gatsby astronaut"
        />

        <ul className="flex items-center">
          {headerData &&
            headerData.menu.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink title={item.title} path={item.path} />
                </li>
              );
            })}
          <li>
            <Button
              title="Sign up"
              className="bg-tezos-blue text-white hover:bg-tezos-dark hover:text-white"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
Header.propTypes = {
  headerData: PropTypes.object,
};
export default Header;
