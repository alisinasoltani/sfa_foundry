"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import slide1 from "@/app/public/slider/slide1.png"
import slide2 from "@/app/public/slider/slide2.jpg"
import slide3 from "@/app/public/slider/slide3.jpg"
import slide4 from "@/app/public/slider/slide4.jpg"
import slide5 from "@/app/public/slider/slide5.jpg"
import slide6 from "@/app/public/slider/slide6.jpg"
import slide7 from "@/app/public/slider/slide7.jpg"
import slide8 from "@/app/public/slider/slide8.jpg"
import slide9 from "@/app/public/slider/slide9.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return `<span class=" border-2 border-white bg-black ${className}" style="width: 1rem; height: 1rem;"></span>`;
    },
};

const Slider = () => {
  return (
    // <div>
      <Swiper navigation modules={[Navigation]} className="mySwiper h-[100vh] text-black">
        <SwiperSlide>
          <Image src={slide1} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide2} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide3} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide4} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide5} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide6} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide7} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide8} alt="" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide9} alt="" fill />
        </SwiperSlide>
      </Swiper>
    // </div>
  )
};

export default Slider;