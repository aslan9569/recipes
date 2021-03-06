import React from "react";
import classes from "./info.module.css";

function Info(props) {
  return (
    <div>
      <h1>Информация</h1>
      <div className={classes.text}>
        Удобный сайт с рецептами, на котором вы сможете найти множество вкусных
        блюд! Доступна небольшая авторизация c использованием localStorage! Вы
        можете так же добавить свой рецепт, сохранить понравившийся рецепт в
        книгу рецептов, а так же удалить рецепт! Так же доступна удобная функция
        посика блюд! После добавления вы так же можете изменить свой рецепт!
        Доступны так же категории блюд!Так же накидал простой шаблон новостей, а
        так же раздел с идеями! Основные фичи находятся в разделе Мои рецепты!
        Спасибо за внимание!
      </div>
      <div className={classes.ref}>
        <a href="https://github.com/aslan9569">Мой профиль github ...</a>
      </div>
    </div>
  );
}

export default Info