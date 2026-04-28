import React from 'react'

export default function UsuarioComponent({nombre, edad}) {
  return (
    <div className='flex flex-col gap-y-5 bg-amber-400 justify-content: center'>
        <h1 className='alignItems: center'>Mi Usuario CoMPOnent</h1>
        <p>{nombre}</p>
        <p>{edad}</p>
    </div>
  )
}
