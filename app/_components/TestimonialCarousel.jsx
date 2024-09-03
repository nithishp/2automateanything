import React from "react";
import { CarouselCard } from "./CarouselCards";
import { InView } from "@/components/motion-primitives/InView";

const TestimonialCarousel = () => {
  return (
    <div className="mx-auto  flex flex-col items-center justify-center mt-10 bg-gray-50  px-6 lg:px-8">
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p className="mt-10 text-3xl text-center font-bold tracking-tight  text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600  sm:text-4xl">
          What Our Clients Say?
        </p>
        <p className="mt-6 text-lg text-center leading-8 text-gray-600 mb-10">
          Hear directly from our satisfied customers about their experiences.
        </p>
      </InView>
      <CarouselCard />
    </div>
  );
};

export default TestimonialCarousel;
