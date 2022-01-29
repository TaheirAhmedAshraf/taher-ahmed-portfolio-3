import React from "react";

export default function Overview() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-light-800 dark:bg-transparent shadow-shadow1 dark:shadow-shadow2 p-6 rounded-2xl my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-10">
          <div className="flex flex-col items-center my-4 md:my-0">
            <div className="bg-gradient-to-br from-[#4289FF] to-[#01FDD6] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <p className="font-semibold">1+</p>
            </div>
            <p className="text-center mt-2 dark:text-light-800">
              Years of Expreance
            </p>
          </div>
          <div className="flex flex-col items-center my-4 md:my-0">
            <div className="bg-gradient-to-br from-[#FF3E6C] to-[#FC5E51] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <p className="font-semibold">100%</p>
            </div>
            <p className="text-center mt-2 dark:text-light-800">Satisfaction</p>
          </div>
          <div className="flex flex-col items-center my-4 md:my-0">
            <div className="bg-gradient-to-br from-[#5F5FFF] to-[#5222D0] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <p className="font-semibold">10+</p>
            </div>
            <p className="text-center mt-2 dark:text-light-800">Projects</p>
          </div>
          <div className="flex flex-col items-center my-4 md:my-0">
            <div className="bg-gradient-to-br from-[#FFCC3E] to-[#F79C41] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <p className="font-semibold">32k+</p>
            </div>
            <p className="text-center mt-2 dark:text-light-800">
              Lines of code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
