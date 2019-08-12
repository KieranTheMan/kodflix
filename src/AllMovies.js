import React from "react";
// import MetalLogo from './/images/FullMetal.jpg';
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
            <MovieItems name = "AFRO SAMURAI" img = {AfroSam} alt = "AFRO"/>
            <MovieItems name = "AKIRA" img = {Akira} alt = "AKIRA"/>
            <MovieItems name = "DRAGON BALL Z" img = {DragonBallZ} alt = "DRAGON BALL Z"/>          
        </div>
        <div className = "Movies">
            <MovieItems name = "ONE PIECE" img ={OnePFilm} alt = "OnePFilm"/>
            <MovieItems name = "SPIRITED AWAY" img ={SpiritedAway} alt = "SPIRITED AWAY"/>
            <MovieItems name = "GHOST IN THE SHELL" img ={GhostinShell} alt = "GHOST IN SHELL"/>
        </div>
    </div>
  );
}
 {/* <div className="Cover">
        <img src={MetalLogo} alt="MetalLogo"/>
    </div> */}