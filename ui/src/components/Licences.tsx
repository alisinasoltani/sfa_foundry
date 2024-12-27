import Image from "next/image";
import waves from "@/public/licences/waves_vertical.png";
import map from "@/public/footer/map.png";
import licence1 from "@/public/licences/licence1.png";
import licence2 from "@/public/licences/licence2.png";
import licence3 from "@/public/licences/licence3.png";

const Licences = () => {
  return (
    <>
      <div className="w-full relative bg-[#FDFDFD] -translate-y-10 z-0 flex flex-col xl:gap-12 gap-6 pt-12 justify-center items-center xl:h-[100vh] lg:h-[80vh] h-[150vh]">
          <div className="xl:flex hidden z-10 absolute top-4 left-0 p-0 m-0 w-full h-[100vh]">
            <Image src={waves} height={600} alt="" />
          </div>
          <div className="z-0 absolute xl:top-[48vh] lg:top-[40vh] top-[110vh] left-0 p-0 m-0 overflow-hidden w-full xl:h-[130vh] lg:h-[100vh] h-[50vh]">
            <Image src={map} priority fill className="z-0" alt="" />
          </div>
          <h2 className="sf_bold xl:text-[2rem] text-2xl text-center z-10">
              قابل اعتماد و تایید شده
          </h2>
          <span className="sf_semi xl:text-3xl text-xl text-center lg:max-w-[45vw] xl:p-0 px-8 z-10" style={{ direction: 'rtl' }}>
          شرکت سپاهان فولاد آتشگاه، دارای گواهینامه های ISO 14001:2004 و ISO 9001:2008 است.
          کلیه مراحل تولید در این شرکت طبق دستورالعمل های سیستم کنترل کیفیت انجام می شود.
          </span>
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-10 gap-4 z-10">
              <Image className="shadow-xl xl:w-[200px] w-[150px]" src={licence1} placeholder="blur" alt="" />
              <Image className="shadow-xl xl:w-[200px] w-[150px]" src={licence2} placeholder="blur" alt="" />
              <Image className="shadow-xl xl:w-[200px] w-[150px]" src={licence3} placeholder="blur" alt="" />
          </div>
      </div>
    </>
  )
};

export default Licences;