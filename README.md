<h1 align="center">Карточки пользователей</h1>

<div align="center">
  <a href="#">
    <img width="663" alt="Главная страница приложения" src="https://github.com/elrouss/at-work/assets/108838349/e254608a-c842-443c-9dfd-66eee29891d7" />
  </a>
</div>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Краткое описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения</a></li>
      <li><a href="#peculiarProperties">Особенности работы приложения</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Краткое описание проекта</h2></a>
Проект представляет собой отзывчиво-адаптивный интерфейс двухстраничного приложения с карточками пользователей, которые приходят со стороннего api. Карточки возможно редактировать, скрывать и переносить в архив (без сохранения состояния после перезагрузки страницы)

<b>Ссылки на проект:</b>
<br>
Макет: https://www.figma.com/file/ZUhwEwudliE4AF3JMDEDkj/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-At-Work?type=design&node-id=0-1&mode=design![image](https://github.com/elrouss/at-work/assets/108838349/70b283fe-5c54-4847-aa98-4af386eb5138)
<br>
Деплой: https://elrouss.github.io/at-work/
<br>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка 'React'">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка 'React Router'">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Иконка 'React Vite'">
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Иконка 'Redux'">
  <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" alt="Иконка 'Axios'">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Иконка 'TypeScript'">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Иконка 'Sass (SCSS)'">
</span>

<div align="right">(<a href="#summary">к оглавлению</a>)</div>

<a name="installation"><h2>3. Установка и запуск приложения</h2></a>

1. `https://github.com/elrouss/at-work.git` - клонировать репозиторий (HTTPS)
2. `npm i` - установить зависимости
4. Добавить в корне проекта файл `.env` и скопировать в него содержимое `.env.example`
5. `npm run dev` - запустить приложение и перейти по ссылке `http://localhost:5173/at-work/`

<div align="right">(<a href="#summary">к оглавлению</a>)</div>


<a name="peculiarProperties"><h2>4. Особенности работы приложения</h2></a>

- На странице выводится 6 карточек с информацией о пользователях (все фотографии - моковые данные). При клике на иконку их возможно скрыть, архивировать и отредактировать на отдельной странице по динамическому роуту. На странице редактирования добавлена кастомная валидация данных, которая отрисовывает ошибку под текстовым полем в случае невалидности формы. После сохранения открывается модальное окно, которое автоматически закрывается через 4 секунды. Данные обновляются на стороне клиента, но не сохраняются после перезагрузки приложения
- Для корректной работы роутов при деплое на GH Pages используется Hash Router
- Отзывчиво-адаптивный интерфейс, рассчитанный на мобильные устройства (от 320px), планшеты и настольные компьютеры

<div align="right">(<a href="#summary">к оглавлению</a>)</div>
