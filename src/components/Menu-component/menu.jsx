import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import "../../index.css"
import "./menu.css"
import { LuWallpaper } from "react-icons/lu";

const Menu = (propiedades) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const [selected, setSelected] = useState(0)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  };

  const handleOptionClick = (option) => {
    propiedades.bg(option)
    setSelected(option);
    setMenuVisible(false)
  };


  return (
    <div >
      <div className='menu-toggle' onClick={toggleMenu}>
      <LuWallpaper size={40} className='changeBackground'/>
      </div>

      {/* Menú desplegable */}
      {menuVisible && (
        <div className='menu'>
          <div className={`menuOption ${selected === 0 ? 'selected' : ''}`} onClick={() => handleOptionClick(0)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background0.png")'}}></div> Tablero de Corcho</div>
          <div className={`menuOption ${selected === 1 ? 'selected' : ''}`} onClick={() => handleOptionClick(1)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background1.png")'}}></div> Hoja cuadriculada</div>
        </div>
      )}
      </div>
  )
}

export {Menu}