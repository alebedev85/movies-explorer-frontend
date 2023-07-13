import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

import accountIcon from '../../images/account_icon.svg';

function NavBar({ loggedIn, onClick }) {

  const location = useLocation();

  return !loggedIn ? (
    <nav className="navbar">
      <NavLink to="/#" className="navbar__link link">Регистрация</NavLink>
      <button type="button" className="navbar__button button" onClick={onClick}>Войти</button>
    </nav>
  ) : (
    <nav className="navbar navbar__gap_48">
      <ul className='navbar-links'>
        <li>
          <NavLink
            to="/movies"
            className={`navbar__link
          navbar__link__size_14
          link
          ${location.pathname === "/movies" && 'navbar__link_active'}`
            }>
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/seved-movies"
            className={`navbar__link
          navbar__link__size_14
          link
          ${location.pathname === "/seved-movies" && 'navbar__link_active'}`
            }>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>


      <NavLink to="/#" className="navbar__account-button link">
        <p className='navbar__link navbar__link__size_14'>
          Аккаунт
        </p>
        <img
          className='navbar__account-button__icon '
          src={accountIcon}
          alt='Иконка входа в аккаунт' />
      </NavLink>
    </nav>
  );
}

export default NavBar;
