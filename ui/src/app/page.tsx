"use client"

import { useEffect, useState } from "react";
import DrawerAppBar from "@/components/Navbar";
import Slider from "@/components/Slider";
import LinkedSwipers from "@/components/News";
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
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hardCodedStartDate = new Date("2024-12-28");
      const today = new Date();
      const daysElapsed = Math.floor(
        (today.getTime() - hardCodedStartDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const newOpacity = Math.max(1 - daysElapsed * 0.1, 0);
      setOpacity(newOpacity);
      if (newOpacity === 0) {
        setIsVisible(false);
      }
    }
  }, []);
  return (
    isVisible && (
      <ThemeProvider theme={theme}>
        <div style={{ 
          opacity,
          transition: "opacity 1s ease",
         }}>
          <DrawerAppBar />
          <Slider />
          <Motto />
          <div className="py-[4rem] w-100 bg-[#16163C] text-white items-center z-[10] rounded-[2rem]">
            <BasicTabs />
            <LinkedSwipers />
          </div>
          <Licences />
          <Footer />
        </div>
      </ThemeProvider>
    )
  );
}
