import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className="about-project__title">О проекте</h2>
      <div className='about-project__info'>
        <article>
          <h3 className='about-project__info__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className='about-project__info__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='about-project__deadline'>
        <p className='about-project__deadline__title_1'>1 неделя</p>
        <p className='about-project__deadline__title_2'>4 недели</p>
        <p className='about-project__deadline__paragraph'>Back-end</p>
        <p className='about-project__deadline__paragraph'>Front-end</p>
      </div>

    </section>
  );
}

export default AboutProject;