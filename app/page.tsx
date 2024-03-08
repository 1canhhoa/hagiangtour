"use client"
import Image from "next/image";
import { useResponsiveQueries } from "@/hooks/useMediaQuery"
import React, { useState, useEffect, useLayoutEffect } from 'react';
import IntroVideo from "./components/IntroVideo";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import StartWith from "./components/StartWith";
import Header from "./components/Header";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import GreatTrip from "./components/GreatTrip";
import Gallary from "./components/Gallary";
import Travellers from "./components/Travellers";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="Ha Giang Tours">
      {/* header */}
      <Header />
      {/* intro video and start with */}
      <div className="relative">
        <IntroVideo />
        <Image alt="ss" height={9999} width={9999} src='/home/mask.avif' className="object-cover absolute inset-0 left-0 top-0 right-0 w-full !h-[220vh]" />
        <StartWith />
      </div>
      {/* great trip */}
      <GreatTrip />
      {/* THE GALLERY */}
      <Gallary />
      {/* TRAVELLERS */}
      <Travellers />
      {/* FOOTER */}
      <Footer />
    </div >
  );

}
