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
import servicesData from '../data/services.json';
import aboutData from '../data/about.json';
import joinData from '../data/join.json';
import contactData from '../data/contact.json';
import partnersData from '../data/partners.json';

function IndexPage() {
  return (
    <Layout menu={headerData.menu}>
      <SEO title="Home" />
      <HeaderBanner bannerText={headerBanner.text} />
      <Services servicesData={servicesData} />
      <About aboutData={aboutData} />
      <Section title="Tezos around the world">
        <Map />
      </Section>
      <Section
        title="Join the Tezos Eco-system"
        className="bg-tezos-dark"
        titleColor="white"
      >
        <JoinUs joinData={joinData} />
      </Section>
      <Section title="Our Partners">
        <Partners partnersData={partnersData} />
      </Section>
      <Section title="Contact Us" className="text-left" direction="left">
        <Contact contactData={contactData} />
      </Section>
    </Layout>
  );
}

export default IndexPage;
