import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

import accountIcon from '../../images/account_icon.svg';

function NavBar({ loggedIn, onClick }) {

  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  function openSidebar() {
    setIsSidebarOpen(true)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

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
            to="/saved-movies"
            className={`navbar__link
          navbar__link__size_14
          link
          ${location.pathname === "/saved-movies" && 'navbar__link_active'}`
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

      {/* Выпадающее меню */}
      <aside className='sidebar sidebar_opened'>
        <button
          className='sidebar__close-button'
          type='button'
          onClick={closeSidebar}
        />
        <div className='sidebar__container'>
          <ul className='navbar-links navbar-links_sidebar'>
            <li>
              <NavLink
                to="/movies"
                className={`navbar__link
                    navbar__link__size_18
                    link`
                }>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={`navbar__link
                    navbar__link__size_18
                    link
                    ${location.pathname === "/movies" && 'navbar__link_active'}`
                }>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/saved-movies"
                className={`navbar__link
                    navbar__link__size_18
                    link
                    ${location.pathname === "/saved-movies" && 'navbar__link_active'}`
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
        </div>
      </aside>

    </nav>
  );
}

export default NavBar;
