import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconAutomaticGearbox,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { InView } from "../motion-primitives/InView";
import SectionTitle from "@/app/_components/SectionTitle";
import { Blocks, Brain, Info, MapPin, Maximize2, ScaleIcon } from "lucide-react";


export default function FeaturesSection() {
  const features = [
    {
      title: "Tailored Automation Solutions",
      description:
        "Custom-built RPA workflows that streamline your business processes",
      icon: <IconAutomaticGearbox />,
    },
    {
      title: "Scalable Software Development",
      description: "Ensuring that your systems grow as your business expands",
      icon: <Maximize2 />,
    },
    {
      title: "In-Depth Knowledge and Training",
      description: "Comprehensive training programs for your team.",
      icon: <Brain />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Certified UiPath Trainers",
      description:
        "Learn to build robots without writing a single line of code using UiPath.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions integrate seamlessly with your existing infrastructure.",
      icon: <Blocks />,
    },
    {
      title: "Expert Guidance",
      description:
        "Access to a team of experienced RPA and software professionals.",
      icon: <MapPin />,
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous support and maintenance to your software and RPA systems",
      icon: <Info />,
    },
  ];
  return (
    <>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SectionTitle
        id="whatyouget"
          title="What you get"
          subtitle=" 2 Automate Anything (2AA) is a Sydney based Australian group offers you
        everything needed for your digital transformation journey, we travel
        together all the way to grow your business and our immense automation
        process will help your business journey to the next level."
        />
      </InView>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    
    (<div
      className={cn(
        "flex  flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-amber-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-amber-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-amber-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-amber-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block  text-amber-600 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
