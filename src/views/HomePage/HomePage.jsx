import axios from 'axios';
import React, { Component } from 'react';
import style from './HomePage.module.css';
import MovieList from '../../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=46ebbea232da466abf6f925c11796569`,
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={style.conteiner}>
        <h2>Trending today </h2>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default HomePage;
