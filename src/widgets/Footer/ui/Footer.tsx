import React from 'react';
import Logo from '../../Navbar/ui/Logo.svg'
import Image from 'next/image'
import classNames from "classnames";
import Facebook from './Facebook.svg'
import Instagram from './Instagram.svg'
import Telegram from './Telegram.svg'
import WhatsApp from './WhatsApp.svg'

const Footer = () => {
    return (
        <>
            <div
                className={classNames('container mx-auto pt-40 flex flex-col gap-6 pb-10 px-4 lg:flex-row lg:justify-between')}>
                <div className={classNames('flex flex-col gap-6 lg:flex-1')}>
                    <Image alt={'logo'} src={Logo}></Image>
                    <div>
                        <p><b>Address:</b></p>
                        <p>[Company address]</p>
                    </div>
                    <div>
                        <p><b>Contact:</b></p>
                        <p>[+7 666 123 45 67]</p>
                        <p>[yourmail@yourmail.ru]</p>
                    </div>
                    <div className={classNames('flex gap-8')}>
                        <Image alt={'icon'} src={Telegram} width={30}></Image>
                        <Image alt={'icon'} src={Instagram} width={30}></Image>
                        <Image alt={'icon'} src={Facebook} width={30}></Image>
                        <Image alt={'icon'} src={WhatsApp} width={30}></Image>
                    </div>
                </div>
                <div className={classNames('flex flex-col gap-6 sm:flex-row sm:justify-between lg:flex-1')}>
                    <div className={classNames('flex flex-col gap-2 w-full')}>
                        <a href=""><b>Link One</b></a>
                        <a href=""><b>Link Two</b></a>
                        <a href=""><b>Link Three</b></a>
                        <a href=""><b>Link Four</b></a>
                    </div>
                    <div className={classNames('flex flex-col gap-2 w-full')}>
                        <a href=""><b>Link Five</b></a>
                        <a href=""><b>Link Six</b></a>
                        <a href=""><b>Link Seven</b></a>
                        <a href=""><b>Link Eight</b></a>
                    </div>
                </div>
            </div>
            <div className={classNames('bg-opacity-50 backdrop-blur-md bg-neutral-200 py-2')}>
                <div className={classNames('container mx-auto px-4')}>
                    <p>Layout by EmptyEXOT: <a href="https://github.com/EmptyEXOT"><u>GitHub</u></a> <a href="https://t.me/idbeholdv"><u>Telegram</u></a></p>
                </div>
            </div>
        </>
    );
};

export default Footer;