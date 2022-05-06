import React from 'react'
import { useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './order-item.css'

export const OrderItem = ({game}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }
  return (
    <div className="order-item">
        <div className="order-item__cover">
            {/* <GameCover image={game.image}/> */}
        </div>
        <div className="order-page__title">
            <span>{game.title}</span>
        </div>
        <div className="order-item__price">
            <span>{game.price} rub.</span>
            <CancelIcon
                size={25}
                className="cart-item__delete-icon"
                onClick={handleClick}
            />
        </div>
    </div>
  )
}
