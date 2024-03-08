
import Image from "next/image";
import CardGreatTrips from "./CardGreatTrips";
import Reveal from "./Reveal";
export default function GreatTrip() {

  return (
    <section className="mt-[6.25rem] max-md:mt-[16rem] relative h-[49.4rem] max-lg:h-[64rem] max-md:h-fit">
      <div className="max-md:text-white md:text-white text-center md:pt-[3rem] uppercase text-primary-70 w-full relative z-[5]">
        <Reveal direction="up">
          <h3 className="text-[1rem] leading-[1] max-lg:text-[2.5rem] font-bold max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem] aos-init aos-animate">
            OUR
          </h3>
          <h2 data-aos-delay="100" className="text-[3rem] leading-[1] max-lg:text-[4.5rem] font-extrabold max-md:text-[6.4rem] aos-init aos-animate">
            GREAT TRIPS
          </h2>
        </Reveal>
      </div>
      <CardGreatTrips />
      <div className="absolute top-0 lg:-top-[5rem] left-0 z-0 w-full h-[30rem] -translate-y-[60%] bg-gradient-greatTrips max-md:hidden"></div>
      <Image alt="aaa" src='/home/mask-great-trips.avif' width={999} height={999} className="object-cover absolute top-0 lg:-top-[5rem] left-0 w-full h-[38rem] max-lg:h-[52rem] z-[1]" />
      <div className="absolute bottom-[20.69rem] lg:bottom-[15.69rem] left-0 z-[2] w-full h-[21.9375rem] bg-gradient-greatTrips max-md:hidden"></div>
    </section>
  );

}
