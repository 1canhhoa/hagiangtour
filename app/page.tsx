"use client"
import Image from "next/image";
import { main, mainMobileWeb } from "./Objects/objects";
import { Menu } from "lucide-react"
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useResponsiveQueries } from "@/hooks/useMediaQuery"
import { useMediaQuery } from 'react-responsive';
import { IoMdCloseCircle } from "react-icons/io";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Headroom from "react-headroom"
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Slogen from "./components/Slogen";
import BookNow from "./components/BookNow";
import { Poppins } from 'next/font/google'
import next from "next/types";
import IntroVideo from "./components/IntroVideo";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion, useAnimation } from 'framer-motion';
import StartWith from "./components/StartWith";
import CardGreatTrips from "./components/CardGreatTrips";
import CardItemTheGallary from "./components/CardItemTheGallary";
import CardTheGallary from "./components/CardTheGallary";
import Reveal from "./components/Reveal";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
export default function Home() {
  const { isXl, isLg, isMd, isSm, isXs, } = useResponsiveQueries();
  const [openNavMobile, setOpenNavMobile] = useState(false)
  const { scrollPosition } = useScrollPosition()
  console.log('scrollPosition', scrollPosition);
  const data = [
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
  ]
  const [swiper, setSwiper] = useState<any>(null); // Specify the type of swiper variable as 'any'

  // Function to handle previous slide
  const prevSlide = () => {
    if (swiper !== null && swiper !== 'never') { // Add a conditional check to ensure swiper is not 'never'
      swiper.slidePrev(); // Go to previous slide
    }
  };

  // Function to handle next slide
  const nextSlide = () => {
    if (swiper !== null && swiper !== 'never') { // Add a conditional check to ensure swiper is not 'never'
      swiper.slideNext(); // Go to next slide
    }
  };
  return (
    <div className=" ">
      {/* header */}
      <div className="relative z-[10000] w-full h-screen max-md:h-[90vh] ">
        {/* header web */}
        <Headroom disable={isSm || scrollPosition < 1500 ? true : false} className="transition-all z-[999999] duration-1000" downTolerance={10}>
          {/* </Headroom> */}
          <nav id="nav_primary" className="w-full relative pt-[1.5rem] max-lg:pt-[2.5rem] max-md:pt-[5.8rem] transition-all duration-1000 z-[999999] flex justify-center">
            <div className="w-[calc(100rem-12rem)] max-lg:w-[95vw] max-md:w-[calc(100rem-8.54rem)] lg:bg-white rounded-[1rem] flex items-center justify-between h-fit lg:px-[1.88rem]">
              <Image height={59.9} width={68.4} alt="home" src="/home/logo.jpeg" className="cursor-pointer w-[4.75rem] h-[4.16rem] max-md:w-[18.13333rem] max-md:h-[15.8976rem] object-cover lg:my-[0.913rem] max-lg:w-[8.75rem] max-lg:h-[8.16rem] max-lg:object-contain" />
              <div className=" text-gray-scale-80 gap-x-[0.3rem] flex py-[1.06rem] max-lg:hidden">
                {main?.map((m, i) => (
                  <HoverCard key={i} openDelay={0} closeDelay={0}>
                    <HoverCardTrigger asChild>
                      <div
                        className=" cursor-pointer text-[0.885rem] gap-x-1 transition duration-200 group relative font-extrabold uppercase tracking-[0.0319rem] p-[1.125rem] th-fl hover:-translate-y-[0.5rem] hover:text-primary-50"
                      >
                        {m.tittle}
                        {m?.children.length > 0 && <FaChevronDown fontWeight={10000} className="text-[1rem]" />}
                        <div className={"w-[0.6rem] transition duration-500 group-hover:bg-primary-50 group-hover:bottom-[0.5rem] h-[0.6rem] bg-gray-300 rounded-full absolute -translate-x-1/2 bottom-0 opacity-0 group-hover:opacity-100 "
                          + (m?.children.length > 0 ? 'left-[45%]' : 'left-1/2')}></div>
                      </div>
                    </HoverCardTrigger>

                    {m.children.length > 0 &&
                      <HoverCardContent className="bg-white shadow-md border rounded-xl -translate-y-[0.25rem] p-[0.9rem] w-fit">
                        {m.children.map((n, i) => (
                          <div key={i} className="font-extrabold  hover:text-primary-70 cursor-pointer uppercase tracking-[0.0219rem] py-[0.27rem]">{n.tittle}</div>
                        ))}
                      </HoverCardContent>
                    }
                  </HoverCard>
                ))}
              </div>
              <div className="hidden lg:flex gap-x-[0.5rem] ">
                <a target="_blank" className="bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[1.75rem] h-[1.75rem]" href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.13242 14.2214H8.79912V8.88142H11.2018L11.4658 6.22787H8.79912V4.88802C8.79912 4.51983 9.09758 4.22135 9.46578 4.22135H11.4658V1.55469H9.46578C7.62478 1.55469 6.13242 3.04707 6.13242 4.88802V6.22787H4.79908L4.53516 8.88142H6.13242V14.2214Z" fill="white"></path></svg></a>
                <a target="_blank" className="bg-primary-70 cursor-pointer rounded-full flex items-center justify-center w-[1.75rem] h-[1.75rem]" href="https://www.youtube.com/"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M7.00075 9.56399H6.98741C6.94608 9.56399 2.81075 9.55599 1.76741 9.27266C1.1937 9.11812 0.745647 8.66979 0.591414 8.09599C0.4038 7.03759 0.313207 5.96419 0.320747 4.88932C0.3159 3.81266 0.408954 2.7378 0.598747 1.67799C0.757221 1.10366 1.2033 0.65329 1.77608 0.489323C2.79075 0.222656 6.81208 0.222656 6.98275 0.222656H6.99675C7.03875 0.222656 11.1847 0.230656 12.2174 0.513989C12.7899 0.669329 13.2371 1.11672 13.3921 1.68932C13.5857 2.75168 13.6765 3.83019 13.6634 4.90999C13.6681 5.98532 13.5748 7.05886 13.3847 8.11732C13.2285 8.69039 12.7802 9.13772 12.2067 9.29266C11.1934 9.56132 7.17141 9.56399 7.00075 9.56399ZM5.66741 2.89266L5.66408 6.89266L9.13875 4.89266L5.66741 2.89266Z" fill="white"></path></svg></a>
              </div>
              <IoIosMenu onClick={() => setOpenNavMobile(true)} color="white" className="cursor-pointer block text-[7rem] lg:hidden" />
            </div>
          </nav>
        </Headroom>
        {/* header mobile web */}
        <header className={"  block translate-x-0 fixed top-0 bottom-0  left-0 z-[999999] w-full h-screen bg-white lg:hidden pt-[9.067rem] px-[12.13rem] transition-all duration-700 font-heavitas "
          + (openNavMobile ? 'left-0' : ' left-[100%]')}>
          <Image alt="" height={10000} width={10000} className="bg-cover absolute inset-0 w-[100vw] h-full" src="/home/bg-nav-res.avif" />
          <IoMdCloseCircle onClick={() => setOpenNavMobile(false)} className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-12 text-primary-70 text-[10rem] sm:text-[7rem] md:text-[5rem]" />
          <div className="flex flex-col justify-center items-center gap-4 mt-[10rem]">
            <div className="flex flex-col justify-center w-fit items-center gap-[3rem]">
              {mainMobileWeb.map((m, i) => (
                <div key={i} className="cursor-pointer uppercase text-[5rem] xs:text-[4rem] sm:text-[3.9rem] md:text-[3rem] z-50 w-fit font-extrabold">{m.tittle}</div>
              ))}
            </div>
            <div className=" flex gap-x-[0.8rem] ">
              <a target="_blank" className="bg-primary-70 z-50 cursor-pointer rounded-full flex items-center justify-center w-[5.75rem] md:w-[3.75rem] h-[5.75rem] md:h-[3.75rem] " href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.13242 14.2214H8.79912V8.88142H11.2018L11.4658 6.22787H8.79912V4.88802C8.79912 4.51983 9.09758 4.22135 9.46578 4.22135H11.4658V1.55469H9.46578C7.62478 1.55469 6.13242 3.04707 6.13242 4.88802V6.22787H4.79908L4.53516 8.88142H6.13242V14.2214Z" fill="white"></path></svg></a>
              <a target="_blank" className="bg-primary-70 z-50 cursor-pointer rounded-full flex items-center justify-center w-[5.75rem] md:w-[3.75rem] h-[5.75rem] md:h-[3.75rem] " href="https://www.youtube.com/"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M7.00075 9.56399H6.98741C6.94608 9.56399 2.81075 9.55599 1.76741 9.27266C1.1937 9.11812 0.745647 8.66979 0.591414 8.09599C0.4038 7.03759 0.313207 5.96419 0.320747 4.88932C0.3159 3.81266 0.408954 2.7378 0.598747 1.67799C0.757221 1.10366 1.2033 0.65329 1.77608 0.489323C2.79075 0.222656 6.81208 0.222656 6.98275 0.222656H6.99675C7.03875 0.222656 11.1847 0.230656 12.2174 0.513989C12.7899 0.669329 13.2371 1.11672 13.3921 1.68932C13.5857 2.75168 13.6765 3.83019 13.6634 4.90999C13.6681 5.98532 13.5748 7.05886 13.3847 8.11732C13.2285 8.69039 12.7802 9.13772 12.2067 9.29266C11.1934 9.56132 7.17141 9.56399 7.00075 9.56399ZM5.66741 2.89266L5.66408 6.89266L9.13875 4.89266L5.66741 2.89266Z" fill="white"></path></svg></a>
            </div>
          </div>
        </header>
        {/* hero */}
        <Image height={5229.9} width={6822.4} alt="home" className="-z-[200] absolute object-cover top-0 left-0 h-full w-full"
          src={isSm ? "/home/hero2.avif" : "/home/hero.avif"} />
        <Slogen />
        <BookNow />
        <div className="absolute bg-bl bottom-[-0.5rem] left-0 z-0 object-cover w-full h-[26vh] lg:hidden"></div>

      </div>
      {/* intro video and start with */}
      <div className="relative">
        <IntroVideo />
        <Image alt="ss" height={9999} width={9999} src='/home/mask.avif' className="object-cover absolute inset-0 left-0 top-0 right-0 w-full !h-[220vh]" />
        <StartWith />
      </div>
      {/* great trip */}
      <section className="mt-[6.25rem] max-md:mt-[16rem] relative h-[49.4rem] max-lg:h-[64rem] max-md:h-fit">
        <div className="max-md:text-white md:text-white text-center md:pt-[3rem] uppercase text-primary-70 w-full relative z-[5]">
          <Reveal direction="up">
            <h3 className="text-[1rem] leading-[1] max-lg:text-[2.5rem] font-bold max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem] aos-init aos-animate">
              OUR
            </h3>
            <h2 data-aos-delay="100" className="text-[3rem] leading-[1] max-lg:text-[4.5rem] font-extrabold max-md:text-[6.4rem] aos-init aos-animate">
              GREAT TRIPS
            </h2>
          </Reveal>
        </div>
        <CardGreatTrips />
        <div className="absolute top-0 lg:-top-[5rem] left-0 z-0 w-full h-[30rem] -translate-y-[60%] bg-gradient-greatTrips max-md:hidden"></div>
        <Image alt="aaa" src='/home/mask-great-trips.avif' width={999} height={999} className="object-cover absolute top-0 lg:-top-[5rem] left-0 w-full h-[38rem] max-lg:h-[52rem] z-[1]" />
        <div className="absolute bottom-[20.69rem] lg:bottom-[15.69rem] left-0 z-[2] w-full h-[21.9375rem] bg-gradient-greatTrips max-md:hidden"></div>
      </section>
      {/* THE GALLERY */}
      <div className="lg:w-[87.5rem]  max-lg:w-[95vw] max-md:w-full mt-[6.25rem] max-md:mt-[9rem] mx-auto relative z-[9999]">
        <div className="relative ">
          <div className="max-md:px-[4.27rem] uppercase text-primary-70 w-full relative z-[5] ">
            <Reveal direction="up">
              <h3 data-aos="fade-up" className="text-[1rem] leading-[1] max-lg:text-[2.5rem] font-extrabold max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem] aos-init aos-animate">DISCOVER</h3>
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-[3rem] leading-[1] font-extrabold max-lg:text-[4.5rem] max-md:text-[6.4rem] aos-init aos-animate">THE GALLERY</h2>
            </Reveal>
          </div>
          <Reveal direction="up"><CardTheGallary /></Reveal>

        </div>
      </div>
      {/* TRAVELLERS */}
      <div className="relative w-full mt-40 md:mt-10">
        <div className=" uppercase font-extrabold text-primary-70 w-full mb-8 relative z-[5]">
          <h3 data-aos="fade-up" className="text-center text-[1rem] leading-[1] max-lg:text-[2.5rem] max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem] aos-init aos-animate">
            FROM OUR
          </h3>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-center text-[3rem] leading-[1] max-lg:text-[4.5rem] max-md:text-[6.4rem] aos-init aos-animate">
            TRAVELLERS
          </h2>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={isLg ? 3 : 1}
            centeredSlides={true}
            spaceBetween={30}
            // loop={

            // }
            modules={[Pagination, Autoplay]}
            className="!w-[90%] bg-opacity-50 !p-4 lg:!w-[50%] xl:!w-[70%] h-full !px-[8rem] sm:!px-[12rem] md:!px-[18rem] lg:!px-[8rem] xl:!px-0 "
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {data.map((d, i) => (
              <SwiperSlide className=' rounded-xl'>
                <div className=' rounded-xl'>
                  <div className="w-full max-md:rounded-[3.2rem] shadow-btn h-[14rem] relative rounded-[1rem] overflow-hidden p-[1.56rem] max-md:p-[5.33rem] flex flex-col items-center justify-center lg:bg-background-elevation-01 lg:hover:bg-white transition-all duration-300 bg-slate-100 max-lg:h-[28rem] max-md:h-[67.733rem]">
                    <p className="text-[0.875rem] th-textgray font-normal max-md:line-clamp-[7] line-clamp-5 leading-[1.57] text-gray-scale-50 tracking-[0.00219rem] text-center max-lg:text-[1.875rem] max-md:text-[3.733rem] max-md:tracking-[0.00933rem]">
                      Super nice homestay, great and friendly people. Had the best time and met so many amazing people, made the best memories:)
                    </p>
                    <div className="flex items-center gap-x-[0.25rem] mt-[1rem] max-md:mt-[4.27rem]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[1rem] h-[1rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]"><path d="M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z" fill="#E56026"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[1rem] h-[1rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]"><path d="M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z" fill="#E56026"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[1rem] h-[1rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]"><path d="M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z" fill="#E56026"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[1rem] h-[1rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]"><path d="M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z" fill="#E56026"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-[1rem] h-[1rem] max-lg:w-[2rem] max-lg:h-[2rem] max-md:w-[4.267rem] max-md:h-[4.267rem]"><path d="M8.94868 2.84605C8.64478 1.93435 7.35522 1.93435 7.05132 2.84605L6.22792 5.31623C6.09181 5.72457 5.70967 6 5.27924 6H2.85078C1.9055 6 1.48795 7.19036 2.22609 7.78087L4.45551 9.56441C4.78266 9.82613 4.91199 10.264 4.7795 10.6615L4.07082 12.7875C3.7557 13.7329 4.86606 14.5072 5.6442 13.8846L7.3753 12.4998C7.74052 12.2076 8.25948 12.2076 8.6247 12.4998L10.3558 13.8846C11.1339 14.5072 12.2443 13.7329 11.9292 12.7875L11.2205 10.6615C11.088 10.264 11.2173 9.82613 11.5445 9.56441L13.7739 7.78087C14.5121 7.19036 14.0945 6 13.1492 6H10.7208C10.2903 6 9.90819 5.72457 9.77208 5.31623L8.94868 2.84605Z" fill="#E56026"></path></svg>
                    </div>
                    <span className="text-[1rem] leading-normal font-semibold tracking-[0.0125rem] text-primary-70 mt-[0.5rem] max-md:mt-[2.13rem] max-md:text-[3.733rem] max-lg:text-[2.5rem] max-md:leading-[1.42] max-md:tracking-[0.03733rem]">
                      Danielle
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* button left */}
          <button onClick={prevSlide} className="p-[1.5rem] text-red-500 absolute left-[8rem] top-1/2 -translate-y-1/2 z-[5] max-md:hidden">
            <Image alt="sss" width={999} height={999} src='/home/btn-left-primary.svg' className="w-[2rem] h-[2rem]" />
          </button>
          {/* button right */}
          <button onClick={nextSlide} className="p-[1.5rem] text-red-500 absolute right-[8rem] rotate-180 top-1/2 -translate-y-1/2 z-[5] max-md:hidden">
            <Image alt="sss" width={999} height={999} src='/home/btn-left-primary.svg' className="w-[2rem] h-[2rem]" />
          </button>
        </div>

      </div>
      {/* FOOTER */}
      <footer id="footer" className="relative overflow-hidden max-md:h-[70vh] h-[69vh] max-md:mt-[1.5rem]">
        <Image alt="ss" height={9999} width={9999} src='/home/bg-footer.avif' className="object-cover max-md:h-[70vh] absolute inset-0 left-0 top-0 right-0 w-full" />
        <div className="flex justify-around  items-center w-full relative z-[1] max-md:px-[4.27rem] max-lg:flex-col">
          <Image alt="ss" height={9999} width={9999} src='/home/logo-footer.avif' className="md:mt-[9.13rem] mt-[10rem] object-contain h-60 w-60 inset-0 " />
          <div className=" flex  flex-col sm:flex-row lg:gap-x-[4rem] md:mt-[3.13rem] gap-6 sm:gap-[8rem] max-md:text-center">
            {/* cot1 */}
            <div className="flex-col justify-center max-md:flex max-md:w-auto">
              <h2 className="lg:text-[0.875rem] md:font-[700] font-extrabold  md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]">
                CONTACT US
              </h2>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/FooterPhoneIcon.svg' className="th-img-ft " />
                </div>
                <p className="">+84 98 3333 986 (Linnete )<br />
                  +84 85 668 0000 (Kevin )</p>
              </div>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/FooterMailIcon.svg' className="th-img-ft " />
                </div>
                <p className="">Cheershostel1@gmail.com</p>
              </div>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/home.svg' className="th-img-ft " />
                </div>
                <p className="">5 Au Trieu, Hoan Kiem, Ha Noi</p>
              </div>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/FooterWorldIcon.svg' className="th-img-ft " />
                </div>
                <p className="">Vietnam Cheers Hostel Official Site</p>
              </div>
            </div>
            {/* cot2 */}
            <div className="flex-col justify-center max-md:flex max-md:w-auto">
              <h2 className="lg:text-[0.875rem] md:font-[700] font-extrabold  md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]">
                ALL TOUR
              </h2>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/FooterTransportIcon.svg' className="th-img-ft " />
                </div>
                <p className="">HA GIANG LOOP TOUR (3D3N)</p>
              </div>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/FooterTransportIcon.svg' className="th-img-ft " />
                </div>
                <p className="">HA GIANG LOOP TOUR (4D4N)</p>
              </div>
            </div>
            {/* cot3 */}
            <div className="flex-col justify-center max-md:flex max-md:w-auto">
              <h2 className="lg:text-[0.875rem] md:font-[700] font-extrabold  md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]">
                CHEERS TOURS
              </h2>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/local.svg' className="th-img-ft " />
                </div>
                <p className="">Ha Long Bay on Social Cruise</p>
              </div>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/local.svg' className="th-img-ft " />
                </div>
                <p className="">Sapa Trekking Tour</p>
              </div>
              <div className="th-ft">
                <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                  <Image alt="ss" height={9999} width={9999} src='/home/local.svg' className="th-img-ft " />
                </div>
                <p className="">Package Tour</p>
              </div>
            </div>
          </div>
        </div>
      </footer >



    </div >
  );

}
