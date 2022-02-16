import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import AnimatedNavButtons from "./AnmatedNavButtons";

const NavbarItems = [
  { id: 1, name: "Home", link: "#hero" },
  { id: 2, name: "About Me", link: "#about" },
  { id: 3, name: "Skills", link: "#skill" },
  { id: 4, name: "Projects", link: "#portfolio" },
  { id: 5, name: "Contact", link: "#footer" },
];

export default function Navbar() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between py-6">
        {/* left */}
        <div>
          <img src="/assets/images/logo-dark.png" alt="logo" />
        </div>
        {/* middle */}
        <div className="hidden md:block">
          <ul className="flex group">
            {NavbarItems.map((item) => (
              <>
                <a
                  href={item.link}
                  key={item.id}
                  className="navbar-item dark:text-light-800"
                >
                  {item.name}
                </a>
              </>
            ))}
          </ul>
        </div>
        {/* right */}
        {/* <div className="hidden md:block">touggle button</div> */}
        {/* hamburger menu */}
        <div className="md:hidden bg-gray-100 justify-center text-center p-3 rounded-md">
          <AiOutlineMenu />
        </div>
      </div>
    </section>
  );
}
