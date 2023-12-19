import React from 'react';
import classNames from "classnames";
import GalleryPlaceholder from "./GalleryPlaceholder";

const GallerySection = () => {
    return (
        <>
            <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                <h1 className={classNames('text-center text-4xl/[48px] font-extrabold')}>Coaching Moments</h1>
                <p className={classNames('text-center')}>Capturing the essence of transformative coaching
                    experiences.</p>
            </div>
            <div className={classNames('flex flex-col justify-between gap-6 pt-16')}>
                <div className={classNames('flex flex-col justify-between xl:flex-row gap-24 md:pt-6')}>
                    <div className={classNames('flex flex-col gap-16 w-full lg:flex-row justify-between')}>
                        <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
                            <GalleryPlaceholder />
                        </div>
                        <div className={classNames('lg:max-xl:hidden flex flex-col justify-center sm:flex-1')}>
                            <GalleryPlaceholder />
                        </div>
                        <div className={classNames('lg:max-xl:hidden flex flex-col justify-center sm:flex-1')}>
                            <GalleryPlaceholder />
                        </div>

                        <div className={classNames('hidden lg:max-xl:flex flex-col justify-between gap-8')}>
                            <div className={classNames('flex flex-col justify-start sm:flex-1 lg:w-72')}>
                                <GalleryPlaceholder />
                            </div>
                            <div className={classNames('flex flex-col justify-end sm:flex-1 lg:w-72')}>
                                <GalleryPlaceholder />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default GallerySection;