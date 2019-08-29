import React from "react";
import MovieItems from './MoviesComp';
import MoviesGet from './MoviesGet';

export default function AllMovies() {
    return (
        <div>
            <div className='Movies'>{
                MoviesGet().map(movie => {
                    return <MovieItems key={movie.id} id={movie.id} name={movie.name} img={movie.img} alt={movie.alt}/>
                })
            }</div>
        </div>
    );
}