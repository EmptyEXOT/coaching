import React, {FC} from 'react';
import classNames from "classnames";
import Image, {StaticImageData} from "next/image";

interface ContactCardProps {
    imageSrc: StaticImageData;
    header: string
    children: string
    link: string
}

const ContactCard: FC<ContactCardProps> = (props) => {
    return (
        <div className={classNames('flex flex-col justify-between align-middle gap-4')}>
            <div className={classNames('flex justify-center')}>
                <Image alt={'icon'} src={props.imageSrc} width={48}></Image>
            </div>
            <h1 className={classNames('text-2xl/[48px] font-extrabold text-center')}>{props.header}</h1>
            <p className={classNames('text-center')}>{props.children}</p>
            <p className={classNames('text-center')}><u>{props.link}</u></p>
        </div>
    );
};

export default ContactCard;