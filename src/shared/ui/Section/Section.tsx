import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from './Section.module.css'
import ImagePlaceholder, {ImgPlaceholderBgColor} from "@/shared/ui/Placeholder/ImagePlaceholder/ImagePlaceholder";

export enum BgVariant {
    Default = 'default',
    Image = 'image',
}

interface SectionProps {
    classNames?: string;
    children: ReactNode;
    isFullWidth?: boolean;
    bg?: BgVariant;
}

const Section: FC<SectionProps> = (props) => {
    return (
        <div className={classNames('mx-auto px-6', props.isFullWidth ? cls.fullWidth : 'container', props.classNames)}>
            {props.bg === BgVariant.Image ?
                <ImagePlaceholder bgColor={ImgPlaceholderBgColor.dark} classNames={'absolute -z-10 h-screen'}/> : null}
            {props.children}
        </div>
    );
};

export default Section;