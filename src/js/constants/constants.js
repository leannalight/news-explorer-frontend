/** шапка сайта Header */
const headerTheme = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo'); // лого Хэдера
const arrayMenusHeaderHide = document.querySelector('.menu__item_logoff'); // скрытый элемент хэдера, незалогиненный
const menuAuthItem = document.querySelector('.menu__item_auth'); // меню кнопка хэдера

/** Mobile menu */
const mobileButton = document.quesrySelector('.');
const nav = document.quesrySelector('.');
const navSection = document.quesrySelector('.');
const navigation = document.quesrySelector('.');
const arrayNavigationLi = document.quesrySelector('.');
const overflow = document.quesrySelector('.');
const bodyOverflowHide = document.quesrySelector('.');

/** Search form */
const searchForm = document.querySelector('.search__form');
const searchButton = document.querySelector('.search__button');

/** Card Results */
const caseCards = document.querySelector('.results__card-case'); // контейнер карточек
const caseResults = document.querySelector('.results'); // секция результатов

/** Loading results block */
const loadingNews = document.querySelector('.results__loading');
/** No results block */
const notFoundNews = document.querySelector('.results__nothing');

/** Button Show more */
const showMoreButton = document.querySelector('.results__button');

/** Popup Login */
const authButton = document.querySelector('#authButton'); // кнопка "Авторизоваться" в хэдере
const popupUserLogin = document.querySelector('#popupLogin'); // попап Логин
const loginButton = document.querySelector('#submitLogin'); // кнопка "Войти" в попапе Логин

const signupLink = document.querySelector('#linkToSignup'); // переход на "Регистрацию"
const loginLink = document.querySelector('#linkToLogin'); // переход на форму "Входа"
const popupLoginForm = document.querySelector('#logIn'); // форма Логин

/** Popup Signup */
const popupUserSignup = document.querySelector('.popup__signup'); // попап Регистрации
const signupButton = document.querySelector('#submitSignup'); // кнопка "Зарегистрироваться в попапе Регистрации"
const popupSignupForm = document.querySelector('#signUp'); // форма Регистрации

/** Popup Success */
const popupSuccessRegister = document.querySelector('.popup__success');
const popupSuccessLink = document.querySelector('#successLinkToLogin');

/** Analytics */

module.exports = {
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
  popupUserSignup,
  signupButton,
  popupSignupForm,
  popupSuccessRegister,
  popupSuccessLink
};
