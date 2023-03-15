import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Item from '../Item/Item'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
  
    const itemsCollection = collection(db, 'productos');
    const q = id ? query(itemsCollection, where('categoria', '==', id)) : itemsCollection;
    
    getDocs(q).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setProductos(docs);
    });
  }, [id]);

  return (
    <>
      {productos.length === 0 ? (
        <div className="loadingspinner">          
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
        </div>
      ) : (
      <div className='contenedorItems'>
        {productos.map((item) => <Item key={item.id} item={item} />)}
      </div>
      )}
    </>
  );
};

export default ItemListContainer;
