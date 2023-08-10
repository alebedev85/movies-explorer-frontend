import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

import { githubPage } from '../../utils/constants.js';

function NotFound() {

  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link to={githubPage + "/"} className="notfound__link link">Назад</Link>
    </section>
  )
}

export default NotFound