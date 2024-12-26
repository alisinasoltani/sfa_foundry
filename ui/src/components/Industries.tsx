"use client"

import { useRef, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import cement from "@/public/industries/cementInd.png";
import copper from "@/public/industries/copperInd.png";
import related from "@/public/industries/relatedInd.png";
import steel from "@/public/industries/steelInd.png";
import grindingBallPicture from "@/public/industries/grindingBalls.png";
import Image from 'next/image';
import IndustriesMenu from './IndustriesMenu';
import { Button } from '@mui/material';
// import required modules
import { Autoplay } from 'swiper/modules';

export default function BasicTabs() {
  const industriesSwiperRef = useRef<SwiperClass | null>(null);
  const [ activeInd, setActiveInd ] = useState<number | undefined>(0);
  const isProgrammaticChange = useRef(false);

  const handleSlideChange = (index: number) => {
    if (index !== activeInd) {
      isProgrammaticChange.current = true; // Mark the change as programmatic
      setActiveInd(index);
      industriesSwiperRef.current?.slideTo(index); // Sync slider programmatically
    }
  };

  const onSlideChange = (swiper: any) => {
    if (!isProgrammaticChange.current) {
      // Only update state if it's a user-initiated change
      setActiveInd(swiper.activeIndex);
    }
    isProgrammaticChange.current = false; // Reset the flag
  };
  return (
    <Box sx={{ width: '100%', paddingInline: '4rem' }} className="hidden pt-[5rem] w-full h-[100vh]">
      <div>
        <IndustriesMenu handleSlideChange={handleSlideChange} active={activeInd} />
        <Swiper
          style={{ width: '75vw', height: '85vh' }}
          direction='horizontal'
          className='rounded-b-2xl'
          loop={true}
          // modules={[Autoplay]}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: true,
          // }}
          onSwiper={(swiper) => (industriesSwiperRef.current = swiper)}
          // onSlideChange={onSlideChange}
          centeredSlides={true}
          slidesPerView={1}
          allowTouchMove={true}
          speed={1000}>
          <SwiperSlide>
            <div className="carousel-item z-0 w-full h-full" style={{ direction: 'rtl' }}>
              <div className='absolute w-full h-full z-10 flex flex-col gap-4 max-w-[35rem] justify-end bottom-[4rem] right-[4rem] items-start'>
                <h3 className='sf_bold text-3xl'>
                  صنعت سیمان
                </h3>
                <span className='sf_medium text-2xl'>
                  تولید تمامی قطعات تخصصی مورد نیاز برای دپارتمان‌های پخت سیمان، سنگ‌شکن ‌ها و آسیاب های سیمان با استفاده از بهترین متد های صنعتی و استاندارد های جهانی.
                </span>
                <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
                variant="contained" sx={{ color: 'DA0001' }} color='secondary'>
                  محصولات صنعت سیمان
                </Button>
              </div>
              <Image src={cement} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item z-0 w-full h-full" style={{ direction: 'rtl' }}>
              <div className='absolute w-full h-full z-10 flex flex-col gap-4 max-w-[35rem] justify-end bottom-[4rem] right-[4rem] items-start'>
                <h3 className='sf_bold text-3xl'>
                  آهن و فولاد
                </h3>
                <span className='sf_medium text-2xl'>
                  متخصص در طراحی و تولید مجموعه کاملپالت های گندله سازی با تمرکز بر کیفیت، دوام بالا و عملکرد بهینه، جهت ارتقای فرایند های صنعتی و بهروری خطوط تولید.
                </span>
                <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
                variant="contained" sx={{ color: 'DA0001' }} color='secondary'>
                  محصولات آهن و فولاد
                </Button>
              </div>
              <Image src={steel} fill alt="steel industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item z-0 w-full h-full" style={{ direction: 'rtl' }}>
              <div className='absolute w-full h-full z-10 flex flex-col gap-4 max-w-[35rem] justify-end bottom-[4rem] right-[4rem] items-start'>
                <h3 className='sf_bold text-3xl'>
                  معادن و صنایع
                </h3>
                <span className='sf_medium text-2xl'>
                  پیشرو در زمینه تولید و افزایش طول عمر لاینر های آسیاب AG & SAG 
                </span>
                <Button className="text-[white] text-lg rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
                variant="contained" sx={{ color: 'DA0001' }} color='secondary'>
                  محصولات معادن و صنایع
                </Button>
              </div>
              <Image src={related} fill alt="related industries picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item z-0 w-full h-full" style={{ direction: 'rtl' }}>
              <div className='absolute w-full h-full z-10 flex flex-col gap-4 max-w-[35rem] justify-end bottom-[4rem] right-[4rem] items-start'>
                <h3 className='sf_bold text-3xl'>
                  گلوله های چدنی
                </h3>
                <span className='sf_medium text-2xl'>
                  تولید گلوله های ریخته‌گری تخصصی با عملکرد بهینه برای صنایع فولاد، سیمان، تولید کنسانتره های صنعتی هبلکس، پودر های صنعتی و سایر کاربرد های خاص.
                </span>
                <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
                variant="contained" sx={{ color: 'DA0001' }} color='secondary'>
                  گلوله های چدنی
                </Button>
              </div>
              <Image src={grindingBallPicture} fill alt="cement industry picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-item z-0 w-full h-full" style={{ direction: 'rtl' }}>
              <div className='absolute w-full h-full z-10 flex flex-col gap-4 max-w-[35rem] justify-end bottom-[4rem] right-[4rem] items-start'>
                <h3 className='sf_bold text-3xl'>
                  صنعت مس
                </h3>
                <span className='sf_medium text-2xl'>
                  تولید لاینر هایآسیاب گلوله ای با بالاترین استاندارد، دوام و طول عمر و همچنین تولید و بهینه سازی قطعات هود و دهانه کنورتور مس تحت کارکرد در دمای بالا.
                </span>
                <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
                variant="contained" sx={{ color: 'DA0001' }} color='secondary'>
                  محصولات صنعت مس
                </Button>
              </div>
              <Image src={copper} fill alt="copper industry picture" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Box>
  );
}
