import React from 'react'
import Image from 'next/image'

const PageConstruction = ({location}) => {
  return (
    <div className='min-h-screen mt-[64px] flex flex-col justify-start items-center h-screen'>
        <h2 className='font-semibold text-[40px] leading-[44px] text-[#2A5B45] mt-5'>{location}</h2>
      <Image
        src={
          "https://www.andaluzabaloncesto.org/archivos/noticias/14818/zoom-foto-42341.jpg"
        }
        alt="Página en construccion"
        width={1100}
        height={600}
      />
    </div>
  )
}

export default PageConstruction
