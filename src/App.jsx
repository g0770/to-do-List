import React, {useState} from 'react'
import "./index.css"
import {Nota,Product,Menu} from './components'
import logo from "./components/images/todolistLogo.svg"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";

/* hacer que la notita guarde el color elegido en la estancia de creación, capaz hacerlo con un "tipo" dentro del array de notas */

function App() {
  const today = new Date()
  let notas = [
    {
      fechaCreacion : "1999-05-05",
      fechaLimite : "1999-05-06",
      descripcion : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, minima assumenda voluptates cum molestias placeat est repellat quibusdam, non deserunt voluptas minus inventore nobis officiis recusandae quo provident laboriosam sint!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat doloribus nam culpa ipsa vitae ut voluptatem nostrum maiores asperiores tempora laudantium, possimus debitis consequatur laborum est accusamus, modi illum!"
    }
  ]
  const [fondo,setBg] = useState(0)
  const changeBg = (newId) =>{
    setBg(newId)
  }
  return (
    <div id='content' style={{backgroundImage: 'url(src/components/images/background'+fondo+'.png)'}}>
      <Menu bg={changeBg}/>
      <header className='cabecera'>
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp"/>
      </header>
      <div className="notitas">
        <Nota hoy={today} creacion={true}/>
        <Nota hoy={today} datos={notas[0]}/>
        <Nota hoy={today} datos={notas[0]}/>
        <Nota hoy={today} datos={notas[0]}/>
        <Nota hoy={today} datos={notas[0]}/>
        <Nota hoy={today} datos={notas[0]}/>
      </div>

      <footer><p style={{paddingLeft: "2%"}}><b>Creado por los alumnos Andrés Morales, Sebastián Kraus, Alejandro Ayala, Julian Bidone para la segunda etapa de Argentina Programa (ReactJS). </b></p></footer>
    </div>
    
    
  )
}

export default App

