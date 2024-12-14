"use client"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';

const Motto = () => {
    const {ref, inView, entry} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
    <Box className="flex flex-col justify-center items-center py-[8rem] z-1">
        <Typography variant="h4" component="h6" className="sf_semi max-w-[50vw] text-center">
        بیش از ۴۰سال سابقه و تجربه در زمینه ریخته گری در راه خود کفایی با بهره گیری از نیروهای متخصص و جوان و مدیران مجرب
        </Typography>
        <Box ref={ref} className="flex flex-row-reverse justify-center items-start gap-8 pt-[4rem]">
            <div className="text-center flex flex-col">
                <span className="flex flex-row-reverse justify-center items-end">
                    {inView ? <CountUp className="lg:text-[60px] text-[33px] text-[#DA0001]" end={35} duration={4} /> : 0}
                </span>
                <h6 className="max-w-[15rem] text-xl sf_bold">
                    سال تجربه در ریخته گری قطعات صنایع مختلف
                </h6>
            </div>
            <div className="text-center flex flex-col">
                <span className="flex flex-row-reverse justify-center items-end gap-2">
                    {inView ? <CountUp className="lg:text-[60px] text-[33px] text-[#DA0001]" end={25000} duration={4} /> : 0}
                    <span className="text-[2.5rem] sf_semi">
                        تن
                    </span>
                </span>
                <h6 className="text-xl sf_bold">
                    ظرفیت اسمی تولید سالانه
                </h6>
            </div>
            <div className="text-center flex flex-col">
                <span className="flex flex-row-reverse justify-center items-end gap-2">
                    {inView ? <CountUp className="lg:text-[60px] text-[33px] text-[#DA0001]" end={400} duration={4} /> : 0}
                    <span className="text-[2.5rem] sf_semi">
                        نفر
                    </span>
                </span>
                <h6 className="text-xl sf_bold">
                    پرسنل متخصص و تکنسین فنی
                </h6>
            </div>
        </Box>
    </Box>
    );
}

export default Motto