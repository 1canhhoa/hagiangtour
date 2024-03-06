import React from 'react'
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
import { gallaries, tour34 } from '../Objects/objects';
import Image from 'next/image';
import Button from './Button';
import CardItemTheGallary from './CardItemTheGallary';
import { useResponsiveQueries } from '@/hooks/useMediaQuery';
const CardTheGallary = () => {
  const { isXl, isLg, isMd, isSm, isXs, } = useResponsiveQueries()
  return (
    <div className='z-50 relative mt-5 items-end w-full flex'>
      <Swiper
        speed={1000}
        slidesPerView={isSm ? 1 : 4}
        effect={'slide'}
        spaceBetween={20}
        loop={false}
        scrollbar={false}
        freeMode={false}
        modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className=" group ease-linear max-md:!pr-64 md:h-full w-[100%] lg:!w-[100%]  duration-100"
      >
        {gallaries.map((project, index) => (
          <SwiperSlide key={index} className=" ease-linear rounded-3xl sm:rounded-3xl duration-100 h-full my-8">
            <CardItemTheGallary id={index} project={project} />
          </SwiperSlide>
        ))
        }

      </Swiper >

    </div >
  )
}

export default CardTheGallary