import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount'
import { cartContext } from '../../contexts/cartContext';

import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const {id} = useParams();
  const [producto, setProducto] = useState([]);
  const [mostrar, setMostrar] = useState();
  const {addItem, setCantTotal} = useContext(cartContext);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'productos', id);
    getDoc(itemRef).then((snapshot) => {
      const obj = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      setProducto(obj);
    });
  }, [id]);

  const onAddCountHandler = (cantidad, item) => {
    setMostrar(cantidad);
    addItem(item, cantidad);
    setCantTotal(prevCant => prevCant + cantidad);
  };
    
  return (
    <>  
      {producto.length === 0 ? (
        <div className="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
      ) : (
        <div className='contenedorGeneralDetalles'>
          <div className='contenedorDetallesProducto' key={producto.id}>
            <div><img src={producto.imagen} alt={producto.nombre} /></div>
            <div>
              <p>Nombre: {producto.nombre}</p>
              <p>Detalles: {producto.descripcion}</p>
              <p>Precio: {producto.precio.toLocaleString("es-AR")}</p>
              {mostrar ? (
                <div className='contenedorBotonDetalles'>
                  <Link to={'/Cart/'}><button>Ir a Carrito</button></Link>
                </div>
              ) : (
                <ItemCount onAdd={(cantidad) => onAddCountHandler(cantidad, producto)} stock={producto.stock}/>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );  
};

export default ItemDetailContainer;
