import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { cartContext } from '../../contexts/cartContext';

const CartWidget = () => {
  const {cantTotal} = useContext(cartContext);
  
  return (
    <div className="carrito" key={cantTotal}>
      <Link to={'/Cart/'} className="infoCarrito">
      <img src='https://i.imgur.com/M7TmSbI.png' alt='Icono Carrito' />      
      <span>{cantTotal}</span>
      </Link>
    </div>    
  );
};

export default CartWidget;
