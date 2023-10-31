# movies-explorer-frontend

![alt text](./opera_m6y0aE2P0o.gif)

<b>Дипломный проект "Movies Explorer"</b> - приложение для поиска и просмотра фильмов международного фестиваля документального кино о новой культуре "Beat Film Festival". Выполнен в рамках образовательной программы Яндекс Практикума и представляет собой отзывчиво-адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Express" (часть backend).

<b>Movies Explorer</b> - сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

<b>Требования к проекту:</b>

* отправить запрос к нашему сервису с данными о фильмах, получить данные и сохранить;
* согласно введённому в поисковую строку тексту запроса найти все подходящие фильмы и отобразить карточки с ними;
* когда пользователь сохраняет фильм, он должен отображаться в специальном разделе сайта.

<b>Содержание проекта:</b>

* Главная. Содержит информацию о выполненном проекте.
* Страница с фильмами. На ней есть форма поиска фильмов и блок с результатами поиска.
* Страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем.
* Страница регистрации. Позволяет пользователю зарегистрировать аккаунт.
* Страница авторизации. На ней пользователь может войти в систему.
* Страница редактирования профиля. Пользователь может изменить данные своего аккаунта.

<b>Требования к верстке:</b>

<b>HTML:</b>
* Разметка портирована в JSX.
* Разметка семантическая.
* Все классы названы по БЭМ.
* Навигация должна работать: ни одна ссылка не ведёт «в никуда».

<b>CSS:</b>
* Для стилизации каждого блока выбраны правильные инструменты, которые подходят для задачи.
* Вёрстка на Flex layout и/или Grid layout.
* Адаптивность под указанные в макете разрешения и отсутствие поломок в промежуточных значениях.
* Шрифты подключены через @font-face.
* Элементы правильно позиционированы.
* Сделана микроанимация кнопок, ссылок и инпутов.
* Использован normalize.сss или стилизован строго по БЭМ — без внешних файлов.
* Формы и плейсхолдеры стилизованы верно.
* В разных частях проекта есть переиспользуемые блоки.
* Все изображения оптимизированы — в том числе и .svg.

<b>Функциональность:</b>
* реализовать обязательную функциональность, о которой мы расскажем дальше;
* сделать асинхронные GET- и POST-запросы к API;
* написать все запросы к нашему и стороннему API;
* защитить роуты /saved-movies, /profile и /movies авторизацией;
* для хранения данных о пользователе использовать глобальную стейт-переменную currentUser, созданную с помощью createContext;
* в компонент App внедрить контекст через CurrentUserContext.Provider;
* JWT-токен хранить в localStorage или в куке;
* сделать так, чтобы ошибка от API была обработана и пользователь видел сообщение об ошибке;
* настроить прелоадер так, чтобы он крутился, пока от сервера идёт ответ;
* кликом по карточке переводить на ютюб-трейлер фильма.

Ссылка на макет https://disk.yandex.ru/d/5NbCwoZUtVwpnw

## Ссылки на бекэнд:

https://github.com/alebedev85/movies-explorer-api/tree/main
