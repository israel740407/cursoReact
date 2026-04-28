import React from 'react'

export default function ProductoComponent(props) {
  return (
    <div>
        <div>
            <h1>{props.name}</h1>
            <h1>{props.precio}</h1>
            <h1>{props.id}</h1>
        </div>
    </div>
  )
}
