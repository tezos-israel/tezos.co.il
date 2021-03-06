import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import NavLink from './navLink';

function Header({ menu, logo }) {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-20 xl:px-0 xs:px-4 px-4 border-b border-gray-100">
      <div className="max-w-auto sm:w-full mx-auto flex justify-between items-center py-4 relative font-museo">
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
        <div className="text-center sm:text-left ml-20">
          <Link to="/">
            <img src={logo} width={150} alt="Tezos Logo" />
          </Link>
        </div>

        <div className="flex items-center w-full justify-end">
          <div className="hidden sm:inline-block">
            {menu.map((item, index) => {
              return (
                <NavLink key={index} title={item.label} path={item.path} />
              );
            })}
          </div>
        </div>

        {menuOpened && (
          <div
            className="sm:hidden absolute top-full bg-white w-full sm:w-auto"
            id="mobile-menu"
          >
            <div className="px-2 py-3 space-y-1">
              {menu.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    title={item.label}
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
      label: PropTypes.string,
      path: PropTypes.string,
    }).isRequired
  ),
  logo: PropTypes.string,
};
export default Header;
