import React, { useState, useRef, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import "../../index.css"
import { LuWallpaper } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md"; 
import "./clearAllTasks.css"
const ClearAllTasks = (task) => {
  const [menuVisible, setMenuVisible] = useState(false)
  

  return (
    <div className='container-clear-button'>
        <button className='button-clear' onClick={task.resetTask}><MdDeleteForever className='clear-all'/></button>
    </div>
  )
}

export {ClearAllTasks}