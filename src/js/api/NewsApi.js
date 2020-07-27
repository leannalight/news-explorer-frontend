export class NewsApi {
  // не доделан, ещё в процессе...
  constructor(options) {
    const {
      url, apiKey, pageSize, amountDays
    } = options;

    this._url = url;
    this._apiKey = apiKey;
    this._pageSize = pageSize;
    this._amountDays = amountDays;
  }
  // возвращает список новостей на основе запроса
  getNews(keyword) {
    return fetch(
      `${this._url}?q=${keyword}&pageSize=${this._pageSize}&apiKey=${this._apiKey}`
    )
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
}
