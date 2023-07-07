import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className="about-project__title">О проекте</h2>
      <div className='about-project__flex'>
        <article>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='progress-bar'>
        <span className='progress-bar__stage-1'>1 неделя</span>
        <span className='progress-bar__stage-2'>4 недели</span>
      </div>

    </section>
  );
}

export default AboutProject;