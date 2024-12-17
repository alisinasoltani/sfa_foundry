import Image from "next/image";
import waves from "@/app/public/licences/waves_vertical.png";
import licence1 from "@/app/public/licences/licence1.png"
import licence2 from "@/app/public/licences/licence2.png"
import licence3 from "@/app/public/licences/licence3.png"

const Licences = () => {
  return (
    <>
      <div className="w-full relative -translate-y-10 z-0 flex flex-col gap-8 pt-12 justify-center items-center overflow-hidden h-[100vh]">
          <div className="z-0 absolute top-4 left-0 p-0 m-0 overflow-hidden w-full h-[100vh]">
            <Image src={waves} height={600} className="z-0" alt="" />
          </div>
          <h2 className="sf_bold text-[2rem] text-center">
              قابل اعتماد و تایید شده
          </h2>
          <span className="sf_medium text-2xl text-center max-w-[50vw]" style={{ direction: 'rtl' }}>
          شرکت سپاهان فولاد آتشگاه، دارای گواهینامه های ISO 14001:2004 و ISO 9001:2008 است.
          کلیه مراحل تولید در این شرکت طبق دستورالعمل های سیستم کنترل کیفیت انجام می شود.
          </span>
          <div className="flex flex-row justify-center items-center gap-6">
              <Image className="shadow-xl" src={licence1} alt="" width={120} />
              <Image className="shadow-xl" src={licence2} alt="" width={120} />
              <Image className="shadow-xl" src={licence3} alt="" width={120} />
          </div>
      </div>
    </>
  )
}

export default Licences