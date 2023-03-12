import React, { useState } from 'react';

const ItemCount = ({ onAdd, stock }) => {
  const [contar, setContar] = useState(1);

  const onClickSumarhandler = () => {
    if (contar < stock) {
      setContar(contar + 1);
    }
  };

  const onClickRestarhandler = () => {
    if (contar > 1) {
      setContar(contar - 1);
    }
  };

  const onAddhandler  = () => {
    onAdd (contar);
  };

  return (
    <>
      <div className='contenedorContador'>
        <p className='botonContador' onClick={onClickSumarhandler}>🔼</p>
        <p>{contar}</p>
        <p className='botonContador' onClick={onClickRestarhandler}>🔽</p>
      </div>
      <div className='contenedorBotonDetalles'><button onClick={onAddhandler}>Agregar al Carrito</button></div>
    </>
  );
};

export default ItemCount;
