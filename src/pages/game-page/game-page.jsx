import React from "react";
import { useSelector } from "react-redux";
import { GameBuy } from "../../components/game-buy/game-buy";
import { GameGenre } from "../../components/game-genre/game-genre";
import "./game-page.css";

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            src={game.video}
            frameborder="0"
            width="90%"
            height="400px"
            title="Youtub Video"
          ></iframe>
        </div>
        <div className="game-page__right">
          <img className="game-page__img" src={game.image} alt="photo" />
          <p>{game.description}</p>
          <p className="secondary-text">Popular tags for this product:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
