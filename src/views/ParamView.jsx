import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamView() {
    const parametro = useParams()
    console.log(parametro)
    const id = parametro.id

  return (
    <div className='font-bold'>{id}</div>
  )
}
