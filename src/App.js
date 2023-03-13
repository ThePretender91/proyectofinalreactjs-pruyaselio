import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { CartProvider } from './contexts/cartContext'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>    
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/Category/:id' element={<ItemListContainer />} />
        <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>    
    </CartProvider>
  );
}

export default App;
