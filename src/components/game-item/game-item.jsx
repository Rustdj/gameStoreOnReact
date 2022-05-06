import React from 'react';
import { GameBuy } from '../game-buy/game-buy';
import { GameGenre } from '../game-genre/game-genre';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';
import './game-item.css';

export const GameItem = ({ game }) => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        history(`/app${game.title}`);
    }
  return (
    <div className="game-item" onClick={handleClick}>
        <img className="game-icon" src={game.image} alt="" />
        <div className="game-item__details">
            <span>{game.title}</span>
            <div className="game-item__genre">
                {
                    game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)
                }
            </div>
            <div className="game-item__buy">
                <GameBuy game={game}/>
            </div>
        </div>
    </div>
  )
}
