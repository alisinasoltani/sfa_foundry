"use client"

import { useState } from 'react';
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

const drawerWidth = 240;

const NavbarMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  direction: 'rtl',
}));

const NavbarMenuItem = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  fontSize: '1rem',
  fontFamily: 'sf_semi',
  width: '12rem'
}));

const LightAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  fontFamily: "sf_semi",
  backgroundColor: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(4px)"
}));

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"??"} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', direction: 'rtl' }}>
      <CssBaseline />
      <LightAppBar component="nav" className='w-full flex flex-row justify-center items-center backdrop-blur-sm bg-[rgba(255,255,255,0.6)] text-black py-4 z-[200]'>
        <Toolbar className='w-full flex flex-row justify-between items-center gap-8'>
          <Button
            variant='outlined'
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}>
            Open
          </Button>
          <Image src={logo} width={200} alt="sfa logo" />
          <Box className="w-full flex flex-col gap-2 justify-center items-center self-end">
            <Box className="w-full flex flex-row justify-start items-center gap-4">
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
              <div className='w-[6rem] h-[2.5rem] rounded-lg bg-slate-50'></div>
            </Box>
            <Box className="w-full flex flex-row justify-between items-center gap-4"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
              <div className='flex flex-row justify-start items-center gap-4'>
                <div>
                  <Button
                    className='text-xl flex flex-row gap-1 sf_bold'
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
                <div>
                  <Button
                  className='text-xl flex flex-row gap-1 sf_bold'
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
                <div>
                  <Button
                  className='text-xl flex flex-row gap-1 sf_bold'
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
                <div>
                  <Button
                  className='text-xl flex flex-row gap-1 sf_bold'
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
                <div>
                  <Button
                  className='text-xl flex flex-row gap-1 sf_bold'
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
                    <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                    <NavbarMenuItem onClick={MenuHandleClose}>?</NavbarMenuItem>
                  </NavbarMenu>
                </div>
                <div>
                  <Button className='text-xl flex flex-row gap-1 sf_bold' sx={{ color: '#000000' }}>
                    اخبار
                  </Button>
                </div>
              </div>
              <div>
                <Button
                  className='text-xl flex flex-row gap-1 sf_bold'
                  id="language-button"
                  aria-controls={MenuOpen ? 'language-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={MenuOpen ? 'true' : undefined}
                  sx={{ color: '#000000' }}
                  onClick={(event) => MenuHandleClick(event, 'language')}>
                  <Image src={englishLang} alt="" />
                  <Image src={arrowDown} alt="" />
                </Button>
                <NavbarMenu
                  id="language-button"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && menu === 'language'}
                  onClose={MenuHandleClose}
                  MenuListProps={{ 'aria-labelledby': 'language-button' }}>
                  <NavbarMenuItem onClick={MenuHandleClose}>Profile</NavbarMenuItem>
                  <NavbarMenuItem onClick={MenuHandleClose}>My account</NavbarMenuItem>
                  <NavbarMenuItem onClick={MenuHandleClose}>Logout</NavbarMenuItem>
                </NavbarMenu>
              </div>
            </Box>
          </Box>
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
