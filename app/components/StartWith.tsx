"use client"
import Image from "next/image";
import Button from "./Button";



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
import { FreeMode, Autoplay, Scrollbar, EffectCards, Pagination, Navigation, EffectCoverflow, EffectFade, A11y, EffectCreative, Thumbs, Virtual } from "swiper/modules";
import { useResponsiveQueries } from "@/hooks/useMediaQuery"
import Reveal from "./Reveal";
const data = [
  "SUPPORT LOCAL - SUSTAINABLE TRAVEL", "FREE 100% CANCELLATION", "DAILY DEPARTURES", "MAKE MORE FRIENDS"
]
function StartWith() {
  const { isXl, isLg, isMd, isSm, isXs, } = useResponsiveQueries();

  return (
    <div className="relative">
      <div className=" max-md:mt-[16rem] w-[87.5rem] mt-[6.25rem] max-lg:w-[95vw] lg:flex lg:justify-between lg:flex-row-reverse relative   max-md:w-full z-[10] mx-auto">
        <div className="lg:!absolute lg:top-0 lg:left-0 lg:!w-[26.875rem] max-md:!w-[58.4rem]  max-md:!px-[4.27rem] uppercase text-primary-70 w-full relative z-[5] font-heavitas">
          <Reveal direction="up">
            <h3 data-aos="fade-up" className="font-bold text-[1rem] leading-[1] max-lg:text-[2.5rem] max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem] aos-init aos-animate">
              START WITH
            </h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="font-extrabold text-[3rem] leading-[1] max-lg:text-[4.5rem] max-md:text-[6.4rem] aos-init aos-animate">
              HA GIANG CHEERS TOUR</h2>
          </Reveal>
        </div>

        <Reveal direction="left">
          <div data-aos="fade-left" className=" relative lg:w-[35.4375rem] max-md:mt-[6rem] max-md:w-[86.4rem] max-lg:mt-[4rem] md:h-[57rem] md:w-[51rem] max-md:h-[104.83733rem] lg:h-auto lg:mr-0 max-lg:mx-auto aos-init aos-animate">
            <Image alt="ss" src='/home/mapvn.avif' width={9999} height={9999} className="object-contain h-full w-full" />

          </div>
        </Reveal>

        <Reveal direction="up">
          <div data-aos="fade-up" className="lg:pt-[9.17rem] lg:w-fit max-md:mt-[2.33rem] max-md:overflow-hidden max-lg:mt-[1.5rem] aos-init aos-animate">
            <ul className="grid grid-cols-2 gap-[1.51rem] max-md:hidden max-lg:w-[80rem] max-md:w-full md:mx-auto lg:mx-0">
              {data.map((d, i) => (
                <li key={i} className="h-[5.13175rem] w-[20.60419rem] max-lg:h-[13rem] max-lg:w-[36rem] relative flex justify-center items-center">
                  <Image alt="ss" src='/home/bg-text-cheer.avif' width={9999} height={9999} className="object-contain h-full w-full absolute" />
                  <span className="relative z-[1] text-[0.875rem] max-lg:text-[1.5rem] text-primary-5 font-bold leading-[1.375] tracking-[0.00219rem] line-clamp-1">{d}</span>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <Swiper
                speed={1000}
                slidesPerView={1}
                effect={'slide'}
                loop={false}
                centeredSlides={true}
                scrollbar={false}
                freeMode={false}
                modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className=""
              >
                {data.map((d, i) => (
                  <SwiperSlide key={i}>
                    <li className="h-[5.13175rem] w-[20.60419rem] max-lg:h-[20rem] max-lg:w-[100vw] relative flex justify-center items-center">
                      <Image alt="ss" src='/home/bg-text-cheer.avif' width={9999} height={9999} className="object-contain h-full w-full absolute" />
                      <span className="relative z-[1] text-[2.875rem] max-lg:text-[3.5rem] text-white font-bold leading-[1.375] tracking-[0.00219rem] line-clamp-1">{d}</span>
                    </li>
                  </SwiperSlide>
                ))}

              </Swiper >
            </div>

            <div data-aos="fade-up" className="th-textgray description lg:w-[43rem] mt-[2.39rem] max-md:mt-[5.33rem] max-md:text-justify max-md:px-[4.27rem] text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] font-normal leading-[1.375] tracking-[0.00219rem] max-md:text-[3.733rem] max-md:leading-[1.57] max-md:tracking-[0.00933rem] aos-init aos-animate">
              <p><strong>The Ha giang Loop Cheers Tour</strong> with easy rider organized by <strong>Vietnam Cheers Hostel</strong> is a must in Vietnam for any traveller. It is considered a highlight of South East Asia.</p>
              <br />
              <p>Explore <strong>Ma Pi Leng</strong>, one of The Big Four Passes in Vietnam, through thousands of conical limestone peaks as well as deep and meandering valleys. Party dinner with families, waterfall and local life at authentic <strong>Cheers Du Gia Homestay</strong> will be the unique experience as well. This is designed for adventure-seekers — those who want to experience the biggest challenge Vietnam has to offer in a safe environment with our experienced easy riders.</p>
            </div>
            <div className="flex gap-x-[1rem] max-lg:gap-x-[2.5rem] max-md:gap-x-[3.2rem] mt-[1.87rem] max-lg:mt-[2.5rem] max-md:mt-[5.33rem] max-md:px-[4.27rem]">
              <div className="max-md:w-[calc(50%-1.6rem)]" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r7:" data-state="closed">
                <Button content="book now" type="fill" />
              </div>
              <div className="max-md:w-[calc(50%-1.6rem)]" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r7:" data-state="closed">
                <Button content="view tour" type="outline" />
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </div >
  );
}

export default StartWith;