import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { cartContext } from '../../contexts/cartContext';

const CartWidget = () => {
  const {cantTotal} = useContext(cartContext);
  
  return (
    <div className="carrito" key={cantTotal}>
      <Link to={'/Cart/'} className="infoCarrito">
      <img src='https://i.imgur.com/M7TmSbI.png' alt='Icono Carrito' />      
      {cantTotal !== 0 ? (<span>{cantTotal}</span>) : (<span></span>)}
      </Link>
    </div>    
  );
};

export default CartWidget;
