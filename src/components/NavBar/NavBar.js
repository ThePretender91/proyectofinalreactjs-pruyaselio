import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className='iconoPagina'>
        <Link to="/"> <img src="https://i.imgur.com/Aw4yrQ4.jpg" alt="TECNOSTORE" /></Link>
      </div>
      <ul className="secciones">
        <li className="itemSecciones">
          <NavLink to="/Category/Celulares" className="navLink"> Celulares </NavLink>
        </li>
        <li className="itemSecciones">
          <NavLink to="/Category/Notebooks" className="navLink"> Notebooks </NavLink>
        </li>
        <li className="itemSecciones">
          <NavLink to="/Category/Televisores" className="navLink"> Televisores </NavLink>
        </li>
        <CartWidget />
    </ul>        
   </nav>
    </>
  );
};

export default Navbar;
