import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { useState } from 'react'
interface TourProps {
  id: number;
  tittle: string;
  img: string;
}
interface CardItemProps {
  id: number
  project: TourProps; // Specify that project prop should have type TourProps
}
const CardItemTheGallary = ({ project, id: ind }: CardItemProps) => {
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
    <div
      onMouseEnter={() => handleMouseEnter(project.id)}
      onMouseLeave={() => handleMouseLeave(project.id)}
      className={"shadow-btn h-full mx-6 md:mx-0 group rounded-3xl sm:rounded-3xl bg-white"} >
      <div className='overflow-hidden relative rounded-3xl sm:rounded-3xl '>
        <Image alt='iii' src={project.img} width={999} height={999}
          className={(ind === isHovered ? 'scale-110' : '') + '  transition-all rounded-2xl sm:rounded-2xl ease-out duration-1000 object-cover w-full h-[31.125rem] max-lg:h-[27.125rem] max-md:h-[89.2rem]  '} />
        <Image alt='iii' src='/home/circleDot.svg' width={9999} height={9999} className={(isHovered !== -1 ? 'hidden' : '') + ' max-md:hidden pointer-events-none absolute w-[11rem] h-[11rem] top-0 left-0 right-0 bottom-0 m-auto'} />
        <div className={(ind === isHovered ? 'scale-110 opacity-100 ' : 'scale-90 opacity-0') + ` pointer-events-none w-[11rem] h-[11rem] max-lg:w-[15rem] max-lg:h-[15rem] x-[2] absolute md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 
         opacity-0 transition-all duration-500 bg-[#cde82b99] scale-90  backdrop-blur-[3px] rounded-full max-md:w-[73.6rem]
         max-md:h-[73.6rem] max-md:bottom-[-44.8rem] max-md:opacity-100`}></div>
        <span className="pointer-events-none absolute md:top-1/2 capitalize left-1/2 -translate-x-1/2 md:-translate-y-1/2 text-white z-[5] text-[1.25rem] font-semibold leading-[1.2] tracking-[0.00188rem] max-md:bottom-[8rem] max-md:text-[5.33rem] max-md:leading-[1.2] max-md:tracking-[0.008rem] font-poppins max-lg:text-[2.25rem]">{project.tittle}</span>
        {/* <div className="absolute z-[1] top-0 left-0 w-full h-full bg-gradient-itemCardTour "></div> */}
      </div>
    </div>
  )
}

export default CardItemTheGallary