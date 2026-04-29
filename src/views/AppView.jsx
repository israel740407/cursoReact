import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent'
import CardChilden from '../components/CardChilden'
import SegundoComponente from '../components/SegundoComponente'
import SegundoChildren from '../components/SegundoChildren'
import UsuarioComponent from '../components/UsuarioComponent'
import ButtonActionComponent from '../components/ButtonActionComponent'
import ListaComponent from '../components/ListaComponent'
import ProductoComponent from '../components/ProductoComponent'
import AlumnoComponent from '../components/AlumnoComponent'
import ProductCard from '../components/ProductCard'

export default function AppView() {
  const parametro = 2323
  const user = {
    nombre: "Omar",
    edad: "23"
  }
  const [usuario, setUsuario] = useState(0);
  const [isTrue, setIsTrue] = useState(true);


  const [products, setProducts] = useState([
      {id: 1, name: "Laptop", precio: 1500},
      {id: 2, name: "Celular", precio: 1000},
      {id: 3, name: "Bocina", precio: 780},
      {id: 4, name: "Mouse", precio: 2000},
    ]
  )

  const [alumnos, setAlumnos] = useState (
    [
      {nControl: 1, nombre: "Isra", semestre: 5},
      {nControl: 2, nombre: "Fatima", semestre: 2},
      {nControl: 3, nombre: "Medina", semestre: 9},
      {nControl: 4, nombre: "Alvarado", semestre: 6},
    ]
  )

  const handleClick = () => {
    setUsuario(usuario + 1)
    setIsTrue(!isTrue)
  }
  const handleSelection = (elemento) => {
    console.log("Evento:", elemento)
  }

  useEffect(() => {
    console.log("Este es el useeffect ejecutandose")
  },[isTrue])

  // if(isTrue){
  //   return <div>Soy verdadero</div>
  // }

  return (
    <div>
    <h1 className='font-bold'>AppView</h1>

    {
      isTrue ?(
        <h1>Es verdadero</h1>
      ) : (
        <h1>Es falso</h1>
      )
    }
    {
      isTrue &&(
        <h1>Soy verdadero</h1>
      )
    }

    <SaludoComponent nombre={"Patita"} apellido={"Bucio Rifan"}/>
    <SaludoComponent/>
    <CardChilden titulo={"Ttulo de Children"}>
      <p className='text-blue-400 text-center '>Hola Yo soy el Children</p>
    </CardChilden>
    <SegundoComponente nombre={"Antonio"} titulo={"Segundo Componente"}/>
    <SegundoChildren>

    </SegundoChildren>
    <br />

    <UsuarioComponent {...user}/>

    <ListaComponent onSeleccionar={handleSelection}/>

    <ButtonActionComponent onClick={handleClick}/>

    <h1>contador de clics</h1>
    <ButtonActionComponent onClick={handleClick}/>

    <p>{usuario}</p>

    

    <ProductoComponent name={"Tenis"} precio = {1400} id = {5} />
    {
      products.map((producto) => (
        <ProductoComponent
          name = {producto.name}
          precio = {producto.precio}
          id = {producto.id}
        />
      ))
    }


  

    <br />
    {
      alumnos.map((alumno) => (
        <AlumnoComponent
          nControl = {alumno.nControl}
          nombre = {alumno.nombre}
          semestre = {alumno.semestre}
        />
      ))
    }



    <Link to={'/otra'}>Dirigir a otra pagina</Link>
    <Link to={`/parametro/${parametro}`}>Dirigir a pagina param</Link>
    </div>
  )
}
