"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import News from "./NewsItem";
import Image from "next/image";
import newsPicture from "@/public/news/Exhibition.jpg";

const LinkedSwipers = () => {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  const handleSlideChange = (swiper, targetSwiperRef) => {
    if (targetSwiperRef.current && targetSwiperRef.current !== swiper) {
      targetSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  return (
    <div className="w-full px-[20vw]">
      <Swiper
        className="h-[40vh]"
        style={{ height: '40vh' }}
        onSwiper={(swiper) => (swiper1Ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper2Ref)}
        slidesPerView={1}>
        <SwiperSlide>
          <News title={"نمایشگاه صنایع ریخته‌گری"}
          subtitle={"سپاهان فولاد آتشگاه"}
          description={"صنعت ریخته‌گری فولاد و چدن در نمایشگاه‌های اخیر با تمرکز بر فناوری‌های نوین، پایداری، اتوماسیون و شبیه‌سازی دیجیتال به جلو حرکت کرده است. از کاهش مصرف انرژی و استفاده از آلیاژهای پیشرفته گرفته تا بهره‌برداری از سیستم‌های هوشمند..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <News title={"نمایشگاه صنایع ریخته‌گری"}
          subtitle={"سپاهان فولاد آتشگاه"}
          description={"صنعت ریخته‌گری فولاد و چدن در نمایشگاه‌های اخیر با تمرکز بر فناوری‌های نوین، پایداری، اتوماسیون و شبیه‌سازی دیجیتال به جلو حرکت کرده است. از کاهش مصرف انرژی و استفاده از آلیاژهای پیشرفته گرفته تا بهره‌برداری از سیستم‌های هوشمند..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <News title={"نمایشگاه صنایع ریخته‌گری"}
          subtitle={"سپاهان فولاد آتشگاه"}
          description={"صنعت ریخته‌گری فولاد و چدن در نمایشگاه‌های اخیر با تمرکز بر فناوری‌های نوین، پایداری، اتوماسیون و شبیه‌سازی دیجیتال به جلو حرکت کرده است. از کاهش مصرف انرژی و استفاده از آلیاژهای پیشرفته گرفته تا بهره‌برداری از سیستم‌های هوشمند..."}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="felx flex-row justify-center items-center w-full rounded-3xl overflow-hidden"
        style={{ height: '80vh' }}
        onSwiper={(swiper) => (swiper2Ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper1Ref)}
        slidesPerView={1}>
        <SwiperSlide
        className="felx flex-row justify-center items-center w-full">
          <Image src={newsPicture} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={newsPicture} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={newsPicture} fill alt="news picture" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LinkedSwipers;
