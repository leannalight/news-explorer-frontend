export class MainApi {
  constructor(options) {
    this.options = options;
  }
  // регистрирует нового пользователя
  signup(email, password, userName) {
    return fetch(`${this.options.URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: userName,
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
  signin(email, password) {
    return fetch(`${this.options.URL}/signin`, {
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

    return fetch(`${this.options.URL}/users/me`, {
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

    return fetch(`${this.options.URL}/articles`, {
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

    return fetch(`${this.options.URL}/articles`, {
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

    return fetch(`${this.options.URL}/articles/${articleId}`, {
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
    return fetch(`${this.options.URL}/logout`, {
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
