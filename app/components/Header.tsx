"use client"
import Image from "next/image";
import { main, mainMobileWeb } from "../Objects/objects";
import { Menu } from "lucide-react"
import { IoIosMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
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
import Slogen from "./Slogen";
import BookNow from "./BookNow";
import { useScrollPosition } from "@/hooks/useScrollPosition";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
export default function Header() {
  const { isXl, isLg, isMd, isSm, isXs, } = useResponsiveQueries();
  const [openNavMobile, setOpenNavMobile] = useState(false)
  const { scrollPosition } = useScrollPosition()
  const data = [
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
    { name: 'michelle', comment: 'Amazing experience. So inclusive and fun. Cannot recommend this trip and cheers hostel enough. Food was also good and good party vibes.' },
  ]
  // 
  return (
    <div className="relative z-[10000] w-full h-screen max-md:h-[150rem] ">
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
      <header className={"  block translate-x-0 fixed top-0 bottom-0  left-0 z-[999999] w-screen h-[100vh] bg-white lg:hidden pt-[9.067rem] px-[12.13rem] transition-all duration-700 font-heavitas "
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
      <Image height={500.9} width={500.4} alt="home" className="-z-[200] absolute object-cover top-0 left-0 h-full w-full"
        src={isSm ? "/home/hero2.avif" : "/home/hero.avif"} />
      <Slogen />
      <BookNow />
      <div className="absolute bg-bl bottom-[-0.5rem] left-0 z-0 object-cover w-full h-[26vh] lg:hidden"></div>

    </div>

  );

}
