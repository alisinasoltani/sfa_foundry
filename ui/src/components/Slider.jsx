"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import slide1 from "@/public/slider/slide1.png"
import slide2 from "@/public/slider/slide2.jpg"
import slide3 from "@/public/slider/slide3.jpg"
import slide4 from "@/public/slider/slide4.jpg"
import slide5 from "@/public/slider/slide5.jpg"
import slide6 from "@/public/slider/slide6.jpg"
import slide7 from "@/public/slider/slide7.jpg"
import slide8 from "@/public/slider/slide8.jpg"
import slide9 from "@/public/slider/slide9.jpg"

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
        <Swiper navigation modules={[Navigation]} className="mySwiper text-black">
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