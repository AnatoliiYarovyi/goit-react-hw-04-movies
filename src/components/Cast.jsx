import React from 'react';
import DefaultImg from '../default.jpg';
import PropTypes from 'prop-types';

const Cast = ({ castList }) => {
  const srcImgFilm = `https://image.tmdb.org/t/p/w500`;
  return (
    <div>
      <ul>
        {castList &&
          castList.map(
            ({ id, character = '', name = 'Actor/Actresse', profile_path }) => (
              <li key={id}>
                <img
                  src={
                    profile_path ? `${srcImgFilm}${profile_path}` : DefaultImg
                  }
                  alt="poster_path"
                  width="250"
                />
                <p>
                  {name} → {character}
                </p>
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  castList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      character: PropTypes.string,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ),
};

export default Cast;
