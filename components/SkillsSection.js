import React from "react";

export default function SkillsSection() {
  return (
    <section id="skill" className="py-16">
      <div className="container mx-auto">
        <div>
          <h1 className="text-4xl text-dark-800  dark:text-light-800 font-bold text-center mb-8">
            Find my skills
          </h1>
          {/* skill Weapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-8">
            <div className="md:space-y-8">
              <div className="flex flex-col md:flex-row p-8 shadow-shadow1 dark:shadow-shadow2 rounded-xl mb-6 md:mb-0">
                <div className="w-60 md:pr-8 mb-8 md:mb-0">
                  <img src="/assets/images/illustration1.png" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-dark-800  dark:text-light-800">
                    Full Stack Developement
                  </h4>
                  <p className="text-dark-400  dark:text-light-400">
                    Expert working with JavaScript frameworks & libearys such as
                    ReactJS, NodeJS, ExpressJS. Fully reponsive & coustomizeable
                    MERN stack Development.
                  </p>
                </div>
              </div>
              <div className="flex  flex-col md:flex-row p-8 shadow-shadow1 dark:shadow-shadow2 rounded-xl mb-6 md:mb-0">
                <div className="w-60 md:pr-8 mb-8 md:mb-0">
                  <img src="/assets/images/illustration2.png" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-dark-800  dark:text-light-800">
                    Native App Development
                  </h4>
                  <p className="text-dark-400  dark:text-light-400">
                    Expret & able to devlop both Android & IOS application with
                    JavaScript framework React Native.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col p-8 shadow-shadow1 dark:shadow-shadow2 rounded-xl md:h-full mb-6">
                <div className="w-60 md:pr-8 mb-8">
                  <img src="/assets/images/illustration3.png" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-dark-800  dark:text-light-800">
                    AI & Machine Learning
                  </h4>
                  <p className="text-dark-400  dark:text-light-400">
                    Exploring AI & Machine Learning with Python. With a dream to
                    become a successful & One of the best in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
