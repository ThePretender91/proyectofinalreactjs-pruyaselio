import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount'
import { cartContext } from '../../contexts/cartContext';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);
  const [mostrar, setMostrar] = useState();
  const {addItem, setCantTotal} = useContext(cartContext);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((res) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(res);
          }, 100); //1000
        });
      })
      .then((res) => res.json())
      .then((res) => setProductos(res));
  }, []);

  const onAddCountHandler = (cantidad, item) => {
    setMostrar(cantidad);
    addItem(item, cantidad);
    setCantTotal(prevCant => prevCant + cantidad);
  };
  
  
  return (
  <>  
  {productos.length === 0 ? (
    <p>Cargando Detalles de Producto, por favor espere...</p>
    ) : (
    <div className='contenedorGeneralDetalles'>
      {productos.filter((item) => item.id === parseInt(id)).map((item) => (
      <div className='contenedorDetallesProducto' key={item.id}>
        <div><img src={item.imagen} alt={item.nombre} /></div>
        <div>
          <p>Nombre: {item.nombre}</p>
          <p>Detalles: {item.descripcion}</p>
          <p>Precio: {item.precio.toLocaleString("es-AR")}</p>
          {mostrar ? (<div className='contenedorBotonDetalles'><Link to={'/Cart/'}><button>Ir a Carrito</button></Link></div>
          ) : (<ItemCount onAdd={(cantidad) => onAddCountHandler(cantidad, item)} stock={item.stock}/>)}
        </div>
      </div>
      ))}
    </div>
    )}
  </>
  );
};

export default ItemDetailContainer;
