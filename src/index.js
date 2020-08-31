import './index.css';
import { options } from './js/constants/config.js';

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
  popupUserSignup,
  signupButton,
  popupSignupForm,
  popupSuccessRegister,
  popupSuccessLink
} = require('./js/constants/domElements.js');

/** Классы */
import { MainApi } from './js/api/MainApi.js';
import { NewsApi } from './js/api/NewsApi.js';
import { Header } from './js/components/Header.js';
import { MobileMenu } from './js/components/MobileMenu.js';
import { PopupLogin } from './js/components/PopupLogin.js';
import { PopupSignup } from './js/components/PopupSignup.js';
import { PopupSuccess } from './js/components/PopupSuccess.js';
import { FormValidator } from './js/components/FormValidator.js';
import { NewsCard } from './js/components/NewsCard.js';
import { NewsCardList } from './js/components/NewsCardList.js';
import { Search } from './js/components/Search.js';

/** Подключаем классы */
const mainApi = new MainApi(options);
const newsApi = new NewsApi(options);

const header = new Header(arrayMenusHeaderHide, menuAuthItem, mainApi, loadingNews, notFoundNews);

const popupSuccess = new PopupSuccess(popupSuccessRegister);
const popupSignup = new PopupSignup(popupUserSignup, mainApi, popupSuccess.open);
const popupLogin = new PopupLogin(popupUserLogin, mainApi, header, signupLink, popupUserSignup);

const newsCard = new NewsCard(mainApi);
const newsCardList = new NewsCardList(newsCard, caseCards, showMoreButton, mainApi);
const search = new Search(searchForm, loadingNews, notFoundNews, newsApi, newsCardList, caseResults, showMoreButton);

/** Мобильное меню */
const mobileMenu = new MobileMenu(mobMenuButton, nav, menuSection, menu, arrayMenuItem, overflow, bodyOverflow, headerLogo);

const loginValidator = new FormValidator(popupLoginForm, loginButton);
const signupValidator = new FormValidator(popupSignupForm, signupButton);


// вешаем обработчики событий
authButton.addEventListener('click', popupLogin.open.bind(popupLogin));
loginButton.addEventListener('click', popupLogin._login);
signupButton.addEventListener('click', popupSignup._register);
searchButton.addEventListener('click', search._findNews);
showMoreButton.addEventListener('click', newsCardList.buttonRender);

loginValidator.setEventListeners();
signupValidator.setEventListeners();

window.addEventListener('keydown', function closeFormByKeydown(event) {
  if (event.keyCode === 27) {
    popupLogin.removePopup();
    popupSignup.removePopup();
    popupSuccess.removePopup();
  }
})
signupLink.addEventListener('click', (event) => {
  popupLogin.close(event);
  popupSignup.open();
})
loginLink.addEventListener('click', (event) => {
  popupSignup.close(event);
  popupLogin.open();
})
popupSuccessLink.addEventListener('click', (event) => {
  popupSuccess.close(event);
  popupLogin.open();
})

newsCardList.addListeners();
mobileMenu.addListenersMobMenu();
header.render();
