import React from 'react';

import './AboutMe.css'
import avatar from '../../../images/avatar.png'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className="about-me__title">
        Студент
      </h2>
      <article className='about-me__biography'>
        <h3 className='about-me__biography__name'>
          Виталий
        </h3>
        <h4 className='about-me__biography__info'>
          Фронтенд-разработчик, 30 лет
        </h4>
        <p className='about-me__biography__paragraph'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className='about-me__biography_link'
          href="https://github.com/alebedev85"
          rel="noreferrer"
          target="_blank">
            Github
        </a>

        <img src={avatar} className='about-me__biography__avatar' alt='Фотография студента'></img>
      </article>
    </section>
  );
}

export default AboutMe;
