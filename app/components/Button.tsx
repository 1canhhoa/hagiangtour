import React from 'react'
import Image from 'next/image'
interface ButtonProps {
  type: 'fill' | 'outline',
  content: string
}
const Button = ({ type = 'fill', content }: ButtonProps) => {
  return (
    <button
      title='iii'
      className={(type === 'fill' ? 'bg-primary-70 text-white' : 'bg-white text-primary-70 hover:bg-primary-70 hover:text-white') + ` ease-linear max-md:h-[12.8rem] max-md:w-full   border border-solid 
      border-primary-70 relative group/item rounded-[0.5rem] max-lg:rounded-[1rem] z-20 transition-all 
      duration-500  uppercase py-[0.75rem] max-md:py-[3.2rem] max-md:px-[6.4rem] px-[1.5rem] max-lg:px-[2.5rem] 
      max-lg:py-[1.5rem]  text-[0.8125rem] max-lg:text-[1.8125rem] font-bold leading-[1.54] max-md:rounded-[2.13rem] 
      max-md:text-[3.467rem]  max-md:font-bold max-md:leading-[1.53] text-center i flex items-center `}
    >
      <Image alt='ss' width={999} height={999} src='/home/btn-img.svg' className='w-[6.31831rem] absolute z-0 -translate-x-1/2 
      -translate-y-1/2 top-1/2 left-1/2 max-md:w-[33.62187rem] max-md:h-[8.07093rem] h-[1.99675rem] opacity-0 
      group-hover/item:opacity-100 ' />
      <span className=" relative z-[1] text-[0.8125rem] max-lg:text-[1.69rem] max-md:text-[3.46rem]">{content}</span>
    </button>
  )
}

export default Button