"use client"

import { useRef } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import cement from "@/public/industries/cement.png";
import copper from "@/public/industries/copper.png";
import related from "@/public/industries/related.png";
import steel from "@/public/industries/steel.png";
import grindingBallPicture from "@/public/industries/sfa_opt.png";
import Image from 'next/image';
// import required modules
import { Autoplay } from 'swiper/modules';

export default function BasicTabs() {
  const industriesSwiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (slide_number: number) => {
    if (industriesSwiperRef.current) {
      industriesSwiperRef.current.slideTo(slide_number);
    }
  };

  return (
    <Box sx={{ width: '100%', paddingInline: '4rem' }} className="pt-[5rem] w-full h-[100vh]">
      <div>
        <div className='industries-menu-container'>
          <div className='industries-menu-item' onClick={() => (handleSlideChange(0))}>
            مس
          </div>
          <div className='industries-menu-item' onClick={() => (handleSlideChange(1))}>
            سیمان
          </div>
          <div className='industries-menu-item' onClick={() => (handleSlideChange(2))}>
            آهن و فولاد
          </div>
          <div className='industries-menu-item' onClick={() => (handleSlideChange(3))}>
            معادن و صنایع
          </div>
          <div className='industries-menu-item' onClick={() => (handleSlideChange(4))}>
            گلوله های چدنی
          </div>
        </div>
        <Swiper
          style={{ width: '65vw', height: '75vh' }}
          direction='horizontal'
          loop={true}
          // modules={[Autoplay]}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: true,
          // }}
          onSwiper={(swiper) => (industriesSwiperRef.current = swiper)}
          centeredSlides={true}
          slidesPerView={1}
          speed={1000}>
          <SwiperSlide>
            <div className="carousel-item">
              <Image src={cement} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item">
              <Image src={copper} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item">
              <Image src={related} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item">
              <Image src={grindingBallPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item">
              <Image src={steel} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Box>
  );
}
