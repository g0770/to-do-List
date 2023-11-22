import React, {useState} from 'react'
import "./index.css"
import {Nota,Product,Menu} from './components'
import logo from "./components/images/todolistLogo.svg"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";

/* hacer que la notita guarde el color elegido en la estancia de creación*/

function App() {

  const today = new Date()

  const [notas,setNotas] = useState([])
  const [fondo,setBg] = useState(0)

  const changeBg = (newId) =>{
    setBg(newId)
  }

  return (
    <div id='content' >
      <div id="bgFix" style={{backgroundImage: 'url(src/components/images/background'+fondo+'.png)'}}></div>
      <Menu bg={changeBg}/>
      <header className='cabecera'>
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp"/>
      </header>

      <div className="notitas">
        <Nota add={setNotas} notas={notas} hoy={today} creacion={true}/>
        {notas.map((nota, index) => (
          <Nota key={index} datos={nota} />
        ))}
      </div>

      <footer><p style={{paddingLeft: "2%"}}><b>Creado por los alumnos Andrés Morales, Sebastián Kraus, Alejandro Ayala, Julian Bidone para la segunda etapa de Argentina Programa (ReactJS). </b></p></footer>
    </div>
  )
}

export default App

