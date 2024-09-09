import FeaturesSection from "@/components/blocks/features-section-demo-2";
import TailAbout from "./_components/TailAbout";
import TailBlog from "./_components/TailBlog";
import TailBrands from "./_components/TailBrands";
import TailFeature from "./_components/TailFeature";
import TailFooter from "./_components/TailFooter";
import TailHero from "./_components/TailHero";
import { TailService } from "./_components/TailServices";
import SectionTitle from "./_components/SectionTitle";
import TestimonialSlider from "./_components/TestimonialSlider";
import TestimonialCarousel from "./_components/TestimonialCarousel";
import { InView } from "@/components/motion-primitives/InView";
import { AuroraBackgroundDemo } from "./_components/AuroraBg";










export default function Home() {
  return (
    <main>
    
      {/* <TailHero /> */}
      <AuroraBackgroundDemo/>
      <TailAbout />
      <TailFeature />
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SectionTitle
          title=" What we offer"
          subtitle=" 2 Automate Anything (2AA) is a Sydney based Australian group offers you
        everything needed for your digital transformation journey, we travel
        together all the way to grow your business and our immense automation
        process will help your business journey to the next level."
        />
      </InView>
      <TailService />
   
      <FeaturesSection />
      <TailBrands />
      <TestimonialCarousel />
      {/* <TestimonialSlider /> */}
      <TailBlog />
    </main>
  );
}
