"use client"

import { useState, useRef, useEffect } from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import cement from "@/public/industries/cement.png";
import copper from "@/public/industries/copper.png";
import related from "@/public/industries/related.png";
import steel from "@/public/industries/steel.png";
import mediaBall from "@/public/industries/sfa_opt.png";
import Image from 'next/image';
import Vertical3DCarousel from "@/components/Vertical3DCarousel";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const IndustryTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
    '.MuiTab-root MuiTab-textColorPrimary': {
        color: '#DA0001'
    },
    width: '43vw',
    direction: 'rtl',
}));

// const Vertical3DCarousel: React.FC<{
//   items: string[];
//   onSwiper?: (swiper: any) => void;
//   onSlideChange?: (swiper: any) => void;
// }> = ({ items, onSwiper, onSlideChange }) => {
//   return (
//     <Swiper
//       direction="vertical"
//       effect="coverflow"
//       slidesPerView={3}
//       centeredSlides={true}
//       coverflowEffect={{
//         rotate: 30,
//         stretch: 50,
//         depth: 200,
//         modifier: 1,
//         slideShadows: false,
//       }}
//       onSwiper={onSwiper}
//       onSlideChange={onSlideChange}
//       className="vertical-carousel"
//     >
//       {items.map((item, index) => (
//         <SwiperSlide key={index} className="vertical-slide bg-red-400">
//           {item}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className='text-white w-[43vw]'
      style={{ direction: 'rtl' }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }} className="flex flex-col gap-6">{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const industriesSwiperRef = useRef<SwiperClass | null>(null);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (industriesSwiperRef.current) {
      // Swiper is initialized, let's access the Swiper instance
      console.log("Swiper instance is initialized:", industriesSwiperRef.current);
    }
  }, [industriesSwiperRef.current]);

  const verticalSwiperRef = useRef<any>(null); // Ref for the vertical Swiper
  const horizontalSwiperRef = useRef<any>(null); // Ref for the horizontal Swiper

  const handleVerticalSlideChange = (swiper: any) => {
    if (horizontalSwiperRef.current) {
      setValue(swiper?.realIndex); // Sync vertical slider
      // horizontalSwiperRef.current.slideTo(swiper?.realIndex); // Sync horizontal slider
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSlideChange = (swiper: any) => {
    if (verticalSwiperRef.current) {
      verticalSwiperRef.current.slideTo(swiper?.realIndex);
    }
  };

  return (
    <Box sx={{ width: '100%', paddingInline: '4rem' }} className="py-[12rem] w-full flex flex-row-reverse justify-center items-center gap-[6rem] h-[100vh] overflow-hidden">
      {/* <Vertical3DCarousel items={["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]} onSwiper={(swiper) => {verticalSwiperRef.current = swiper;}} onSlideChange={handleVerticalSlideChange} /> */}
      <Vertical3DCarousel onSwiper={(swiper) => {verticalSwiperRef.current = swiper;}} onSlideChange={handleVerticalSlideChange} />
      {/* <Swiper
      onSwiper={(swiper) => {
        horizontalSwiperRef.current = swiper;
      }}
      onSlideChange={handleHorizontalSlideChange}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      className="horizontal-carousel">
      {["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"].map(
        (item, index) => (
          <SwiperSlide key={index} className="horizontal-slide">
            {item}
          </SwiperSlide>
        )
      )}
      </Swiper> */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className=" border-[1px] rounded-xl border-[#DA0001]">
        <IndustryTabs value={value} textColor='secondary' onChange={handleChange} variant='fullWidth' aria-label="basic tabs example" indicatorColor='secondary'>
          <Tab sx={{ color: '#ffffff' }} label="مس" {...a11yProps(0)} onClick={() => handleSlideChange(0)} />
          <Tab sx={{ color: '#ffffff' }} label="آهن و فولاد" {...a11yProps(1)} onClick={() => handleSlideChange(1)} />
          <Tab sx={{ color: '#ffffff' }} label="سیمان" {...a11yProps(3)} onClick={() => handleSlideChange(2)} />
          <Tab sx={{ color: '#ffffff' }} label="معادن و صنایع" {...a11yProps(4)} onClick={() => handleSlideChange(3)} />
          <Tab sx={{ color: '#ffffff' }} label="گلوله های چدنی" {...a11yProps(5)} onClick={() => handleSlideChange(4)} />
        </IndustryTabs>
        <CustomTabPanel value={value} index={0}>
          <h2 className="sf_bold text-2xl">
            صنعت مس
          </h2>
          <span className="sf_light text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </span>
          <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
          variant="outlined" sx={{ color: 'DA0001' }} color='primary'>
            محصولات صنعت مس
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <h2 className="sf_bold text-2xl">
            صنعت مس
          </h2>
          <span className="sf_light text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </span>
          <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
          variant="outlined" sx={{ color: 'DA0001' }} color='primary'>
            محصولات صنعت مس
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <h2 className="sf_bold text-2xl">
            صنعت مس
          </h2>
          <span className="sf_light text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </span>
          <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
          variant="outlined" sx={{ color: 'DA0001' }} color='primary'>
            محصولات صنعت مس
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <h2 className="sf_bold text-2xl">
            صنعت مس
          </h2>
          <span className="sf_light text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </span>
          <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
          variant="outlined" sx={{ color: 'DA0001' }} color='primary'>
            محصولات صنعت مس
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <h2 className="sf_bold text-2xl">
            صنعت مس
          </h2>
          <span className="sf_light text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </span>
          <Button className="text-[white] text-xl rounded-xl py-2 sf_medium inline-flex flex-row gap-2 w-[15rem]" 
          variant="outlined" sx={{ color: 'white' }} color='primary'>
            محصولات صنعت مس
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <h2 className="sf_bold text-2xl">
            صنعت مس
          </h2>
          <span className="pt-4 sf_light text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
          </span>
          <Button className="text-[#DA0001] text-xl rounded-xl py-2 sf_bold inline-flex flex-row gap-2 w-[15rem]" 
          variant="outlined" sx={{ color: 'DA0001' }} color='secondary'>
            محصولات صنعت مس
          </Button>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
