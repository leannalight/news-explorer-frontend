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
      withCredentials: true,
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
      withCredentials: true,
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
  getUserById() {

    return fetch(`${this.options.URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
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
      withCredentials: true,
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
  createArticle(cardObject) {
    const {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    } = cardObject;

    return fetch(`${this.options.URL}/articles`, {
      method: 'POST',
      credentials: 'include',
      withCredentials: true,
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
      withCredentials: true,
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
// отвечает за выход из аккаунта
  signout() {
    return fetch(`${this.options.URL}/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      withCredentials: true
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
