import Image from "next/image";
import waves from "@/public/licences/waves_vertical.png";
import map from "@/public/footer/map.png";
import licence1 from "@/public/licences/licence1.png";
import licence2 from "@/public/licences/licence2.png";
import licence3 from "@/public/licences/licence3.png";

const Licences = () => {
  return (
    <>
      <div className="hidden w-full relative -translate-y-10 z-0 flex flex-col gap-12 pt-12 justify-center items-center h-[100vh]">
          <div className="z-10 absolute top-4 left-0 p-0 m-0 w-full h-[100vh]">
            <Image src={waves} height={600} alt="" />
          </div>
          <div className="z-0 absolute top-[48vh] left-0 p-0 m-0 overflow-hidden w-full h-[130vh]">
            <Image src={map} fill className="z-0" alt="" />
          </div>
          <h2 className="sf_bold text-[2rem] text-center z-10">
              قابل اعتماد و تایید شده
          </h2>
          <span className="sf_semi text-3xl text-center max-w-[45vw] z-10" style={{ direction: 'rtl' }}>
          شرکت سپاهان فولاد آتشگاه، دارای گواهینامه های ISO 14001:2004 و ISO 9001:2008 است.
          کلیه مراحل تولید در این شرکت طبق دستورالعمل های سیستم کنترل کیفیت انجام می شود.
          </span>
          <div className="flex flex-row justify-center items-center gap-10 z-10">
              <Image className="shadow-xl" src={licence1} alt="" width={200} />
              <Image className="shadow-xl" src={licence2} alt="" width={200} />
              <Image className="shadow-xl" src={licence3} alt="" width={200} />
          </div>
      </div>
    </>
  )
};

export default Licences;