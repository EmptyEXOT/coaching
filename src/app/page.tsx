import Section, {BgVariant} from "@/shared/ui/Section/Section";
import Cover from "@/sections/Cover/Cover";
import FeatureSection from "@/sections/FeatureSection/FeatureSection";
import AboutSection from "@/sections/AboutSection/AboutSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import TopicsSection from "@/sections/TopicsSection/TopicsSection";
import GallerySection from "@/sections/GallerySection/GallerySection";

export default function Home() {
    return (
        <main className="">
            <Section bg={BgVariant.Image} isFullWidth={true} classNames={'pt-16 h-screen'}>
                <Cover />
            </Section>

            <Section classNames={'pt-32 md:pt-64'}>
                <AboutSection />
            </Section>

            <Section classNames={'pt-16 md:pt-32'}>
                <FeatureSection />
            </Section>

            <Section classNames={'pt-16 md:pt-64'}>
                <ContactSection />
            </Section>

            <Section classNames={'pt-16 md:pt-64'}>
                <TopicsSection />
            </Section>

            <Section classNames={'pt-32 md:pt-64'}>
               <GallerySection />
            </Section>
        </main>
    )
}
