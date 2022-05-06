import React, { useCallback, useState } from "react";
import "./cart-block.css";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { calcTotalPrice } from "../utils";
import { CartMenu } from "../cart-menu/cart-menu";
import { ItemsInCart } from "../items-in-cart/items-in-cart";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const history = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history(`/order`);
  }, [history]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <ShoppingCartIcon
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} $</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={ handleClick } />}
    </div>
  );
};
