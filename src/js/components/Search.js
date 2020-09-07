import { nullResult } from '../constants/config.js';

export class Search {
  constructor(searchForm, loadingNews, notFoundNews, newsApi, cardList, caseResults, showMoreButton) {
    this.searchForm = searchForm;
    this.loadingNews = loadingNews;
    this.notFoundNews = notFoundNews;
    this.newsApi = newsApi;
    this.cardList = cardList;
    this.caseResults = caseResults;
    this.showMoreButton = showMoreButton;
  }

  _findNews = (event) => {
    event.preventDefault();
    const formInput = this.searchForm.querySelector('.search__input');
    if (formInput.value === '') {
      formInput.placeholder = 'Search field is empty!';
      formInput.classList.add('search__input_error'); // красный цвет ошибкт
      return;
    }
    const button = event.currentTarget;
    this._removeEnabled(button, formInput);
    this._renderLoading(false);
    this.notFoundNews.classList.add('results__nothing_hidden');
    this.caseResults.classList.add('results_hidden');

    this.newsApi.getNews(formInput.value).then((data) => {
      this._removeDisabled(formInput, button);

      if ((data === undefined || data.totalResults === nullResult)) {
        this.notFoundNews.classList.remove('results__nothing_hidden');
        this.caseResults.classList.remove('results_hidden');
        this.showMoreButton.classList.add('results__button_disabled');
        this.cardList.initCardListKeyword(formInput.value);
        this.cardList.initCardList(data.articles);
      } else {
        this.caseResults.classList.remove('results_hidden');
        this.cardList.initCardListKeyword(formInput.value);
        this.cardList.initCardList(data.articles);
      }

    }).catch((err) => {
      this.notFoundNews.classList.remove('results__nothing_hidden');
      this.caseResults.classList.remove('results_hidden');
      this.showMoreButton.classList.add('results__button_disabled');
      this._removeDisabled(formInput, button);
      console.log(err);
    }).finally(() => {
      this._renderLoading(true);
    })
  }
  _removeDisabled = (button, formInput) => {
    button.removeAttribute('disabled');
    formInput.removeAttribute('disabled');
  }
  _removeEnabled = (button, formInput) => {
    button.setAttribute('disabled', true);
    formInput.setAttribute('disabled', true);
  }

  _renderLoading = (isLoading) => {
    if (!isLoading) {
      this.loadingNews.classList.remove('results__loading_hidden');
    } else {
      this.loadingNews.classList.add('results__loading_hidden');
    }
  }
}
