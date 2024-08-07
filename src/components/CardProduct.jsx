import Image from 'next/image'
import React from 'react'
import Buttons from './Buttons'

const CardProduct = ({data}) => {
  return (
    <div>
      <Image src={data.img_url} alt='imagen' width={219.39} height={219.39} />
      <div>
        <p>{data.brand}</p>
        <p>{data.price}</p>
      </div>
      <Buttons text={"Añadir"} typeBtn={"add"}/>
    </div>
  )
}

export default CardProduct
