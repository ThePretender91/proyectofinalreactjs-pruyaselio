import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  const {id, nombre, precio, imagen} = item;

  return(
    <Link to={`/Item/${id}`} className='cardItem' key={id}>
        <div><img src={imagen} alt={item.nombre}/></div>
        <p>{nombre}</p>
        <p>${precio.toLocaleString("es-AR")}</p>
        <div>VER PRODUCTO</div>
    </Link>
  );
};

export default Item;