import React from 'react';
import './cart-block.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartBlock = () => {
  return (
    <div className="cart-block">
        <ShoppingCartIcon className="cart-block__icon"/>
        <span className="cart-block__total-price">1890 руб.</span>
    </div>
  )
}
