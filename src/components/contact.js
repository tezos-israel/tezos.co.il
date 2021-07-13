import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../components/section';

import { ContactUsForm } from './contact-form';

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaRss,
} from 'react-icons/fa';

import socialData from '../../data/settings/socials.yml';

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
            <div className="sm:text-left sm:pl-16 sm:w-full w-2/3 mx-auto">
              <a
                href={`mailto:${socialData.email}`}
                className="text-tezos-blue flex items-center sm:justify-start justify-center"
              >
                <FaEnvelope className="mr-2 text-xl" /> {socialData.email}
              </a>

              <div className="text-tezos-blue flex justify-between sm:w-1/3 text-2xl mt-6">
                {socialData.socialItems.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.type === 'facebook' && <FaFacebookF />}
                      {item.type === 'linkedin' && <FaLinkedinIn />}
                      {item.type === 'instagram' && <FaInstagram />}
                      {item.type === 'telegram' && <FaTelegramPlane />}
                      {item.type === 'twitter' && <FaTwitter />}
                      {item.type === 'rss' && <FaRss />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
