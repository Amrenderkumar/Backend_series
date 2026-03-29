import React from 'react'

const Card = () => {

    const name = "Adidas, Nike, Puma, Reebok, Under Armour, New Balance, Asics, Vans, Converse, Fila"

  return (
    <div className='min-h-screen'>
      <div>
            <div>
                <h2 className='text-xl'>{name.split(',')[0]}</h2>
            </div>
      </div>
    </div>
  )
}

export default Card
