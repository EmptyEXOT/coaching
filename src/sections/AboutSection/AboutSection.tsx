import React from 'react';
import classNames from "classnames";
import SquarePlaceholder from "./SquarePlaceholder";

const AboutSection = () => {
    return (
        <div className={classNames('flex flex-col lg:flex-row-reverse justify-between gap-20')}>
            <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                <p className={classNames('font-semibold')}>Inspire</p>
                <h1 className={classNames('text-4xl/[48px] font-extrabold')}>Unlock Your Full Potential with
                    Coaching</h1>
                <p>Meet our experienced coach, John Doe, who specializes in leadership development and personal
                    growth. With over 10 years of coaching experience, John has helped countless individuals and
                    teams achieve their goals and reach new heights. His expertise covers a wide range of
                    topics, including communication skills, emotional intelligence, and goal setting.</p>
            </div>
            <SquarePlaceholder />
        </div>
    );
};

export default AboutSection;