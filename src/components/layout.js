import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import Section from '../components/section';
import Contact from '../components/contact';

import './layout.css';

import data from '../data/data.json';
import navigation from '../../data/settings/navigation.yml';
import logos from '../../data/settings/logos.yml';

function Layout({ children }) {
  return (
    <>
      <Header menu={navigation.navItems} logo={logos.headerLogo} />
      <div className="overflow-x-hidden mt-20">
        <main>{children}</main>
        <Section title="Contact Us" className="text-left" direction="left">
          <Contact
            email={data.contact.email}
            socialList={data.contact.socialList}
          />
        </Section>
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
