import './savednews.css';
import { options } from '../js/constants/config.js';

/* Импортируем переменные из констант */
const {
  headerLogo,
  arrayMenusHeaderHide,
  menuAuthItem,
  mobMenuButton,
  nav,
  menuSection,
  menu,
  arrayMenuItem,
  overflow,
  bodyOverflow,
  caseCards,
  loadingNews,
  notFoundNews,
  showMoreButton,
  articleTitle,
  articleKeywordsArray
} = require('../js/constants/domElements.js');

/** классы */
import { Header } from '../js/components/Header.js';
import { MainApi } from '../js/api/MainApi.js';
import { NewsCard } from '../js/components/NewsCard.js';
import { NewsCardList } from '../js/components/NewsCardList.js';
import { SavedNewsData } from '../js/components/SavedNewsData.js';
import { MobileMenu } from '../js/components/MobileMenu.js';

/** Подключаем классы */
const mainApi = new MainApi(options);

const header = new Header(arrayMenusHeaderHide, menuAuthItem, mainApi, loadingNews, notFoundNews);
const newsCard = new NewsCard(mainApi);
const newsCardList = new NewsCardList(newsCard, caseCards, showMoreButton, mainApi);
const savedNewsData = new SavedNewsData(mainApi, articleTitle, articleKeywordsArray);
const mobileMenu = new MobileMenu(mobMenuButton, nav, menuSection, menu, arrayMenuItem, overflow, bodyOverflow, headerLogo);

header.renderSecondPage();
newsCardList.getAllArticles();
newsCardList.addListeners();
savedNewsData.getSaveKeyword();
mobileMenu.addListenersMobMenu();
