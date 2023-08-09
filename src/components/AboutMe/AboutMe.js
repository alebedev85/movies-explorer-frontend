import React from 'react';

import './AboutMe.css'
import avatar from '../../images/RTKXSlUp1Tg_копия.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className="about-me__title">
        Студент
      </h2>
      <article className='biography' aria-label='Информация про автора проекта'>
        <img src={avatar} className='biography__avatar' alt='Фотография студента' />
        <h3 className='biography__name'>
          Андрей Лебедев
        </h3>
        <h4 className='biography__info'>
          Фронтенд-разработчик.
        </h4>
        <p className='biography__bio'>
          Я родился и живу в Москве. Закончил курс Веб-разработчик Яндекс Практикума. Хочу развиваться в этой сфере,
          в веб-разработке меня привлекает сочетание работы с интерфейсом и функциональностью.
          В свободное время занимаюсь музыкой, играю на гитаре, люблю путешествовать и открывать новые места.
        </p>
        <a className='biography__link link'
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
