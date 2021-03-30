/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import './layout.css';

function Layout({ headerData, children }) {
  return (
    <>
      <Header headerData={headerData} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerData: PropTypes.object,
};

export default Layout;
