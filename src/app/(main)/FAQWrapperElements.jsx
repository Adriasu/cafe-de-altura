import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FAQWrapperElements = () => {
  return (
    <div className='min-h-[444px] bg-[#2A5B45] flex flex-col items-center justify-center gap-6'>
      <h2 className='text-white font-medium text-2xl leading-7 h-[93px] flex justify-center p-[17px]'>Preguntas frecuentes</h2>

      <div className='w-[178px] h-[72px]'>
        <Link href={"/"} className='h-6 items-center gap-4 flex justify-center text-sm font-semibold leading-4 text-white'>
        Resolvemos tus dudas
        <ArrowRight className='h-6 w-6'/>
        </Link>
      </div>
      
    </div>
  )
}

export default FAQWrapperElements


