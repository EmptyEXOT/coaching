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
            <div className={classNames('bg-neutral-100 md:bg-neutral-200 z-50 bg-opacity-100 md:bg-opacity-50 backdrop-blur-md', cls.navbar)}>
                <div className={classNames('container flex justify-between mx-auto px-4 py-2 z-50')}>
                    <Image alt={'logo'} src={Logo}></Image>
                    <div className={classNames('hidden md:flex justify-center')}>
                        <Button className={classNames('z-50')}><b>Home</b></Button>
                        <Button className={classNames('z-50')}><b>Feature</b></Button>
                        <Button className={classNames('z-50')}><b>About</b></Button>
                        <Button className={classNames('z-50')}><b>Contacts</b></Button>
                        <Button className={classNames('z-50')}><b>Team</b></Button>
                        <Button className={classNames('z-50')}><b>Gallery</b></Button>
                    </div>
                    <Button onClick={() => setIsOpen(prevState => !prevState)} className={classNames('md:hidden pe-0')}>
                        <Image alt={'menu'} src={Menu} width={36} height={24}></Image>
                    </Button>
                </div>

            </div>
            <div className={classNames('fixed top-14 bg-neutral-200 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md', isOpen ? cls.open : cls.close)}>
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