import React, { useState } from "react";
import "./cart-block.css";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { calcTotalPrice } from "../utils";
import { CartMenu } from "../cart-menu/cart-menu";
import { ItemsInCart } from "../items-in-cart/items-in-cart";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <ShoppingCartIcon
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
