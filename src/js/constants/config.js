// адрес моего API
const mainApiUrl = NODE_ENV === 'development' ? 'https://api.explorenews.tk' : 'http://localhost:3000';
// адрес API новостей
const newsApiUrl = NODE_ENV === 'development' ? 'https://newsapi.org/v2/everything?q=' : 'https://nomoreparties.co/news/v2/everything?q=';

const obj = {
  baseUrl: `${newsApiUrl}`,
  headers: {
    authorizationNews: 'fca1dff7933b432f82d0c7164dfc70f8' // const newsApiKey = 'fca1dff7933b432f82d0c7164dfc70f8';
  },
  URL: `${mainApiUrl}`
}

const config = JSON.stringify(obj);

const options = JSON.parse(config); // настройка API

const msOnDay = 86400000;
const pageSize = 100;
const newsLang = 'ru';
const imageUrl = 'https://via.placeholder.com/300';
const objCardStatus = {
  statusCardUnLoggedIn:0,
  statusCardLoggedIn:1,
  statusCardSaved:2,
}

const nullResult = 0;
const firstIndexArray = 0;
const saveArticleWord = {
  firstWord:0,
  secondWord:1,
  thirdWord:2
}

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

export { options, msOnDay, pageSize, newsLang, imageUrl, objCardStatus, nullResult, firstIndexArray, saveArticleWord, months };
