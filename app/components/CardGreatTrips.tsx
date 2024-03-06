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
import { tour34 } from '../Objects/objects';
import Image from 'next/image';
import Button from './Button';
import CardItemGreatTrips from './CardItemGreatTrips';
import { useResponsiveQueries } from '@/hooks/useMediaQuery';
interface TourProps {
  id: number;
  tittle: string;
  services: {
    title: string;
    price: string;
  }[];
  img: string;
  PickUp: string;
  GroupSize: string;
  Transport: string;
}
const CardGreatTrips = () => {
  const { isXl, isLg, isMd, isSm, isXs, } = useResponsiveQueries()

  return (
    <div className='z-50 relative mt-20 items-end w-full flex'>
      <Swiper
        speed={1000}
        slidesPerView={isSm ? 1 : 2}
        effect={'slide'}
        spaceBetween={10}
        loop={false}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false
        // }}
        scrollbar={false}
        freeMode={false}
        modules={[FreeMode, Autoplay, Virtual, A11y, EffectFade, Thumbs, EffectCreative, EffectCards, Scrollbar, EffectCoverflow, Pagination, Navigation]}
        // pagination={{
        //   type: 'bullets',
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return `<span class="${className} inline-block !w-2 !h-2 sm:!w-6 sm:!h-6 bg-gray-500 mx-2"></span>`
        //   }
        // }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // navigation={false}
        className=" group ease-linear w-[100%] lg:!w-[80%]  duration-100"
      >
        {tour34?.map((project, index) => (
          <SwiperSlide key={index} className=" ease-linear duration-100 mb-8">
            <CardItemGreatTrips ind={index} project={project} />
          </SwiperSlide>
        ))
        }

      </Swiper >

    </div >
  )
}

export default CardGreatTrips