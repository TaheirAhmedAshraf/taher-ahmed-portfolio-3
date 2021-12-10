import React from "react";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="my-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 md:space-x-3">
          {/* content */}
          <div className="space-y-4">
            <h1 className="flex flex-col text-5xl font-extrabold text-dark-800 space-y-2">
              <span>Hi, I Am</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-primary-light">
                Taher Ahmed
              </span>
            </h1>
            <p className="max-w-md text-dark-400">
              Coding is not just about a nerd working endlessly on a computer.
              Coding is a whole universe of Joy, Adventure, and Creativity.
            </p>
            <div className="space-x-4">
              <button className="hero-social-button">
                <FiFacebook />
              </button>
              <button className="hero-social-button">
                <FiLinkedin />
              </button>
              <button className="hero-social-button">
                <FiGithub />
              </button>
            </div>
          </div>
          {/* image */}
          <div></div>
        </div>
      </div>
    </section>
  );
}
