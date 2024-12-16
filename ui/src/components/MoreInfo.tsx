// import Image from "next/image";
import Link from "next/link";
// import moreInfoIcon from "@/public/icons/moreInfo.svg";

const MoreInfo = ({ link, className }: { link: string, className: string }) => {
  return (
    <Link href={link}>
        <div className={`flex flex-row gap-4 sf_medium text-xl border-2 ${className}  border-[#DA0001] bg-white hover:bg-[#DA0001] hover:shadow-xl hover:text-white transition-all duration-500 rounded-lg px-4 py-2`}>
        اطلاعات بیشتر
        {/* <Image src={moreInfoIcon} width={22} className="icon-black hover:icon-white" alt="more info: click to read more about this subject!" /> */}
        <h4 className="sf_bold text-xl">+</h4>
        </div>
    </Link>
  )
}

export default MoreInfo;