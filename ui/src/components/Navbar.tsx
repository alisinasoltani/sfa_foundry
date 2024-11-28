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
        <Menubar className="h-[5rem] flex flex-row-reverse justify-between items-center sf_bold backdrop-blur-sm bg-opacity-20 fixed top-0 w-[100vw]">
        <MenubarMenu>
            <div className="flex flex-row justify-center items-center px-4">
            <Image src={logo} width={180} alt="sfa" />
            </div>
        </MenubarMenu>
        <div className="flex flex-row justify-start pr-12 w-full gap-8" style={{direction: 'rtl'}}>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">شرکت</MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                New Tab <MenubarShortcut></MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">تعهد</MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">تولیدات</MenubarTrigger>
            <MenubarContent>
                <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>
                Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">نوآوری</MenubarTrigger>
            <MenubarContent>
                <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
            <MenubarTrigger className="text-lg">کاتالوگ ها</MenubarTrigger>
            <MenubarContent>
                <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
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