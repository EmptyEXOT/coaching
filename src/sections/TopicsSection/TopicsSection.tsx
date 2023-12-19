import React from 'react';
import classNames from "classnames";
import TopicCard from "./TopicCard";

const TopicsSection = () => {
    return (
        <>
            <div id={'section1'} className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                <p className={classNames('font-semibold')}>Inspiring</p>
                <h1 className={classNames('text-4xl/[48px] font-extrabold')}>Meet Our Team</h1>
                <p>Learn more about our experienced and qualified coaches.</p>
            </div>
            <div className={classNames('flex flex-col justify-between flex-1 pt-16 gap-24')}>
                <div className={classNames('flex flex-col justify-between lg:flex-row gap-24 md:pt-6')}>
                    <TopicCard heading={'Communication'} subHeading={'Subheading'}>
                        Unlocking Your Leadership Potential: Strategies for Success in the Modern Workplace.Unlocking
                        Your Leadership Potential
                    </TopicCard>
                    <TopicCard heading={'Leadership'} subHeading={'Subheading'}>
                        Mastering the Art of Effective Communication: Building Stronger Connections
                    </TopicCard>
                </div>

                <div className={classNames('flex flex-col justify-between lg:flex-row gap-24 md:pt-6')}>
                    <TopicCard heading={'Communication'} subHeading={'Subheading'}>
                        Unlocking Your Leadership Potential: Strategies for Success in the Modern Workplace.Unlocking
                        Your Leadership Potential
                    </TopicCard>
                    <TopicCard heading={'Leadership'} subHeading={'Subheading'}>
                        Mastering the Art of Effective Communication: Building Stronger Connections
                    </TopicCard>
                </div>
            </div>
        </>
    );
};

export default TopicsSection;