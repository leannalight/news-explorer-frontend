import { imageUrl, objCardStatus } from '../constants/config.js';
import { setNormalDate } from '../utils/set-normal-date.js';

// Класс, создающий карточку
export class NewsCard {
  constructor(mainApi) {
    this.mainApi = mainApi;
    this.searchKeyword = '';
  }
  getTemplate(cardObj, statusLogin, keyword) {
    this.searchKeyword = '';
    this.searchKeyword = keyword;
    const image = cardObj.urlToImage === null ? imageUrl : cardObj.urlToImage;
    if (statusLogin === objCardStatus.statusCardUnLoggedIn) {
      return  `<div class="card">
        <div class="card__image">
          <img src="${this._cleanHtmlUpdate(image)}" alt="${(this._cleanHtmlUpdate(cardObj.title))}" class="card__photo">
          <div class="card__set">
            <div class="card__login card__login_hidden"><span class="card__login-text">Войдите, чтобы
              сохранять статьи</span></div>
            <div class="card__state" disabled></div>
          </div>
        </div>
        <a href="${this._cleanHtmlUpdate(cardObj.url)}" target="_blank" class="card__link">
          <span class="card__date">${this._cleanHtmlUpdate(setNormalDate(cardObj.publishedAt))}</span>
          <h3 class="card__title">${this._cleanHtmlUpdate(cardObj.title)}</h3>
          <p class="card__text">${this._cleanHtmlUpdate(cardObj.description)}</p>
          <span class="card__source">${this._cleanHtmlUpdate(cardObj.source.name)}</span>
        </a>
      </div>`;
    }
    if (statusLogin === objCardStatus.statusCardLoggedIn) {
      return `<div class="card">
        <div class="card__image">
          <img src="${this._cleanHtmlUpdate(image)}" alt="${(this._cleanHtmlUpdate(cardObj.title))}" class="card__photo">
          <div class="card__set">
            <div class="card__state"></div>
          </div>
        </div>
        <a href="${this._cleanHtmlUpdate(cardObj.url)}" target="_blank" class="card__link">
          <span class="card__date">${this._cleanHtmlUpdate(setNormalDate(cardObj.publishedAt))}</span>
          <h3 class="card__title">${this._cleanHtmlUpdate(cardObj.title)}</h3>
          <p class="card__text">${this._cleanHtmlUpdate(cardObj.description)}</p>
          <span class="card__source">${this._cleanHtmlUpdate(cardObj.source.name)}</span>
        </a>
      </div>`;
    }
    if (statusLogin === objCardStatus.statusCardSaved) {
      return `<div class="card" id="${cardObj._id}">
        <div class="card__image">
          <img src="${this._cleanHtmlUpdate(image)}" alt="${(this._cleanHtmlUpdate(cardObj.title))}" class="card__photo">
          <div class="card__set">
            <div class="card__name"><span class="card__name-is">${this._cleanHtmlUpdate(cardObj.keyword)}</span></div>
            <div class="card__login card__login_hidden"><span class="card__login-saved">Убрать из сохранённых</span></div>
            <div class="card__state-delete"></div>
          </div>
        </div>
        <a href="${this._cleanHtmlUpdate(cardObj.url)}" target="_blank" class="card__link">
          <span class="card__date">${this._cleanHtmlUpdate(setNormalDate(cardObj.publishedAt))}</span>
          <h3 class="card__title">${this._cleanHtmlUpdate(cardObj.title)}</h3>
          <p class="card__text">${this._cleanHtmlUpdate(cardObj.description)}</p>
          <span class="card__source">${this._cleanHtmlUpdate(cardObj.source.name)}</span>
        </a>
      </div>`;
}
  }

  _cleanHtmlUpdate(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
  }

  saveHandler = (event) => {
    if(event.target.classList.contains('card__state')) {
      const icon = event.target.closest('.card__state');
      const card = event.target.closest('.card');
      const article = {
        keyword: this.searchKeyword,
        title: card.querySelector('.card__title').textContent,
        text: card.querySelector('.card__text').textContent,
        date: card.querySelector('.card__date').textContent,
        source: card.querySelector('.card__source').textContent,
        link: card.querySelector('.card__link').getAttribute('href'),
        image: card.querySelector('.card__photo').getAttribute('src')
      }
      this.mainApi.createArticle(article).then((data) => {
        if (data !== undefined) {
          icon.classList.add('card__state_marked');
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }
  // Удаление карточки
  removeCard = (event) => {
    if (event.target.classList.contains('card__state-delete')) {
      if (confirm("Are you sure you want to delete this article?")) {
        const card = event.target.closest('.card');
        this.mainApi.deleteArticleById(card.articleId).then((data) => {
          if (data !== undefined) {
            card.remove();
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
  }
}
