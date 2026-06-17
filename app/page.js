"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import Container from "./(components)/Container";
import { FiSearch } from "react-icons/fi";
import Flex from "./(components)/Flex";
import { React, useEffect, useRef, useState } from "react";
import featureOne from "../public/1.svg";
import featureTwo from "../public/2.svg";
import featureThree from "../public/3.svg";
import reviewer from "../public/1 (1).webp";
import BlogOne from "../public/1 (2).webp";
import BlogTwo from "../public/2 (1).webp";
import BlogThree from "../public/3.webp";
import NewYork from "../public/1 (3).webp";
import London from "../public/2 (2).webp";
import Barcelona from "../public/3 (1).webp";
import Sydney from "../public/4.webp";
import Rome from "../public/5.webp";
import HotelOne from "../public/hotelOne.webp";
import HotelTwo from "../public/hotelTwo.webp";
import HotelThree from "../public/hotelThree.webp";
import HotelFour from "../public/hotelFour.webp";
import { FaCaretDown, FaCaretUp, FaStar } from "react-icons/fa";
import Link from "next/link";
import NextArrow from "./(components)/NextArrow";
import PrevArrow from "./(components)/PrevArrow";
import RecommendNext from "./(components)/RecommendNext";
import RecommendPrev from "./(components)/RecommendPrev";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Hotel");
  const [openTab, setOpenTab] = useState("all");
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isDestinationSectionVisible, setIsDestinationSectionVisible] =
    useState(false);
  const [isPromoSectionVisible, setIsPromoSectionVisible] = useState(false);
  const [isFeatureSectionVisible, setIsFeatureSectionVisible] = useState(false);
  const [isTestimonialSectionVisible, setIsTestimonialSectionVisible] =
    useState(false);
  const [isBlogSectionVisible, setIsBlogSectionVisible] = useState(false);
  const [isBlogGridVisible, setIsBlogGridVisible] = useState(false);
  const [isRecommendSectionVisible, setIsRecommendSectionVisible] =
    useState(false);

  const tabs = [
    { city: "Hawai", properties: "12,683 properties", category: "regions" },
    { city: "Istanbul", properties: "12,683 properties", category: "places" },
    { city: "San Diego", properties: "12,683 properties", category: "cities" },
    { city: "Phuket", properties: "12,683 properties", category: "regions" },
    { city: "Reykjavik", properties: "12,683 properties", category: "cities" },
    { city: "Santorini", properties: "12,683 properties", category: "cities" },
    {
      city: "Los Angeles",
      properties: "12,683 properties",
      category: "places",
    },
    { city: "İbiza", properties: "12,683 properties", category: "places" },
    { city: "Boston", properties: "12,683 properties", category: "cities" },
    { city: "Florence", properties: "12,683 properties", category: "regions" },
    { city: "Mykonos", properties: "12,683 properties", category: "places" },
    { city: "London", properties: "12,683 properties", category: "regions" },
    { city: "Paris", properties: "12,683 properties", category: "places" },
    { city: "Dubai", properties: "12,683 properties", category: "cities" },
    { city: "Krakow", properties: "12,683 properties", category: "regions" },
    { city: "Jersey", properties: "12,683 properties", category: "regions" },
    { city: "Prag", properties: "12,683 properties", category: "places" },
    { city: "Amsterdam", properties: "12,683 properties", category: "regions" },
    { city: "Rome", properties: "12,683 properties", category: "cities" },
    { city: "Miami", properties: "12,683 properties", category: "places" },
  ];

  const containerRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    let mixer;

    const initMixitup = async () => {
      const mixitupModule = await import("mixitup");
      const mixitup = mixitupModule.default;

      if (containerRef.current) {
        mixer = mixitup(containerRef.current, {
          selectors: {
            target: ".mix",
          },
          animation: {
            duration: 400,
          },
        });
      }
    };

    initMixitup();

    return () => {
      if (mixer) {
        mixer.destroy();
      }
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [recommend, setRecommend] = useState("Hotel");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentDestinationSlide, setCurrentDestinationSlide] = useState(0);
  const [isDesktopDestinationSlider, setIsDesktopDestinationSlider] =
    useState(false);
  const sliderRef = useRef(null);
  const destinationSliderRef = useRef(null);
  const destinationSectionRef = useRef(null);
  const dropdownRef = useRef(null);
  const promoSectionRef = useRef(null);
  const featureSectionRef = useRef(null);
  const testimonialSectionRef = useRef(null);
  const blogSectionRef = useRef(null);
  const blogGridRef = useRef(null);
  const recommendSectionRef = useRef(null);
  const slides = [1, 2, 3];
  const totalSlides = slides.length;
  const maxDesktopDestinationSlide = 1;
  const heroSlideClass = `hero-slide-up ${isHeroVisible ? "is-visible" : ""}`;
  const destinationRevealClass = `section-slide-up ${
    isDestinationSectionVisible ? "is-visible" : ""
  }`;
  const promoRevealClass = `section-slide-up ${
    isPromoSectionVisible ? "is-visible" : ""
  }`;
  const featureRevealClass = `section-slide-up ${
    isFeatureSectionVisible ? "is-visible" : ""
  }`;
  const testimonialRevealClass = `section-slide-up ${
    isTestimonialSectionVisible ? "is-visible" : ""
  }`;
  const blogSlideUpClass = `section-slide-up ${
    isBlogSectionVisible ? "is-visible" : ""
  }`;
  const blogSlideLeftClass = `section-slide-left ${
    isBlogGridVisible ? "is-visible" : ""
  }`;
  const recommendRevealClass = `section-slide-up section-slide-up-recommend ${
    isRecommendSectionVisible ? "is-visible" : ""
  }`;

  useEffect(() => {
    const outsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", outsideClick);

    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsHeroVisible(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const section = destinationSectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsDestinationSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsDestinationSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = promoSectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsPromoSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsPromoSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = featureSectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsFeatureSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsFeatureSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = testimonialSectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsTestimonialSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsTestimonialSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = blogSectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsBlogSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsBlogSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const grid = blogGridRef.current;

    if (!grid) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsBlogGridVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsBlogGridVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(grid);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = recommendSectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsRecommendSectionVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          setIsRecommendSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const updateDestinationSliderMode = () => {
      setIsDesktopDestinationSlider(mediaQuery.matches);
    };

    updateDestinationSliderMode();
    mediaQuery.addEventListener("change", updateDestinationSliderMode);

    return () => {
      mediaQuery.removeEventListener("change", updateDestinationSliderMode);
    };
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  var recommendSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RecommendNext />,
    prevArrow: <RecommendPrev />,
  };

  var recommendImageSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <NextArrow compact />,
    prevArrow: <PrevArrow compact />,
  };

  const recommendImageSlides = [
    { src: HotelOne, alt: "HotelOne" },
    { src: HotelTwo, alt: "HotelTwo" },
    { src: HotelThree, alt: "HotelThree" },
  ];

  const renderRecommendImageSlider = () => (
    <div
      className="recommend-image-slider overflow-hidden rounded-sm"
      onClickCapture={(event) => {
        if (event.target.closest(".recommend-image-arrow, .slick-dots")) {
          event.preventDefault();
        }
      }}>
      <Slider {...recommendImageSettings}>
        {recommendImageSlides.map((item) => (
          <div key={item.alt} className="focus:outline-0">
            <div className="overflow-hidden rounded-sm">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={300}
                className="recommend-image rounded-sm w-75 object-cover h-75"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

  var destinationSliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    // Four 300px cards fit flush inside the 1320px container.
    slidesToShow: 3.8823529412,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        maxSlide={
          isDesktopDestinationSlider ? maxDesktopDestinationSlide : undefined
        }
      />
    ),
    prevArrow: (
      <PrevArrow minSlide={isDesktopDestinationSlider ? 0 : undefined} />
    ),
    afterChange: (current) => {
      if (isDesktopDestinationSlider && current > maxDesktopDestinationSlide) {
        setCurrentDestinationSlide(maxDesktopDestinationSlide);
        destinationSliderRef.current?.slickGoTo(maxDesktopDestinationSlide);
        return;
      }

      setCurrentDestinationSlide(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-[url(../public/bg.webp)] bg-no-repeat bg-cover bg-center">
        <div className="pt-80 pb-52.5 bg-linear-[270deg] from-[rgba(5,16,54,0.5)] to-[#051036d9]">
          <Container>
            <div className="text-center opacity-100 z-50">
              <h1
                className={`${heroSlideClass} hero-slide-up-title font-semibold font-jost text-6xl text-white`}>
                Find Next Place To Visit
              </h1>
              <p
                className={`${heroSlideClass} hero-slide-up-text font-jost text-white font-medium text-base leading-7.5 pt-4 pb-15`}>
                Discover amzaing places at exclusive deals
              </p>
              <div
                className={`${heroSlideClass} hero-slide-up-tabs flex items-center gap-x-7 justify-center`}>
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
              <div
                className={`${heroSlideClass} hero-slide-up-search mt-10 p-2.5 bg-white rounded-full w-4xl m-auto grid grid-cols-[22%_28%_30%_20%]`}>
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

      <section
        ref={destinationSectionRef}
        className="pt-30 pb-10 overflow-hidden">
        <Container>
          <Flex
            className={`${destinationRevealClass} section-slide-up-flex mb-10`}>
            <div>
              <h3 className="font-jost text-3xl text-primaryText font-semibold">
                Popular Destinations
              </h3>
              <p className="font-jost text-pText text-base leading-7.5 mt-2">
                These popular destinations have a lot to offer
              </p>
            </div>
            <button className="py-3.5 px-7 bg-[#3554d10d] rounded-sm font-jost font-medium text-base transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] text-hoverText cursor-pointer hover:bg-hoverText hover:text-white">
              View All Destinations{" "}
              <RxArrowTopRight className={"ml-1 text-2xl inline"} />
            </button>
          </Flex>
          <div
            className={`${destinationRevealClass} section-slide-up-slider destination-slider`}>
            <Slider ref={destinationSliderRef} {...destinationSliderSettings}>
              <div
                className={`focus:outline-0 w-fit! destination-slide ${currentDestinationSlide > 0 ? "destination-slide-before" : ""}`}>
                <Link href={"/"} className="relative rounded-sm">
                  <Image
                    src={NewYork}
                    alt="NewYork"
                    height={400}
                    width={300}
                    className={"rounded-sm"}
                  />

                  <div className="absolute top-0 left-0 h-full w-75 rounded-sm flex flex-col justify-between pt-7.5 px-5 pb-5 text-center overflow-hidden group">
                    <div
                      className={
                        "bg-[#05103666] absolute rounded-sm top-0 left-0 h-full w-full transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100"
                      }></div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100 z-20">
                      <p className="text-sm text-white font-jost font-medium">
                        14 Hotel - 22 Cars - 18 Tours - 95 Activity
                      </p>
                    </div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-20 group-hover:translate-y-0">
                      <h4
                        className={
                          "text-[26px] text-white font-jost font-semibold mb-5"
                        }>
                        New York
                      </h4>
                      <button className="h-15 w-65 flex justify-center items-center rounded-sm text-[15px] font-jost font-medium text-primaryText bg-white cursor-pointer hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out">
                        Discover
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className={`rounded-sm focus:outline-0 w-fit! destination-slide ${currentDestinationSlide > 1 ? "destination-slide-before" : ""}`}>
                <Link href={"/"} className="relative rounded-sm">
                  <Image
                    src={London}
                    alt="London"
                    height={400}
                    width={300}
                    className={"rounded-sm"}
                  />
                  <div className="absolute top-0 left-0 h-full w-75 rounded-sm flex flex-col justify-between pt-7.5 px-5 pb-5 text-center overflow-hidden group">
                    <div
                      className={
                        "bg-[#05103666] absolute rounded-sm top-0 left-0 h-full w-full transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100"
                      }></div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100 z-20">
                      <p className="text-sm text-white font-jost font-medium">
                        14 Hotel - 22 Cars - 18 Tours - 95 Activity
                      </p>
                    </div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-20 group-hover:translate-y-0">
                      <h4
                        className={
                          "text-[26px] text-white font-jost font-semibold mb-5"
                        }>
                        London
                      </h4>
                      <button className="h-15 w-65 flex justify-center items-center rounded-sm text-[15px] font-jost font-medium text-primaryText bg-white cursor-pointer hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out">
                        Discover
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className={`rounded-sm focus:outline-0 w-fit! destination-slide ${currentDestinationSlide > 2 ? "destination-slide-before" : ""}`}>
                <Link href={"/"} className="relative rounded-sm">
                  <Image
                    src={Barcelona}
                    alt="Barcelona"
                    height={400}
                    width={300}
                    className={"rounded-sm"}
                  />
                  <div className="absolute top-0 left-0 h-full w-75 rounded-sm flex flex-col justify-between pt-7.5 px-5 pb-5 text-center overflow-hidden group">
                    <div
                      className={
                        "bg-[#05103666] absolute rounded-sm top-0 left-0 h-full w-full transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100"
                      }></div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100 z-20">
                      <p className="text-sm text-white font-jost font-medium">
                        14 Hotel - 22 Cars - 18 Tours - 95 Activity
                      </p>
                    </div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-20 group-hover:translate-y-0">
                      <h4
                        className={
                          "text-[26px] text-white font-jost font-semibold mb-5"
                        }>
                        Barcelona
                      </h4>
                      <button className="h-15 w-65 flex justify-center items-center rounded-sm text-[15px] font-jost font-medium text-primaryText bg-white cursor-pointer hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out">
                        Discover
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className={`rounded-sm focus:outline-0 w-fit! destination-slide ${currentDestinationSlide > 3 ? "destination-slide-before" : ""}`}>
                <Link href={"/"} className="relative rounded-sm">
                  <Image
                    src={Sydney}
                    alt="Sydney"
                    height={400}
                    width={300}
                    className={"rounded-sm"}
                  />
                  <div className="absolute top-0 left-0 h-full w-75 rounded-sm flex flex-col justify-between pt-7.5 px-5 pb-5 text-center overflow-hidden group">
                    <div
                      className={
                        "bg-[#05103666] absolute rounded-sm top-0 left-0 h-full w-full transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100"
                      }></div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100 z-20">
                      <p className="text-sm text-white font-jost font-medium">
                        14 Hotel - 22 Cars - 18 Tours - 95 Activity
                      </p>
                    </div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-20 group-hover:translate-y-0">
                      <h4
                        className={
                          "text-[26px] text-white font-jost font-semibold mb-5"
                        }>
                        Sydney
                      </h4>
                      <button className="h-15 w-65 flex justify-center items-center rounded-sm text-[15px] font-jost font-medium text-primaryText bg-white cursor-pointer hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out">
                        Discover
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className={
                  "rounded-sm focus:outline-0 w-fit! destination-slide"
                }>
                <Link href={"/"} className="relative rounded-sm">
                  <Image
                    src={Rome}
                    alt="Rome"
                    height={400}
                    width={300}
                    className={"rounded-sm h-100"}
                  />
                  <div className="absolute top-0 left-0 h-full w-75 rounded-sm flex flex-col justify-between pt-7.5 px-5 pb-5 text-center overflow-hidden group">
                    <div
                      className={
                        "bg-[#05103666] absolute rounded-sm top-0 left-0 h-full w-full transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100"
                      }></div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] opacity-0 group-hover:opacity-100 z-20">
                      <p className="text-sm text-white font-jost font-medium">
                        14 Hotel - 22 Cars - 18 Tours - 95 Activity
                      </p>
                    </div>
                    <div className="transition-all duration-500 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-20 group-hover:translate-y-0">
                      <h4
                        className={
                          "text-[26px] text-white font-jost font-semibold mb-5"
                        }>
                        Rome
                      </h4>
                      <button className="h-15 w-65 flex justify-center items-center rounded-sm text-[15px] font-jost font-medium text-primaryText bg-white cursor-pointer hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out">
                        Discover
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
        </Container>
      </section>

      <section ref={promoSectionRef} className="py-15">
        <Container>
          <div
            className={`${promoRevealClass} section-slide-up-promo grid grid-cols-2 gap-x-7.5 mt-7.5`}>
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

      <section ref={recommendSectionRef} className={"py-15 recommend"}>
        <Container className={recommendRevealClass}>
          <Flex className={` mb-10`}>
            <div>
              <h3 className="font-jost text-3xl text-primaryText font-semibold">
                Recommended
              </h3>
              <p className="font-jost text-pText text-base leading-7.5 mt-2">
                Interdum et malesuada fames ac ante ipsum
              </p>
            </div>
            <div ref={dropdownRef} className="relative">
              <button
                className={`w-35 h-12.5 px-5 border border-[#DDDDDD] rounded-sm font-jost font-medium text-base text-primaryText flex justify-between items-center cursor-pointer ${isOpen && "focus:outline-2"} transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]`}
                onClick={() => setIsOpen(!isOpen)}>
                {recommend}
                {isOpen ? (
                  <FaCaretUp className="transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]" />
                ) : (
                  <FaCaretDown className="transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]" />
                )}
              </button>
              {isOpen && (
                <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 py-3.5 px-5 bg-white shadow-[0px_25px_70px_rgba(1, 33, 58, 0.07)] min-w-40 border border-[#DDDDDD] rounded-sm transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                  <div className="-my-2 text-sm font-medium font-jost text-primaryText">
                    {[
                      "Animation",
                      "Design",
                      "Illustration",
                      "Lifestyle",
                      "Business",
                    ].map((item) => (
                      <div
                        key={item}
                        className="py-2 hover:text-hoverText transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer"
                        onClick={() => setRecommend(item)}>
                        <Link href={"/"}>{item}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Flex>
          <Slider {...recommendSettings}>
            <div className="relative w-75! group">
              <Link href={"/"}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={HotelOne}
                    alt="HotelOne"
                    width={300}
                    height={300}
                    className="rounded-sm w-75 object-cover h-75 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
                  />
                </div>
                <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                  <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
                </div>
                <div className="absolute top-5 left-0">
                  <div className="rounded-tr-sm rounded-br-sm bg-primaryText uppercase font-jost font-medium text-white py-1.5 px-4 text-[12px]">
                    Breakfast included
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      The Montcalm At Brewery London City
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Westminster Borough, London
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group flex flex-col h-119.5">
              <Link href={"/"} className="recoSlider">
              {renderRecommendImageSlider()}
              <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
              </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      Staycity Aparthotels Deptford Bridge Station
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Ciutat Vella, Barcelona
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group">
              <Link href={"/"}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={HotelThree}
                    alt="HotelThree"
                    width={300}
                    height={300}
                    className="rounded-sm w-75 object-cover h-75 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
                  />
                </div>
                <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                  <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
                </div>
                <div className="absolute top-5 left-0">
                  <div className="rounded-tr-sm rounded-br-sm bg-hoverText uppercase font-jost font-medium text-white py-1.5 px-4 text-[12px]">
                    Best Seller
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      The Westin New York at Times Square
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Manhattan, New York
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group">
              <Link href={"/"}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={HotelFour}
                    alt="HotelFour"
                    width={300}
                    height={300}
                    className="rounded-sm w-75 object-cover h-75 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
                  />
                </div>
                <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                  <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
                </div>
                <div className="absolute top-5 left-0">
                  <div className="rounded-tr-sm rounded-br-sm bg-[#F8D448] uppercase font-jost font-medium text-primaryText py-1.5 px-4 text-[12px]">
                    Top Rated
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      DoubleTree by Hilton Hotel New York Times Square West
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Vaticano Prati, Rome
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group">
              <Link href={"/"}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={HotelOne}
                    alt="HotelOne"
                    width={300}
                    height={300}
                    className="rounded-sm w-75 object-cover h-75 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
                  />
                </div>
                <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                  <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
                </div>
                <div className="absolute top-5 left-0">
                  <div className="rounded-tr-sm rounded-br-sm bg-primaryText uppercase font-jost font-medium text-white py-1.5 px-4 text-[12px]">
                    Breakfast included
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      The Montcalm At Brewery London City
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Westminster Borough, London
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group">
              {renderRecommendImageSlider()}
              <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
              </div>
              <Link href={"/"}>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      Staycity Aparthotels Deptford Bridge Station
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Ciutat Vella, Barcelona
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group">
              <Link href={"/"}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={HotelThree}
                    alt="HotelThree"
                    width={300}
                    height={300}
                    className="rounded-sm w-75 object-cover h-75 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
                  />
                </div>
                <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                  <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
                </div>
                <div className="absolute top-5 left-0">
                  <div className="rounded-tr-sm rounded-br-sm bg-hoverText uppercase font-jost font-medium text-white py-1.5 px-4 text-[12px]">
                    Best Seller
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      The Westin New York at Times Square
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Manhattan, New York
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative w-75! group">
              <Link href={"/"}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={HotelFour}
                    alt="HotelFour"
                    width={300}
                    height={300}
                    className="rounded-sm w-75 object-cover h-75 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]"
                  />
                </div>
                <div className="absolute top-5 right-5 h-7.5 w-7.5 bg-white rounded-full flex justify-center items-center group/wish hover:bg-hoverText transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer">
                  <IoMdHeartEmpty className="text-primaryText group-hover/wish:text-white" />
                </div>
                <div className="absolute top-5 left-0">
                  <div className="rounded-tr-sm rounded-br-sm bg-[#F8D448] uppercase font-jost font-medium text-primaryText py-1.5 px-4 text-[12px]">
                    Top Rated
                  </div>
                </div>
                <div className="mt-2.5">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5 w-[95%]">
                    <span
                      className="
      bg-[linear-gradient(transparent_24px,black_20px)]
      bg-no-repeat
      bg-size-[0%_100%]
      transition-[background-size]
      duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]
      group-hover:bg-size-[100%_100%]
    ">
                      DoubleTree by Hilton Hotel New York Times Square West
                    </span>
                  </h4>
                  <p className="mt-1.5 text-sm text-pText font-jost">
                    Vaticano Prati, Rome
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="text-[12px] font-semibold text-white rounded-sm bg-hoverText h-7.5 w-7.5 flex justify-center items-center">
                      4.8
                    </div>
                    <div className="text-primaryText text-sm font-medium font-jost ml-2.5">
                      Exceptional
                    </div>
                    <div className="text-pText text-sm font-medium font-jost ml-2.5">
                      3,014 reviews
                    </div>
                  </div>
                  <div
                    className="mt-2 font-medium font-jost text-primaryText group-hover:text-hoverText transition-all duration-300
      ease-[cubic-bezier(0.785,0.135,0.15,0.86)]">
                    Starting from <span className="text-hoverText">US$72</span>
                  </div>
                </div>
              </Link>
            </div>
          </Slider>
        </Container>
      </section>

      <section ref={featureSectionRef} className="pt-24 pb-30">
        <Container>
          <div className="grid grid-cols-3">
            <div
              className={`${featureRevealClass} section-slide-up-feature-one text-center`}>
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
                <p className="font-jost text-[15px] text-pText w-[70%] leading-6.5 mx-auto mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className={`${featureRevealClass} section-slide-up-feature-two text-center`}>
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
                <p className="font-jost text-[15px] text-pText w-[70%] leading-6.5 mx-auto mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className={`${featureRevealClass} section-slide-up-feature-three text-center`}>
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
                <p className="font-jost text-[15px] text-pText w-[70%] leading-6.5 mx-auto mt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section ref={testimonialSectionRef} className="bg-[#E5F0FD] py-30">
        <Container>
          <div className="flex justify-between">
            <div
              className={`${testimonialRevealClass} section-slide-up-testimonial-content py-5 px-4 w-[40%]`}>
              <h2 className="font-jost font-semibold text-3xl text-primaryText w-[70%] leading-11">
                What our customers are saying us?
              </h2>
              <p className="text-base leading-7.5 text-pText mt-5 font-jost">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo.
              </p>
              <div className="pt-15 grid grid-cols-[42%_40%]">
                <div>
                  <p className="text-3xl font-semibold font-jost text-primaryText">
                    13m+
                  </p>
                  <span className="font-jost text-base leading-7.5 text-pText">
                    Happy People
                  </span>
                </div>
                <div>
                  <p className="text-3xl font-semibold font-jost text-primaryText">
                    4.88
                  </p>
                  <span className="font-jost text-base leading-7.5 text-pText">
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
            <div
              className={`${testimonialRevealClass} section-slide-up-testimonial-slider w-[50%] py-5 testimonial-slider`}>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <div className="flex gap-x-7.5 items-center">
                    <Image
                      src={reviewer}
                      alt="reviewer"
                      height={80}
                      width={80}
                    />
                    <div>
                      <p className="text-base font-medium font-jost text-primaryText leading-6.5">
                        Annette Black
                      </p>
                      <span className="text-[15px] text-pText font-jost">
                        UX / UI Designer
                      </span>
                    </div>
                  </div>
                  <p className="mt-8 w-[94%] font-jost font-medium text-left text-[18px] text-primaryText leading-7.5">
                    The place is in a great location in Gumbet. The area is safe
                    and beautiful. The apartment was comfortable and the host
                    was kind and responsive to our requests.
                  </p>
                </div>
                <div>
                  <div className="flex gap-x-7.5 items-center">
                    <Image
                      src={reviewer}
                      alt="reviewer"
                      height={80}
                      width={80}
                    />
                    <div>
                      <p className="text-base font-medium font-jost text-primaryText leading-6.5">
                        Annette Black
                      </p>
                      <span className="text-[15px] text-pText font-jost">
                        UX / UI Designer
                      </span>
                    </div>
                  </div>
                  <p className="mt-8 text-left w-[94%] font-jost font-medium text-[18px] text-primaryText leading-7.5">
                    The place is in a great location in Gumbet. The area is safe
                    and beautiful. The apartment was comfortable and the host
                    was kind and responsive to our requests.
                  </p>
                </div>
                <div>
                  <div className="flex gap-x-7.5 items-center">
                    <Image
                      src={reviewer}
                      alt="reviewer"
                      height={80}
                      width={80}
                    />
                    <div>
                      <p className="text-base font-medium font-jost text-primaryText leading-6.5">
                        Annette Black
                      </p>
                      <span className="text-[15px] text-pText font-jost">
                        UX / UI Designer
                      </span>
                    </div>
                  </div>
                  <p className="mt-8 text-left w-[94%] font-jost font-medium text-[18px] text-primaryText leading-7.5">
                    The place is in a great location in Gumbet. The area is safe
                    and beautiful. The apartment was comfortable and the host
                    was kind and responsive to our requests.
                  </p>
                </div>
              </Slider>
              <div className="flex items-center gap-x-6 mt-16">
                {/* Current */}
                <span className="text-base font-medium text-primaryText font-jost">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>

                {/* Segmented Progress (Clickable) */}
                <div className="flex-1 flex max-w-82.5">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => sliderRef.current.slickGoTo(index)}
                      className={`h-0.75 flex-1 rounded-full transition-colors duration-200 ease-in-out ${index === currentSlide ? "cursor-grab" : "cursor-pointer"}`}
                      style={{
                        backgroundColor:
                          index === currentSlide ? "#051036" : "#D9D9D9",
                      }}
                    />
                  ))}
                </div>

                {/* Total */}
                <span className="text-base font-medium text-primaryText font-jost">
                  {String(totalSlides).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section ref={blogSectionRef} className="pt-30 pb-15">
        <Container>
          <div
            className={`${blogSlideUpClass} section-slide-up-blog-heading text-center`}>
            <h2 className="font-jost font-semibold text-3xl text-primaryText leading-11">
              Get inspiration for your next trip
            </h2>
            <p className="text-base leading-7.5 text-pText mt-1 font-jost">
              Interdum et malesuada fames
            </p>
          </div>
          <div ref={blogGridRef} className="pt-10 grid grid-cols-3 gap-7.5">
            <Link
              href={"/"}
              className={`${blogSlideLeftClass} section-slide-left-blog-one block`}>
              <div className="group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={BlogOne}
                    alt="BlogOne"
                    height={308}
                    width={410}
                    className="w-full rounded-lg group-hover:scale-110 group-hover:rounded-lg transition-transform duration-300 ease-in-out object-cover"
                  />
                </div>
                <div className="mt-5 text-left">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5">
                    10 European ski destinations you should visit this winter
                  </h4>
                  <p className="mt-1.5 font-jost text-pText text-[15px] leading-6.5">
                    April 06, 2022
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href={"/"}
              className={`${blogSlideLeftClass} section-slide-left-blog-two block`}>
              <div className="group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={BlogTwo}
                    alt="BlogOne"
                    height={308}
                    width={410}
                    className="w-full rounded-lg group-hover:scale-110 group-hover:rounded-lg transition-transform duration-300 ease-in-out object-cover"
                  />
                </div>
                <div className="mt-5 text-left">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5">
                    Booking travel during Corona: good advice in an uncertain
                    time
                  </h4>
                  <p className="mt-1.5 font-jost text-pText text-[15px] leading-6.5">
                    April 06, 2022
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href={"/"}
              className={`${blogSlideLeftClass} section-slide-left-blog-three block`}>
              <div className="group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={BlogThree}
                    alt="BlogOne"
                    height={308}
                    width={410}
                    className="w-full rounded-lg group-hover:scale-110 group-hover:rounded-lg transition-transform duration-300 ease-in-out object-cover"
                  />
                </div>
                <div className="mt-5 text-left">
                  <h4 className="text-[18px] text-primaryText font-jost font-medium leading-7.5">
                    Where can I go? 5 amazing countries that are open right now
                  </h4>
                  <p className="mt-1.5 font-jost text-pText text-[15px] leading-6.5">
                    April 06, 2022
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <section className="pt-15 pb-30">
        <Container>
          <h3 className="font-jost font-semibold text-3xl text-primaryText leading-11">
            Destinations we love
          </h3>
          <p className="text-base leading-7.5 text-pText mt-1 font-jost">
            Interdum et malesuada fames ac ante ipsum
          </p>
          <div className="pt-10">
            <div className="flex mb-7.5 items-center">
              <button
                type="button"
                data-filter="all"
                className={`filter-btn py-4 px-7.5 text-[15px] font-jost font-medium rounded-sm transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer hover:text-hoverText ${openTab === "all" ? "bg-[#3554d10d] text-hoverText" : "text-primaryText "}`}
                onClick={() => {
                  setOpenTab("all");
                  mixerRef.current?.filter("all");
                }}>
                All
              </button>
              <button
                type="button"
                data-filter=".regions"
                className={`filter-btn py-4 px-7.5 text-[15px] font-jost font-medium rounded-sm transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer hover:text-hoverText ${openTab === "regions" ? "bg-[#3554d10d] text-hoverText" : "text-primaryText "}`}
                onClick={() => {
                  setOpenTab("regions");
                  mixerRef.current?.filter(".regions");
                }}>
                Regions
              </button>
              <button
                type="button"
                data-filter=".cities"
                className={`filter-btn py-4 px-7.5 text-[15px] font-jost font-medium rounded-sm transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer hover:text-hoverText ${openTab === "cities" ? "bg-[#3554d10d] text-hoverText" : "text-primaryText "}`}
                onClick={() => {
                  setOpenTab("cities");
                  mixerRef.current?.filter(".cities");
                }}>
                Cities
              </button>
              <button
                type="button"
                data-filter=".places"
                className={`filter-btn py-4 px-7.5 text-[15px] font-jost font-medium rounded-sm transition-all duration-200 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] cursor-pointer hover:text-hoverText ${openTab === "places" ? "bg-[#3554d10d] text-hoverText" : "text-primaryText "}`}
                onClick={() => {
                  setOpenTab("places");
                  mixerRef.current?.filter(".places");
                }}>
                Place of interest
              </button>
            </div>
          </div>
          <div
            ref={containerRef}
            className="grid grid-rows-4 grid-cols-5 gap-x-5 gap-y-6">
            {tabs.map((item) => (
              <Link
                key={item.city}
                href={"/"}
                className={`mix ${item.category} group`}>
                <p className="text-[15px] font-jost font-medium text-primaryText group-hover:text-hoverText transition-all duration-300 ease-in-out">
                  {item.city}
                </p>
                <span className="text-sm text-pText font-jost pt-1.5">
                  {item.properties}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
