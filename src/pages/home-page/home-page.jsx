import React from 'react';
import { GameItem } from '../../components/game-item/game-item';
import './home-page.css';

const GAMES = [
    {
        image: require('../game-covers/icon.jpeg'),
        title: 'Forza Horizon 5',
        genres: ['Racing', 'Simulator', 'Open world'],
        price: 23,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "An endless kaleidoscope of Horizon adventures awaits you! Take exciting trips through the incredibly beautiful and original world of Mexico behind the wheel of the greatest cars in history. Start your Horizon adventure today by adding the game to your wishlist!",
    },
    {
        image: require('../game-covers/icon1.png'),
        title: 'Battlefield 2042',
        genres: ['Action', 'Shooter', 'War'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 22,
        id: 2,
        description: 'Battlefield™ 2042 — is a first-person shooter that brings the series back to legendary large-scale battles. In a chaotic future, adapt and thrive on ever-changing battlefields with your squad and an arsenal of the latest technology.'
    },
    {
        image: require('../game-covers/icon2.jpg'),
        title: 'Life is Strange True Colors',
        genres: ['Deep plot', 'Protagonist'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 25,
        id: 3,
        description: 'Alex Chen hides from everyone his "curse" - the supernatural ability to read the strong emotions of others and influence them. But when her brother dies - allegedly in an accident - Alex uses her to find out the truth'
    },
    {
        image: require('../game-covers/icon3.jpeg'),
        title: 'Grand Theft Auto V',
        genres: ['Open world', 'Action'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 11,
        id: 4,
        description: 'Grand Theft Auto V for PC allows players to explore the iconic world of Los Santos and Blaine County in resolutions up to 4k and beyond at 60 frames per second.'
    },
    {
        image: require('../game-covers/icon4.jpeg'),
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Tactics', 'Shooter'],
        price: 12,
        id: 5,
        description: 'Tom Clancy\'s Rainbow Six Siege is the sequel to the acclaimed first-person shooter developed by Ubisoft Montreal.'
    },
    {
        image: require('../game-covers/icon5.jpeg'),
        title: 'Assassin’s Creed Valhalla',
        genres: ['Parkour', 'RPG', 'Open World'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 29,
        id: 6,
        description: 'Assassins Creed Valhalla is a multi-platform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassins Creed series.'
    },
]

export const HomePage = () => {
  return (
    <div className="home-page">
        {
            GAMES.map(game => <GameItem game={game} key={game.id}/>)
        }
    </div>
  )
}
