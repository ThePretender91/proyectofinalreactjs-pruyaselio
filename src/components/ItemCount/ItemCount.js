import React, { useState, useEffect } from 'react';

const ItemCount = ({ stock }) => {
  const [contar, setContar] = useState(1);

  const Sumar = () => {
    if (contar < stock) {
      setContar(contar + 1);
    }
  };

  const Restar = () => {
    if (contar > 1) {
      setContar(contar - 1);
    }
  };
  useEffect(() => {}, [contar]);

  return (
    <>
      <div className='contenedorContador'>
        <p className='botonContador' onClick={Sumar}>🔼</p>
        <p>{contar}</p>
        <p className='botonContador' onClick={Restar}>🔽</p>
      </div>      
    </>
  );
};

export default ItemCount;
