import React from 'react';
import classNames from "classnames";
import Paw from "./assets/Paw.png";
import FeatureCard from "./FeatureCard";
import SquarePlaceholder from "./SquarePlaceholder";

const FeatureSection = () => {
    return (
        <div className={classNames('flex flex-col lg:flex-row justify-between gap-20')}>
            <div className={classNames('flex flex-col justify-between gap-8 flex-1')}>
                <p className={classNames('font-semibold')}>Inspire</p>
                <h1 className={classNames('text-4xl/[48px] font-extrabold')}>Topics That Empower and Transform
                    Lives</h1>
                <p>Discover a wide range of presentations and workshops that will inspire and motivate you to
                    reach your full potential. Our coach brings years of experience and expertise to each
                    session, ensuring a transformative and impactful experience for all participants.</p>
                <div className={classNames('flex flex-col justify-between md:flex-row gap-8 md:pt-6')}>
                    <FeatureCard imageSrc={Paw} header={'Leadership'}>
                        Unlocking Your Leadership Potential: Strategies for Success in the Modern
                    </FeatureCard>
                    <FeatureCard imageSrc={Paw} header={'Communication'}>
                        Mastering the Art of Effective Communication: Building Stronger Connections
                    </FeatureCard>
                </div>
                <div className={classNames('flex flex-col justify-between md:flex-row gap-8 md:pt-6')}>
                    <FeatureCard imageSrc={Paw} header={'Leadership'}>
                        Unlocking Your Leadership Potential: Strategies for Success in the Modern
                    </FeatureCard>
                    <FeatureCard imageSrc={Paw} header={'Communication'}>
                        Mastering the Art of Effective Communication: Building Stronger Connections
                    </FeatureCard>
                </div>
            </div>

            <SquarePlaceholder/>
        </div>
    );
};

export default FeatureSection;