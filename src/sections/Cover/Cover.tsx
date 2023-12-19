import React from 'react';
import classNames from "classnames";

const Cover = () => {
    return (
        <div className={classNames('flex justify-center pt-14 z-50 h-full px-6')}>
            <div className={classNames('flex flex-col justify-center')}>
                <h1 className={classNames('text-5xl/[64px] font-bold text-white text-center max-w-xl mx-auto')}>
                    Unlock Your Full Potential with Coaching
                </h1>
                <p className={classNames('text-white text-center max-w-2xl mx-auto pt-10')}>
                    Welcome to our coaching platform, where we help individuals achieve their goals and overcome
                    challenges through personalized coaching sessions. Our experienced coach is here to guide
                    you on your journey to success.
                </p>
            </div>
        </div>
    );
};

export default Cover;