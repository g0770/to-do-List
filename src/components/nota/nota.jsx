import React, {useState} from 'react'
import "../../index.css"
import add from "../images/add.svg"
import deleteNote from "../images/delete.svg" 
import { IoColorFillSharp } from "react-icons/io5";

const Nota = (propiedades) => {
    let fechaActual = null
    propiedades.hoy ? fechaActual=propiedades.hoy.getFullYear()+"-"+(propiedades.hoy.getMonth()+1)+"-"+propiedades.hoy.getDate() : fechaActual="0000-00-00"
    let datos = propiedades.datos ? propiedades.datos : {fechaCreacion : "0000-00-00",fechaLimite : "0000-00-00",descripcion : "error",colorCode:0}

    const [tachado, setTachado] = useState(false);
    const handleCheckboxClick = () => {
      setTachado(!tachado);
    };

    const [colorCode,setCode] = useState(["#FFF599","#C5BD77"])
    const [clases,setClases] = useState("triangulo")
    const [color, setColor] = useState(0)


    const handleChangeColor = () => {
      setColor((prevColor) => {
        const newColor = prevColor > 1 ? 0 : prevColor + 1;
        newColor == 0
          ? (setCode(["#FFF599", "#C5BD77"]), setClases("triangulo"))
          : newColor == 1
          ? (setCode(["#FF8282", "#D16C6C"]), setClases("triangulo triangulo2"))
          : (setCode(["#9CBBE9", "#7C95BB"]), setClases("triangulo triangulo3"))
        return newColor
      })
    }

    const plantillaNota = {
      fechaCreacion : "1999-05-05",
      fechaLimite : "1999-05-06",
      descripcion : "ielit illum!",
      colorElegido : "0"
    }

    const addNota = () =>{
      let nuevaNota = {...plantillaNota}
      nuevaNota.descripcion = document.getElementById("contenidoNota").value
      nuevaNota.fechaCreacion = document.getElementById("fechaCreacion").value
      nuevaNota.fechaLimite = document.getElementById("fechaLimite").value
      nuevaNota.colorElegido = color
      setColor(-1)
      handleChangeColor()
      document.getElementById("contenidoNota").value = ""
      let nuevoArray = [...propiedades.notas, nuevaNota ]
      propiedades.add(nuevoArray);
    }
    

    return(
    <div className='nota'>
        <div className={"containerSuperior"} style={{ backgroundColor: tachado ? colorCode[1] : colorCode[0] }}> 
          <div className='notaSuperior'>
            {propiedades.creacion ? 
            (<textarea name="" id="contenidoNota" cols="30" rows="10"></textarea>):
            (<textarea name="" id="contenidoNota" cols="30" rows="10" style={{ textDecoration: tachado ? 'line-through' : 'none' }} disabled>{datos.descripcion}</textarea>)
            }
          </div>
          <div className='containerIconos'>
            {propiedades.creacion ? 
            (<img onClick={addNota} className='iconoNota' src={add} alt="add"/>):
            (<input onClick={handleCheckboxClick} type="checkbox" className='checkbox' />)
            }
            <img className='iconoNota' src={deleteNote} alt="delete"/>
            <IoColorFillSharp className='colorPicker' onClick={handleChangeColor} /> 
          </div>
        </div>
        <div className='containerInferior' >
          <div className='notaInferior' style={{ backgroundColor: tachado ? colorCode[1] : colorCode[0] }}>
            <span className='fecha'>Fecha de creación:
                {propiedades.creacion ? 
                (<input type="date" id='fechaCreacion' value={fechaActual} disabled className='fecha fechaLimite'/>):
                (<input type="date" id= "fechaCreacion" value={datos.fechaCreacion} disabled className='fecha fechaLimite'/>)
                }
            </span>
            <span className='fecha'>Fecha límite:
                {propiedades.creacion ? 
                (<input type="date" id='fechaLimite' className='fecha fechaLimite'/>):
                (<input type="date" id='fechaLimite' value={datos.fechaLimite} disabled className='fecha fechaLimite'/>)
                }
            </span> 
          </div>
          <div className={clases}></div>
          <p></p>
        </div>
    </div>)
}


export {Nota}