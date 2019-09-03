import React from "react";
import MovieItems from "./MoviesComp";
import MoviesGet from "./MoviesGet";

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
      .then(data => this.setState({ shows: data }))
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
          {MoviesGet().map(movie => {
            return (
              <MovieItems
                key={movie.id}
                id={movie.id}
                name={movie.name}
                img={movie.img}
                alt={movie.alt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
