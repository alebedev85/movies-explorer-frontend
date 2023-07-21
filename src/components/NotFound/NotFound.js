import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link to="/" className="notfound__link link">Назад</Link>
    </section>
  )
}

export default NotFound