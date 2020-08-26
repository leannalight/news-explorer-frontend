import { firstIndexArray, nullResult, objCardStatus } from '../constants/config.js';

// Класс для хранения и отрисовки карточек
export class NewsCardList {
  constructor(newsCard, renderPosition, buttonMore, mainApi) {
    this.newsCard = newsCard;
    this.renderPosition = renderPosition;
    this.buttonMore = buttonMore;
    this.mainApi = mainApi;
    this.items = [];
    this.statusLogin = objCardStatus.statusCardUnLoggedIn;
    this.keyword = '';
  }

  _addCard = (cardObj) => {
    return this.renderPosition.insertAdjacentHTML('beforeEnd', this.newsCard.getTemplate(cardObj, this.statusLogin, this.keyword));
  }
  addListeners = () => {
    this.renderPosition.addEventListener('click', this.newsCard.saveHandler);
    this.renderPosition.addEventListener('click', this.newsCard.removeCard);
  }

  initCardList = (array) => {
    this._clearListCard();
    this.items = [];
    this.items.push(array);
    this.mainApi.getUserById().then((data) => {
      if (data !== undefined) {
        this.statusLogin = objCardStatus.statusCardLoggedIn;
        this._showMoreArticles();
      } else {
        this.statusLogin = objCardStatus.statusCardUnLoggedIn;
        this._showMoreArticles();
      }
    }).catch((err) => {
      console.log(err);
      this._showMoreArticles();
    })
  }

  initCardListKeyword = (word) => {
    this.keyword = '';
    this.keyword = word;
  }

  _showMoreArticles = () => {
    let currentIndex = 0;
    let currentLimit = 3;
    if (this.items[firstIndexArray].length !== nullResult) {
      this.buttonMore.classList.remove('results__button_disabled');
      currentLimit += currentIndex;
      for (currentIndex; currentIndex < currentLimit && currentIndex < this.items[firstIndexArray].length; currentIndex++) {
        this._addCard(this.items[firstIndexArray][currentIndex]);
        this.items[firstIndexArray].shift();
      }
    } else {
      this.buttonMore.classList.add('results__button_disabled');
    }
  }

  buttonRender = (event) => {
    event.preventDefault();
    this._showMoreArticles();
  }
  _clearListCard = () => {
    while (this.renderPosition.firstChild) {
      this.renderPosition.removeChild(this.renderPosition.firstChild);
    }
  }
  getAllArticles = () => {
    this.mainApi.getArticles().then((data) => {
      this.statusLogin = objCardStatus.statusCardSaved;
      data.forEach((element) => {
        this._addCard(element);
      })
    }).carch((err) => {
      console.log(err);
    })
  }
  /* renderResults принимает массив экземпляров карточек и отрисовывает их;
  renderLoader отвечает за отрисовку лоудера;
  renderError принимает объект ошибки и показывает ошибку в интерфейсе;
  showMore отвечает за функциональность кнопки «Показать ещё»;
  addCard принимает экземпляр карточки и добавляет её в список. */
}


