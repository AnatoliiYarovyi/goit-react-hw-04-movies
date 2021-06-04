import axios from 'axios';
import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import style from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  hendelSubmit = e => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=46ebbea232da466abf6f925c11796569&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
      )
      .then(response => this.setState({ movies: response.data.results }))
      .catch();

    this.setState({ query: '' });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className={style.conteiner}>
        <form onSubmit={this.hendelSubmit} className={style.form}>
          <input
            type="text"
            placeholder="Search film"
            onChange={this.handleChange}
            className={style.input}
          />
          <button type="submit" className={style.btn}>
            <span className={style.textBtn}>Search</span>
          </button>
        </form>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;
