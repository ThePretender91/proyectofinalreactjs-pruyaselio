import React, { useContext, useState, useEffect } from 'react';

import { cartContext } from '../../contexts/cartContext';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const formBase = {
    name: '',
    email: '',
    phone: '',
  };

const Cart = () => {
    const { transaccion, clear, removeItem } = useContext(cartContext);
    const [form, setForm] = useState(formBase);
    const [total, setTotal] = useState(0);    

    useEffect(() => {
        const newTotal = transaccion.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
        setTotal(newTotal);
    }, [transaccion]);

    const handleClearClick = () => clear();

    const submitHandler = (ev) => {
        ev.preventDefault();

        const buyer = {
            name: form.name,
            phone: form.phone,
            email: form.email,
        };

        const items = transaccion.map((item) => ({
            id: item.idProducto,
            title: item.nombre,
            cantidad: item.cantidad,
            price: item.precio,
        }));

        const date = new Date();
        const total = transaccion.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
        const order = { buyer, items, date, total };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then((docRef) => {
                setForm(formBase);
                clear();
                
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha procesado su pedido',
                    text: `El ID de la transaccion es: ${docRef.id}`,
                    showConfirmButton: true,
                    allowEscapeKey: false,
                    allowOutsideClick: false
                });
            })
    };

    const inputChangeHandler = (ev) => {
        const { name, value } = ev.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className="cart-container">
          {transaccion.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div className="cart-items-container">
              <div className="cart-buttons-container">
                <button className="clear-cart-button clickeable" onClick={handleClearClick}><span>Vaciar Carrito</span>🗑️</button>
              </div>
              {transaccion.map((item, index) => (
                <div key={index} className="cart-item-container">
                  <div className="cart-item-details">
                    <p>Nombre: {item.nombre}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.precio}</p>
                  </div>
                  <div className="cart-item-buttons-container">
                    <button className="remove-item-button clickeable" onClick={() => removeItem(item.idProducto)}>❌</button>
                  </div>
                </div>
              ))}
              <div className="cart-total">TOTAL: ${total.toLocaleString("es-AR")}</div>

              <div><span>Complete los siguientes datos:</span></div>
              <form onSubmit={submitHandler} className="checkout-form">
                <div className="form-field">
                  <label htmlFor="name">Nombre</label>
                  <input name="name" id="name" value={form.name} onChange={inputChangeHandler} required />
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Telefono</label>
                  <input type="tel" name="phone" id="phone" value={form.phone} onChange={inputChangeHandler} required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={form.email} onChange={inputChangeHandler} required />
                </div>
                <button className="checkout-button clickeable">Comprar</button>
              </form>
            </div>
          )}
        </div>
    );
};

export default Cart;
