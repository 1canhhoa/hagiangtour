import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { useState } from 'react'
import Reveal from './Reveal';
interface TourProps {
  id: number;
  tittle: string;
  services: {
    tittle: string;
    price: string;
  }[];
  img: string;
  PickUp: string;
  GroupSize: string;
  Transport: string;
}
interface CardItemProps {
  ind: number
  project: TourProps; // Specify that project prop should have type TourProps
}
const CardItemGreatTrips = ({ project, ind }: CardItemProps) => {
  const [isHovered, setIsHovered] = useState<number>(-1);

  const handleMouseEnter = (number: number) => {
    setIsHovered(number);
    // Thực hiện các hành động khi di chuột vào phần tử
  };

  const handleMouseLeave = (number: number) => {
    setIsHovered(-1);
    // Thực hiện các hành động khi di chuột ra khỏi phần tử
  };
  return (
    <Reveal direction='scale'>
      <div
        onMouseEnter={() => handleMouseEnter(project.id)}
        onMouseLeave={() => handleMouseLeave(project.id)}
        className={"shadow-btn  h-full rounded-xl sm:rounded-xl p-12 sm:p-8 mx-4 md:p-4 bg-white"} >
        <div className='overflow-hidden relative rounded-md sm:rounded-xl'>
          <Image alt='iii' src={project.img} width={999} height={999} className={(ind === isHovered ? 'scale-110' : '') + '  transition-all duration-1000 object-cover w-full h-[21.125rem] max-lg:h-[27.125rem] max-md:h-[59.2rem] '} />
          <div className="absolute w-fit z-[2] h-fit bottom-[1rem] max-md:bottom-[3.47rem] left-[1.44rem] max-md:left-[4.27rem] flex max-md:flex-col max-md:gap-y-[2.13rem] gap-x-[2.5rem]">
            <div className="flex items-center gap-x-[0.5rem] max-md:gap-x-[2.13rem]">
              <span className="text-[2.125rem] max-lg:text-[3.125rem] font-bold leading-[1.18] tracking-[0.00531rem] text-white  max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem]">
                $199</span><div className="flex flex-col w-fit"><span className="text-[0.875rem] max-lg:text-[1.5rem] font-bold text-white leading-[1.428] tracking-[0.00875rem] uppercase  text-gray-scale-5 max-md:text-[3.467rem] max-md:leading-[1.38]">
                  Easy Rider - Basic Bike</span><div className="w-full mt-[0.25rem] max-md:mt-[1.07rem] border-t border-white border-solid opacity-50 max-md:opacity-80">
                </div>
              </div>
            </div>
            <div className="flex items-center text-white gap-x-[0.5rem] max-md:gap-x-[2.13rem]">
              <span className="text-[2.125rem] max-lg:text-[3.125rem] font-bold leading-[1.18] tracking-[0.00531rem] text-white  max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem]">$239</span>
              <div className="flex flex-col w-fit"><span className="text-[0.875rem] max-lg:text-[1.5rem] font-bold leading-[1.428] tracking-[0.00875rem] uppercase text-gray-scale-5 max-md:text-[3.467rem] max-md:leading-[1.38]">
                Easy Rider - Big Bike</span><div className="w-full mt-[0.25rem] max-md:mt-[1.07rem] border-t border-white border-solid opacity-50 max-md:opacity-80">
                </div>
              </div>
            </div>
          </div>
          <div className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-itemCardTour "></div>
        </div>
        <a className="block w-full h-fit" href="/ha-giang-loop-tour-3d3n"><h2 className="mt-[1.25rem] max-md:mt-[3.2rem] max-md:mb-[2.13rem] 
        mb-[0.75rem] text-[1.25rem] max-lg:text-[2.5rem] font-semibold leading-[1.2] tracking-[0.00188rem] text-gray-scale-80 uppercase line-clamp-1 max-md:text-[3.733rem] 
        max-md:font-bold max-md:leading-[1.42] max-md:tracking-[0.03733rem]" title="HA GIANG LOOP TOUR (3D3N)">
          {project?.tittle}</h2></a>
        <div className="flex items-center">
          <Image alt="sss" width={999} height={999} src='/home/home.svg' className="w-4 h-4 object-cover" />
          <span className="text-[0.875rem] max-lg:text-[1.875rem] whitespace-nowrap font-semibold leading-[1.57] max-md:text-[3.467rem] max-md:font-semibold tracking-[0.00219rem] text-primary-70 ml-[0.37rem] mr-[0.25rem] max-md:ml-[1.6rem] max-md:mr-[1.07rem]">Pick up:</span><span className="text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] line-clamp-1 font-normal max-md:text-[3.467rem] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219rem]">Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city</span>
        </div>
        <div className="flex items-center my-[0.5rem] max-md:my-[2.13rem]">
          <Image alt="sss" width={999} height={999} src='/home/basicBike.svg' className="w-3.5 h-3.5 object-cover" />
          <span className="text-[0.875rem] max-lg:text-[1.875rem] font-semibold leading-[1.57] max-md:text-[3.467rem] max-md:font-semibold tracking-[0.00219rem] text-primary-70 ml-[0.37rem] mr-[0.25rem] max-md:ml-[1.6rem] max-md:mr-[1.07rem]">Group size:</span><span className="text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] line-clamp-1 font-normal max-md:text-[3.467rem] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219rem]">10-15 pax</span></div>
        <div className="flex items-center">
          <Image alt="sss" width={999} height={999} src='/home/busred.svg' className="w-4 h-4 object-cover" />
          <span className="text-[0.875rem] max-lg:text-[1.875rem] font-semibold leading-[1.57] max-md:text-[3.467rem] max-md:font-semibold tracking-[0.00219rem] text-primary-70 ml-[0.37rem] mr-[0.25rem] max-md:ml-[1.6rem] max-md:mr-[1.07rem]">Transport:</span><span className="text-gray-scale-50 text-[0.875rem] max-lg:text-[1.875rem] line-clamp-1 font-normal max-md:text-[3.467rem] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219rem]">Sleeper bus &amp; Motorbike with Local easy rider</span></div>
        <div className='flex gap-x-[1rem] max-md:gap-x-[3.2rem] mt-[1.25rem] max-md:mt-[3.2rem]'>
          <Button type='fill' content='Book now' />
          <Button type='outline' content='View tour' />
        </div>
      </div></Reveal>
  )
}

export default CardItemGreatTrips