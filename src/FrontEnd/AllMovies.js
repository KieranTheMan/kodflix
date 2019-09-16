import React from "react";
import MovieItems from "./MovieItems";

export default class AllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      error: null
    };
  }

  fetchMovies() {
    fetch("rest/shows")
      .then(res => res.json())
      .then(data => this.setState({shows: data}))
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    return (
      <div>
        <div className="Movies">
          {" "}
          {this.state.shows.map(movie => {
            return (
              <MovieItems
                key={movie.id}
                id={movie.id}
                name={movie.name}
                img={require(`./images/${movie.id}.jpg`)}
                alt={movie.alt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
