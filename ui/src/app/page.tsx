import DrawerAppBar from "@/components/Navbar";
import Slider from "@/components/Slider";
import LinkedSwipers from "@/components/Industries";
import GrindingMediaBall from "@/components/GrindingMediaBall";
import Licences from "@/components/Licences";
import Motto from "@/components/Motto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DrawerAppBar />
      <Slider />
      <Motto />
      <div className="py-[10rem] w-100 h-[200vh] bg-[#16163C] text-white items-center relative z-[10] rounded-[2rem]">
        <LinkedSwipers />
      </div>
      {/* <GrindingMediaBall /> */}
      <Licences />
      <Footer />
    </>
  );
}
