import React from "react";
import AfroSam from './images/AfroSamiri.jpg';
import Akira from './images/Akira.jpg';
import DragonBallZ from './images/DragonBallZ.jpg';
import OnePFilm from './images/OnePFilm.jpg';
import SpiritedAway from './images/SpiritedAway.jpg';
import GhostinShell from './images/GhostinShell.jpg';
import MovieItems from './MoviesComp';

export default function AllMovies() {
    return (
    <div>
        <div className = "Movies">     
            <MovieItems id='Afro' name = "AFRO SAMURAI" img = {AfroSam} alt = "AFRO"/>
            <MovieItems id='Akira' name = "AKIRA" img = {Akira} alt = "AKIRA"/>
            <MovieItems id='Dragon' name = "DRAGON BALL Z" img = {DragonBallZ} alt = "DRAGON BALL Z"/>          
        </div>
        <div className = "Movies">
            <MovieItems id='One' name = "ONE PIECE" img ={OnePFilm} alt = "OnePFilm"/>
            <MovieItems id='Spirited' name = "SPIRITED AWAY" img ={SpiritedAway} alt = "SPIRITED AWAY"/>
            <MovieItems id='Ghost' name = "GHOST IN THE SHELL" img ={GhostinShell} alt = "GHOST IN SHELL"/>
        </div>
    </div>
  );
}