import React from 'react';

import './AboutMe.css'
import avatar from '../../images/avatar.png'

function AboutMe() {
  return (
    <section className='aboutme'>
      <h2 className="aboutme__title">
        Студент
      </h2>
      <article className='aboutme__biography' aria-label='Информация про автора проекта'>
        <img src={avatar} className='aboutme__biography__avatar' alt='Фотография студента' />
        <h3 className='aboutme__biography__name'>
          Виталий
        </h3>
        <h4 className='aboutme__biography__info'>
          Фронтенд-разработчик, 30 лет
        </h4>
        <p className='aboutme__biography__bio'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className='aboutme__biography__link link'
          href="https://github.com/alebedev85"
          rel="noreferrer"
          target="_blank">
          Github
        </a>
      </article>
    </section>
  );
}

export default AboutMe;
