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

import data from '../data/data.json';

function IndexPage() {
  return (
    <Layout menu={data.menu}>
      <SEO title="Home" />
      <HeaderBanner bannerText={data.headerBanner.text} />
      <Services title={data.services.title} list={data.services.list} />
      <About
        title={data.about.title}
        content={data.about.content}
        image={data.about.image}
      />
      <Section title="Tezos around the world">
        <Map />
      </Section>
      <Section
        title="Join the Tezos Eco-system"
        className="bg-tezos-dark"
        titleColor="white"
      >
        <JoinUs membersTypes={data.membersTypes} />
      </Section>
      <Section title="Our Partners">
        <Partners partnersList={data.partners} />
      </Section>
      <Section title="Contact Us" className="text-left" direction="left">
        <Contact
          email={data.contact.email}
          socialList={data.contact.socialList}
        />
      </Section>
    </Layout>
  );
}

export default IndexPage;
