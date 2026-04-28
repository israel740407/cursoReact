import React from 'react'

export default function SaludoComponent(props) {
  return (
    <div className='bg-red-500 border rounded-2x1'>Hola desde un componente {props.nombre} {props.apellido}</div>
  )
}
