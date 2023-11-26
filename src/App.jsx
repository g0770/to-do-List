import React, {useEffect, useState, useRef} from 'react'
import "./index.css"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";
import { Menu } from './components/Menu-component/menu';
import { TaskForm } from './components/TaskForm-component/taskForm';
import  TaskList  from './components/TaskList-component/taskList';
import logo from "./images/todolistLogo.svg"

function App() {

  const bgIdGuardado = JSON.parse(localStorage.getItem("lastBgId")) || 0
  const [bgId,setBg] = useState(bgIdGuardado)
  const changeBg = (newId) =>{
    setBg(newId)
    localStorage.setItem("lastBgId", JSON.stringify(newId))
  }

  const backgroundGuardado = JSON.parse(localStorage.getItem("backgroundAnterior")) || "src/components/Menu-component/imgs/notfound.png"
  const [customBackground, setCustomBackground] = useState(backgroundGuardado)
  const inputRef = useRef(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCustomBackground(reader.result)
        localStorage.setItem("backgroundAnterior", JSON.stringify(reader.result))
        changeBg(6)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCustomBackgroundClick = () => {
    inputRef.current.click()
    changeBg(6)
  };

  const tasksGuardadas = JSON.parse(localStorage.getItem("tasks")) || []
  const [tasks, setTasks] = useState(tasksGuardadas)

  const addTask = (task) =>{
    setTasks([...tasks, task])
  }

  const resetTask = () => {
    const response = confirm("¿Está seguro de eliminar todas las notas?")
    response ? 
      setTasks([]) : {} /* es como el pass de python el {}*/
  }

  useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))}

  return (
    <div id='content' onLoad={handleCustomBackgroundClick}>
      <div id="bgFix" style={{backgroundImage: bgId === 6 ? `url(${customBackground})` : 'url(src/components/Menu-component/imgs/background'+bgId+'.png)'}}></div>
      <Menu bgId={bgId} bg={changeBg} customBg={customBackground} handleBgClick={handleCustomBackgroundClick} setCustomBg={setCustomBackground} imgUpload={handleImageUpload} inputRef={inputRef}/>
      <header className='cabecera' >
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp" onClick={resetTask}/>
        </header>
      <div className="notitas">
        
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
        <div className='alinearNota'> 
          <TaskForm addTask={addTask} />
        </div>
      </div>
    </div>
  )
}

export default App