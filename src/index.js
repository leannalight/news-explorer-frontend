import './index.css';

/* Импортируем переменные из констант */
const {
  headerTheme,
  headerLogo,
  arrayMenusHeaderHide,
  menuAuthItem,
  searchForm,
  searchButton,
  caseCards,
  caseResults,
  loadingNews,
  notFoundNews,
  showMoreButton,
  authButton,
  popupUserLogin,
  loginButton,
  signupLink,
  loginLink,
  popupLoginForm,
  popupSignup,
  signupButton,
  popupSignupForm,
  popupSuccess,
  popupSuccessLink
} = require('./js/constants/constants.js');

/** Классы */ /*
import { MainApi } from './js/api/MainApi.js';
import { NewsApi } from './js/api/NewsApi.js';
import { Header } from './js/components/Header.js'; */
import { PopupLogin } from './js/components/PopupLogin.js';
import { Form } from './js/components/Form.js';
import { NewsCard } from './js/components/NewsCard.js';
import { NewsCardList } from './js/components/NewsCardList.js';

/** Подключаем классы */ /*
const newsApi = new NewsApi(options);
const mainApi = new MainApi(options);

const header = new Header(arrayMenusHeaderHide, menuAuthItem, mainApi, loadingNews, notFoundNews); */

const popupLogin = new PopupLogin(popupUserLogin, /*mainApi, header,*/ signupLink, popupSignup);

// Импортируем конфиги серверов

// вешаем обработчики событий
authButton.addEventListener('click', popupLogin.open.bind(popupLogin));
loginButton.addEventListener('click', popupLogin._login);
// header.render();
