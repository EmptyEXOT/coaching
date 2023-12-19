import React, {FC} from 'react';
import classNames from "classnames";
import cls from "@/widgets/Navbar/ui/Navbar.module.css";
import Button from "@/shared/ui/Button/Button";

interface MenuProps {
    isOpen: boolean
}

const Menu: FC<MenuProps> = (props) => {
    return (
        <div className={classNames('fixed top-14 bg-neutral-200 py-2 md:hidden justify-center z-0 w-screen bg-opacity-50 backdrop-blur-md', props.isOpen ? cls.open : cls.close)}>
            <div className={classNames('container mx-auto')}>
                <Button>Home</Button>
                <Button>Feature</Button>
                <Button>About</Button>
                <Button>Contacts</Button>
                <Button>Team</Button>
                <Button>Gallery</Button>
            </div>
        </div>
    );
};

export default Menu;