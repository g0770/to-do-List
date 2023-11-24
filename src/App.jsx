import React, {useState} from 'react'
import "./index.css"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";
import { Menu } from './components/Menu-component/menu';
import { TaskForm } from './components/TaskForm-component/taskForm';
import  TaskList  from './components/TaskList-component/taskList';
import logo from "./images/todolistLogo.svg"
function App() {

  const [fondo,setBg] = useState(0)
  const changeBg = (newId) =>{
    setBg(newId)
  }
  /*
  empiezo a hacer cambios
  */
  const [tasks, setTasks] = useState([])
  const addTask = (task) =>{
    setTasks([...tasks, task])
  }
  console.log(tasks);
  return (
    <div id='content' >
      <div id="bgFix" style={{backgroundImage: 'url(src/components/Menu-component/imgs/background'+fondo+'.png)'}}></div>
      <Menu bg={changeBg}/>
      <header className='cabecera'>
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp"/>
        </header>
      <div className="notitas">
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks}/>
      </div>  
    </div>
  )
}

export default App