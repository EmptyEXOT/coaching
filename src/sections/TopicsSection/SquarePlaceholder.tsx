import React from 'react';
import classNames from "classnames";
import ImagePlaceholder from "@/shared/ui/Placeholder/ImagePlaceholder/ImagePlaceholder";

const SquarePlaceholder = () => {
    return (
        <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
            <div className={classNames('flex justify-center')}>
                <div className={classNames('square')}>
                    <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                </div>
            </div>
        </div>
    );
};

export default SquarePlaceholder;