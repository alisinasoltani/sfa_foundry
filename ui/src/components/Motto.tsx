"use client"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";

const Motto = () => {
    const {ref, inView, entry} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
    <Box className="flex lg:flex-row-reverse flex-col lg:gap-0 lg:px-0 px-8 gap-12 lg:justify-evenly justify-center lg:items-stretch items-center py-[8rem] z-1">
        <div className="flex flex-col justify-start items-center gap-4 bg-[#ededed] xl:px-[4rem] py-10 px-4 rounded-3xl shadow-lg" ref={ref}>
            <span className="flex flex-row-reverse justify-center items-end gap-2 lg:text-[40px] text-[20px]">
                <span>+</span>{inView ? <CountUp className="text-[#DA0001]" end={35} duration={4} /> : 0} <span className="sf_bold">سال</span>
            </span>
            <span className="flex flex-row-reverse h-full justify-center items-center gap-1 text-center lg:text-[16px] text-[10px] sf_light max-w-[18rem] xl:px-0 px-2" style={{ direction: 'rtl' }}>
                شرکت صنایع ریخته گری سپاهان فولاد آتشگاه در سال 1368 با هدف ریخته گری انواع فولادها و چدن ها تاسیس گردید که با اتکا به توانایی های خود و با پشتوانه سرمایه سازمانی و رویکرد راهبردی مدیریت در حفظ و توسعه این سرمایه ها در زمینه های دانش فنی و تجاری موفقیت های بسیاری کسب کرده است.
            </span>
        </div>
        <div className="flex flex-col justify-start items-center gap-4 bg-[#ededed] xl:px-[4rem] py-10 px-4 rounded-3xl shadow-lg">
            <span className="flex flex-row-reverse justify-center items-end gap-2 lg:text-[40px] text-[20px]">
                <span>+</span>{inView ? <CountUp className="text-[#DA0001]" end={20000} duration={4} /> : 0} <span className="sf_bold">تن</span>
            </span>
            <span className="flex flex-row-reverse h-full justify-center items-center gap-1 text-center lg:text-[16px] text-[10px] sf_light max-w-[18rem] xl:px-0 px-2" style={{ direction: 'rtl' }}>
                شرکت صنایع ریخته گری سپاهان فولاد آتشگاه با در اختیار داشتن 10 عدد کوره با مجموع ذوب همزمان 20 هزار کیلوگرم در فضایی به مساحت 25 هزار متر مربع، ظرفیت تولید سالانه 25 هزار تن قطعه ریخته گری را دارد.
            </span>
        </div>
        <div className="flex flex-col justify-start items-center gap-4 bg-[#ededed] xl:px-[4rem] py-10 px-4 rounded-3xl shadow-lg">
            <span className="flex flex-row-reverse h-full justify-center items-center gap-1 lg:text-[40px] text-[20px]">
                <span>+</span>{inView ? <CountUp className="text-[#DA0001]" end={300} duration={4} /> : 0} <span className="sf_bold">نفر</span>
            </span>
            <span className="flex flex-row-reverse justify-center items-end gap-2 text-center lg:text-[16px] text-[10px] sf_light max-w-[18rem] xl:px-0 px-2" style={{ direction: 'rtl' }}>
                شرکت صنایع ریخته گری سپاهان فولاد آتشگاه به منظور بهبود مستمر و ارتقاء محصولات، جهت کسب رضایت هرچه بیشتر مشتریان از بیش از 300 نیروی متخصص و جوان و همچنین تجهیزات و دانش فنی روز بهره گرفته و تا بحال توانسته است با بسیاری از شرکت های معتبر داخلی و خارجی در زمینه تولید انواع قطعات مصرفی در صنایع مختلف همچون معدن، فولاد، سیمان و مس همکاری نماید.
            </span>
        </div>
    </Box>
    );
}

export default Motto