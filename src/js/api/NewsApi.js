import { getDate } from '../utils/get-date.js';
import { pageSize, newsLang } from '../constants/config.js';

export class NewsApi {
  constructor(options) {
    this.options = options;
  }
  // возвращает список новостей на основе запроса
  getNews(keyword) {
    const date = getDate();
    return fetch(
      `${this.options.baseUrl}${keyword}&from=${date.fromDate}&to=${date.toDate}&language=${newsLang}&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${this.options.headers.authorizationNews}`
    )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      const json = res.json();
      return json.then(Promise.reject.bind(Promise))
    })
    .catch((err) => {
      throw err;
    });
  }
}
