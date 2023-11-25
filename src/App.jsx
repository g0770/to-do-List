import React, {useEffect, useState} from 'react'
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

  const tasksGuardadas = JSON.parse(localStorage.getItem("tasks"))
  const [tasks, setTasks] = useState(tasksGuardadas)

  const addTask = (task) =>{
    setTasks([...tasks, task])
  }

  const resetTask = () => {
    const response = confirm("¿Está seguro de eliminar todas las notas?")
    response ? setTasks([]) : {} /* es como el pass de python el {}*/
  }

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))}

  return (
    <div id='content' >
      <div id="bgFix" style={{backgroundImage: 'url(src/components/Menu-component/imgs/background'+fondo+'.png)'}}></div>
      <Menu bg={changeBg}/>
      <header className='cabecera' >
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp" onClick={resetTask}/>
        </header>
      <div className="notitas">
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      </div>  
    </div>
  )
}

export default App