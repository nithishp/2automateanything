"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function CarouselCard() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      title: "Amazing Service",
      rating: 5,
      feedback:
        "The team was excellent! Their attention to detail and commitment to customer satisfaction were impressive.",
      logo: "/assets/logo1.png", // Add the path to the client's logo image
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Great Experience",
      rating: 4,
      feedback:
        "Had a wonderful experience! Would recommend to anyone looking for great service and support.",
      logo: "/assets/logo2.png",
    },
    {
      id: 3,
      name: "David Lee",
      title: "Superb Quality",
      rating: 5,
      feedback:
        "The quality of the products exceeded my expectations. I'll definitely be coming back.",
      logo: "/assets/logo3.png",
    },
    {
      id: 4,
      name: "Emma Johnson",
      title: "Professional Team",
      rating: 5,
      feedback:
        "A highly professional team that delivers on time. Their service was just what I was looking for.",
      logo: "/assets/logo4.svg",
    },
    {
      id: 5,
      name: "Oliver Brown",
      title: "Outstanding Results",
      rating: 4,
      feedback:
        "The results were outstanding, and the team went above and beyond to ensure satisfaction.",
      logo: "/assets/logo5.png",
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonialsData.map((testimonial) => (
          <CarouselItem key={testimonial.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.name}'s company logo`}
                          className="w-20 h-12 object-contain" // Style the logo
                        />
                      </div>

                      <div className="flex gap-0.5 justify-center text-amber-500 mb-2">
                        {/* Filled Stars */}
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={`filled-${i}`}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}

                        {/* Grayed-Out Stars */}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <svg
                            key={`gray-${i}`}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fillOpacity="0.3" // Grayed-out stars with lower opacity
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <div className="mt-2">
                        <p className="text-2xl font-bold text-amber-600 sm:text-3xl">
                          {testimonial.title}
                        </p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                          {testimonial.feedback}
                        </p>

                        <p className="mt-2 font-semibold text-gray-900">
                          - {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
