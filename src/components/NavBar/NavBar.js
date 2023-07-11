import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(onClick) {
  return (
    <nav className="navbar">
      <Link to="/#" className="navbar__link link">Регистрация</Link>
      <button type="button" className="navbar__link navbar__button link" onClick={onClick}>Войти</button>
    </nav>
  );
}

export default NavBar;
