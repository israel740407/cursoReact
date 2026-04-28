import React from 'react'
import { children } from 'react'

export default function CardChilden({children, titulo}) {
  return (
    <div className='bg-green-400 border-2 rounded-2x1 shadow-2x1 p-5 align-middle'>
        <h1>{titulo}</h1>
        {children}
        <button className='button-simple'>Salu2</button>
    </div>
  )
}
