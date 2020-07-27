// шапка сайта header
const header = document.querySelector('.header');
const mobMenu = document.querySelector('.menu');
const mobMenuButton = document.querySelector('.header__menu-mob-icon');
const iconLogout = document.querySelector('.menu__icon-logout');
const savednewsLink = document.querySelector('#savednews-link');
// кнопка "Авторизоваться"
const authButton = document.querySelector('.menu__button-auth');
// кнопка юзера "Логаут"
const usernameButton = document.querySelector('#username-button');

// попап регистрации
const signupPopup = document.querySelector('.popup__signup');
// попап логина
const loginPopup = document.querySelector('.popup__login');
// попап успешной регистрации
const successPopup = document.querySelector('.popup__success');
// кнопки закрытия попапов
const popupSignupClose = document.querySelector('.popup__signup .popup__close');
const popupLoginClose = document.querySelector('.popup__login .popup__close');
const popupSuccessClose = document.querySelector('.popup__success .popup__close');

// форма регистрации

// кнопка "Зарегистрироваться"
const signupButton = document.querySelector('.popup__signup .popup__button');
// ссылка на вход
const popupConnect = document.querySelector('.popup__connect');
const popupSuccessConnect = document.querySelector('.popup__success .popup__connect');

module.exports = {
  header,
  mobMenu,
  mobMenuButton,
  iconLogout,
  savednewsLink,
  authButton,
  usernameButton,
  signupPopup,
  loginPopup,
  successPopup,
  popupSignupClose,
  popupLoginClose,
  popupSuccessClose,
  signupButton,
  popupConnect,
  popupSuccessConnect
};
