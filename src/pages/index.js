import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeaderBanner from '../components/headerBanner';
import Section from '../components/section';
import Services from '../components/services';
import About from '../components/about';
import Map from '../components/map';
import JoinUs from '../components/joinUs';
import Partners from '../components/partners';
import Contact from '../components/contact';

import headerData from '../data/header.json';
import headerBanner from '../data/headerBanner.json';

function IndexPage() {
  return (
    <Layout menu={headerData.menu}>
      <SEO title="Home" />
      <HeaderBanner bannerText={headerBanner.text} />
      <Services />
      <About />
      <Section title="Tezos around the world">
        <Map />
      </Section>
      <Section
        title="Join the Tezos Eco-system"
        className="bg-tezos-dark"
        titleColor="white"
      >
        <JoinUs />
      </Section>
      <Section title="Our Partners">
        <Partners />
      </Section>
      <Section title="Contact Us" className="text-left" direction="left">
        <Contact />
      </Section>
    </Layout>
  );
}

export default IndexPage;
