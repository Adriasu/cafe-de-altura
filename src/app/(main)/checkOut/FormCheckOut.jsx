import Image from 'next/image'
import React from 'react'

const FormCheckOut = () => {
  return (
    <div className='flex flex-col w-[792px] min-h-[972px] gap-6 p-2'>
        <h3>Seleccionar método de pago</h3>

        <div>
            <div>
                <input type="radio" name="paymentMethod" id="card" />
            </div>
            <div>
                <label htmlFor="card">Tarjeta de débito</label>
                <p>Opción estándar sin seguimiento</p>
            </div>
            <div>
                <p></p>
            </div>
        </div>

        <div>
            <div>
                <label htmlFor="holderName">Titular</label>
                <input type="text" name='holderName' id='holderName' placeholder='Nombre del titular' />
            </div>
            <div>
                <label htmlFor="numCard">Número de la tarjeta</label>
                <input type="number" name='numCard' id='numCard' placeholder='1234 1234 1234 1234' />
            </div>
            <div>
                <div>
                    <label htmlFor="expirationDate">Fecha de caducidad</label>
                    <input type="text" name='expirationDate' id='expirationDate' placeholder='MM / YY'/>
                </div>
                <div>
                    <label htmlFor="cvc">CVC</label>
                    <input type="number" name='cvc' id='cvc' placeholder='123' />
                </div>
            </div>
        </div>

        <hr />

        <div>
            <div>
                <input type="radio" name='paymentMethod' id='paymentBankTransfer' />
            </div>
            <div>
                <label htmlFor="paymentBankTransfer">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</label>
                <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
            </div>
        </div>

        <hr />

        <div>
            <div>
                <input type="radio" name='paymentMethod' id='bizumPayment'/>
            </div>
            <div>
                <label htmlFor="bizum">Bizum</label>
                <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
            </div>
            <Image src={"/images/bizum.png"} alt='bizum' width={69.23} height={30}/>
            <div>
                <p></p>
            </div>
        </div>

     
    </div>
  )
}

export default FormCheckOut
