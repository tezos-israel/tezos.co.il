import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import InputField from './shared/inputField';
import Button from './shared/button';
import socialLinks from '../../data/settings/socials.yml';

import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto pt-7">
      <div className="flex justify-between sm:flex-row flex-col">
        <div className="sm:w-1/2 w-full">
          <p>
            For inquiries regarding events, projects, collaborations, or general
            information.
          </p>
          <div className="flex flex-wrap justify-between mt-4">
            <div className="w-1/2">
              <InputField label="Name" className="mr-5" id="name" />
            </div>
            <div className="w-1/2">
              <InputField label="Email" id="email" />
            </div>
            <div className="w-full mt-4">
              <InputField label="Company" id="company" />
            </div>
            <div className="w-full mt-4">
              <InputField label="Message" type="textarea" id="message" />
            </div>
            <div className="w-full mt-4">
              <Button
                title="Send"
                className="bg-tezos-blue text-white w-full sm:py-3 py-1"
              />
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 w-full sm:text-right text-center">
          <StaticImage
            src="../images/social_icons.svg"
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Contact icon"
            className="sm:my-0 my-5"
          />
          <div className="sm:text-left sm:pl-16 sm:w-full w-2/3 mx-auto">
            <div className="text-tezos-blue flex items-center sm:justify-start justify-center">
              <FaEnvelope className="mr-2 text-xl" /> {socialLinks.email}
            </div>
            <div className="text-tezos-blue flex justify-between sm:w-1/3 text-2xl mt-6">
              {socialLinks.facebook.length > 0 && (
                <a href={socialLinks.facebook}>
                  <FaFacebookF />
                </a>
              )}
              {socialLinks.linkedIn.length > 0 && (
                <a href={socialLinks.linkedIn}>
                  <FaLinkedinIn />
                </a>
              )}
              {socialLinks.instagram.length > 0 && (
                <a href={socialLinks.instagram}>
                  <FaInstagram />
                </a>
              )}
              {socialLinks.telegram.length > 0 && (
                <a href={socialLinks.telegram}>
                  <FaTelegramPlane />
                </a>
              )}
              {socialLinks.twitter.length > 0 && (
                <a href={socialLinks.twitter}>
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
