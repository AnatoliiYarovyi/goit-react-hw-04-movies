import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AppBar.module.css';
import routes from '../../routes';

const AppBar = () => {
  return (
    <header className={style.header}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            exact
            to={routes.home}
            className={style.link}
            activeClassName={style.linkActive}
          >
            <h2 className={style.title}>Home</h2>
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            exact
            to={routes.movies}
            className={style.link}
            activeClassName={style.linkActive}
          >
            <h2 className={style.title}>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
