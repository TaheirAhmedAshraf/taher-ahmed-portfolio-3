import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin, BsYoutube } from "react-icons/bs";

export default function FooterSection() {
  return (
    <section>
      <div className="py-16 border-t border-dark-400">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0">
            <div>
              <img className="pb-3" src="/assets/images/logo-dark.png" />
              <ul className="space-y-2 text-sm text-dark-800 font-medium">
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-base" />
                  <p>South Mourail, Brahmanbaria - 3400</p>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-base" />
                  <p>taheirahmedashraf@gmail.com</p>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-base" />
                  <p>+8801843493527</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-2 text-sm text-dark-800 font-medium">
                <li>About me</li>
                <li>Blogs</li>
                <li>Github</li>
                <li>Fiverr</li>
                <li>Dribbble</li>
              </ul>
            </div>
            <div>
              <h3 className="text-dark-800 text-base font-medium mb-3">
                Follow me
              </h3>
              <ul className="text-dark-800 flex space-x-3 text-lg">
                <li>
                  <FaFacebookSquare />
                </li>
                <li>
                  <RiInstagramFill />
                </li>
                <li>
                  <BsLinkedin />
                </li>
                <li>
                  <BsYoutube />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-dark-800 text-center">
        Copyright © 2021 taherahmed.com
      </p>
    </section>
  );
}
