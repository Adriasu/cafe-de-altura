import React from 'react'

const UserCard = ({userCard}) => {
  return (
    <div className='p-3 border-[1px] border-[#D1D5DB] bg-white'>
        <h1>Nombre: {userCard.name} </h1>
        <p>Edad: {userCard.age}</p>
        <p>E-mail: {userCard.email}</p>
        <p>Género: {userCard.gender}</p>
        <p>Cuenta: {userCard.account}</p>
    </div>
  )
}

export default UserCard
