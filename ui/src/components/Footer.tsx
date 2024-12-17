import icon from "@/app/favicon.ico";
import Image from "next/image";
import facebookIcon from "@/app/public/icons/facebook.svg";
import instagramIcon from "@/app/public/icons/instagram.svg";
import whatsappIcon from "@/app/public/icons/whatsapp.svg";
import Link from "next/link";
import phoneIcone from "@/app/public/icons/phone.svg";
import faxIcone from "@/app/public/icons/fax.svg";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-[70vh]">
        <div className="flex flex-col w-1/3 justify-center items-center gap-4 border-r-[3px] border-[#D52927] py-8">
            <div className="flex flex-row-reverse text-right gap-4 justify-center items-center">
                <Image src={icon} alt="sfa icon" width={120} />
                <div className="flex flex-col">
                    <h6 className="text-[2rem] sf_medium">
                        صنایع ریخته گری
                    </h6>
                    <h6 className="text-[2.2rem] sf_bold">
                        سپاهان فولاد
                    </h6>
                </div>
            </div>
            <h6 className="w-[22rem] text-right text-[1.5rem] sf_medium" style={{ direction: 'rtl' }}>
                کلیه حقوق مادی و معنوی، متعلق به سپاهان فولاد آتشگاه می باشد.
            </h6>
            <h6 className="w-[22rem] text-right text-[1.5rem] sf_medium" style={{ direction: 'rtl' }}>
                طراحی شده توسط تیم آکادمی پنج
            </h6>
        </div>
        <div className="flex flex-row w-2/3 justify-center items-center">
            <div className="flex flex-col gap-4 px-[4rem]">
                <Link href={""}>
                    <button type="button" className="bg-[#09162E] p-2 rounded-2xl">
                        <Image src={facebookIcon} width={35} alt="facebook link" />
                    </button>
                </Link>
                <Link href={""}>
                    <button type="button" className="bg-[#09162E] p-2 rounded-2xl">
                        <Image src={instagramIcon} width={35} alt="instagram link" />
                    </button>
                </Link>
                <Link href={""}>
                    <button type="button" className="bg-[#09162E] p-2 rounded-2xl">
                        <Image src={whatsappIcon} width={35} alt="whatsapp link" />
                    </button>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-end gap-4 w-full px-[4rem]">
                <h2 className="address text-2xl sf_bold" style={{ direction: 'rtl' }}>
                    آدرس ما
                </h2>
                <h5 className="text-2xl sf_light w-[25rem]" style={{ direction: 'rtl' }}>
                    اصفهان، شهرک صنعتی نجف آباد ۲، میدان صنعت،  بلوار دکتر حسابی، نبش فرعی۲۸ 
                </h5>
                <div className="flex flex-row justify-end gap-2 text-2xl sf_light">
                    031-42696500-4
                    <Image src={phoneIcone} width={25} alt="phone number" />
                </div>
                <div className="flex flex-row justify-end gap-2 text-2xl sf_light">
                    031-42696505
                    <Image src={faxIcone} width={25} alt="fax number" />
                </div>
                <div className="flex flex-col justify-center items-end gap-1">
                    <div className="flex flex-row justify-end gap-2 text-2xl sf_light">
                        info@sfa-foundry.com
                    </div>
                    <div className="flex flex-row justify-end gap-2 text-2xl sf_light">
                        sales@sfa-foundry.com
                    </div>
                    <div className="flex flex-row justify-end gap-2 text-2xl sf_light">
                        export@sfa-foundry.com
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;