import React from 'react';
import getMovies from './MoviesGet.js';

// export default function Details(props) {

//     const [message, setMessage] = React.useState('Change this message into coming soon');  // set in state,, what to change in to, use state changes the wo staes

//     React.useEffect( setTimeout(() => { 
//         setMessage('Coming Soon');
//         }, 3000), []) // 1st argument function, 2nd array
//         return (
//             <div>{message}</div>
//     );
// }

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

