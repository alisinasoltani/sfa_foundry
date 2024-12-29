"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import News from "./NewsItem";
import Image from "next/image";
import newsPicture1 from "@/public/news/news_pic1.png";
import newsPicture2 from "@/public/news/news_pic2.png";
import newsPicture3 from "@/public/news/news_pic3.JPG";
import newsPicture4 from "@/public/news/news_pic4.JPG";
import { EffectCoverflow } from "swiper/modules";

const LinkedSwipers = () => {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  const handleSlideChange = (swiper, targetSwiperRef) => {
    if (targetSwiperRef.current && targetSwiperRef.current !== swiper) {
      targetSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  return (
    <div className="w-full md:px-[20vw] py-[8rem] overflow-hidden">
      <Swiper
        className="news-text-slider md:right-[16vw] md:left-auto sm:left-[16vw]"
        spaceBetween={10}
        centeredSlides={true}
        onSwiper={(swiper) => (swiper1Ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper2Ref)}
        slidesPerView={1}>
        <SwiperSlide className="news-text-item">
          <News title={"عملیات حرارتی گلوله های ریخته گری"}
          subtitle={"رسیدن به نرخ سایش و سختی مناسب"}
          description={"از شاخص های مهم گلوله های  این شرکت، نرخ سایش آنها بوده که که مشخص کننده سرعت مصرف آنها در فرایند است که کنترل آن به کاهش هزینه های تولید و ارتقاء بهروری مشتریان کمک شایانی میکند. این شرکت با به کار گیری روش های مدرن ریخته‌گری و عملیات حرارتی و افزایش سختی گلوله ها، تلاش مستمر برای کاهش نرخ سایش و اقتصادی کردن فرایند تولید مشتریان را دارد..."}
          />
        </SwiperSlide>
        <SwiperSlide className="news-text-item">
          <News title={"پیشرو در تولید تخصصی محصولات ریخته‌گری"}
          subtitle={"در حوزه صنایع مس، سیمان، معادن، فولاد و آهن"}
          description={"مجموعه ما با تخصص در ریخته‌گری چدن و فولاد محصولات متنوعی را برای صنایع مس، سیمان، معادن، فولاد و آهن تولید میکند.تمامی محصولات با استفاده از مواد اولیه با کیفیت و فناوری های پیشرفته، مطابق با نیاز های صنعتی طراحی و عرضه میشود..."}
          />
        </SwiperSlide>
        <SwiperSlide className="news-text-item">
          <News title={"پیشرو در تولید تخصصی محصولات ریخته‌گری"}
          subtitle={"در حوزه صنایع مس، سیمان، معادن، فولاد و آهن"}
          description={
            "مجموعه ما با تخصص در ریخته‌گری چدن و فولاد محصولات متنوعی را برای صنایع مس، سیمان، معادن، فولاد و آهن تولید میکند.تمامی محصولات با استفاده از مواد اولیه با کیفیت و فناوری های پیشرفته، مطابق با نیاز های صنعتی طراحی و عرضه میشود..."
          }
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="news-slider md:w-[100vw] mt-2 felx flex-row justify-center items-center md:right-[20vw] rounded-3xl overflow-hidden"
        onSwiper={(swiper) => (swiper2Ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper1Ref)}
        spaceBetween={0}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}>
        <SwiperSlide className="felx flex-row justify-center items-center">
          <Image src={newsPicture1} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide className="felx flex-row justify-center items-center">
          <Image src={newsPicture2} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide className="felx flex-row justify-center items-center">
          <Image src={newsPicture4} fill alt="news picture" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LinkedSwipers;
