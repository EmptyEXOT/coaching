'use client'

import React, {FC, useState} from 'react';
import classNames from "classnames";
import Image from "next/image";
import Logo from './Logo.svg'
import cls from './Navbar.module.css'
import Button from "@/shared/ui/Button/Button";
import Menu from './Menu'
import MenuIcon from './Menu.svg'
import {Sections} from '@/shared/sections/sections';
import NavbarLink from "./NavbarLink";

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div
                className={classNames('bg-neutral-100 md:bg-neutral-200 z-50 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto px-4 py-2 z-50')}>
                    <Image alt={'logo'} src={Logo}></Image>
                    <div className={classNames('hidden md:flex justify-center')}>
                        <NavbarLink offset={-70} to={Sections.Home} />
                        <NavbarLink offset={100} to={Sections.About} />
                        <NavbarLink offset={60} to={Sections.Feature} />
                        <NavbarLink offset={100} to={Sections.Contacts} />
                        <NavbarLink offset={170} to={Sections.Topics} />
                        <NavbarLink offset={100} to={Sections.Gallery} />
                    </div>
                    <Button onClick={() => setIsOpen(prevState => !prevState)} className={classNames('md:hidden pe-0')}>
                        <Image alt={'menu'} src={MenuIcon} width={36} height={24}></Image>
                    </Button>
                </div>
            </div>
            <Menu isOpen={isOpen}/>
        </>

    );
};

export default Navbar;