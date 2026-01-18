import React, { useEffect, useState } from 'react'

const Borrar = () => {
  const [saludo, setSaludo] = useState('notte')

  useEffect(() => {
    if (saludo=='dia'){
      console.log('bondi')
      setSaludo('bondi')
    }
    else if(saludo=='notte'){
       console.log('notte')
       setSaludo('notte')
    }
    
  }, [])

  return (
    <div>
      <h1>{saludo}</h1>
    </div>
  )
}

export default Borrar
