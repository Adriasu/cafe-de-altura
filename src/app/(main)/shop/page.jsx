import CardsConditions from '@/components/CardsConditions'
import Footer from '@/components/Footer'
import React from 'react'
import ContainCarsdProducts from '@/components/ContainCarsdProducts'

const Shop = () => {
  return (
    <div>
      <ContainCarsdProducts title={"Últimos orígenes"}/>
      <CardsConditions/>
      <Footer/>
    </div>
  )
}

export default Shop
