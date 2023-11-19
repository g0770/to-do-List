import React from 'react'
import "./product.css"

const Product = (propiedades) =>{
    let nombre = propiedades.nombre ? propiedades.nombre : "Error"
    let precio = parseFloat(propiedades.precio ? propiedades.precio : "0").toFixed(2)
    let comprado = propiedades.comprado
    const msg = () =>{
      alert("ji ji")
    }
    return(
      <div className='producto'>
        <h2>{nombre}</h2>
        <span>Precio: ${precio} </span>
        <button disabled={comprado} onClick={msg}>
          {comprado ? "comprado" : "comprar"}
        </button>
        {
          propiedades.liked
          ? <button>Dislike</button>
          : <button>Like</button>
        }
      </div>
    )
  }

  export {Product}