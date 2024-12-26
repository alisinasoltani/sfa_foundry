"use client"

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import News from "./NewsItem";
import Image from "next/image";
import newsPicture1 from "@/public/news/news_pic1.png";
import newsPicture2 from "@/public/news/news_pic2.png";
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
    <div className="w-full px-[20vw] pt-[8rem] overflow-hidden">
      <Swiper
        className="h-[40vh]"
        style={{ height: '40vh' }}
        spaceBetween={10}
        centeredSlides={true}
        centeredSlidesBounds={true}
        onSwiper={(swiper) => (swiper1Ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper2Ref)}
        slidesPerView={1}>
        <SwiperSlide>
          <News title={"عملیات حرارتی گلوله های ریخته گری"}
          subtitle={"رسیدن به نرخ سایش و سختی مناسب"}
          description={"از شاخص های مهم گلوله های  این شرکت، نرخ سایش آنها بوده که که مشخص کننده سرعت مصرف آنها در فرایند است که کنترل آن به کاهش هزینه های تولید و ارتقاء بهروری مشتریان کمک شایانی میکند. این شرکت با به کار گیری روش های مدرن ریخته‌گری و عملیات حرارتی و افزایش سختی گلوله ها، تلاش مستمر برای کاهش نرخ سایش و اقتصادی کردن فرایند تولید مشتریان را دارد..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <News title={"پیشرو در تولید تخصصی محصولات ریخته‌گری"}
          subtitle={"در حوزه صنایع مس، سیمان، معادن، فولاد و آهن"}
          description={"مجموعه ما با تخصص در ریخته‌گری چدن و فولاد محصولات متنوعی را برای صنایع مس، سیمان، معادن، فولاد و آهن تولید میکند.تمامی محصولات با استفاده از مواد اولیه با کیفیت و فناوری های پیشرفته، مطابق با نیاز های صنعتی طراحی و عرضه میشود..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <News title={"عملیات حرارتی گلوله های ریخته گری"}
          subtitle={"رسیدن به نرخ سایش و سختی مناسب"}
          description={"از شاخص های مهم گلوله های  این شرکت، نرخ سایش آنها بوده که که مشخص کننده سرعت مصرف آنها در فرایند است که کنترل آن به کاهش هزینه های تولید و ارتقاء بهروری مشتریان کمک شایانی میکند. این شرکت با به کار گیری روش های مدرن ریخته‌گری و عملیات حرارتی و افزایش سختی گلوله ها، تلاش مستمر برای کاهش نرخ سایش و اقتصادی کردن فرایند تولید مشتریان را دارد..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <News title={"پیشرو در تولید تخصصی محصولات ریخته‌گری"}
          subtitle={"در حوزه صنایع مس، سیمان، معادن، فولاد و آهن"}
          description={"مجموعه ما با تخصص در ریخته‌گری چدن و فولاد محصولات متنوعی را برای صنایع مس، سیمان، معادن، فولاد و آهن تولید میکند.تمامی محصولات با استفاده از مواد اولیه با کیفیت و فناوری های پیشرفته، مطابق با نیاز های صنعتی طراحی و عرضه میشود..."}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="news-slider w-[100vw] felx flex-row justify-center items-center right-[10vw] rounded-3xl overflow-hidden"
        style={{ height: '60vh', width: '80vw' }}
        onSwiper={(swiper) => (swiper2Ref.current = swiper)}
        onSlideChange={(swiper) => handleSlideChange(swiper, swiper1Ref)}
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        modules={[EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}>
        <SwiperSlide className="felx flex-row justify-center items-center" style={{ width: '35vw', aspectRatio: 'auto 3/2' }}>
          <Image src={newsPicture1} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide className="felx flex-row justify-center items-center w-[55vw]" style={{ width: '35vw', aspectRatio: 'auto 3/4' }}>
          <Image src={newsPicture2} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide className="felx flex-row justify-center items-center w-[55vw]" style={{ width: '35vw', aspectRatio: 'auto 3/4' }}>
          <Image src={newsPicture1} fill alt="news picture" />
        </SwiperSlide>
        <SwiperSlide className="felx flex-row justify-center items-center w-[55vw]" style={{ width: '35vw', aspectRatio: 'auto 3/4' }}>
          <Image src={newsPicture2} fill alt="news picture" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LinkedSwipers;
