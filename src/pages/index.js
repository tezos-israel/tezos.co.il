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
import services from '../data/services.json';
import about from '../data/about.json';
import membersTypes from '../data/membersTypes.json';
import contact from '../data/contact.json';
import partnersList from '../data/partners.json';

function IndexPage() {
  return (
    <Layout menu={headerData.menu}>
      <SEO title="Home" />
      <HeaderBanner bannerText={headerBanner.text} />
      <Services title={services.title} list={services.list} />
      <About title={about.title} content={about.content} image={about.image} />
      <Section title="Tezos around the world">
        <Map />
      </Section>
      <Section
        title="Join the Tezos Eco-system"
        className="bg-tezos-dark"
        titleColor="white"
      >
        <JoinUs membersTypes={membersTypes} />
      </Section>
      <Section title="Our Partners">
        <Partners partnersList={partnersList} />
      </Section>
      <Section title="Contact Us" className="text-left" direction="left">
        <Contact email={contact.email} socialList={contact.socialList} />
      </Section>
    </Layout>
  );
}

export default IndexPage;
