import icon from "@/app/favicon.ico";
import Image from "next/image";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import whatsappIcon from "@/public/icons/whatsapp.svg";
import Link from "next/link";
import phoneIcone from "@/public/icons/phone.svg";
import faxIcone from "@/public/icons/fax.svg";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-start w-full h-[60vh]">
        <div className="flex flex-col justify-center items-end gap-4 w-full px-[4rem]">
            <h2 className="text-3xl sf_bold border-b-2 border-[#D52927] pb-3 text-center lg:w-[22vw]" style={{ direction: 'rtl' }}>
                ارتباط با ما
            </h2>
            <div className="flex flex-row justify-center items-center gap-12 lg:w-[22vw]">
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
            <div className="flex flex-col w-[22vw] justify-center items-center gap-4">
                <div className="w-full flex flex-row-reverse text-right gap-4 justify-center items-center">
                    <Image src={icon} alt="sfa icon" width={80} />
                    <div className="flex flex-col">
                        <h6 className="text-[2rem] sf_light">
                            صنایع ریخته گری
                        </h6>
                        <h6 className="text-[1.8rem] sf_medium">
                            سپاهان فولاد آتشگاه
                        </h6>
                    </div>
                </div>
                <h6 className="w-[22rem] text-[1.5rem] sf_medium text-center" style={{ direction: 'rtl' }}>
                    کلیه حقوق مادی و معنوی، متعلق به سپاهان فولاد آتشگاه می باشد.
                </h6>
                <h6 className="w-[22rem] text-center text-[1.5rem] sf_semi" style={{ direction: 'rtl' }}>
                    طراحی شده توسط تیم آکادمی پنج
                </h6>
            </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-4 w-full px-[4rem]">
            <h2 className="text-3xl sf_bold border-b-2 border-[#D52927] pb-3 text-center lg:w-[18vw]" style={{ direction: 'rtl' }}>
                تماس با ما
            </h2>
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
        <div className="flex flex-col justify-center items-end gap-4 w-full px-[4rem]">
            <h2 className="text-3xl sf_bold border-b-2 border-[#D52927] pb-3 text-center lg:w-[18vw]" style={{ direction: 'rtl' }}>
                آدرس ما
            </h2>
            <h5 className="text-3xl sf_medium lg:w-[18vw]" style={{ direction: 'rtl' }}>
                اصفهان، شهرک صنعتی نجف آباد ۲، میدان صنعت،  بلوار دکتر حسابی، نبش فرعی۲۸ 
            </h5>
        </div>
    </div>
  )
}

export default Footer;