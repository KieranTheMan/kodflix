import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Details.css";

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
      movie: {}
    };
  }
  componentDidMount() {
    let movieID = this.props.match.params.movieID;
    fetch("rest/shows")
      .then(res => res.json())
      .then(data => this.setState({ movie: data.find(movie => movie.id === movieID) }))
      .then(() => console.log(this.state.movie))
      .catch(error => this.setState({ error }));
    // let movies = getMovies().find(movie => movie.id === movieID);
    // this.setState({ movies: movies });
  }

  render() {
    return this.state.movie === undefined ? (
      <Redirect to="/notFound" />
    ) : (this.state.movie.id) ? (
      <div className="Details">
        <div className="text">
          <div className="movieName">{this.state.movie.name}</div>
          {this.state.movie.synopsis}
          <Link to="/">Back to movies</Link>
        </div>
        <div className="image">
          <img src={require(`../images/${this.state.movie.id}.jpg`)} alt='' />} alt={this.state.movie.name} />
        </div>
      </div>
    ) : <div></div>
  }
}
