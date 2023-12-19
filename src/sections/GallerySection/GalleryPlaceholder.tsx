import React from 'react';
import classNames from "classnames";
import ImagePlaceholder from "@/shared/ui/Placeholder/ImagePlaceholder/ImagePlaceholder";

const GalleryPlaceholder = () => {
    return (
        <div className={classNames('flex justify-center')}>
            <div className={classNames('square')}>
                <ImagePlaceholder classNames={classNames('h-full absolute')}/>
            </div>
        </div>
    );
};

export default GalleryPlaceholder;