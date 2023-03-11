import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Item from '../Item/Item'

const ItemListContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(res);
          }, 100); //3000
        });
      })
      .then((res) => res.json())
      .then((res) => setProductos(res));
  }, []);
  
  return (
    <>
      {productos.length === 0 ? (<p>Cargando Productos, por favor espere...</p>) 
      : (<div className='contenedorItems'>
          {id ? productos.filter((item) => item.categoria === id).map((item) => <Item key={item.id} item={item} />) 
          : productos.map((item) => <Item key={item.id} item={item} />)
          }
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
