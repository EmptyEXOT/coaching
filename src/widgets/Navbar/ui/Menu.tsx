import React, {FC} from 'react';
import classNames from "classnames";
import cls from "@/widgets/Navbar/ui/Navbar.module.css";
import Button from "@/shared/ui/Button/Button";
import NavbarLink from "@/widgets/Navbar/ui/NavbarLink";
import {Sections} from "@/shared/sections/sections";

interface MenuProps {
    isOpen: boolean
}

const Menu: FC<MenuProps> = (props) => {
    return (
        <div className={classNames('fixed top-14 bg-neutral-200 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md', props.isOpen ? cls.open : cls.close)}>
            <div className={classNames('container mx-auto')}>
                <NavbarLink offset={-70} to={Sections.Home} />
                <NavbarLink offset={100} to={Sections.About} />
                <NavbarLink offset={60} to={Sections.Feature} />
                <NavbarLink offset={100} to={Sections.Contacts} />
                <NavbarLink offset={170} to={Sections.Topics} />
                <NavbarLink offset={100} to={Sections.Gallery} />
            </div>
        </div>
    );
};

export default Menu;