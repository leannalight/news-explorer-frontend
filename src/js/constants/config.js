// адрес основного API
const MAINAPI_URL = {
  url: 'https://api.explorenews.tk',
};

// адрес API новостей
const NEWSAPI_URL = {
  url: 'https://newsapi.org/v2/everything',
  apiKey: 'fca1dff7933b432f82d0c7164dfc70f8',
  pageSize: 100,
  amountDays: 7
}
// Перед публикацией приложения поменять адрес сервиса на прокси-сервер Я.Практикума
// 'https://praktikum.tk/news/v2/everything'

const GITHUB_PAGES_NEWS = 'https://leannalight.github.io/news-explorer-frontend';

export { MAINAPI_URL, NEWSAPI_URL, GITHUB_PAGES_NEWS };
