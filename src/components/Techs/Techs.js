import React from 'react';

import './Techs.css'

function Techs() {
  return (
    <section className='techs' aria-label='Список технологий, используемых в проекте'>
      <h2 className="techs__title">
        Технологии
      </h2>
      <div className='techs__list'>
        <h3 className="techs__subtitle">
          7 технологий
        </h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;