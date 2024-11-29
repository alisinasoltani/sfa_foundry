import Image from "next/image";
import cement from "@/public/industries/cement.png";
import copper from "@/public/industries/copper.png";
import oil from "@/public/industries/oil.png";
import related from "@/public/industries/related.png";
import steel from "@/public/industries/steel.png";

const Industries = () => {
  return (
    <div>
        <div className="industries text-center pt-12 pb-8">
            <div className="inline-flex">
                <h3 className="sf_semi text-xl mx-6 -translate-y-2" style={{display: 'inline-flex'}}>
                    صنایع ریخته گری سپاهان فولاد اتشگاه
                </h3>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-[4.2rem] pb-12">
            <div className="flex flex-col items-center justify-between bg-[#E6E6E6] rounded-xl hover:shadow-xl transition-all duration-500">
                <Image src={oil} width={200} className="hover:scale-105 overflow-hidden transition-all duration-500" alt="" />
                <h3 className="sf_bold text-lg py-3">
                    نفت و پتروشیمی
                </h3>
            </div>
            <div className="flex flex-col items-center justify-between bg-[#E6E6E6] rounded-xl hover:shadow-xl transition-all duration-500">
                <Image src={copper} width={200} className="hover:scale-105 overflow-hidden transition-all duration-500" alt="" />
                <h3 className="sf_bold text-lg py-3">
                    صنعت مس
                </h3>
            </div>
            <div className="flex flex-col items-center justify-between bg-[#E6E6E6] rounded-xl hover:shadow-xl transition-all duration-500">
                <Image src={cement} width={200} className="hover:scale-105 overflow-hidden transition-all duration-500" alt="" />
                <h3 className="sf_bold text-lg py-3">
                    صنایع سیمان  
                </h3>
            </div>
            <div className="flex flex-col items-center justify-between bg-[#E6E6E6] rounded-xl hover:shadow-xl transition-all duration-500">
                <Image src={related} width={200} className="hover:scale-105 overflow-hidden transition-all duration-500" alt="" />
                <h3 className="sf_bold text-lg py-3">
                    معادن و صنایع مرتبط
                </h3>
            </div>
            <div className="flex flex-col items-center justify-between bg-[#E6E6E6] rounded-xl hover:shadow-xl transition-all duration-500">
                <Image src={steel} width={200} className="hover:scale-105 overflow-hidden transition-all duration-500" alt="" />
                <h3 className="sf_bold text-lg py-3">
                    آهن و فولاد
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Industries