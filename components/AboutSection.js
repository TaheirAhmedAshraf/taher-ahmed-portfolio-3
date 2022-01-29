import React from "react";

export default function AboutSection() {
  return (
    <section className="py-28">
      <div className="grid md:grid-cols-2 md:space-x-3">
        {/* image */}
        <div>
          <img className="w-4/6 mx-auto" src="/assets/images/illus2.svg" />
        </div>
        {/* content */}
        <div className="space-y-4">
          <span className="text-dark-400 dark:text-light-400 text-lg">
            ABOUT ME
          </span>
          <h1 className="flex flex-col text-5xl font-extrabold text-dark-800 space-y-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-dark to-primary-light">
              Hello World
            </span>
          </h1>
          <p className="max-w-md text-dark-400  dark:text-light-400">
            Coding is not just about a nerd working endlessly on a computer.
            Coding is a whole universe of Joy, Adventure, and Creativity.
          </p>
          <div className="space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1TKc0sEZRvN8VXAKU2jOfBBwkyfn7QAbE/edit?usp=sharing&ouid=115274864293034613957&rtpof=true&sd=true"
                )
              }
              className="button"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
