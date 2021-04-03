import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import InputField from './shared/inputField';
import Button from './shared/button';

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
      <div className="flex justify-between">
        <div className="w-1/2">
          <p>
            For inquiries regarding events, projects, collaborations, or general
            information.
          </p>
          <div className="flex flex-wrap justify-between mt-4">
            <div className="w-1/2">
              <InputField label="Name" className="mr-5" />
            </div>
            <div className="w-1/2">
              <InputField label="Email" />
            </div>
            <div className="w-full mt-4">
              <InputField label="Company" />
            </div>
            <div className="w-full mt-4">
              <InputField label="Message" type="textarea" />
            </div>
            <div className="w-full mt-4">
              <Button
                title="Send"
                className="bg-tezos-blue text-white w-full py-3"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 text-right">
          <StaticImage
            src="../images/social_icons.svg"
            width={300}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Tezos Logo"
          />
          <div className="text-left pl-16">
            <div className="text-tezos-blue flex items-center">
              <FaEnvelope className="mr-2 text-xl" /> contact@tezos.co.il
            </div>
            <ul className="text-tezos-blue flex justify-between w-1/3 text-2xl mt-6">
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
