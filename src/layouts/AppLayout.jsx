import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function AppLayout() {
  return (
    <>
        <div className='bg-gray-200 justify-content content-center'>
            <div>
                <h1>Este es un layout</h1>
            </div>
            <div>
                <Outlet/>
            </div>
            <div className='bg-pink-100 justify-content '>
                <p  className='text-green-500 text-7xl'>Este es mi footer!</p>
                <Link to='/main' className='text-gray-500 text-end'>Redirigir a main desde layout</Link>

                <Link to='/amigo' className='text-gray-500 text-end'>Redirigir a tercera pagina desde layout</Link>
            </div>
        </div>
    </>
  )
}
