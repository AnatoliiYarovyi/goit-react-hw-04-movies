import style from './MovieList.module.css';
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DefaultImg from '../../default.jpg';
import PropTypes from 'prop-types';

const MovieList = ({ movies, location }) => {
  const srcImgFilm = `https://image.tmdb.org/t/p/w500`;
  return (
    <ul className={style.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={style.item}>
          <NavLink
            className={style.link}
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <img
              src={poster_path ? `${srcImgFilm}${poster_path}` : DefaultImg}
              alt="poster_path"
              width="350"
              className={style.img}
            />
            <div className={style.desc}>{title}</div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    }),
  ),
};

export default withRouter(MovieList);
