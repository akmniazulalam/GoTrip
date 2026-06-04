import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import newsletter from "../../public/newsletter 1.svg";
import Image from "next/image";

const Footer = () => {
  return (
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
            <input type="email" placeholder="Your Email" className="w-102.5 h-15 py-4 px-5 rounded-sm font-jost text-base bg-white text-black focus:outline-0" />
            <button className="py-3.5 px-7.5 rounded-sm text-base font-jost font-medium cursor-pointer h-15 bg-[#3554D1] text-white">Subscribe</button>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
