import React, {useState} from 'react'
import "../../index.css"
import add from "../images/add.svg"
import deleteNote from "../images/delete.svg" 

const Nota = (propiedades) => {
    let fechaActual = null
    propiedades.hoy ? fechaActual=propiedades.hoy.getFullYear()+"-"+propiedades.hoy.getMonth()+"-"+propiedades.hoy.getDate() : fechaActual="0000-00-00"
    let datos = propiedades.datos ? propiedades.datos : {fechaCreacion : "0000-00-00",fechaLimite : "0000-00-00",descripcion : "error"}
    
    const [tachado, setTachado] = useState(false);
    const handleCheckboxClick = () => {
      setTachado(!tachado);
    };

    return(
    <div className='nota'>
        <div className={"containerSuperior"} style={{ backgroundColor: tachado ? '#C5BD77' : '#FFF599' }}> 
          <div className='notaSuperior'>
            {propiedades.creacion ? 
            (<textarea name="" id="contenidoNota" cols="30" rows="10"></textarea>):
            (<textarea name="" id="contenidoNota" cols="30" rows="10" style={{ textDecoration: tachado ? 'line-through' : 'none' }} disabled>{datos.descripcion}</textarea>)
            }
          </div>
          <div className='containerIconos'>
            {propiedades.creacion ? 
            (<img className='iconoNota' src={add} alt="add"/>):
            (<input onClick={handleCheckboxClick} type="checkbox" className='checkbox' />)
            }
            <img className='iconoNota' src={deleteNote} alt="delete"/> 
          </div>
        </div>
        <div className='containerInferior' >
          <div className='notaInferior' style={{ backgroundColor: tachado ? '#C5BD77' : '#FFF599' }}>
            <span className='fecha'>Fecha de creación:
                {propiedades.creacion ? 
                (<input type="date" value={fechaActual} className='fecha fechaLimite'/>):
                (<input type="date" value={datos.fechaCreacion} disabled className='fecha fechaLimite'/>)
                }
            </span>
            <span className='fecha'>Fecha límite:
                {propiedades.creacion ? 
                (<input type="date" className='fecha fechaLimite'/>):
                (<input type="date" value={datos.fechaLimite} disabled className='fecha fechaLimite'/>)
                }
            </span> 
          </div>
          <div className='triangulo'></div>
          <p></p>
        </div>
        
    </div>)
}


export {Nota}