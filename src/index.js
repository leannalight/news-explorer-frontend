import './index.css';

import { Header } from './js/components/Header.js';
import { Popup } from './js/components/Popup.js';
import { Form } from './js/components/Form.js';
import { NewsCard } from './js/components/NewsCard.js';
import { NewsCardList } from './js/components/NewsCardList.js';

console.log(Header);
console.log(Popup);
console.log(Form);
console.log(NewsCard);
console.log(NewsCardList);

// Переменные, импортируем из констант
const {
  header, mobMenu, mobMenuButton, iconLogout, savednewsLink, authButton, signupPopup,
  loginPopup, successPopup, popupSignupClose, popupLoginClose, popupSuccessClose,
  signupButton, popupConnect, popupSuccessConnect
} = require('./js/constants/constants.js');

// подключаем классы
const popup = new Popup();
const form = new Form();

const headerObject = new Header({
  header,
  color: 'black',
  authButton,
  mobMenu,
  mobMenuButton,
  signupPopup,
  iconLogout,
  savednewsLink,
});
headerObject.setEventListeners();
// вешаем обработчики событий
signupPopup.addEventListener('submit', (event) => {
  successPopup.classList.remove('popup_hidden');
  successPopup.classList.add('popup_shown');
  signupPopup.classList.remove('popup_shown');
  signupPopup.classList.add('popup_hidden');
  event.preventDefault();
  event.target.reset();
});
loginPopup.addEventListener('submit', (event) => {
  loginPopup.classList.remove('popup_shown');
  loginPopup.classList.add('popup_hidden');
  headerObject.render({ isLoggedIn: true, userName: 'Анна' });
  event.preventDefault();
  event.target.reset();
});
popupConnect.addEventListener('click', (event) => {
  signupPopup.classList.remove('popup_shown');
  signupPopup.classList.add('popup_hidden');
  loginPopup.classList.add('popup_shown');
  loginPopup.classList.remove('popup_hidden');
  event.preventDefault();
});
popupSuccessConnect.addEventListener('click', (event) => {
  successPopup.classList.remove('popup_shown');
  successPopup.classList.add('popup_hidden');
  loginPopup.classList.add('popup_shown');
  loginPopup.classList.remove('popup_hidden');
  event.preventDefault();
});
popupLoginClose.addEventListener('click', () => {
  loginPopup.classList.remove('popup_shown');
  loginPopup.classList.add('popup_hidden');
});
popupSignupClose.addEventListener('click', () => {
  signupPopup.classList.remove('popup_shown');
  signupPopup.classList.add('popup_hidden');
});
popupSuccessClose.addEventListener('click', () => {
  successPopup.classList.remove('popup_shown');
  successPopup.classList.add('popup_hidden');
});

// popup open
authButton.addEventListener('click', () => {
  signupPopup.classList.add('popup_shown');
  signupPopup.classList.remove('popup_hidden');
})
