import Image from 'next/image'
import React from 'react'
import Buttons from './Buttons'

const CardProduct = ({data}) => {
  return (
    <div>
      <img className='w-[219.39px] h-[219.39px]' src={data.img_url} alt="imagen" />
      <div>
        <p>{data.brand}</p>
        <p>{data.price}</p>
      </div>
      <Buttons text={"Añadir"} typeBtn={"add"}/>
    </div>
  )
}

export default CardProduct
