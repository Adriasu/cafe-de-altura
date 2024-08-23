import CardsConditions from '@/components/CardsConditions'
import Footer from '@/components/Footer'
import React from 'react'
import CardsProducts from './CardsProducts'

const Shop = () => {
  return (
    <div>
      <CardsProducts/>
      <CardsConditions/>
      <Footer/>
    </div>
  )
}

export default Shop
