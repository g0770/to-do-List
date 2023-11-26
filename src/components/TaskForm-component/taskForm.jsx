import React, {useState} from 'react'
import { IoColorFillSharp } from "react-icons/io5";
import "./taskForm.css"
import { v4 as uuidv4 } from 'uuid';

import { FaPlusCircle } from "react-icons/fa";  

const TaskForm = ({addTask}) => {
    const colors = ["#FFF599", "#FF8282", "#9CBBE9"];
  
    const [colorIndex, setColorIndex] = useState(0);
  
    const handleColorChange = () => {
      const newIndex = (colorIndex + 1) % colors.length;
      setColorIndex(newIndex);
    };

  
    const trianguloStyle = {
      borderLeftColor: colors[colorIndex],
      borderBottomColor: colors[colorIndex],
    };
    
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const day = today.getDate().toString().padStart(2, '0');

    const fechaActual = `${year}-${month}-${day}`;
    const handleSubmitTask = (e) =>{
        e.preventDefault()
        const description = e.target.textareaNota.value;
        const fechaLimite = e.target.fechaLimite.value;
        const newTask = {
            description: description,
            fechaLimite: fechaLimite,
            creacion: fechaActual,
            id: uuidv4(),
            color: colorIndex,
            linetrough: false
        }
        addTask(newTask);
        e.target.textareaNota.value = ""
        e.target.fechaLimite.value = undefined
        setColorIndex(0)
    }
    return(
        <form className='notaMadre' onSubmit={handleSubmitTask}>
            <div className="containerSuperior" style={{ backgroundColor: colors[colorIndex]}}> 
                <div className='notaSuperior'>
                <textarea name="textareaNota" className="contenidoNota"></textarea>
                </div>
                <div className='containerIconos'>
                    <button className="buttonIcon" type='submit'>
                        <FaPlusCircle className='iconoNota colorPicker' alt="add"/>
                    </button>
                    <button className="buttonIcon" type='button'>
                        <IoColorFillSharp className='colorPicker' onClick={handleColorChange}/> 
                    </button>
                
                </div>
            </div>    
            <div className='containerInferior'>
                <div className='notaInferior' style={{ backgroundColor: colors[colorIndex]}}>
                <span className='fecha'>Fecha límite:
                    <input type="date" id='fechaLimite' name='fechaLimite' className='fecha fechaLimite'/>
                </span> 
                </div>
                <div className="triangulo" style={trianguloStyle}></div>
            </div>
        </form>)
}

export  {TaskForm}