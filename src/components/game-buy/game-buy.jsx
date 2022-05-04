import React from 'react';
import { Button } from '../button/button';
import './game-buy.css';

export const GameBuy = ({ game }) => {
  return (
    <div className="game-buy">
        <span className="game-buy__price">{game.price} руб.</span>
        <Button 
            type="primary"
            onClick={ () => null}
        >
            To cart
        </Button>
            
        
    </div>
  )
}
