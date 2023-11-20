import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import "../../index.css"
import { LuWallpaper } from "react-icons/lu";

const Menu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMenuVisible(false);
  };

/*   useEffect(() => {
    // Cambiar el fondo del body según la opción seleccionada
    if (selectedOption === 'opcion1') {
      document.body.style.background = 'linear-gradient(0deg, rgba(105, 25, 0, 0.42) 0%, rgba(105, 25, 0, 0.42) 100%), url(./components/images/tablerodecorcho.png), lightgray 50% / cover no-repeat';
    } else if (selectedOption === 'opcion2') {
      // Puedes cambiar a otro fondo para la opción 2 si lo deseas
      document.body.style.background = 'blue';
    } else {
      // Restablecer el fondo a su valor original si ninguna opción está seleccionada
      document.body.style.background = 'linear-gradient(0deg, rgba(105, 25, 0, 0.42) 0%, rgba(105, 25, 0, 0.42) 100%), url(./components/images/tablerodecorcho.png), lightgray 50% / cover no-repeat';
    }

      // Limpia el efecto cuando el componente se desmonta
      return () => {
        document.body.style.background = '';
      };
    }, [selectedOption]); */

  return (
    <div >
      <div className='menu-toggle' onClick={toggleMenu}>
      <LuWallpaper size={40} className='changeBackground'/>
      </div>

      {/* Menú desplegable */}
      {menuVisible && (
        <div className='menu'>
           <div onClick={() => handleOptionClick('opcion1')}>Opción 1</div>
          <div onClick={() => handleOptionClick('opcion2')}>Opción 2</div>
        </div>
      )}
      </div>
  )
}

export {Menu}