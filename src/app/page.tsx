import Section, {BgVariant} from "@/shared/ui/Section/Section";
import Cover from "@/sections/Cover/Cover";
import FeatureSection from "@/sections/FeatureSection/FeatureSection";
import AboutSection from "@/sections/AboutSection/AboutSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import TopicsSection from "@/sections/TopicsSection/TopicsSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import {Sections} from "@/shared/sections/sections";

export default function Home() {
    return (
        <main className="">
            <Section id={Sections.Home} bg={BgVariant.Image} isFullWidth={true} classNames={'pt-16 h-screen'}>
                <Cover />
            </Section>

            <Section id={Sections.About} classNames={'pt-32 md:pt-64'}>
                <AboutSection />
            </Section>

            <Section id={Sections.Feature} classNames={'pt-16 md:pt-32'}>
                <FeatureSection />
            </Section>

            <Section id={Sections.Contacts} classNames={'pt-16 md:pt-64'}>
                <ContactSection />
            </Section>

            <Section id={Sections.Topics} classNames={'pt-16 md:pt-64'}>
                <TopicsSection />
            </Section>

            <Section id={Sections.Gallery} classNames={'pt-32 md:pt-64'}>
               <GallerySection />
            </Section>
        </main>
    )
}
