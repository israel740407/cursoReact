import React from 'react'
import { Link } from 'react-router-dom'

export default function AppView() {
  return (
    <div>
    <h1 className='font-bold'>AppView</h1>

    <Link to={'/otra'}>Dirigir a otra pagina</Link>
    </div>
  )
}
