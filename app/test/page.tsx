"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  const data = [{ tittle: 'xxx' }, { tittle: 'xxx' }, { tittle: 'xxx' }, { tittle: 'xxx' }, { tittle: 'xxx' }, { tittle: 'xxx' },]
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        // grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full th-bd"
      >
        {data.map((d, i) => (
          <SwiperSlide key={i} className='th-bd'>
            <div className='h-[500px]'>Slide {i}</div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}