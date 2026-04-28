import React from 'react'

export default function AlumnoComponent(props) {
  return (
    <div>
        <div>
            <h1>{props.nControl}</h1>
            <h1>{props.nombre}</h1>
            <h1>{props.semestre}</h1>
        </div>
    </div>
  )
}
