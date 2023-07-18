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
    <nav className='navbar'>
      <NavLink to='/register' className='navbar__link link'>Регистрация</NavLink>
      <button type='button' className='navbar__button button' onClick={onClick}>Войти</button>
    </nav>
  ) : (
    <nav className='navbar navbar_gap_48 navbar_sidebar'>
      <ul className='navbar-links navbar_hidden'>
        <li>
          <NavLink
            to='/movies'
            className={`navbar__link
          navbar__link_size_14
          link
          ${location.pathname === '/movies' && 'navbar__link_active'}`
            }>
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/saved-movies'
            className={`navbar__link
          navbar__link_size_14
          link
          ${location.pathname === '/saved-movies' && 'navbar__link_active'}`
            }>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <NavLink to='/profile' className='navbar__account-button navbar_hidden link'>
        <p className='navbar__link navbar__link_size_14'>
          Аккаунт
        </p>
        <img
          className='navbar__account-button__icon '
          src={accountIcon}
          alt='Иконка входа в аккаунт' />
      </NavLink>

      {/* Выпадающее меню */}
      <aside className={`sidebar ${isSidebarOpen && 'sidebar_opened'}`}>
        <div className='sidebar__container'>
          <button
            className='sidebar__close-button'
            type='button'
            onClick={closeSidebar}
          />
          <ul className='navbar-links navbar-links_sidebar'>
            <li>
              <NavLink
                to='/'
                className={`navbar__link
                    navbar__link__size_18
                    link`
                }>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/movies'
                className={`navbar__link
                    navbar__link__size_18
                    link
                    ${location.pathname === '/movies' && 'navbar__link_active'}`
                }>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/saved-movies'
                className={`navbar__link
                    navbar__link__size_18
                    link
                    ${location.pathname === '/saved-movies' && 'navbar__link_active'}`
                }>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink to='/profile' className='navbar__account-button link'>
            <p className='navbar__link navbar__link_size_14'>
              Аккаунт
            </p>
            <img
              className='navbar__account-button__icon '
              src={accountIcon}
              alt='Иконка входа в аккаунт' />
          </NavLink>
        </div>
      </aside>
      <button
        className='sidebar__burger-button'
        type='button'
        onClick={openSidebar}
      />
    </nav>
  );
}

export default NavBar;
