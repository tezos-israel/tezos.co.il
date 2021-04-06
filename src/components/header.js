import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import NavLink from './navLink';
import Button from './shared/button';

function Header({ menu }) {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-10 xl:px-0 xs:px-4 px-4">
      <div className="max-w-auto sm:max-w-7xl mx-auto flex justify-between items-center py-4 relative font-museo">
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset"
          >
            <span className="sr-only">Open main menu</span>
            {menuOpened ? (
              <div onClick={() => setMenuOpened(false)}>
                <svg
                  className=" h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMenuOpened(true)}>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
        <div className="text-center sm:text-left">
          <StaticImage
            src="../images/horizontal_logo_blue.svg"
            width={120.87}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Tezos Logo"
          />
        </div>

        <div className="items-center">
          <div className="hidden sm:inline-block">
            {menu &&
              menu.map((item, index) => {
                return (
                  <NavLink key={index} title={item.title} path={item.path} />
                );
              })}
          </div>

          <Button
            title="Sign up"
            className="bg-tezos-blue text-white hover:bg-tezos-dark hover:text-white"
          />
        </div>

        {menuOpened && (
          <div
            className="sm:hidden absolute top-full bg-white w-full sm:w-auto"
            id="mobile-menu"
          >
            <div className="px-2 py-3 space-y-1">
              {menu &&
                menu.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      title={item.title}
                      path={item.path}
                      className="block text-lg py-3 text-tezos-dark"
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
Header.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }).isRequired
  ),
};
export default Header;
