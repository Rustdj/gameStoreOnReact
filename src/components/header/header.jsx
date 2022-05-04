import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartBlock } from '../cart-block/cart-block';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
        <div className="wrapper">
            <NavLink to="/" className="header__store-title">
                Game Store
            </NavLink>
        </div>
        <div className="wrapper header__cart-btn-wrapper">
            <CartBlock/>
        </div>
    </div>
  )
}
