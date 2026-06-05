import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import newsletter from "../../public/newsletter 1.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="py-15 bg-[#0D2857]">
        <Container>
          <div className="flex justify-between items-center">
            <Flex className={"gap-6"}>
              <Image src={newsletter} alt="newsletter" height={60} width={60} />
              <div className="">
                <h4 className="font-jost text-white text-[26px] font-semibold">
                  Your Travel Journey Starts Here
                </h4>
                <p className="font-jost text-base leading-7.5 text-white">
                  Sign up and we'll send the best deals to you
                </p>
              </div>
            </Flex>
            <Flex className={"gap-x-2.5"}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-102.5 h-15 py-4 px-5 rounded-sm font-jost text-base bg-white text-black focus:outline-0"
              />
              <button className="py-3.5 px-7.5 rounded-sm text-base font-jost font-medium cursor-pointer h-15 bg-[#3554D1] text-white">
                Subscribe
              </button>
            </Flex>
          </div>
        </Container>
      </section>
      <section className="py-15">
        <Container>
          <div className="grid grid-cols-5">
            <div className="">
              <h3 className="mb-7.5 text-base font-medium font-jost text-black">
                Contact Us
              </h3>
              <div className="mb-9">
                <p className="text-sm font-jost text-black mb-1">
                  Toll Free Customer Care
                </p>
                <Link
                  href={"tel:+(1) 123 456 7890"}
                  className="text-[#3554D1] font-medium font-jost text-[18px]">
                  +(1) 123 456 7890
                </Link>
              </div>
              <div className="">
                <p className="text-sm font-jost text-black mb-1">
                  Need live support?
                </p>
                <Link
                  href={"mailto:hi@gotrip.com"}
                  className="text-[#3554D1] font-medium font-jost text-[18px]">
                  hi@gotrip.com
                </Link>
              </div>
            </div>
            <div className="">
              <h3 className="mb-7.5 text-base font-medium font-jost text-black">
                Company
              </h3>
              <ul>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Careers</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Blog</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Press</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Gift Cards</Link>
                </li>
                <li className="hover:text-[#0a58ca] font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Magazine</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="mb-7.5 text-base font-medium font-jost text-black">
                Support
              </h3>
              <ul>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Contact</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Legal Notice</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Privacy Policy</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Terms and Conditions</Link>
                </li>
                <li className="hover:text-[#0a58ca] font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Sitemap</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="mb-7.5 text-base font-medium font-jost text-black">
                Other Services
              </h3>
              <ul>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Car hire</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Activity Finder</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Tour List</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Flight finder</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Cruise Ticket</Link>
                </li>
                <li className="hover:text-[#0a58ca] pb-3.5 font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Holiday Rental</Link>
                </li>
                <li className="hover:text-[#0a58ca] font-jost text-black  transition-all duration-300 ease-in-out">
                  <Link href={"/about"}>Travel Agents</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="mb-7.5 text-base font-medium font-jost text-black">
                Mobile
              </h3>
            </div>
          </div>
          <hr className="mt-15" />
        </Container>
      </section>
    </>
  );
};

export default Footer;
