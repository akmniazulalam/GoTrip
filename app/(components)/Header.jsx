"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Flex from "./Flex";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaCaretDown } from "react-icons/fa";
import England from "../../public/lang.webp";

const Header = () => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [dashboardDropdown, setDashboardDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currency, setCurrency] = useState(false);
  const handleHome = () => {
    setHomeDropdown(!homeDropdown);
  };
  const handleBlog = () => {
    setBlogDropdown(!blogDropdown);
  };
  const handlePages = () => {
    setPagesDropdown(!pagesDropdown);
  };
  const handleDashboard = () => {
    setDashboardDropdown(!dashboardDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? "bg-[#051036]" : "bg-transparent"}`}>
      <Container className={"max-w-368"}>
        <Flex className={""}>
          <Flex className={"gap-7"}>
            <Image
              src={logo}
              alt="logo"
              height={50}
              width={143}
              loading="eager"
            />
            <ul className="flex justify-center items-center gap-x-4 font-jost  text-[15px] py-3">
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
                        <Link
                          href={item.href}
                          onClick={() => setHomeDropdown(false)}>
                          {item.name}
                        </Link>
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
                  Destinations
                </Link>
              </li>
              <li
                onMouseEnter={handleBlog}
                onMouseLeave={() => setBlogDropdown(false)}
                className="relative">
                <div className="flex gap-2 items-center py-5 cursor-pointer">
                  Blog <FaCaretDown />
                </div>
                {blogDropdown && (
                  <ul className="absolute top-16 -left-3 bg-white rounded-sm text-[#051036] min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
                    {[
                      { name: "Blog list v1", href: "/" },
                      { name: "Blog list v2", href: "/about" },
                      { name: "Blog list v3", href: "/contact" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-[#3554D1] hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
                        <Link
                          href={item.href}
                          onClick={() => setBlogDropdown(false)}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handlePages}
                onMouseLeave={() => setPagesDropdown(false)}
                className="relative">
                <div className="flex gap-2 items-center py-5 cursor-pointer">
                  Pages <FaCaretDown />
                </div>
                {pagesDropdown && (
                  <ul className="absolute top-16 -left-3 bg-white rounded-sm text-[#051036] min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
                    {[
                      { name: "404", href: "/" },
                      { name: "About", href: "/about" },
                      { name: "Become Expert", href: "/contact" },
                      { name: "Help center", href: "/contact" },
                      { name: "Login", href: "/contact" },
                      { name: "Register", href: "/contact" },
                      { name: "Terms", href: "/contact" },
                      { name: "Invoice", href: "/contact" },
                      { name: "UI elements", href: "/contact" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-[#3554D1] hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
                        <Link
                          href={item.href}
                          onClick={() => setPagesDropdown(false)}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={handleDashboard}
                onMouseLeave={() => setDashboardDropdown(false)}
                className="relative">
                <div className="flex gap-2 items-center py-5 cursor-pointer">
                  Dashboard <FaCaretDown />
                </div>
                {dashboardDropdown && (
                  <ul className="absolute top-16 -left-3 bg-white rounded-sm text-[#051036] min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
                    {[
                      { name: "Dashboard", href: "/" },
                      { name: "Booking", href: "/about" },
                      { name: "Settings", href: "/contact" },
                      { name: "Wishlist", href: "/contact" },
                      { name: "Vendor dashboard", href: "/contact" },
                      { name: "Vendor add hotel", href: "/contact" },
                      { name: "Vendor booking", href: "/contact" },
                      { name: "Vendor hotels", href: "/contact" },
                      { name: "Vendor recovery", href: "/contact" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="hover:text-[#3554D1] hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
                        <Link
                          href={item.href}
                          onClick={() => setDashboardDropdown(false)}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link href={"/"} className="flex gap-2 items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </Flex>
          <Flex className={"gap-x-4 items-center"}>
            <span
              href={"/"}
              className="uppercase flex gap-2 items-center font-jost  text-[15px] cursor-pointer"
              onClick={() => setCurrency(!currency)}>
              usd <FaCaretDown />
            </span>
            {currency && (
              <div className="w-267.5 bg-white rounded-sm top-1/2 left-1/2 -translate-1/2 fixed">
                <div className="px-7.5 py-5">
                  <p className="text-xl font-medium text-black font-jost">
                    Select your currency
                  </p>
                </div>
                <hr className="text-[#ddd]"/>
                <div className="p-7.5 grid grid-cols-5 gap-7.5"></div>
              </div>
            )}
            <div className="w-0.5 h-5 bg-[#ffffff33]"></div>
            <div className="flex gap-x-2 items-center">
              <Image
                src={England}
                alt="england"
                height={20}
                width={20}
                className="rounded-full h-5"
              />
              <span className="flex gap-2 items-center font-jost text-[15px] cursor-pointer">
                United Kingdom <FaCaretDown />
              </span>
              <Link href={"/"}>
                <button className="px-7.5 text-sm bg-white h-12.5 text-[#051036] font-jost rounded-sm mr-2.5 ml-2 cursor-pointer">
                  Become An Expert
                </button>
              </Link>
              <Link href={"/"}>
                <button className="px-7.5 text-sm text-white border border-white hover:bg-white h-12.5 hover:text-[#051036] font-jost rounded-sm transition-all duration-300 ease-in-out cursor-pointer">
                  Sign In / Register
                </button>
              </Link>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
