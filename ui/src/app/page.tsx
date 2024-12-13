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
      {/* <Industries /> */}
      {/* <GrindingMediaBall /> */}
      {/* <Licences /> */}
    </>
  );
}
