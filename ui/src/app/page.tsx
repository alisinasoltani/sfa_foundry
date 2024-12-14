import DrawerAppBar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Industries from "@/components/Industries";
import GrindingMediaBall from "@/components/GrindingMediaBall";
import Licences from "@/components/Licences";
import Motto from "@/components/Motto";

export default function Home() {
  return (
    <>
      <DrawerAppBar />
      <Slider />
      <Motto />
      <div className="py-[10rem] w-100 h-[100vh] bg-[#16163C] text-white flex flex-col justify-center items-center relative z-[10] rounded-[2rem]">
        ?
      </div>
      {/* <Industries /> */}
      {/* <GrindingMediaBall /> */}
      <Licences />
    </>
  );
}
