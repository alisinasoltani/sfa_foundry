"use client"

import DrawerAppBar from "@/components/Navbar";
import Slider from "@/components/Slider";
import LinkedSwipers from "@/components/News";
import GrindingMediaBall from "@/components/GrindingMediaBall";
import BasicTabs from "@/components/Industries";
import Licences from "@/components/Licences";
import Motto from "@/components/Motto";
import Footer from "@/components/Footer";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#DA0001',
      main: '#DA0001',
      dark: '#DA0001',
      contrastText: '#fff',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar />
      <Slider />
      <Motto />
      <div className="py-[4rem] w-100 bg-[#16163C] text-white items-center z-[10] rounded-[2rem]">
        <BasicTabs />
        <LinkedSwipers />
      </div>
      {/* <GrindingMediaBall /> */}
      <Licences />
      <Footer />
    </ThemeProvider>
  );
}
