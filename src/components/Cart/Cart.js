import React, {useContext} from 'react';

import { cartContext } from '../../contexts/cartContext';

const Cart = () => {
    const {transaccion} = useContext(cartContext);
       
    return (
        <div>
            <p>En construccion...</p>
            {transaccion.map((item, index) => (
                <div key={index}>
                    <p>Nombre: {item.nombre}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
