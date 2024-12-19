"use client"

import { useState, useRef } from 'react';
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const IndustryTabs = styled(Tabs)<TabsProps>(({ theme }) => ({
    '.MuiTab-root MuiTab-textColorPrimary': {
        color: '#DA0001'
    },
    width: '45vw',
    direction: 'rtl',
}));

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className='text-white w-[45vw]'
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
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const industriesSwiperRef = useRef<SwiperClass | null>(null);
  const handleSlideChange = (slide: number) => {
      industriesSwiperRef?.current?.slideTo(slide);
    // }
  };
  const handleTabChange = (swiper: SwiperClass) => {
    setValue(swiper.activeIndex);
  }

  return (
    <Box sx={{ width: '100%', paddingInline: '4rem' }} className="py-[6rem] w-full flex flex-row-reverse justify-center items-center gap-10">
      <Swiper
        direction='vertical'
        style={{ height: '60vh', width: '50vw' }}
        onSwiper={(swiper) => (industriesSwiperRef.current = swiper)}
        onSlideChange={(swiper) => handleTabChange(swiper)}
        slidesPerView={1}>
        <SwiperSlide>
          <Image src={copper} fill alt='copper industry products' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={steel} fill alt='steel industry products' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cement} fill alt='cement industry products' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={related} fill alt='related industries products' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={mediaBall} fill alt='grinding media ball product' />
        </SwiperSlide>
      </Swiper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="border-[1px] rounded-xl border-[#DA0001]">
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
