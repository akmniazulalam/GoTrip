"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Flex from "./Flex";
import Image from "next/image";
import logo from "../../public/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import England from "../../public/lang.webp";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState("Hotel");
  const [categoryPanelVisible, setCategoryPanelVisible] = useState(true);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [dashboardDropdown, setDashboardDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [animateSubmenu, setAnimateSubmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [language, setLanguage] = useState(false);
  const currencyRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    const clickOutside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setCurrency(false);
      }

      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguage(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileMenuOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  const openMenu = () => {
    setMobileMenuOpen(true);
    requestAnimationFrame(() => {
      setAnimateMenu(true);
    });
  };

  const closeMenu = () => {
    setAnimateMenu(false);
    setAnimateSubmenu(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMobileSubmenu(null);
    }, 750);
  };

  const openSubmenu = (name) => {
    setAnimateSubmenu(false);
    requestAnimationFrame(() => {
      setMobileSubmenu(name);
      requestAnimationFrame(() => {
        setAnimateSubmenu(true);
      });
    });
  };

  const closeSubmenu = () => {
    setAnimateSubmenu(false);
    setTimeout(() => {
      setMobileSubmenu(null);
    }, 650);
  };

  const handleHome = () => {
    setHomeDropdown(!homeDropdown);
  };
  const handleCategories = () => {
    setCategoriesDropdown(true);
  };
  const handleCategoryTab = (tab) => {
    if (tab === activeCategoryTab) return;

    setCategoryPanelVisible(false);

    window.setTimeout(() => {
      setActiveCategoryTab(tab);
      window.requestAnimationFrame(() => {
        setCategoryPanelVisible(true);
      });
    }, 120);
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
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currencyItems = [
    {
      currencyName: "United States dollar",
      currency: "USD - $",
    },
    {
      currencyName: "Australian dollar",
      currency: "AUD - $",
    },
    {
      currencyName: "Brazilian real",
      currency: "BRL - R$",
    },
    {
      currencyName: "Bulgarian lev",
      currency: "BGN - лв.",
    },
    {
      currencyName: "Canadian dollar",
      currency: "CAD - $",
    },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencyItems[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const repeatedCurrencyGridItems = Array.from(
    { length: 20 },
    (_, index) => currencyItems[index % currencyItems.length],
  );

  const languageItems = [
    {
      language: "English",
      country: "United States",
    },
    {
      language: "Türkçe",
      country: "Turkey",
    },
    {
      language: "Español",
      country: "España",
    },
    {
      language: "Français",
      country: "France",
    },
    {
      language: "Italiano",
      country: "Italia",
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languageItems[0]);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

  const repeatedLanguageGridItems = Array.from(
    { length: 20 },
    (_, index) => languageItems[index % languageItems.length],
  );

  const categoryTabs = [
    "Hotel",
    "Tour",
    "Activity",
    "Holiday Rentals",
    "Car",
    "Cruise",
    "Flights",
  ];

  const categoryMenus = {
    Hotel: [
      {
        title: "Hotel List",
        links: [
          "Hotel List v1",
          "Hotel List v2",
          "Hotel List v3",
          "Hotel List v4",
          "Hotel List v5",
        ],
      },
      {
        title: "Hotel Single",
        links: ["Hotel Single v1", "Hotel Single v2"],
      },
      {
        title: "Hotel Booking",
        links: ["Booking Page"],
      },
    ],
    Tour: [
      {
        title: "Tour List",
        links: ["Tour List v1", "Tour List v2"],
      },
      {
        title: "Tour Pages",
        links: ["Tour Map", "Tour Single"],
      },
    ],
    Activity: [
      {
        title: "Activity List",
        links: ["Activity List v1", "Activity List v2"],
      },
      {
        title: "Activity Pages",
        links: ["Activity Map", "Activity Single"],
      },
    ],
    "Holiday Rentals": [
      {
        title: "Rental List",
        links: ["Rental List v1", "Rental List v2"],
      },
      {
        title: "Rental Pages",
        links: ["Rental Map", "Rental Single"],
      },
    ],
    Car: [
      {
        title: "Car List",
        links: ["Car List v1", "Car List v2"],
      },
      {
        title: "Car Pages",
        links: ["Car Map", "Car Single"],
      },
    ],
    Cruise: [
      {
        title: "Cruise List",
        links: ["Cruise List v1", "Cruise List v2"],
      },
      {
        title: "Cruise Pages",
        links: ["Cruise Map", "Cruise Single"],
      },
    ],
    Flights: [
      {
        title: "Flight List",
        links: ["Flight List v1"],
      },
    ],
  };

  const getCategoryHref = (label) =>
    `/${label.toLowerCase().replaceAll(" ", "-")}`;

  const categoryPanelImages = categoryTabs.reduce((images, tab) => {
    images[tab] = {
      src: "/7.webp",
      alt: `Things to do on your trip - ${tab}`,
      href: getCategoryHref(tab),
    };

    return images;
  }, {});

  const activeCategoryPanel = {
    columns: categoryMenus[activeCategoryTab],
    image: categoryPanelImages[activeCategoryTab],
  };

  const homeLinks = [
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
  ];

  const mobileMenus = [
    { name: "Home", links: homeLinks },
    {
      name: "Categories",
      links: categoryTabs.map((tab) => ({
        name: tab,
        href: getCategoryHref(tab),
      })),
    },
    { name: "Destinations", href: "/" },
    {
      name: "Blog",
      links: [
        { name: "Blog list v1", href: "/" },
        { name: "Blog list v2", href: "/about" },
        { name: "Blog list v3", href: "/contact" },
      ],
    },
    {
      name: "Pages",
      links: [
        { name: "404", href: "/" },
        { name: "About", href: "/about" },
        { name: "Become Expert", href: "/contact" },
        { name: "Help center", href: "/contact" },
        { name: "Login", href: "/contact" },
        { name: "Register", href: "/contact" },
        { name: "Terms", href: "/contact" },
        { name: "Invoice", href: "/contact" },
        { name: "UI elements", href: "/contact" },
      ],
    },
    {
      name: "Dashboard",
      links: [
        { name: "Dashboard", href: "/" },
        { name: "Booking", href: "/about" },
        { name: "Settings", href: "/contact" },
        { name: "Wishlist", href: "/contact" },
        { name: "Vendor dashboard", href: "/contact" },
      ],
    },
    { name: "Contact", href: "/" },
  ];

  const activeMobileMenu = mobileMenus.find(
    (item) => item.name === mobileSubmenu,
  );
  const isMobileHeaderSolid = mobileMenuOpen || isScrolled;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <div
        className={`site-mobile-header transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isMobileHeaderSolid
            ? "bg-primaryText text-white"
            : "bg-transparent text-white"
        }`}>
        {/* Header */}
        <div className="flex h-24 items-center justify-between px-6">
          <Link href={"/"} onClick={closeMobileMenu}>
            <Image
              src={logo}
              alt="GoTrip"
              height={42}
              width={120}
              loading="eager"
              className="h-13 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link href={"/"} aria-label="Account">
              <FiUser className="text-[28px]" />
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMenu();
                } else {
                  openMenu();
                }
              }}
              className="flex h-10 w-10 items-center justify-center">
              {mobileMenuOpen ? (
                <RxCross2 className="text-[26px]" />
              ) : (
                <FaBarsStaggered className="text-[28px]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed left-0 top-24 h-[calc(100dvh-96px)] w-full overflow-y-auto bg-white transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
            mobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}>
          <div className="min-h-full border-b border-[#DDDDDD] px-6 pb-6 pt-10">
            {activeMobileMenu ? (
              <>
                {/* Back Button */}
                <button
                  type="button"
                  onClick={closeSubmenu}
                  className="mb-7 flex h-15 w-full items-center gap-4 rounded-sm bg-[#F5F6FE] px-7 text-left font-jost text-xl font-medium text-hoverText">
                  <FaCaretDown className="rotate-90 text-[14px]" />
                  {activeMobileMenu.name}
                </button>

                {/* Submenu */}
                <ul className="space-y-2 px-6">
                  {activeMobileMenu.links.map((item, index) => (
                    <li key={item.name} className="overflow-hidden">
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        style={{
                          transitionDelay: `${index * 90}ms`,
                        }}
                        className={`block font-jost text-[18px] font-medium leading-8 text-primaryText transition-transform
duration-800
ease-[cubic-bezier(0.22,1,0.36,1)]
will-change-transform ${
                          animateSubmenu ? "translate-y-0" : "translate-y-full"
                        }`}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className="space-y-4 px-6">
                {mobileMenus.map((item, index) => (
                  <li key={item.name} className="overflow-hidden">
                    {item.links ? (
                      <button
                        type="button"
                        onClick={() => openSubmenu(item.name)}
                        style={{
                          transitionDelay: `${index * 90}ms`,
                        }}
                        className={`flex w-full items-center justify-between font-jost text-[20px] font-medium leading-9 text-primaryText transition-transform
duration-800
ease-[cubic-bezier(0.22,1,0.36,1)]
will-change-transform ${animateMenu ? "translate-y-0" : "translate-y-full"}`}>
                        {item.name}
                        <FaCaretDown className="-rotate-90 text-[14px]" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        style={{
                          transitionDelay: `${index * 90}ms`,
                        }}
                        className={`block font-jost text-[20px] font-medium leading-9 text-primaryText transition-transform
duration-800
ease-[cubic-bezier(0.22,1,0.36,1)]
will-change-transform ${animateMenu ? "translate-y-0" : "translate-y-full"}`}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div
        className={`hidden transition-all duration-300 ease-in-out md:block site-desktop-header ${isScrolled ? "bg-primaryText" : "bg-transparent"}`}>
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
                  <div className="flex gap-2 items-center py-5.25 cursor-pointer">
                    Home <FaCaretDown />
                  </div>
                  {homeDropdown && (
                    <ul className="absolute top-16 -left-3 bg-white rounded-sm text-primaryText min-w-60 p-5 shadow-[0px_10px_30px_0px_#05103608] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
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
                          className="hover:text-hoverText hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
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
                <li
                  onMouseEnter={handleCategories}
                  onMouseLeave={() => setCategoriesDropdown(false)}
                  className="relative">
                  <div className="flex gap-2 items-center py-5.25 cursor-pointer">
                    Categories <FaCaretDown />
                  </div>
                  {categoriesDropdown && (
                    <div className="absolute top-16 -left-3 w-200 max-w-[calc(100vw-32px)] bg-white rounded-sm text-primaryText p-6 lg:p-7.5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                      <div className="flex flex-wrap items-center gap-x-9 gap-y-3">
                        {categoryTabs.map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => handleCategoryTab(tab)}
                            className={`relative pb-2 text-base font-medium font-jost transition-all duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] cursor-pointer ${
                              activeCategoryTab === tab
                                ? "text-hoverText after:absolute after:left-0 after:bottom-1.25 after:h-0.5 after:w-full after:bg-hoverText after:content-['']"
                                : "text-pText hover:text-hoverText"
                            }`}>
                            {tab}
                          </button>
                        ))}
                      </div>

                      <div
                        key={activeCategoryTab}
                        className={`mt-10 grid grid-cols-1 gap-7.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:grid-cols-[1fr_280px] lg:items-start ${
                          categoryPanelVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}>
                        <div className="grid min-w-0 grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                          {activeCategoryPanel.columns.map((column) => (
                            <div key={column.title}>
                              <h3 className="mb-4 text-base font-medium font-jost text-primaryText">
                                {column.title}
                              </h3>
                              <ul className="space-y-3">
                                {column.links.map((item) => (
                                  <li key={item}>
                                    <Link
                                      href={getCategoryHref(item)}
                                      onClick={() =>
                                        setCategoriesDropdown(false)
                                      }
                                      className="block text-base font-jost text-primaryText transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:text-hoverText">
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <Link
                          key={`${activeCategoryTab}-image-link`}
                          href={activeCategoryPanel.image.href}
                          onClick={() => setCategoriesDropdown(false)}
                          className="group relative hidden h-78.75 overflow-hidden rounded-sm transform-[translateZ(0)] lg:block">
                          <Image
                            key={`${activeCategoryTab}-image`}
                            src={activeCategoryPanel.image.src}
                            alt={activeCategoryPanel.image.alt}
                            fill
                            sizes="280px"
                            className="origin-center object-cover transform-gpu select-none will-change-transform transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          />
                          <div className="absolute inset-x-7 top-7">
                            <p className="text-[25px] leading-[1.35] font-medium font-jost text-white">
                              Things to do on
                              <br />
                              your trip
                            </p>
                            <span className="mt-6 inline-flex h-13 min-w-38 items-center justify-center rounded-sm bg-white px-5 text-base font-medium font-jost text-primaryText hover:bg-hoverText hover:text-white transition-all duration-300 ease-in-out">
                              Experiences
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
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
                  <div className="flex gap-2 items-center py-5.25 cursor-pointer">
                    Blog <FaCaretDown />
                  </div>
                  {blogDropdown && (
                    <ul className="absolute top-16 -left-3 bg-white rounded-sm text-primaryText min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
                      {[
                        { name: "Blog list v1", href: "/" },
                        { name: "Blog list v2", href: "/about" },
                        { name: "Blog list v3", href: "/contact" },
                      ].map((item) => (
                        <li
                          key={item.name}
                          className="hover:text-hoverText hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
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
                  <div className="flex gap-2 items-center py-5.25 cursor-pointer">
                    Pages <FaCaretDown />
                  </div>
                  {pagesDropdown && (
                    <ul className="absolute top-16 -left-3 bg-white rounded-sm text-primaryText min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
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
                          className="hover:text-hoverText hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
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
                  <div className="flex gap-2 items-center py-5.25 cursor-pointer">
                    Dashboard <FaCaretDown />
                  </div>
                  {dashboardDropdown && (
                    <ul className="absolute top-16 -left-3 bg-white rounded-sm text-primaryText min-w-60 p-5 shadow-[0px_10px_60px_0px_#0510360D] transition-all duration-200 ease-[cubic-bezier(0.165,0.84,0.44,1)] before:absolute before:content-[''] before:-top-1.25 before:left-5 before:w-2.5 before:h-2.5 before:bg-white before:rotate-45">
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
                          className="hover:text-hoverText hover:bg-[#3554d10d] py-1.25 px-4 rounded-sm text-black font-jost text-base cursor-pointer">
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
              <div ref={currencyRef}>
                <span
                  href={"/"}
                  className="uppercase flex gap-2 items-center font-jost  text-[15px] cursor-pointer"
                  onClick={() => setCurrency(!currency)}>
                  {selectedCurrency.currency.split(" - ")[0]} <FaCaretDown />
                </span>
                {currency && (
                  <div className="top-0 left-0 w-full h-full pt-30 z-50 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] fixed">
                    <div
                      className="absolute top-0 left-0 h-full w-full z-0 bg-[#05103666]"
                      onClick={() => setCurrency(false)}></div>
                    <div
                      className="w-267.5 bg-white rounded-sm absolute left-1/2 -translate-x-1/2"
                      onClick={(e) => e.stopPropagation()}>
                      <div className="px-7.5 py-5 flex justify-between items-center">
                        <p className="text-xl font-medium text-black font-jost">
                          Select your currency
                        </p>
                        <RxCross2
                          className="text-primaryText text-2xl cursor-pointer"
                          onClick={() => setCurrency(false)}
                        />
                      </div>
                      <hr className="text-[#ddd]" />
                      <div className="p-7.5 grid grid-cols-5 grid-rows-4 gap-7.5">
                        {repeatedCurrencyGridItems.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedIndex(index);
                              setSelectedCurrency(item);
                            }}
                            className={`py-2.5 px-4 rounded-sm cursor-pointer group hover:bg-[#3554d10d] transition-all duration-150 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] ${selectedIndex === index ? "bg-[#F5F5F5]" : ""}`}>
                            <div className="text-primaryText text-[15px] font-medium font-jost mb-1 group-hover:text-hoverText">
                              {item.currencyName}
                            </div>
                            <span className="text-sm text-primaryText font-jost">
                              {item.currency}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-0.5 h-5 bg-[#ffffff33]"></div>
              <div className="flex gap-x-2 items-center">
                <Image
                  src={England}
                  alt="england"
                  height={20}
                  width={20}
                  className="rounded-full h-5"
                />
                <div ref={languageRef}>
                  <span
                    className="flex gap-2 items-center font-jost text-[15px] cursor-pointer"
                    onClick={() => setLanguage(!language)}>
                    {selectedLanguage.country} <FaCaretDown />
                  </span>
                  {language && (
                    <div className="top-0 left-0 w-full h-full pt-30 z-50 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] fixed">
                      <div
                        className="absolute top-0 left-0 h-full w-full z-0 bg-[#05103666]"
                        onClick={() => setLanguage(false)}></div>
                      <div
                        className="w-267.5 bg-white rounded-sm absolute left-1/2 -translate-x-1/2"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="px-7.5 py-5 flex justify-between items-center">
                          <p className="text-xl font-medium text-black font-jost">
                            Select your language
                          </p>
                          <RxCross2
                            className="text-primaryText text-2xl cursor-pointer"
                            onClick={() => setLanguage(false)}
                          />
                        </div>
                        <hr className="text-[#ddd]" />
                        <div className="p-7.5 grid grid-cols-5 grid-rows-4 gap-7.5">
                          {repeatedLanguageGridItems.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setSelectedLanguageIndex(index);
                                setSelectedLanguage(item);
                              }}
                              className={`py-2.5 px-4 rounded-sm cursor-pointer group hover:bg-[#3554d10d] transition-all duration-150 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)] ${selectedLanguageIndex === index ? "bg-[#F5F5F5]" : ""}`}>
                              <div className="text-primaryText text-[15px] font-medium font-jost mb-1 group-hover:text-hoverText">
                                {item.language}
                              </div>
                              <span className="text-sm text-primaryText font-jost">
                                {item.country}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Link href={"/"}>
                  <button className="px-7.5 text-sm bg-white h-12.5 text-primaryText font-jost rounded-sm mr-2.5 ml-2 cursor-pointer">
                    Become An Expert
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="px-7.5 text-sm text-white border border-white hover:bg-white h-12.5 hover:text-primaryText font-jost rounded-sm transition-all duration-300 ease-in-out cursor-pointer">
                    Sign In / Register
                  </button>
                </Link>
              </div>
            </Flex>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Header;
