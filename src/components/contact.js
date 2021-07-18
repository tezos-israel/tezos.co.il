import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../components/section';

import { ContactUsForm } from './contact-form';

function Contact() {
  return (
    <Section title="Follow Us" className="text-left" direction="left">
      <div className="max-w-7xl mx-auto">
        <p className="mb-3">
          Signup for our newsletter or follow us on social networks.
        </p>
        <div className="flex justify-between sm:flex-row flex-col">
          <ContactUsForm />
          <div className="sm:w-1/2 w-full sm:text-right text-center sm:my-0 my-5">
            <StaticImage
              src="../images/social_icons.svg"
              width={300}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Contact icon"
              className="sm:my-0 my-5"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
