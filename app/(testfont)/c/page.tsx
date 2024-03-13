import React from 'react'
import { font_poppin, font_roboto, font_tiro_timin } from '../font'
const test = () => {
  return (

    // cả 3 cách thì font đều được lấy từ next/font/google 
    <div className='flex flex-col gap-y-7 mt-8'>
      {/* cách 1 : font lấy từ FontFamily củas tailwind config */ }
      <div className='flex justify-center'>
        <div className='mr-10'>Cách 1</div>
        <div className={ 'text-xl mr-8 font-black     font-poppins' }>front popin</div>
        <div className='text-xl  mr-8                 font-taro_tamil'>front popin</div>
        <div className='text-xl                       font-roboto'>front popin</div>
      </div >
      {/* cách 2 font lấy từ global css */ }
      <div className='flex justify-center'>
        <div className='mr-10'>Cách 2</div>
        <div className={ 'text-xl mr-8   font-black    poppin' }>front popin</div>
        <div className='text-xl  mr-8                  taro-tamil'>front popin</div>
        <div className='text-xl                        roboto'>front popin</div>
      </div >
      {/* cách 3 font lấy từ ../font.ts */ }
      <div className='flex justify-center'>
        <div className='mr-10'>Cách 3</div>
        <div className={ 'text-xl mr-8    font-font1 ' }>front popin</div>
        <div className={ 'text-xl  mr-8   font-font2 ' }>front popin</div>
        <div className={ 'text-xl         font-font3 ' }>front popin</div>
      </div >
    </div>
  )
}

export default test