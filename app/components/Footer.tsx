"use client"
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden max-md:h-[70vh] h-[69vh] max-md:mt-[1.5rem]">
      <Image alt="ss" height={9999} width={9999} src='/home/bg-footer.avif' className="object-cover max-md:h-[70vh] absolute inset-0 left-0 top-0 right-0 w-full" />
      <div className="flex justify-around  items-center w-full relative z-[1] max-md:px-[4.27rem] max-lg:flex-col">
        <Image alt="ss" height={9999} width={9999} src='/home/logo-footer.avif' className="md:mt-[9.13rem] mt-[10rem] object-contain h-60 w-60 inset-0 " />
        <div className=" flex  flex-col sm:flex-row lg:gap-x-[4rem] md:mt-[3.13rem] gap-6 sm:gap-[8rem] max-md:text-center">
          {/* cot1 */}
          <div className="flex-col justify-center max-md:flex max-md:w-auto">
            <h2 className="lg:text-[1rem] md:font-[700] font-extrabold  md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]">
              CONTACT US
            </h2>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/FooterPhoneIcon.svg' className="th-img-ft " />
              </div>
              <p className="">+84 98 3333 986 (Linnete )<br />
                +84 85 668 0000 (Kevin )</p>
            </div>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/FooterMailIcon.svg' className="th-img-ft " />
              </div>
              <p className="">Cheershostel1@gmail.com</p>
            </div>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/home.svg' className="th-img-ft " />
              </div>
              <p className="">5 Au Trieu, Hoan Kiem, Ha Noi</p>
            </div>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/FooterWorldIcon.svg' className="th-img-ft " />
              </div>
              <p className="">Vietnam Cheers Hostel Official Site</p>
            </div>
          </div>
          {/* cot2 */}
          <div className="flex-col justify-center max-md:flex max-md:w-auto">
            <h2 className="lg:text-[1rem] md:font-[700] font-extrabold  md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]">
              ALL TOUR
            </h2>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/FooterTransportIcon.svg' className="th-img-ft " />
              </div>
              <p className="">HA GIANG LOOP TOUR (3D3N)</p>
            </div>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/FooterTransportIcon.svg' className="th-img-ft " />
              </div>
              <p className="">HA GIANG LOOP TOUR (4D4N)</p>
            </div>
          </div>
          {/* cot3 */}
          <div className="flex-col justify-center max-md:flex max-md:w-auto">
            <h2 className="lg:text-[1rem] md:font-[700] font-extrabold  md:leading-[1.25rem] leading-[4.8rem] md:tracking-[0.00875rem] text-[3.46667rem] md:text-[1.8vw]">
              CHEERS TOURS
            </h2>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/local.svg' className="th-img-ft " />
              </div>
              <p className="">Ha Long Bay on Social Cruise</p>
            </div>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/local.svg' className="th-img-ft " />
              </div>
              <p className="">Sapa Trekking Tour</p>
            </div>
            <div className="th-ft">
              <div className="flex gap-x-[0.5rem] max-md:gap-x-[2.13rem] max-md:w-fit">
                <Image alt="ss" height={9999} width={9999} src='/home/local.svg' className="th-img-ft " />
              </div>
              <p className="">Package Tour</p>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );

}
