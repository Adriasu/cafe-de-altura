import Image from 'next/image'
import React from 'react'
import Buttons from './Buttons'

const CardProduct = ({data}) => {
  return (
    <div className='group w-[282px] h-[391.39px] gap-6 border flex flex-col items-center justify-center rounded-lg border-solid border-[#E3DED7] hover:bg-[#f7f5f3]'>
      <Image src={data.img_url} alt='imagen' width={219.39} height={219.39} />
      <div className='flex flex-col justify-center items-center gap-3 text-sm leading-4 font-normal'>
        <p className='font-semibold'>{data.brand}</p>
        <p>{data.price.toFixed(2)} €</p>
      </div>
      <Buttons text={"Añadir"} typeBtn={"add"}/>
    </div>
  )
}

export default CardProduct
