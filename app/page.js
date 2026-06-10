"use client";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import Container from "./(components)/Container";
import { FiSearch } from "react-icons/fi";
import Flex from "./(components)/Flex";
import { useState } from "react";
import featureOne from "../public/1.svg";
import featureTwo from "../public/2.svg";
import featureThree from "../public/3.svg";
import reviewer from "../public/1 (1).webp";
import BlogOne from "../public/1 (2).webp";
import BlogTwo from "../public/2 (1).webp";
import BlogThree from "../public/3,webp";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Hotel");
  return (
    <>
      <section className="bg-[url(../public/bg.webp)] bg-no-repeat bg-cover bg-center">
        <div className="pt-80 pb-52.5 bg-linear-[270deg] from-[rgba(5,16,54,0.5)] to-[#051036d9]">
          <Container>
            <div className="text-center opacity-100 z-50">
              <h1 className="font-semibold font-jost text-6xl text-white">
                Find Next Place To Visit
              </h1>
              <p className="font-jost text-white font-medium text-base leading-7.5 pt-4 pb-15">
                Discover amzaing places at exclusive deals
              </p>
              <div className="flex items-center gap-x-7 justify-center">
                {[
                  { name: "Hotel" },
                  { name: "Tour" },
                  { name: "Activity" },
                  { name: "Holiday Rentals" },
                  { name: "Car" },
                  { name: "Cruise" },
                  { name: "Flights" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`font-medium font-jost text-[15px] text-white hover:text-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer relative before:absolute before:top-7 before:left-0 before:w-full before:bg-white before:h-0.5 before:content-[''] ${
                      activeTab === item.name
                        ? "text-hoverText before:scale-x-100"
                        : "text-white before:scale-x-0"
                    }`}>
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="mt-10 p-2.5 bg-white rounded-full w-4xl m-auto grid grid-cols-[22%_28%_30%_20%]">
                <div className="px-7 py-1.5 w-fit text-left">
                  <h4 className="text-[15px] font-jost font-medium text-black">
                    Location ({activeTab})
                  </h4>
                  <input
                    placeholder="Where are you going?"
                    type="search"
                    className="placeholder:text-[#757575] placeholder:font-jost font-jost text-black text-[15px] focus:outline-0"
                  />
                </div>
                <div className="px-7 py-1.5 w-fit text-left border-l border-[#DDDDDD]">
                  <h4 className="text-[15px] font-jost font-medium text-black">
                    Check in - Check out
                  </h4>
                  <span className="text-[#757575] font-jost text-[15px]">
                    Wed 2 Mar - Fri 11 Apr
                  </span>
                </div>
                <div className="px-7 py-1.5 w-fit text-left border-l border-[#DDDDDD]">
                  <h4 className="text-[15px] font-jost font-medium text-black">
                    Guest
                  </h4>
                  <span className="text-[#757575] font-jost text-[15px]">
                    2 adults - 1 childeren - 1 room
                  </span>
                </div>
                <button className="px-9 bg-hoverText text-white font-medium text-sm rounded-full cursor-pointer flex items-center gap-x-2 ml-auto hover:bg-primaryText transition-all duration-300 ease-in-out">
                  <FiSearch className="text-white text-xl" />
                  Search
                </button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="pt-30 pb-15">
        <Container>
          <Flex>
            <div>
              <h3 className="font-jost text-3xl text-primaryText font-semibold">
                Popular Destinations
              </h3>
              <p className="font-jost text-[#697488] text-base leading-7.5 mt-2">
                These popular destinations have a lot to offer
              </p>
            </div>
            <button className="py-3.5 px-7 bg-[#3554d10d] rounded-sm font-jost font-medium text-base transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] text-hoverText cursor-pointer hover:bg-hoverText hover:text-white">
              View All Destinations{" "}
              <RxArrowTopRight className={"ml-1 text-2xl inline"} />
            </button>
          </Flex>

          <div className="grid grid-cols-2 gap-x-7.5 mt-7.5">
            <div className="bg-[url(../public/1.webp)] bg-no-repeat bg-center bg-cover rounded-sm">
              <div className="pt-18 pb-68 pl-18 bg-linear-[180deg] from-[#051036b3] to-[#05103600] rounded-sm">
                <h4 className="text-[40px] font-jost font-semibold text-white mb-7.5 w-1/2">
                  Things to do on your trip
                </h4>
                <button className="bg-white rounded-sm font-jost font-medium text-primaryText py-3 px-12 cursor-pointer">
                  Experiences
                </button>
              </div>
            </div>
            <div className="bg-[url(../public/2.webp)] bg-no-repeat bg-center bg-cover rounded-sm">
              <div className="pt-18 pb-68 pl-18 bg-linear-[180deg] from-[#051036b3] to-[#05103600] rounded-sm">
                <h6 className="font-jost font-medium text-[15px] text-white mb-3">
                  Enjoy Summer Deals
                </h6>
                <h4 className="text-[40px] font-jost font-semibold text-white mb-7.5">
                  Up to 70% Discount!
                </h4>
                <button className="bg-white rounded-sm font-jost font-medium text-primaryText py-3 px-12 cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-15 pb-30">
        <Container>
          <div className="grid grid-cols-3">
            <div className="text-center">
              <Image
                src={featureOne}
                alt="featureOne"
                height={70}
                width={70}
                className="m-auto"
              />
              <div className="mt-7.5">
                <h4 className="text-[18px] font-jost font-medium text-primaryText">
                  Best Price Guarantee
                </h4>
                <p className="font-jost text-[15px] text-[#697488] w-[70%] leading-6.5 mx-auto mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src={featureTwo}
                alt="featureTwo"
                height={70}
                width={70}
                className="m-auto"
              />
              <div className="mt-7.5">
                <h4 className="text-[18px] font-jost font-medium text-primaryText">
                  Easy & Quick Booking
                </h4>
                <p className="font-jost text-[15px] text-[#697488] w-[70%] leading-6.5 mx-auto mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Image
                src={featureThree}
                alt="featureThree"
                height={70}
                width={70}
                className="m-auto"
              />
              <div className="mt-7.5">
                <h4 className="text-[18px] font-jost font-medium text-primaryText">
                  Customer Care 24/7
                </h4>
                <p className="font-jost text-[15px] text-[#697488] w-[70%] leading-6.5 mx-auto mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#E5F0FD] py-30">
        <Container>
          <div className="flex justify-between">
            <div className="py-5 px-4 w-[40%]">
              <h2 className="font-jost font-semibold text-3xl text-primaryText w-[70%] leading-11">
                What our customers are saying us?
              </h2>
              <p className="text-base leading-7.5 text-[#697488] mt-5 font-jost">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo.
              </p>
              <div className="pt-15 grid grid-cols-[42%_40%]">
                <div>
                  <p className="text-3xl font-semibold font-jost text-primaryText">
                    13m+
                  </p>
                  <span className="font-jost text-base leading-7.5 text-[#697488]">
                    Happy People
                  </span>
                </div>
                <div>
                  <p className="text-3xl font-semibold font-jost text-primaryText">
                    4.88
                  </p>
                  <span className="font-jost text-base leading-7.5 text-[#697488]">
                    Overall rating
                  </span>
                  <div className={"flex gap-x-1 items-center mt-1.5"}>
                    <FaStar className="text-hoverText text-[10px]" />
                    <FaStar className="text-hoverText text-[10px]" />
                    <FaStar className="text-hoverText text-[10px]" />
                    <FaStar className="text-hoverText text-[10px]" />
                    <FaStar className="text-hoverText text-[10px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] py-5">
              <div className="flex gap-x-7.5 items-center">
                <Image src={reviewer} alt="reviewer" height={80} width={80} />
                <div>
                  <p className="text-base font-medium font-jost text-primaryText leading-6.5">
                    Annette Black
                  </p>
                  <span className="text-[15px] text-[#697488] font-jost">
                    UX / UI Designer
                  </span>
                </div>
              </div>
              <p className="mt-8 w-[94%] font-jost font-medium text-[18px] text-primaryText leading-7.5">
                The place is in a great location in Gumbet. The area is safe and
                beautiful. The apartment was comfortable and the host was kind
                and responsive to our requests.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-30 pb-15">
        <Container>
          <div className="text-center">
            <h2 className="font-jost font-semibold text-3xl text-primaryText leading-11">
              Get inspiration for your next trip
            </h2>
            <p className="text-base leading-7.5 text-[#697488] mt-1 font-jost">
              Interdum et malesuada fames
            </p>
            <div className="pt-10 grid grid-cols-3 gap-7.5">
              <Link href={"/"}>
                <div>
                  <Image
                    src={BlogOne}
                    alt="BlogOne"
                    height={308}
                    width={410}
                    className="rounded-lg"
                  />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
