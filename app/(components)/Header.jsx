"use client";
import React, { useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Flex from "./Flex";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const handleHome = () => {
    setHomeDropdown(!homeDropdown);
  };
  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <Container className={""}>
        <Flex className={""}>
          <Flex className={"gap-7"}>
            <Image
              src={logo}
              alt="logo"
              height={50}
              width={143}
              loading="eager"
            />
            <ul className="flex justify-center items-center gap-x-5 font-jost font-medium text-base py-3">
              <li
                onMouseEnter={handleHome}
                onMouseLeave={() => setHomeDropdown(false)}
                className="relative">
                <div className="flex gap-2 items-center py-5 cursor-pointer">
                  Home <FaCaretDown />
                </div>
                {homeDropdown && (
                  <ul className="absolute top-16 -left-3 bg-white rounded-sm text-[#051036] min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
                    {[
                      { name: "Home 1", href: "/" },
                      { name: "Home 2", href: "/about" },
                      { name: "Home 3", href: "/contact" },
                      { name: "Home 4", href: "/" },
                      { name: "Home 5", href: "/" },
                      { name: "Home 6", href: "/" },
                      { name: "Home 7", href: "/" },
                      { name: "Home 8", href: "/" },
                      { name: "Home 9", href: "/" },
                      { name: "Home 10", href: "/" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-[#3554D1] hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
                        <Link href={item.href} onClick={() => setHomeDropdown(false)}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href={"/"} className="flex gap-2 items-center">
                  Categories <FaCaretDown />
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-2 items-center">
                  Destination
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-2 items-center">
                  Blog <FaCaretDown />
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-2 items-center">
                  Pages <FaCaretDown />
                </Link>
              </li>
              <li>
                <Link href={"/"} className="flex gap-2 items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
