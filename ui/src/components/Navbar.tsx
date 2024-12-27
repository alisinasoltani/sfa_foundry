"use client"

import { useState , useEffect } from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import logo from "@/app/logo.png";
import arrowLeft from "@/public/icons/arrowLeft.svg";
import englishLang from "@/public/icons/englishLang.svg";
import arrowDown from "@/public/icons/arrowDown.svg";
import Image from 'next/image';
import menuIcon from "@/public/icons/menuIcon.svg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const NavbarMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  direction: 'rtl',
}));

const NavbarMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  fontSize: '1rem',
  fontFamily: "sf_semi",
  width: '12rem'
}));

const LightAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  fontFamily: "sf_semi",
  backgroundColor: "rgba(255,255,255,0.6)",
  fontSize: '1rem',
  backdropFilter: "blur(4px)"
}));

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menu, setMenu] = useState<null | string>(null);
  const MenuOpen = Boolean(anchorEl);

  const MenuHandleClick = (event: React.MouseEvent<HTMLButtonElement>, menuName: string) => {
    setAnchorEl(event.currentTarget);
    setMenu(menuName)
  };
  const MenuHandleClose = () => {
    setAnchorEl(null);
    setMenu(null);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <div className='w-full flex flex-row justify-center items-center py-4'>
        <Image src={logo} width={180} alt="sfa logo" />
      </div>
      <Divider />
      <Accordion sx={{ direction: 'rtl' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span" sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1.2rem' }}>
            شرکت
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            درباره ما
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            تماس با ما
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            همکاری با ما
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ direction: 'rtl' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span" sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1.2rem' }}>
            تعهد
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            بررسی اجمالی
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            تنوع
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            کنترل کیفی
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ direction: 'rtl' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span" sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1.2rem' }}>
            تولیدات
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            صنایع آهن و فولاد
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            معادن و صنایع وابسته
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            صنعت سیمان
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            صنعت مس
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            گلوله چدنی
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ direction: 'rtl' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography component="span" sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1.2rem' }}>
            نوآوری
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            ؟
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            ؟
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            ؟
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ direction: 'rtl' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Image src={englishLang} alt="english language" />
        </AccordionSummary>
        <AccordionDetails>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            ؟
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            ؟
          </Button>
          <Button className='w-full flex flex-row justify-start' sx={{ color: 'black', fontFamily: 'sf_semi', fontSize: '1rem' }} onClick={MenuHandleClose}>
            ؟
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', direction: 'rtl' }}>
      <CssBaseline />
      <LightAppBar component="nav" className={`w-full flex flex-row justify-center items-center backdrop-blur-sm bg-[rgba(255,255,255,0.6)] text-black py-4 z-[200] header ${isHidden ? 'hidden' : ''}`}
      style={{transition: 'all 1000ms ease'}}>
        <Toolbar className='w-full flex flex-row-reverse justify-between items-center gap-8'>
          <Button
            variant='outlined'
            color='error'
            aria-label="open drawer"
            className='mobile-menu-button flex flex-row justify-center pl-3 pr-5 py-3'
            onClick={handleDrawerToggle}>
            <Image src={menuIcon} width={25} alt='mobile menu icon: click to open the navbar' />
          </Button>
          <Box className="toolbar w-full flex flex-col gap-2 justify-center items-center self-end">
            {/* <Box className="w-full flex flex-row justify-start items-center gap-4">
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
            </Box> */}
            <Box className="w-full flex flex-row justify-between items-center gap-4"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
              <div className='flex flex-row justify-start items-center gap-4'>
                <div className='toolbar-item'>
                  <Button
                    className='appbar-btn flex flex-row gap-1 sf_bold'
                    id="company-button"
                    aria-controls={MenuOpen ? 'company-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={MenuOpen ? 'true' : undefined}
                    sx={{ color: '#000000' }}
                    onClick={(event) => MenuHandleClick(event, 'company')}>
                    شرکت
                    <Image src={arrowLeft} alt="" />
                  </Button>
                  <NavbarMenu
                    id="company-button"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menu === 'company'}
                    onClose={MenuHandleClose}
                    MenuListProps={{ 'aria-labelledby': 'company-button' }}>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      درباره ما
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      تماس با ما
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      همکاری با ما
                    </NavbarMenuItem>
                  </NavbarMenu>
                </div>
                <div className='toolbar-item'>
                  <Button
                  className='appbar-btn flex flex-row gap-1 sf_bold'
                  id="commitment-button"
                  aria-controls={MenuOpen ? 'commitment-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={MenuOpen ? 'true' : undefined}
                  sx={{ color: '#000000' }}
                  onClick={(event) => MenuHandleClick(event, 'commitment')}>
                    تعهد
                    <Image src={arrowLeft} alt="" />
                  </Button>
                  <NavbarMenu
                    id="commitment-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menu === 'commitment'}
                    onClose={MenuHandleClose}
                    MenuListProps={{ 'aria-labelledby': 'commitment-button' }}>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      بررسی اجمالی
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      تنوع
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      کنترل کیفی
                    </NavbarMenuItem>
                  </NavbarMenu>
                </div>
                <div className='toolbar-item'>
                  <Button
                  className='appbar-btn flex flex-row gap-1 sf_bold'
                  id="products-button"
                  aria-controls={MenuOpen ? 'products-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={MenuOpen ? 'true' : undefined}
                  sx={{ color: '#000000' }}
                  onClick={(event) => MenuHandleClick(event, 'products')}>
                    تولیدات
                    <Image src={arrowLeft} alt="" />
                  </Button>
                  <NavbarMenu
                    id="products-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menu === 'products'}
                    onClose={MenuHandleClose}
                    MenuListProps={{ 'aria-labelledby': 'products-button' }}>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      صنایع فولاد و آهن
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      معادن و صنایع وابسته
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      صنعت سیمان
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      صنعت مس
                    </NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>
                      گلوله چدنی
                    </NavbarMenuItem>
                  </NavbarMenu>
                </div>
                <div className='toolbar-item'>
                  <Button
                  className='appbar-btn flex flex-row gap-1 sf_bold'
                  id="innovation-button"
                  aria-controls={MenuOpen ? 'innovation-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={MenuOpen ? 'true' : undefined}
                  sx={{ color: '#000000' }}
                  onClick={(event) => MenuHandleClick(event, 'innovation')}>
                    نوآوری
                    <Image src={arrowLeft} alt="" />
                  </Button>
                  <NavbarMenu
                    id="innovation-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menu === 'innovation'}
                    onClose={MenuHandleClose}
                    MenuListProps={{ 'aria-labelledby': 'innovation-button' }}>
                    <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                  </NavbarMenu>
                </div>
                <div className='toolbar-item'>
                  <Button
                  className='appbar-btn flex flex-row gap-1 sf_bold'
                  id="catalog-button"
                  aria-controls={MenuOpen ? 'catalog-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={MenuOpen ? 'true' : undefined}
                  sx={{ color: '#000000' }}
                  onClick={(event) => MenuHandleClick(event, 'catalog')}>
                    کاتالوگ ها
                    <Image src={arrowLeft} alt="" />
                  </Button>
                  <NavbarMenu
                    id="catalog-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menu === 'catalog'}
                    onClose={MenuHandleClose}
                    MenuListProps={{ 'aria-labelledby': 'catalog-button' }}>
                    <NavbarMenuItem onClick={MenuHandleClose}>کاتالوگ گلوله ها</NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>کاتالوگ کلی</NavbarMenuItem>
                  </NavbarMenu>
                </div>
                {/* <div>
                  <Button className='text-xl flex flex-row gap-1 sf_bold' sx={{ color: '#000000' }}>
                    اخبار
                  </Button>
                </div> */}
              </div>
              <div className='toolbar-item'>
                <Button
                  className='flex flex-row gap-1 sf_bold'
                  id="language-button"
                  aria-controls={MenuOpen ? 'language-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={MenuOpen ? 'true' : undefined}
                  sx={{ color: '#000000' }}
                  onClick={(event) => MenuHandleClick(event, 'language')}>
                  <Image src={englishLang} alt="english language" />
                  <Image src={arrowDown} alt="" />
                </Button>
                <NavbarMenu
                  id="language-button"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && menu === 'language'}
                  onClose={MenuHandleClose}
                  MenuListProps={{ 'aria-labelledby': 'language-button' }}>
                  <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                  <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                  <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                </NavbarMenu>
              </div>
            </Box>
          </Box>
          <div>
            <Image src={logo} width={200} alt="sfa logo" />
          </div>
        </Toolbar>
      </LightAppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
