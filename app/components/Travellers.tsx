"use client"
import Image from "next/image";
import { useResponsiveQueries } from "@/hooks/useMediaQuery"
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
export default function Travellers() {
  const { isXl, isLg, isMd, isSm, isXs, } = useResponsiveQueries();
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
            <SwiperSlide key={i} className=' rounded-xl'>
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
  );

}
