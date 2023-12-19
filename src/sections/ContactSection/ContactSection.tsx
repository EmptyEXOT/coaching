import React from 'react';
import classNames from "classnames";
import Mail from "./assets/Mail.png";
import Phone from "./assets/Phone.png";
import ContactCard from "./ContactCard";

const ContactSection = () => {
    return (
        <>
            <div className={classNames('flex flex-col lg:flex-row justify-between gap-20')}>
                <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                    <p className={classNames('font-semibold text-center')}>Coaching</p>
                    <h1 className={classNames('text-4xl/[48px] font-extrabold text-center')}>Get in Touch</h1>
                    <p className={classNames('text-center')}>Contact us for more information or to schedule a
                        session.</p>
                </div>
            </div>
            <div className={classNames('flex flex-col md:flex-row justify-between pt-16 gap-16')}>
                <ContactCard imageSrc={Mail} header={'Email'} link={'hi@myNameIs'}>
                    Send us an email and we&apos;ll get back to you.
                </ContactCard>
                <ContactCard imageSrc={Phone} header={'Phone'} link={'+7 666 123 45 67'}>
                    Give us a call to speak with a coach.
                </ContactCard>
                <ContactCard imageSrc={Mail} header={'Geo'} link={'your address, house etc.'}>
                    Visit our office for a face-to-face consultation.
                </ContactCard>
            </div>
        </>

    );
};

export default ContactSection;