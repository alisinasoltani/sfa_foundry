import icon from "@/app/favicon.ico";
import Image from "next/image";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import whatsappIcon from "@/public/icons/whatsapp.svg";
import Link from "next/link";
import phoneIcone from "@/public/icons/phone.svg";
import faxIcone from "@/public/icons/fax.svg";
import mailIcon from "@/public/icons/mail.svg";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-12 justify-center items-start bg-none lg:pt-[12vh] w-full xl:h-[60vh] lg:h-[70vh] h-[140vh] relative z-[100]">
        <div className="flex flex-col justify-center items-center lg:gap-4 gap-8 w-full xl:px-[4rem] px-[2rem]">
            <h2 className="lg:text-3xl text-2xl sf_bold border-b-2 border-[#D52927] pb-3 text-center w-full" style={{ direction: 'rtl' }}>
                ارتباط با ما
            </h2>
            <div className="flex flex-row justify-center items-center xl:gap-12 gap-10 xl:w-[22vw] w-full">
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
            <div className="flex flex-col xl:w-[22vw] w-full justify-center items-center gap-4">
                <div className="w-full flex flex-row-reverse text-right gap-4 justify-center items-center">
                    <Image src={icon} alt="sfa icon" width={80} />
                    <div className="flex flex-col">
                        <h6 className="xl:text-[2rem] text-[1.8rem] sf_light">
                            صنایع ریخته گری
                        </h6>
                        <h6 className="xl:text-[1.8rem] text-[1.5rem] sf_medium">
                            سپاهان فولاد آتشگاه
                        </h6>
                    </div>
                </div>
                <h6 className="lg:w-[22rem] lg:text-[1.5rem] text-[1.2rem] sf_medium text-center" style={{ direction: 'rtl' }}>
                    کلیه حقوق مادی و معنوی، متعلق به سپاهان فولاد آتشگاه می باشد.
                </h6>
                <h6 className="lg:w-[22rem] text-center text-[1.2rem] sf_semi" style={{ direction: 'rtl' }}>
                    طراحی شده توسط تیم آکادمی پنج
                </h6>
            </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-4 w-full px-[2rem]">
            <h2 className="lg:text-3xl text-2xl sf_bold border-b-2 border-[#D52927] pb-3 text-center w-full" style={{ direction: 'rtl' }}>
                تماس با ما
            </h2>
            <div className="flex flex-row justify-end gap-2 lg:text-3xl text-2xl sf_light">
                031-42696500-4
                <Image src={phoneIcone} width={25} alt="phone number" />
            </div>
            <div className="flex flex-row justify-end gap-2 lg:text-3xl text-2xl sf_light">
                031-42696505
                <Image src={faxIcone} width={25} alt="fax number" />
            </div>
            <div className="flex flex-col justify-center items-end gap-4">
                <div className="flex flex-row justify-end gap-2 lg:text-3xl text-xl sf_light">
                    info@sfa-foundry.com
                    <Image src={mailIcon} width={25} alt="fax number" />
                </div>
                <div className="flex flex-row justify-end gap-2 lg:text-3xl text-xl sf_light">
                    sales@sfa-foundry.com
                    <Image src={mailIcon} width={25} alt="fax number" />
                </div>
                <div className="flex flex-row justify-end gap-2 lg:text-3xl text-[1.20rem] sf_light">
                    export@sfa-foundry.com
                    <Image src={mailIcon} width={25} alt="fax number" />
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-end gap-4 w-full px-[2rem]">
            <h2 className="lg:text-3xl text-2xl sf_bold border-b-2 border-[#D52927] pb-3 text-center w-full" style={{ direction: 'rtl' }}>
                آدرس ما
            </h2>
            <h5 className="xl:text-3xl text-2xl sf_medium lg:w-[18vw] w-full" style={{ direction: 'rtl', lineHeight: '2.4rem' }}>
                اصفهان، شهرک صنعتی نجف آباد ۲، میدان صنعت،  بلوار دکتر حسابی، نبش فرعی۲۸ 
            </h5>
        </div>
    </div>
  )
}

export default Footer;