import React from 'react';

import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <h2 className="techs__title">
        Технологии
      </h2>
      <div className='techs__list'>
        <h3 className="techs__list__subtitle">
          7 технологий
        </h3>
        <p className="techs__list__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul class="techs__list__items">
          <li class="techs__list__item">HTML</li>
          <li class="techs__list__item">CSS</li>
          <li class="techs__list__item">JS</li>
          <li class="techs__list__item">React</li>
          <li class="techs__list__item">Git</li>
          <li class="techs__list__item">Express.js</li>
          <li class="techs__list__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;