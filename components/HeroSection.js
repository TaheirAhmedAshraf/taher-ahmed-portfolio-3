import React from "react";
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="my-32">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 md:space-x-3">
          {/* content */}
          <div className="space-y-4">
            <h1 className="flex flex-col text-5xl font-extrabold text-dark-800 dark:text-light-800 space-y-2">
              <span>Hi, I Am</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-primary-light">
                Taher Ahmed
              </span>
            </h1>
            <p className="max-w-md text-dark-400 dark:text-light-400">
              Coding is not just about a nerd working endlessly on a computer.
              Coding is a whole universe of Joy, Adventure, and Creativity.
            </p>
            <div className="space-x-4">
              <button
                onClick={() =>
                  window.open("https://www.facebook.com/taheir.ashraf/")
                }
                className="hero-social-button dark:shadow-shadow2 dark:text-light-400"
              >
                <FiFacebook />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/taher-ahmed-ashraf-70b816212/"
                  )
                }
                className="hero-social-button dark:shadow-shadow2 dark:text-light-800"
              >
                <FiLinkedin />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/TaheirAhmedAshraf")
                }
                className="hero-social-button dark:shadow-shadow2 dark:text-light-800"
              >
                <FiGithub />
              </button>
            </div>
          </div>
          {/* image */}
          <div>
            <img className="w-4/6 mx-auto" src="/assets/images/illus1.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
