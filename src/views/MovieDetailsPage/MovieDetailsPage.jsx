import axios from 'axios';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';
import DefaultImg from '../../default.jpg';
import style from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    genres: null,
    id: null,
    overview: null,
    popularity: null,
    poster_path: null,
    release_date: null,
    title: null,
    vote_average: null,
    castList: null,
    reviewsList: null,
  };
  async componentDidMount() {
    const searchFilm = this.props.match.params.movieId;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${searchFilm}?api_key=46ebbea232da466abf6f925c11796569&language=en-US`,
    );
    const castList = await axios.get(
      ` https://api.themoviedb.org/3/movie/${searchFilm}/credits?api_key=46ebbea232da466abf6f925c11796569&language=en-US`,
    );
    const reviewsList = await axios.get(
      ` https://api.themoviedb.org/3/movie/${searchFilm}/reviews?api_key=46ebbea232da466abf6f925c11796569&language=en-US&page=1`,
    );
    this.setState({
      ...response.data,
      castList: castList.data.cast,
      reviewsList: reviewsList.data.results,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, overview, genres } = this.state;
    const srcImgFilm = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : DefaultImg;

    const { url, path } = this.props.match;

    return (
      <div className={style.conteiner}>
        <div>
          <button
            type="button"
            onClick={this.handleGoBack}
            className={style.btn}
          >
            ←Go to back
          </button>
          <div className={style.content}>
            <img
              src={srcImgFilm}
              alt="poster_path"
              width="350"
              className={style.img}
            />
            <div className={style.aside}>
              <h3 className={style.title}>{title}</h3>
              <h5>Overview:</h5>
              <p className={style.text}>{overview}</p>
              <h5>Genre:</h5>
              <ul className={style.list}>
                {genres &&
                  genres.map(({ id, name }) => (
                    <li key={id} className={style.item}>
                      <span>{name}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2>'Additional information'</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <NavLink exact to={`${url}/cast`}>
                <span>Cast</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to={`${url}/reviews`}>
                <span>Reviews</span>
              </NavLink>
            </li>
          </ul>
          <Route
            path={`${path}/cast`}
            render={props => {
              return <Cast {...props} castList={this.state.castList} />;
            }}
          />
          <Route
            path={`${path}/reviews`}
            render={props => {
              return (
                <Reviews {...props} reviewsList={this.state.reviewsList} />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
