import { savedArticleWord } from '../constants/config.js';

export class SavedNewsData {
  constructor (mainApi, articleTitle, articleKeywordsArray) {
    this.mainApi = mainApi;
    this.articleTitle = articleTitle;
    this.articleKeywordsArray = articleKeywordsArray;
    this.countArticle = 0;
    this.keywordsArray = [];
  }

  getUserInfo = () => {
    this.mainApi.getUserById().then((data) => {
      this.articleTitle.textContent = `${data.name}, у вас ${this.countArticle} сохранённых статей`;
    })
  }

  getSaveKeyword = () => {
    this.mainApi.getArticles().then((data) => {
      this.getUserInfo();
      if (data !== undefined) {
      this.countArticle = data.length;
      data.data.forEach((element) => {
       this.keywordsArray.push(element.keyword)
      })
      this.getUserInfo();
      this._getPopularKeyword();
      }
    })
  }

  _getPopularKeyword = () => {
    const result = {};
    this.keywordsArray.forEach(function (a) {
      if (result[a] !== undefined)
        ++result[a];
      else
        result[a] = 1;
    });
    const sortable = [];
    for (let popularKeyword in result) {
      sortable.push([popularKeyword, result[popularKeyword]]);
    }
    sortable.sort((a, b) => {
      return b[1] - a[1];
    })
    this._setPopularWord(sortable);
}

  _setPopularWord(sortObj) {
    const arrayCountedKeywords = sortObj.flat(Infinity);
    const wordsArray = arrayCountedKeywords.filter(e => typeof e === 'string');

    if (this.articleKeywordsArray[savedArticleWord.secondWord].textContent !== '') {
      this.articleKeywordsArray[savedArticleWord.firstWord].textContent = `${wordsArray[savedArticleWord.firstWord]},`;
      this.articleKeywordsArray[savedArticleWord.secondWord].textContent = `${wordsArray[savedArticleWord.secondWord]}`;
      this.articleKeywordsArray[savedArticleWord.thirdWord].textContent = ` и ${wordsArray.length - savedArticleWord.thirdWord} другим`;
    }
    else {
      this.articleKeywordsArray[savedArticleWord.firstWord].textContent = `${wordsArray[savedArticleWord.firstWord]}`
      this.articleKeywordsArray[savedArticleWord.secondWord].textContent = ``;
      this.articleKeywordsArray[savedArticleWord.thirdWord].textContent = ` и ${wordsArray.length - savedArticleWord.secondWord} другим`;
    }
  }

}
