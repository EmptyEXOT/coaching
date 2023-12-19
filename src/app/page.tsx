import Section, {BgVariant} from "@/shared/ui/Section/Section";
import classNames from "classnames";
import ImagePlaceholder from "@/shared/ui/Placeholder/ImagePlaceholder/ImagePlaceholder";
import Image from "next/image";
import Geo from './Geo.png'
import Mail from './Mail.png'
import Phone from './Phone.png'
import Paw from './Paw.png'

export default function Home() {
    return (
        <main className="">
            {/*Cover*/}
            <Section bg={BgVariant.Image} isFullWidth={true} classNames={'pt-16 h-screen'}>
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
            </Section>

            {/*Feature Section*/}
            <Section classNames={'pt-16 md:pt-32'}>
                <div className={classNames('flex flex-col lg:flex-row justify-between gap-20')}>
                    <div className={classNames('flex flex-col justify-between gap-8 flex-1')}>
                        <p className={classNames('font-semibold')}>Inspire</p>
                        <h1 className={classNames('text-4xl/[48px] font-extrabold')}>Topics That Empower and Transform
                            Lives</h1>
                        <p>Discover a wide range of presentations and workshops that will inspire and motivate you to
                            reach your full potential. Our coach brings years of experience and expertise to each
                            session, ensuring a transformative and impactful experience for all participants.</p>
                        <div className={classNames('flex flex-col justify-between md:flex-row gap-8 md:pt-6')}>
                            <div className={classNames('flex flex-col gap-4 max-w-xs')}>
                                <Image alt={'icon'} src={Paw} width={40}></Image>
                                <h4 className={classNames('text-lg font-extrabold')}>Leadership</h4>
                                <p>Unlocking Your Leadership Potential: Strategies for Success in the Modern
                                    Workplace</p>
                            </div>
                            <div className={classNames('flex flex-col gap-4 max-w-xs')}>
                                <Image alt={'icon'} src={Paw} width={40}></Image>
                                <h4 className={classNames('text-lg font-extrabold')}>Communication</h4>
                                <p>Mastering the Art of Effective Communication: Building Stronger Connections</p>
                            </div>
                        </div>
                        <div className={classNames('flex flex-col justify-between md:flex-row gap-8 md:pt-6')}>
                            <div className={classNames('flex flex-col gap-4 max-w-xs')}>
                                <Image alt={'icon'} src={Paw} width={40}></Image>
                                <h4 className={classNames('text-lg font-extrabold')}>Leadership</h4>
                                <p>Unlocking Your Leadership Potential: Strategies for Success in the Modern
                                    Workplace</p>
                            </div>
                            <div className={classNames('flex flex-col gap-4 max-w-xs')}>
                                <Image alt={'icon'} src={Paw} width={40}></Image>
                                <h4 className={classNames('text-lg font-extrabold')}>Communication</h4>
                                <p>Mastering the Art of Effective Communication: Building Stronger Connections</p>
                            </div>
                        </div>
                    </div>

                    <div className={classNames('flex flex-col justify-center lg:flex-1')}>
                        <div className={classNames('flex justify-center')}>
                            <div className={classNames('square')}>
                                <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/*About Section*/}
            <Section classNames={'pt-32 md:pt-64'}>
                <div className={classNames('flex flex-col lg:flex-row justify-between gap-20')}>
                    <div className={classNames('hidden lg:flex flex-col justify-center lg:flex-1')}>
                        <div className={classNames('flex justify-center')}>
                            <div className={classNames('square')}>
                                <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                            </div>
                        </div>
                    </div>
                    <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                        <p className={classNames('font-semibold')}>Inspire</p>
                        <h1 className={classNames('text-4xl/[48px] font-extrabold')}>Unlock Your Full Potential with
                            Coaching</h1>
                        <p>Meet our experienced coach, John Doe, who specializes in leadership development and personal
                            growth. With over 10 years of coaching experience, John has helped countless individuals and
                            teams achieve their goals and reach new heights. His expertise covers a wide range of
                            topics, including communication skills, emotional intelligence, and goal setting.</p>
                    </div>
                    <div className={classNames('lg:hidden flex-col justify-center lg:flex-1')}>
                        <div className={classNames('flex justify-center')}>
                            <div className={classNames('square')}>
                                <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/*Contact Section*/}
            <Section classNames={'pt-16 md:pt-64'}>
                <div className={classNames('flex flex-col lg:flex-row justify-between gap-20')}>
                    <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                        <p className={classNames('font-semibold text-center')}>Coaching</p>
                        <h1 className={classNames('text-4xl/[48px] font-extrabold text-center')}>Get in Touch</h1>
                        <p className={classNames('text-center')}>Contact us for more information or to schedule a
                            session.</p>
                    </div>
                </div>
                <div className={classNames('flex flex-col md:flex-row justify-between pt-16 gap-16')}>
                    <div className={classNames('flex flex-col justify-between align-middle gap-4')}>
                        <div className={classNames('flex justify-center')}>
                            <Image alt={'icon'} src={Mail} width={48}></Image>
                        </div>
                        <h1 className={classNames('text-2xl/[48px] font-extrabold text-center')}>Email</h1>
                        <p className={classNames('text-center')}>Send us an email and we&apos;ll get back to you.</p>
                        <p className={classNames('text-center')}><u>hello@relume.io</u></p>
                    </div>
                    <div className={classNames('flex flex-col justify-between align-middle gap-4')}>
                        <div className={classNames('flex justify-center')}>
                            <Image alt={'icon'} src={Phone} width={48}></Image>
                        </div>
                        <h1 className={classNames('text-2xl/[48px] font-extrabold text-center')}>Phone</h1>
                        <p className={classNames('text-center')}>Give us a call to speak with a coach.</p>
                        <p className={classNames('text-center')}><u>+1 (555) 000-0000</u></p>
                    </div>
                    <div className={classNames('flex flex-col justify-between align-middle gap-4')}>
                        <div className={classNames('flex justify-center')}>
                            <Image alt={'icon'} src={Geo} width={48}></Image>
                        </div>
                        <h1 className={classNames('text-2xl/[48px] font-extrabold text-center')}>Office</h1>
                        <p className={classNames('text-center')}>Visit our office for a face-to-face consultation.</p>
                        <p className={classNames('text-center')}><u>123 Sample St, Sydney NSW 2000 AU</u></p>
                    </div>
                </div>
            </Section>

            {/*Team Section*/}
            <Section classNames={'pt-16 md:pt-64'}>
                <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                    <p className={classNames('font-semibold')}>Inspiring</p>
                    <h1 className={classNames('text-4xl/[48px] font-extrabold')}>Meet Our Team</h1>
                    <p>Learn more about our experienced and qualified coaches.</p>
                </div>
                <div className={classNames('flex flex-col justify-between flex-1 pt-16 gap-24')}>
                    <div className={classNames('flex flex-col justify-between lg:flex-row gap-24 md:pt-6')}>
                        <div className={classNames('flex flex-col gap-8 w-full sm:flex-row justify-between')}>
                            <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>

                            <div className={classNames('flex-1 flex flex-col gap-4')}>
                                <div>
                                    <h4 className={classNames('text-xl font-semibold')}>Leadership</h4>
                                    <h6 className={classNames('text-lg')}>Subheading</h6>
                                </div>
                                <p>Unlocking Your Leadership Potential: Strategies for Success in the Modern
                                    Workplace.Unlocking Your Leadership Potential.</p>
                            </div>
                        </div>
                        <div className={classNames('flex flex-col gap-8 w-full sm:flex-row justify-between')}>
                            <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>
                            <div className={classNames('flex-1 flex flex-col gap-4')}>
                                <h4 className={classNames('text-lg font-extrabold')}>Communication</h4>
                                <p>Mastering the Art of Effective Communication: Building Stronger Connections</p>
                            </div>
                        </div>
                    </div>

                    <div className={classNames('flex flex-col justify-between lg:flex-row gap-24 md:pt-6')}>
                        <div className={classNames('flex flex-col gap-8 w-full sm:flex-row justify-between')}>
                            <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>

                            <div className={classNames('flex-1 flex flex-col gap-4')}>
                                <h4 className={classNames('text-lg font-extrabold')}>Leadership</h4>
                                <p>Unlocking Your Leadership Potential: Strategies for Success in the Modern
                                    Workplace</p>
                            </div>
                        </div>
                        <div className={classNames('flex flex-col gap-8 w-full sm:flex-row justify-between')}>
                            <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>
                            <div className={classNames('flex-1 flex flex-col gap-4')}>
                                <h4 className={classNames('text-lg font-extrabold')}>Communication</h4>
                                <p>Mastering the Art of Effective Communication: Building Stronger Connections</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/*Gallery Section*/}
            <Section classNames={'pt-32 md:pt-64'}>
                <div className={classNames('flex flex-col justify-center gap-8 flex-1')}>
                    <h1 className={classNames('text-center text-4xl/[48px] font-extrabold')}>Coaching Moments</h1>
                    <p className={classNames('text-center')}>Capturing the essence of transformative coaching
                        experiences.</p>
                </div>
                <div className={classNames('flex flex-col justify-between gap-6 pt-16')}>
                    <div className={classNames('flex flex-col justify-between xl:flex-row gap-24 md:pt-6')}>
                        <div className={classNames('flex flex-col gap-16 w-full lg:flex-row justify-between')}>
                            <div className={classNames('lg:flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>

                            <div className={classNames('lg:max-xl:hidden flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>

                            <div className={classNames('lg:max-xl:hidden flex flex-col justify-center sm:flex-1')}>
                                <div className={classNames('flex justify-center')}>
                                    <div className={classNames('square')}>
                                        <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                    </div>
                                </div>
                            </div>

                            <div className={classNames('hidden lg:max-xl:flex flex-col justify-between gap-8')}>
                                <div className={classNames('flex flex-col justify-start sm:flex-1 lg:w-72')}>
                                    <div className={classNames('flex justify-center')}>
                                        <div className={classNames('square')}>
                                            <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames('flex flex-col justify-end sm:flex-1 lg:w-72')}>
                                    <div className={classNames('flex justify-center')}>
                                        <div className={classNames('square')}>
                                            <ImagePlaceholder classNames={classNames('h-full absolute')}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    )
}
