import React, {FC} from 'react';
import classNames from "classnames";
import SquarePlaceholder from "./SquarePlaceholder";

interface TopicCardProps {
    heading: string;
    subHeading: string;
    children: string;
}

const TopicCard: FC<TopicCardProps> = (props) => {
    return (
        <div className={classNames('flex flex-col gap-8 w-full sm:flex-row justify-between')}>
            <SquarePlaceholder />

            <div className={classNames('flex-1 flex flex-col gap-4')}>
                <div>
                    <h4 className={classNames('text-xl font-semibold')}>{props.heading}</h4>
                    <h6 className={classNames('text-lg')}>{props.subHeading}</h6>
                </div>
                <p>{props.children}</p>
            </div>
        </div>
    );
};

export default TopicCard;