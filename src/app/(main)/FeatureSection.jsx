import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FeatureSection = () => {
  return (
    <div>
        <div>
            <div>
                <h2>Pruébalo en nuestro coffee shop</h2>
                <p> Visita nuestra cafetería en el centro de la ciudad para probar los
                granos de café antes de hacer tu pedido y llévate un descuento</p>
                <div>
                    <a href="">Cómo llegar <ArrowRight/></a>                    
                </div>
            </div>
            <Image src="/images/imagesFeatureSection.jpg" alt='img Feature' height={390} width={588}/>
        </div>      
    </div>
  )
}

export default FeatureSection
