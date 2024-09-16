import Link from "next/link";

export default function TailHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video element for background */}
      <video
        src="/video/herobgvideo.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover"
      />

      {/* Overlay to add a gradient or semi-transparent effect */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Automation Solutions
            <strong className="block font-extrabold text-amber-600">
              for Businesses
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-base sm:text-lg">
            Transforming businesses with RPA, AI, and Intelligent Automation
          </p>

          <Link href='/#whyus' className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <button class="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-amber-500 from-10% via-amber-500 via-30% to-amber-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-amber-500 before:from-10% before:via-amber-500 before:via-30% before:to-amber-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-amber-700 focus:ring-amber-700">
              Get Started
            </button>

           
          </Link>
        </div>
      </div>
    </section>
  );
}
