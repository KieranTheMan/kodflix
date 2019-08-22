import React from 'react';
import getMovies from './MoviesGet.js';

export default class app extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: {}
        };
    }
    componentDidMount() {
        let movieID = this.props.match.params.movieID;
        let movies = getMovies().find(movie => movie.id === movieID);
            this.setState({movies: movies});
        }
        render() {
            return (
                <div>
                    <h1>{this.state.movies.name}</h1>
                </div>
            );
        }
}

