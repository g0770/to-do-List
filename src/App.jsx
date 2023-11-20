import React, {useState} from 'react'
import "./index.css"
import {Nota,Product,Menu} from './components'
import logo from "./components/images/todolistLogo.svg"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";


function App() {
  const today = new Date()
  let notas = [
    {
      fechaCreacion : "1999-05-05",
      fechaLimite : "1999-05-06",
      descripcion : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, minima assumenda voluptates cum molestias placeat est repellat quibusdam, non deserunt voluptas minus inventore nobis officiis recusandae quo provident laboriosam sint!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat doloribus nam culpa ipsa vitae ut voluptatem nostrum maiores asperiores tempora laudantium, possimus debitis consequatur laborum est accusamus, modi illum!"
    }
  ]

  return (
    <div id='content'>
      <Menu/>
      <div className='cabecera'>
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' />
      </div>
      <div className="notitas">
        <Nota hoy={today} creacion={true}/>
        <Nota hoy={today} datos={notas[0]}/>
      </div>
    </div>
    
    
  )
}

export default App

