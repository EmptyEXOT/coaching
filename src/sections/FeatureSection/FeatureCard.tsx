import React, {FC} from 'react';
import classNames from "classnames";
import Image, {StaticImageData} from "next/image";

interface FeatureCardProps {
    imageSrc: StaticImageData;
    header: string
    children: string
}

const FeatureCard: FC<FeatureCardProps> = (props) => {
    return (
        <div className={classNames('flex flex-col gap-4 max-w-xs')}>
            <Image alt={'icon'} src={props.imageSrc} width={40}></Image>
            <h4 className={classNames('text-lg font-extrabold')}>{props.header}</h4>
            <p>{props.children}</p>
        </div>
    );
};

export default FeatureCard;