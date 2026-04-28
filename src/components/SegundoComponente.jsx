import React from 'react'

export default function SegundoComponente({nombre, titulo}) {
  return (
    <div className='bg-yellow-200 justify-content'>
        <h1 className='text-xl'>Titulo de {titulo}</h1>
        <p>A continuacion ingresa el nombre:</p>
        <br />
        <textarea name="nombre" >{nombre}</textarea>
    </div>
  )
}
