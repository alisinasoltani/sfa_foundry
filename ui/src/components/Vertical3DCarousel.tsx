import React, { useEffect } from "react";
import SwiperCore, { Swiper } from "swiper";
import { SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import cementIndustryPicture from "@/public/industries/cement.png";
import copperIndustryPicture from "@/public/industries/copper.png";
import oilIndustryPicture from "@/public/industries/oil.png";
import relatedIndustryPicture from "@/public/industries/related.png";
import grindingBallPicture from "@/public/industries/sfa_opt.png";
import steelIndustryPicture from "@/public/industries/steel.png";
import { SwiperClass } from "swiper/react";
import { useRef, useState } from "react";

interface vertical3dSlider {
  onSwiper: any;
  onSlideChange: any;
}

const Vertical3DCarousel: React.FC<{
  onSwiper?: (swiper: any) => void;
  onSlideChange?: (swiper: any) => void;
}> = ({ onSwiper, onSlideChange }) => {
  const swiperContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    SwiperCore.use([EffectCoverflow]);

    const swiperInstance = new Swiper(swiperContainerRef.current!, {
      direction: "vertical",
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      loop: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 30,
        stretch: 50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      on: {
        init: (swiper) => {
          if (onSwiper) {
            onSwiper(swiper); // Pass the Swiper instance directly
          }
        },
        slideChange: (swiper) => {
          // Trigger the slide change handler
          if (onSlideChange) {
            onSlideChange(swiper);
          }
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, [onSwiper, onSlideChange]);

  return (
    <div className="vertical-swiper-container swiper-container h-[100vh] top-[130px] flex flex-col justify-center items-center relative right-[40px]" ref={swiperContainerRef}>
      <div className="vertical-swiper-wrapper swiper-wrapper flex flex-col justify-center items-center">
          <SwiperSlide className="vertical-swiper-slide swiper-container flex flex-col justify-center items-center">
            <div className="carousel-item">
              <Image src={cementIndustryPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="vertical-swiper-slide swiper-container flex flex-col justify-center items-center">
            <div className="carousel-item">
              <Image src={copperIndustryPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="vertical-swiper-slide swiper-container flex flex-col justify-center items-center">
            <div className="carousel-item">
              <Image src={oilIndustryPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="vertical-swiper-slide swiper-container flex flex-col justify-center items-center">
            <div className="carousel-item">
              <Image src={relatedIndustryPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="vertical-swiper-slide swiper-container flex flex-col justify-center items-center">
            <div className="carousel-item">
              <Image src={grindingBallPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="vertical-swiper-slide swiper-container flex flex-col justify-center items-center">
            <div className="carousel-item">
              <Image src={steelIndustryPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
      </div>
    </div>
  );
};

export default Vertical3DCarousel;
