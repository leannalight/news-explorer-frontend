import { firstIndexArray, nullResult, objCardStatus } from '../constants/config.js';

// Класс для хранения и отрисовки карточек
export class NewsCardList {
  constructor(newsCard, renderPosition, buttonShowMore, mainApi) {
    this.newsCard = newsCard;
    this.renderPosition = renderPosition;
    this.buttonShowMore = buttonShowMore;
    this.mainApi = mainApi;
    this.items = [];
    this.statusLogin = objCardStatus.statusCardUnLoggedIn;
    this.keyword = '';
  }
  // принимает экземпляр карточки и добавляет её в список
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
  // отвечает за функциональность кнопки «Показать ещё»
  _showMoreArticles = () => {
    let currentIndex = 0;
    let currentLimit = 3;
    if (this.items[firstIndexArray].length !== nullResult) {
      this.buttonShowMore.classList.remove('results__button_disabled');
      currentLimit += currentIndex;
      for (currentIndex; currentIndex < currentLimit && currentIndex < this.items[firstIndexArray].length; currentIndex++) {
        this._addCard(this.items[firstIndexArray][currentIndex]);
        this.items[firstIndexArray].shift();
      }
    } else {
      this.buttonShowMore.classList.add('results__button_disabled');
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
  // забирает все сохранённые статьи
  getAllArticles = () => {
    this.mainApi.getArticles().then((data) => {
      this.statusLogin = objCardStatus.statusCardSaved;
      console.log(data);
      data.data.forEach((element) => {
        console.log(element);
        this._addCard(element);
      })
    }).catch((err) => {
      console.log(err);
    })
  }
}


