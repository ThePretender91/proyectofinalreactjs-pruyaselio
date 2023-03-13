import React, { useState, useEffect } from 'react';

const cartContext = React.createContext();

const CartProvider = ({children}) => {
    const [transaccion, setTransaccion] = useState([]);
    const [cantTotal, setCantTotal] = useState(0);

    useEffect(() => {
      setCantTotal(transaccion.length);
    }, [transaccion]);
  
    return (
        <cartContext.Provider value={{transaccion, setTransaccion, cantTotal, setCantTotal}}>
            {children}
        </cartContext.Provider>
    );
};


export { cartContext, CartProvider };
