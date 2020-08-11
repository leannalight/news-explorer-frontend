export class MainApi {
  constructor(options) {
    const { url } = options;
    this._url = url;
  }
  // регистрирует нового пользователя
  signup({ email, password, name }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject (`Произошла ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
        throw err;
    });
  }
 // аутентифицирует пользователя на основе почты и пароля
  signin({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      throw err;
    });
  }

  // возвращает информацию о пользователе
  getUserData() {

    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      throw err;
    });
  }
  // забирает все статьи
  getArticles() {

    return fetch(`${this._url}/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      throw err;
    });
  }

  // создаёт статью
  createArticle(article) {
    const {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    } = article;

    return fetch(`${this._url}/articles`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Произошла ошибка: ${res.status}`);
        }
      })
      .catch((err) => {
        throw err;
      });
  }
  // удаляет статью
  removeArticle(articleId) {

    return fetch(`${this._url}/articles/${articleId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      throw err;
    });
  }

  logout() {
    return fetch(`${this._url}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Произошла ошибка: ${res.status}`);
      }
    })
    .catch((err) => {
      throw err;
    })
  }
}
