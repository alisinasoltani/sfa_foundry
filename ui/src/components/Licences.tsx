import Image from "next/image";
import waves from "@/public/licences/waves.png";
import licence1 from "@/public/licences/licence1.png"
import licence2 from "@/public/licences/licence2.png"
import licence3 from "@/public/licences/licence3.png"

const Licences = () => {
  return (
    <div className="w-full licence_gr flex flex-col justify-center items-center">
        <h2 className="sf_medium text-2xl text-center">
            قابل اعتماد و تایید شده
        </h2>
        <span className="sf_light text-2xl text-center">
        شرکت سپاهان فولاد آتشگاه، دارای گواهینامه های ISO 14001:2004 و ISO 9001:2008 است.
        کلیه مراحل تولید در این شرکت طبق دستورالعمل های سیستم کنترل کیفیت انجام می شود.
        </span>
        <div>
            <Image src={licence1} alt="" width={120} />
            <Image src={licence2} alt="" width={120} />
            <Image src={licence3} alt="" width={120} />
        </div>
    </div>
  )
}

export default Licences