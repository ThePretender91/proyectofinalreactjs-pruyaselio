import React, {useContext} from 'react';

import { cartContext } from '../../contexts/cartContext';

const Cart = () => {
const { transaccion, clear, removeItem } = useContext(cartContext);

    const handleClearClick = () => clear();

    console.log(transaccion);
       
    return (
        <div>
            <p>En construcción...</p>
            <button onClick={handleClearClick}>Vaciar carrito</button>
            {transaccion.map((item, index) => (
                <div key={index}>
                    <p>Nombre: {item.nombre}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.precio}</p>
                    <button onClick={() => removeItem(item.idProducto)}>Borrar Item</button>
                </div>
            ))}

        </div>
    );
};

export default Cart;
