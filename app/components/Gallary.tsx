import CardTheGallary from "./CardTheGallary";
import Reveal from "./Reveal";
export default function Gallary() {
  return (
    <div className="lg:w-[87.5rem]  max-lg:w-[95vw] max-md:w-full mt-[6.25rem] max-md:mt-[9rem] mx-auto relative z-[9999]">
      <div className="relative ">
        <div className="max-md:px-[4.27rem] uppercase text-primary-70 w-full relative z-[5] ">
          <Reveal direction="up">
            <h3 data-aos="fade-up" className="text-[1rem] leading-[1] max-lg:text-[2.5rem] font-extrabold max-md:text-[3.2rem] mb-[0.65rem] max-md:mb-[2.13rem] aos-init aos-animate">DISCOVER</h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[3rem] leading-[1] font-extrabold max-lg:text-[4.5rem] max-md:text-[6.4rem] aos-init aos-animate">THE GALLERY</h2>
          </Reveal>
        </div>
        <Reveal direction="up"><CardTheGallary /></Reveal>

      </div>
    </div>
  );

}
