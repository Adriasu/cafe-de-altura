import { Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <p>cafedealtura.com</p>
            <Image src="/images/Vector.png" alt='coffe' width={20.53} height={24.93}/>
        </div>
        <div>
            <div>
                <p>Te ayudamos en</p>
                <div>
                    <div>
                        <Phone/>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
