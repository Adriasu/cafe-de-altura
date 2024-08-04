import Image from 'next/image'
import React from 'react'

const CardConWrapper = ({textH3, textP}) => {
  return (
    <div className='w-[316px] h-[232px] border-[1px] border-[#F7F5F3] flex flex-col gap-4 shadow-[0px_1px_4px_0px_#E3DED7CC] items-center justify-center rounded-lg bg-[#FFFFFF]'>
      <div className='min-w-[64px] min-h-[64px] bg-[#2A5B45] flex justify-center items-center rounded-[20px]'>
        <p>imagen</p>
      </div>
      <h3 className='w-[268px] h-6 text-lg font-semibold leading-6 text-center text-[#2B2A2B]'>{textH3}</h3>
      <p className='font-normal text-sm text-center text-gray-900 w-[268px]'>{textP}</p>
      
    </div>
  )
}

export default CardConWrapper
