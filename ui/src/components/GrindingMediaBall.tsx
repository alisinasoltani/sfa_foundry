import Image from "next/image";
import GrindingMediaBallImage from "@/public/GrindingMediaBall/GrindingMediaBall.png";
import MoreInfo from "./MoreInfo";
import waves from "@/public/GrindingMediaBall/waves.png";

const GrindingMediaBall = () => {
  return (
    <div className="pb-12 flex flex-col justify-center items-center">
        <div className="z-0 absolute right-0">
            <Image src={waves} width={600} className="z-0" alt="" />
        </div>
        <div className="inline-flex justify-center items-center pt-[5rem] z-100 relative top-0">
            <div className="GrindingMediaBall inline-flex justify-center items-center w-full text-center">
                <Image className="-translate-y-[2rem] -translate-x-[450px]" src={GrindingMediaBallImage} width={450} alt="" />
            </div>
        </div>
        <div className="flex flex-col gap-6 max-w-[55vw] justify-center items-end justify-self-center 
        text-right p-12 rounded-2xl shadow-2xl backdrop-blur-sm bg-[rgba(255,255,255,0.1)]" style={{ direction: 'rtl' }}>
            <h2 className="sf_bold text-[2.5rem] text-[#CF092D] w-full">
                گلوله چدنی
            </h2>
            <h4 className="sf_medium text-[1.5rem]">
                گلوله های آسیا، قطعات سایشی مورد مصرف در آسیاهای گلوله ای هستند که وظیفه ی خردایش و تولید پودر میکرونیزه را به عهده دارند.
            </h4>
            <span className="sf_light text-[1.2rem]">
                این قطعات که به روش ریخته گری در این شرکت تولید می شوند در سایزها و آنالیزهای مختلف در دسترس مشتریان قرار گرفته و صنایع مختلفی مانند سیمان،فولاد،تولیدکنسانتره های صنعتی،هبلکس،پودرهای صنعتی و... مصرف کننده ی این قطعات می باشند.
            </span>
            <MoreInfo className="justify-self-start mt-2" link="" />
        </div>
    </div>
  )
}

export default GrindingMediaBall;