import React from 'react';
import './NotFoundSearch.css';
import { Link } from 'react-router-dom';

function NotFoundSearch() {

  return (
    <section className="notfound">
      <p className="notfound__subtitle notfound__subtitle_for_search">Ничего не найдено</p>
    </section>
  )
}

export default NotFoundSearch