import React from "react";
import LogoLight from "../assets/images/logo-light.png";
import LogoDark from "../assets/images/logo-dark.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarItems = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "About Me", link: "#" },
  { id: 3, name: "Skills", link: "#" },
  { id: 4, name: "Projects", link: "#" },
  { id: 5, name: "Contact", link: "#" },
];

export default function Navbar() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between py-6">
        {/* left */}
        <div>
          <Image src={LogoDark} alt="logo" />
        </div>
        {/* middle */}
        <div className="hidden md:block">
          <ul className="flex group">
            {NavbarItems.map((item) => (
              <>
                <li key={item.id} className="navbar-item">
                  {item.name}
                </li>
              </>
            ))}
          </ul>
        </div>
        {/* right */}
        <div className="hidden md:block">touggle button</div>
        {/* hamburger menu */}
        <div className="md:hidden bg-gray-100 justify-center text-center p-3 rounded-md">
          <AiOutlineMenu />
        </div>
      </div>
    </section>
  );
}
