import './itemes.css';
import {Link} from 'react-router-dom'
import React from 'react-router';

const Item = ({info}) =>{ 
   return (
         <div className='card'>
            <img src={info.imagen} alt=""/> 
            <p>{info.marca}</p> 
            <p>{info.modelo}</p>
            <p>{info.Precio}</p>
            <button className='button'>Ver detalle del producto</button>
            <hr></hr>
            <p>stock de producto: {info.stock} disponibles </p>
         </div>
   );
}
export default Item;