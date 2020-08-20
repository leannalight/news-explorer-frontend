// адрес моего API
const mainApiUrl = NODE_ENV === 'development' ? 'https://api.explorenews.tk' : 'http://localhost:3000';
// адрес API новостей
const newsApiUrl = NODE_ENV === 'development' ? 'https://newsapi.org/v2/everything?q=' : 'https://praktikum.tk/news/v2/everything?q=';

// const newsApiKey = 'fca1dff7933b432f82d0c7164dfc70f8';

const obj = {
  baseUrl: `${newsApiUrl}`,
  headers: {
    authorizationNews: 'fca1dff7933b432f82d0c7164dfc70f8'
  },
  URL: `${mainApiUrl}`
}

const config = JSON.stringify(obj);

const options = JSON.parse(config); // настройка API

export { options };
