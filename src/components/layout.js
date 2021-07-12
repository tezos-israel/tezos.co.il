import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import Contact from '../components/contact';

import './layout.css';

import social from '../../data/settings/socials.yml';
import navigation from '../../data/settings/navigation.yml';
import logos from '../../data/settings/logos.yml';

function Layout({ children }) {
  return (
    <>
      <Header menu={navigation.navItems} logo={logos.headerLogo} />
      <div className="overflow-x-hidden mt-20">
        <main>{children}</main>
        <Contact email={social.email} socialList={social.socialLink} />
      </div>
      <Footer logo={logos.footerLogo} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }).isRequired
  ),
};

export default Layout;
