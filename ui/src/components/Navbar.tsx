"use client"
import Image from "next/image";
import logo from "@/app/logo.png";

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

export function Navbar() {
    return (
        <Menubar className="h-[5rem] flex flex-row-reverse justify-between items-center sf_medium border-0 rounded-none 
        fixed top-0 w-[100vw] z-[100] backdrop-blur-sm bg-[rgba(255,255,255,0.6)]">
        <MenubarMenu>
            <div className="flex flex-row justify-center items-center px-4">
            <Image src={logo} width={180} alt="sfa" />
            </div>
        </MenubarMenu>
        <div className="flex flex-row justify-start pr-12 w-full gap-8" style={{direction: 'rtl'}}>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">شرکت</MenubarTrigger>
            <MenubarContent className="z-[120] text-right" style={{ direction: 'rtl' }}>
                <MenubarItem>
                درباره ما
                </MenubarItem>
                <MenubarItem>
                تماس با ما
                </MenubarItem>
                <MenubarItem>
                همکاری با ما
                </MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">تعهد</MenubarTrigger>
            <MenubarContent className="z-[120] text-right" style={{ direction: 'rtl' }}>
                <MenubarItem>
                بررسی اجمالی
                </MenubarItem>
                <MenubarItem>
                تنوع
                </MenubarItem>
                <MenubarItem>
                کنترل کیفی
                </MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">تولیدات</MenubarTrigger>
            <MenubarContent className="z-[120] text-right" style={{ direction: 'rtl' }}>
                <MenubarItem>
                صنایع فولاد و آهن
                </MenubarItem>
                <MenubarItem>
                معادن و صنایع وابسته
                </MenubarItem>
                <MenubarItem>
                صنعت سیمان
                </MenubarItem>
                <MenubarItem>
                صنعت نفت، گاز و پتروشیمی
                </MenubarItem>
                <MenubarItem>
                صنعت مس
                </MenubarItem>
                <MenubarItem>
                گلوله چدنی
                </MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">نوآوری</MenubarTrigger>
            {/* <MenubarContent> */}
                {/* <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem> */}
            {/* </MenubarContent> */}
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">کاتالوگ ها</MenubarTrigger>
            <MenubarContent>
                {/* <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem> */}
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">اخبار</MenubarTrigger>
            </MenubarMenu>
        </div>
        <div className="flex flex-row justify-center items-center px-4">
            EN
        </div>
        </Menubar>
    )
}