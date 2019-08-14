import AfroSam from './images/AfroSamiri.jpg';
import Akira from './images/Akira.jpg';
import DragonBallZ from './images/DragonBallZ.jpg';
import OnePFilm from './images/OnePFilm.jpg';
import SpiritedAway from './images/SpiritedAway.jpg';
import GhostinShell from './images/GhostinShell.jpg';

export default function MoviesGet () {
    return [
        {id:'Afro', name:"AFRO SAMURAI", img:AfroSam, alt:"AFRO"},
        {id:'Akira', name:"AKIRA", img:Akira, alt:"AKIRA"},
        {id:'Dragon', name:"DRAGON BALL Z", img:DragonBallZ, alt:"DRAGON BALL Z"},       
        {id:'One', name:"ONE PIECE", img:OnePFilm, alt:"OnePFilm"},
        {id:'Spirited', name:"SPIRITED AWAY", img:SpiritedAway, alt:"SPIRITED AWAY"},
        {id:'Ghost', name:"GHOST IN THE SHELL", img:GhostinShell, alt:"GHOST IN SHELL"}
    ];
}