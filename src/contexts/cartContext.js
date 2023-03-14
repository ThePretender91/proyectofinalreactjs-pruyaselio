import React, { useState, useEffect } from 'react';

const cartContext = React.createContext();

const CartProvider = ({children}) => {
    const [transaccion, setTransaccion] = useState([]);
    const [cantTotal, setCantTotal] = useState(0);

    useEffect(() => {
      setCantTotal(transaccion.length);
    }, [transaccion]);

    const addItem = (item, cantidad) => {
      const idProducto = item.id;
      const newItem = {
        idProducto,
        nombre: item.nombre,
        precio: item.precio,
        cantidad
      };

      const itemIndex = transaccion.findIndex(item => item.idProducto === idProducto);
      if (itemIndex === -1) {
        setTransaccion([...transaccion, newItem]);
      } else {
        const newTransaccion = [...transaccion];
        newTransaccion[itemIndex].cantidad += cantidad;
        setTransaccion(newTransaccion);
      }
    };

    const clear = () => {
      setTransaccion([]);
      setCantTotal(0);
    };

    const removeItem = (itemId) => {
      const newTransaccion = transaccion.filter(item => item.idProducto !== itemId);
      setTransaccion(newTransaccion);
      setCantTotal(newTransaccion.length);
    };
  
    return (
        <cartContext.Provider value={{transaccion, setTransaccion, cantTotal, setCantTotal, addItem, clear, removeItem}}>
            {children}
        </cartContext.Provider>
    );
};

export { cartContext, CartProvider };
