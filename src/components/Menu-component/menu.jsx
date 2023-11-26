import React, { useState, useRef, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import "../../index.css"
import "./menu.css"
import { LuWallpaper } from "react-icons/lu";

const Menu = (propiedades) => {
  const [menuVisible, setMenuVisible] = useState(false)
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  };

  const handleOptionClick = (option) => {
    propiedades.bg(option)
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
          <div className={`menuOption`} onClick={propiedades.handleBgClick}>
            <input
              type="file"
              accept="image/*"
              ref={propiedades.inputRef}
              style={{ display: 'none' }}
              onChange={propiedades.imgUpload}
            />
            <div className="miniBackground" style={{ backgroundImage: `url(src/components/Menu-component/imgs/upload.png)` }}></div>
            Subir Imagen
          </div>
          <div className={`menuOption ${propiedades.bgId === 0 ? 'selected' : ''}`} onClick={() => handleOptionClick(0)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background0.png")'}}></div> Tablero de Corcho</div>
          <div className={`menuOption ${propiedades.bgId === 1 ? 'selected' : ''}`} onClick={() => handleOptionClick(1)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background1.png")'}}></div> Hoja cuadriculada</div>
          <div className={`menuOption ${propiedades.bgId === 2 ? 'selected' : ''}`} onClick={() => handleOptionClick(2)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background2.png")'}}></div> Montañas</div>
          <div className={`menuOption ${propiedades.bgId === 3 ? 'selected' : ''}`} onClick={() => handleOptionClick(3)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background3.png")'}}></div> Naturaleza</div>
          <div className={`menuOption ${propiedades.bgId === 4 ? 'selected' : ''}`} onClick={() => handleOptionClick(4)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background4.png")'}}></div> Ladrillos</div>
          <div className={`menuOption ${propiedades.bgId === 5 ? 'selected' : ''}`} onClick={() => handleOptionClick(5)}> <div className="miniBackground" style={{backgroundImage: 'url("src/components/Menu-component/imgs/background5.png")'}}></div> XP Nostalgia</div>
          <div className={`menuOption ${propiedades.bgId === 6 ? 'selected' : ''}`} onClick={() => handleOptionClick(6)}><div className="miniBackground" style={{ backgroundImage: `url(${propiedades.customBg ? propiedades.customBg : `url(src/components/Menu-component/imgs/notfound.png)`})` }}></div>Custom</div>
        </div>
      )}
      </div>
  )
}

export {Menu}