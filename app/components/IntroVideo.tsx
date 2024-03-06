"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import React, { useState } from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/thumbs';
import 'swiper/css/virtual';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

import vienslide from '../../../../public/images/products/vienslide.png'
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
import Volumn from "./Volumn";
export default function IntroVideo() {
  const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });

  const ref = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scaleToLittleProgess = useTransform(scrollYProgress, [0, 1], [1.3, 0.4]);
  const toDownProgess = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const toColorProgess = useTransform(scrollYProgress, [0.5, 1], ["#b34b1e", "#FFFFFF"]);
  const toColor2Progess = useTransform(scrollYProgress, [0.5, 1], ["#ffd772", "#FFFFFF"]);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["0 1", "1 -2"],// y/x
  });
  const leftProgess = useTransform(scrollYProgress1, [0, 1], [0, 1100]);
  const rightProgess = useTransform(scrollYProgress1, [0, 1], [0, -1100]);

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };


  return (
    // <div className="py-3 bg-white shadow-btn">
    <div className="mt-[30rem] sm:mt-[26rem] md:mt-[17rem] lg:mt-[4rem]  relative w-full overflow-x-hidden overflow-y-hidden">
      <motion.div
        ref={ref1}
        style={{
          // scale: scaleProgess,
          opacity: opacityProgess,
          x: leftProgess
        }}
        className="" >
        <Image alt="sss" width={999} height={999} className="object-cover right-images absolute 
             rounded-[1rem] opacity-40 top-[6.25rem] right-[-4rem] w-[23.25rem] h-[23.25rem]" src='/home/right-up.avif' />
      </motion.div>
      <motion.div
        ref={ref1}
        style={{
          // scale: scaleProgess,
          opacity: opacityProgess,
          x: rightProgess
        }}
        className="" >
        <Image alt="sss" width={999} height={999} className="object-cover right-images absolute 
           rounded-[1rem] opacity-40 top-[6.25rem] left-[-4rem] w-[23.25rem] h-[23.25rem]"
          src='/home/left-down.avif' />
      </motion.div>
      {/* slide ,award ,muted */}
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group relative lg:block hidden  last:mb-0"
      >
        <section className=" w-full h-full min-w-full min-h-full">
          <Swiper

            speed={1000}
            slidesPerView={1}
            effect={'fade'}
            loop={false}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false
            // }}
            scrollbar={false}
            freeMode={false}
            modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className=" group ease-linear  duration-100"
          >
            <SwiperSlide >
              <div className="w-[100vw] h-[100vh] th-fl">
                <video src="/home/hagiang1.mp4" ref={videoRef} autoPlay muted={isMuted} loop className="object-cover w-full h-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="w-[100vw] h-[100vh] th-fl">
                <video src="/home/hagiang2.mp4" ref={videoRef} autoPlay muted={isMuted} loop className="object-cover w-full h-full" />
              </div>
            </SwiperSlide>
            <div
              className="
            swiper-button-prev 
            after:text-xl after:text-white z-[1000]
            w-[3rem] h-[3rem] th-fl  rounded-full absolute  top-1/2 -translate-y-1/2 left-20"
            >
              <Image alt="sss" width={999} height={999} src='/home/btn-left.svg' className="w-[2rem] h-[2rem]" />
            </div>
            <div
              className="swiper-button-next th-fl z-[1000] 
             after:text-xl after:bg-white w-[3rem] h-[3rem] rounded-full 
             absolute   top-1/2 -translate-y-1/2 right-20 rotate-180"
            >
              <Image alt="sss" width={999} height={999} src='/home/btn-left.svg' className="w-[2rem] h-[2trem]" />
            </div>
            <div className="swiper-pagination">

            </div>

          </Swiper >
        </section>
        {/* Award */}
        <div className=" gap-x-6 flex absolute bottom-24 left-1/2 -translate-x-1/2 z-50 h-[90px] ">
          <div className="flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center">
            <Image alt="sss" width={999} height={999} src='/home/award.svg' className="w-16 h-16 object-cover" />
            <div className="flex flex-col lg:items-center"><span className="mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]">Top #1</span><span className="text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]">Epic loop in Vietnam</span>
            </div>
          </div>
          <div className="flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center">
            <Image alt="sss" width={999} height={999} src='/home/agency.svg' className="w-16 h-16 object-cover" />
            <div className="flex flex-col lg:items-center"><span className="mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]">300 km</span><span className="text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]">North of Hanoi</span>
            </div>
          </div>
          <div className="flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center">
            <Image alt="sss" width={999} height={999} src='/home/buswhite.svg' className="w-16 h-16 object-cover" />
            <div className="flex flex-col lg:items-center"><span className="mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]">6 hours</span><span className="text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]">Bus drive</span>
            </div>
          </div>
        </div>
        {/* Volumn */}
        <Volumn toggleMute={toggleMute} isMuted={isMuted} />

      </motion.div>
      <div className="w-[100vw] relative  th-fl lg:hidden mt-[7rem] h-[80vh] th-bd sm:h-[90vh] th-fl">
        <video src="/home/hagiangVideoMobile.mp4" ref={videoRef} autoPlay muted={isMuted} loop className="object-cover w-full h-full" />
        <div className="absolute bottom-24 left-20 gap-y-10 flex flex-col">
          <div className="flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center">
            <Image alt="sss" width={999} height={999} src='/home/award.svg' className="w-32 h-32 object-cover" />
            <div className="flex flex-col lg:items-center"><span className="mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]">Top #1</span><span className="text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]">Epic loop in Vietnam</span>
            </div>
          </div>
          <div className="flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center">
            <Image alt="sss" width={999} height={999} src='/home/agency.svg' className="w-32 h-32 object-cover" />
            <div className="flex flex-col lg:items-center"><span className="mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]">300 km</span><span className="text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]">North of Hano</span>
            </div>
          </div>
          <div className="flex lg:flex-col max-lg:gap-x-[2.13rem] items-center lg:justify-center">
            <Image alt="sss" width={999} height={999} src='/home/buswhite.svg' className="w-32 h-32 object-cover" />
            <div className="flex flex-col lg:items-center"><span className="mt-[0.5rem] text-white text-[1.25rem] max-lg:text-[4.27rem] max-lg:font-bold max-lg:leading-normal max-lg:tracking-[-0.08533rem] font-bold leading-[1.2] tracking-[0.00188rem]">6 hours</span><span className="text-[0.875rem] text-white max-lg:text-[3.2rem] max-lg:leading-[1.33rem] font-normal leading-[1.57] tracking-[0.00219rem]">Bus drive</span>
            </div>
          </div>
        </div>
        <Volumn toggleMute={toggleMute} isMuted={isMuted} />
      </div>





      <motion.h2
        style={{
          scale: scaleToLittleProgess,
          opacity: opacityProgess,
          color: toColor2Progess
        }}
        id="text-vn" className="font-tomatos  absolute top-[30rem] sm:top-[22rem] lg:top-[10rem] xl:top-[7.9rem] left-0 right-0 mx-auto z-10 text-[8.0195rem] font-normal leading-normal tracking-[0.16019rem] text-[#ffd772] text-center  max-lg:text-[6.4rem] max-lg:tracking-[0.064rem] max-lg:text-white " >Vietnam</motion.h2>
      <motion.div
        style={{
          y: toDownProgess,
          color: toColorProgess
        }}
        id="box-title" className="absolute top-[2rem] left-0 right-0 mx-auto text-center uppercase text-primary-70 w-full z-[5] font-heavitas lg:top-[2rem] xl:top-[1rem]">
        <h3 id="subtitle" className="text-[1rem] leading-normal max-lg:text-[3.2rem] font-extrabold mb-[0.75rem] max-lg:mb-[2.13rem] max-lg:text-white">WELCOME</h3>
        <h2 id="title" className="text-[3rem] font-extrabold leading-[1] max-lg:text-[6.4rem] max-lg:leading-[1.17] max-lg:text-white" >HA GIANG LOOP</h2>
      </motion.div>
    </div>
    // </div>
  );
}
