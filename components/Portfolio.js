import React from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    id: 3,
    title: "10 Minute School Clone",
    info: " React, NextJS, Express, MongoDB, TailWindCss",
    image: "/assets/images/project1.png",
    url: "https://github.com/TaheirAhmedAshraf/10ms-clone",
  },
  {
    id: 1,
    title: "Airbnb Clone",
    info: "React, NextJS, TailWindCss, MapBox",
    image: "/assets/images/project3.png",
    url: "https://github.com/TaheirAhmedAshraf/airbnb-clone",
  },
  {
    id: 1,
    title: "Bazar ecommarce",
    info: "React, NextJS, Express, MongoDB, TailWindCss",
    image: "/assets/images/project2.png",
    url: "https://github.com/TaheirAhmedAshraf/bazar-ecommarce-app",
  },
  {
    id: 5,
    title: "Braintech Agency",
    info: "NextJS, Material UI, CSS Animations",
    image: "/assets/images/project4.png",
    url: "https://github.com/TaheirAhmedAshraf/Braintech-Agency",
  },
  {
    id: 4,
    title: "URL Shortainer",
    info: "ReactJS, Express, MongoDB",
    image: "/assets/images/project5.png",
    url: "https://github.com/TaheirAhmedAshraf/URL_Shortainer-MERN-STACK",
  },
  {
    id: 6,
    title: "Brigate Construction Company",
    info: "HTML, CSS",
    image: "/assets/images/project6.png",
    url: "https://github.com/TaheirAhmedAshraf/Brigate",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto border-b-2 pb-16">
      <div className="flex flex-col items-center text-center pb-10">
        <span className="text-primary-dark text-xs font-medium">
          VISIT MY GITHUB AND KEEP YOUR FEEDBACK
        </span>
        <h1 className="text-4xl text-gray-800 font-bold pt-5">My Portfolio</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-5">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            className="shadow-shadow3 p-6 rounded-2xl ml-5 mt-5 group cursor-pointer "
          >
            <div className="w-full rounded-md overflow-hidden mb-5">
              <img
                className="relative group-hover:scale-105 transition-all ease-linear duration-300"
                src={project.image}
                objectFit="contain"
              />
            </div>
            <div className="leading-loose">
              <span className="text-xs font-bold text-primary-dark">
                {project.info}
              </span>
              <h3 className="text-2xl font-medium text-gray-800 hover:text-primary-dark transition-all ease-linear duration-300">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";

// export default function PortfolioSection() {
//   return (
//     <section className="py-16">
//       <div>
//         <h1 className="text-4xl text-dark-800 font-bold text-center mb-8">
//           My Portfolio
//         </h1>

//         <Splide
//           options={{
//             type: "loop",
//             autoplay: true,
//             autoWidth: true,
//             gap: "20px",
//             perMove: 1,
//           }}
//         >
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project1.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Express
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   MongoDB
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 10 Minute School Clone with NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project2.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Map Box
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 Airbnb Clone With NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project3.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Map Box
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 Airbnb Clone With NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project4.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Map Box
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 Airbnb Clone With NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project5.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Map Box
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 Airbnb Clone With NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project3.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Map Box
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 Airbnb Clone With NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//           <SplideSlide>
//             <div className="w-[500px] p-4 space-y-2 rounded-3xl overflow-hidden bg-white">
//               <div>
//                 <img
//                   className="rounded-3xl overflow-hidden"
//                   src="/assets/images/project3.png"
//                 />
//               </div>
//               <ul className="flex">
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#5757CC] to-[#6E1FEA] text-white">
//                   ReactJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#F79C41] to-[#F79C41] text-white">
//                   NextJS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#DD5347] to-[#DB3F3F] text-white">
//                   TailWindCSS
//                 </li>
//                 <li className="mx-1 bg-red-50 px-2 rounded-full  bg-gradient-to-br from-[#24C9A9] to-[#4289FF] text-white">
//                   Map Box
//                 </li>
//               </ul>
//               <h1 className="text-dark-800 font-semibold">
//                 Airbnb Clone With NextJS
//               </h1>
//               <p className="text-xs text-dark-400">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
//                 aliquam lorem sit enim posuere. Faucibus facilisi tortor, morbi
//                 placerat aliquam.
//               </p>
//             </div>
//           </SplideSlide>
//         </Splide>
//       </div>
//     </section>
//   );
// }
