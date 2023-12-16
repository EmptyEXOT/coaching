'use client'

import React, {FC, useState} from 'react';
import classNames from "classnames";
import Image from "next/image";
import Logo from './Logo.svg'
import cls from './Navbar.module.css'
import Button from "@/shared/ui/Button/Button";
import Menu from './Menu.svg'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className={classNames('bg-white border-b-2 z-50', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto p-2 z-50')}>
                    <Image alt={'logo'} src={Logo}></Image>
                    <div className={classNames('hidden md:flex justify-center')}>
                        <Button>Home</Button>
                        <Button>Feature</Button>
                        <Button>About</Button>
                        <Button>Contacts</Button>
                        <Button>Team</Button>
                        <Button>Gallery</Button>
                    </div>
                    <Button onClick={() => setIsOpen(prevState => !prevState)} className={classNames('md:hidden')}>
                        <Image alt={'menu'} src={Menu} width={36} height={24}></Image>
                    </Button>
                </div>

            </div>
            <div className={classNames('fixed top-14 bg-white border-b-2 py-2 md:hidden justify-center z-0 w-screen', isOpen ? cls.open : cls.close)}>
                <div className={classNames('container mx-auto')}>
                <Button>Home</Button>
                <Button>Feature</Button>
                <Button>About</Button>
                <Button>Contacts</Button>
                <Button>Team</Button>
                <Button>Gallery</Button>
                </div>
            </div>
        </>

    );
};

export default Navbar;