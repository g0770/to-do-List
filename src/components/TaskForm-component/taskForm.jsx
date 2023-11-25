import React, {useState} from 'react'
import addIcon from "../../images/add.svg" //hay que usar react icon
import { IoColorFillSharp } from "react-icons/io5";
import "./taskForm.css"
import { v4 as uuidv4 } from 'uuid';
const TaskForm = ({addTask}) => {
    const colors = ["#FFF599", "#FF8282", "#9CBBE9"];
    const colorsTachado = ["#C5BD77", "#D16C6C", "#7C95BB"];
  
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
            color: colorIndex
        }
        addTask(newTask);
    }
    return(
        <form className='notaMadre' onSubmit={handleSubmitTask}>
            <div className="containerSuperior" style={{ backgroundColor: colors[colorIndex]}}> 
                <div className='notaSuperior'>
                <textarea name="textareaNota" className="contenidoNota"></textarea>
                </div>
                <div className='containerIconos'>
                    <button className="buttonIcon" type='submit'>
                        <img className='iconoNota' src={addIcon} alt="add"/>
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