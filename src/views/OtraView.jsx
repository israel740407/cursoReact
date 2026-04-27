import React from 'react'
import { Link } from 'react-router-dom'

export default function OtraView() {
  return (
    <div className=''>
    <div>OtraView</div>
    <Link to='/amigo' className='text-gray-500 text-end'>Redirigir a tercera pagina</Link>
    </div>
  )
}
