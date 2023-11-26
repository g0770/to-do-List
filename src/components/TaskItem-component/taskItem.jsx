import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./taskItem.css"
const TaskItem = ({ task,deleteTask}) => {
    const colors = ["#FFF599", "#FF8282", "#9CBBE9"];
  
    const [colorIndex, setColorIndex] = useState(task.color);
    const [linetrough, setLinetrough] = useState(task.linetrough);
  
    const handleColorChange = () => {
      const newIndex = (colorIndex + 1) % colors.length;
      setColorIndex(newIndex);
    };
  
    const handleChangeCheckbox = () => {
      setLinetrough(!linetrough);
    };
  
    const trianguloStyle = {
      borderLeftColor: colors[colorIndex],
      borderBottomColor: colors[colorIndex],
    };

    const today = new Date()
    const limit = Date.parse(task.fechaLimite)
    let fechaAlerta = false

    limit < today ? fechaAlerta = true : {}
    
    return (
      <div>
        <div className="nota" style={linetrough ? { filter: "brightness(50%)" } : {}}>
          <div className="containerSuperior" style={{backgroundColor: colors[colorIndex]}}>
            <div className='notaSuperiorP'>
              <textarea name="textareaNota" value={task.description} className="contenidoNota" disabled style={{ textDecoration: linetrough ? "line-through" : "none" }}></textarea>
            </div>
            <div className='containerIconos'>
              <input type="checkbox" className='checkbox' onClick={handleChangeCheckbox} />
              <button className="buttonIcon" type='button'>
                <FaTrashAlt className='iconoNota colorPicker' alt="delete" onClick={() => deleteTask(task.id)}/>
              </button>
            </div>
          </div>
          <div className='containerInferior'>
            <div className='notaInferior' style={{backgroundColor: colors[colorIndex]}}>
              <span className='fecha'>Fecha de creación: {task.creacion}</span> 
              {task.fechaLimite && <span className={"fecha "+(fechaAlerta ? "fechaAlerta": "")}>Fecha límite: {task.fechaLimite}</span>}
            </div>
            <div className="triangulo" style={trianguloStyle}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TaskItem;