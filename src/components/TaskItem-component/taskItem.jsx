import React from "react";
import { useState } from "react";
import addIcon from "../../images/add.svg" //hay que usar react icon
import deleteIcon from "../../images/delete.svg" //hay que usar react icon
import { IoColorFillSharp } from "react-icons/io5";
import "./taskItem.css"
const TaskItem = ({ task,deleteTask }) => {
    const colors = ["#FFF599", "#FF8282", "#9CBBE9"];
    const colorsTachado = ["#C5BD77", "#D16C6C", "#7C95BB"];
  
    const [colorIndex, setColorIndex] = useState(task.color);
    const [tachado, setTachado] = useState(false);
  
    const handleColorChange = () => {
      const newIndex = (colorIndex + 1) % colors.length;
      setColorIndex(newIndex);
    };
  
    const handleChangeCheckbox = () => {
      setTachado(!tachado);
    };
  
    const trianguloStyle = {
      borderLeftColor: colors[colorIndex],
      borderBottomColor: colors[colorIndex],
    };
    
    return (
      <div>
        <div className="nota">
          <div className="containerSuperior" style={ !tachado ? { backgroundColor: colors[colorIndex] } :{ backgroundColor: colorsTachado[colorIndex] } }>
            <div className='notaSuperiorP'>
              <textarea name="textareaNota" className="contenidoNota" disabled style={{ textDecoration: tachado ? "line-through" : "none" }}>{task.description}</textarea>
            </div>
            <div className='containerIconos'>
              <input type="checkbox" className='checkbox' onClick={handleChangeCheckbox} />
              <button className="buttonIcon" type='button'>
                <img className='iconoNota' src={deleteIcon} alt="delete" onClick={() => deleteTask(task.id)}/>
              </button>
              <button className="buttonIcon" type='button'>
                <IoColorFillSharp className='colorPicker' onClick={handleColorChange}/> 
              </button>
            </div>
          </div>
          <div className='containerInferior'>
            <div className='notaInferior' style={ !tachado ? { backgroundColor: colors[colorIndex] } :{ backgroundColor: colorsTachado[colorIndex] } }>
              <span className='fecha'>Fecha de creación: {task.creacion}</span> 
              {task.fechaLimite && <span className='fecha'>Fecha límite: {task.fechaLimite}</span>}
            </div>
            <div className="triangulo" style={trianguloStyle}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TaskItem;