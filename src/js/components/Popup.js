import { FormValidator } from "./FormValidator.js";

export class Popup {
  constructor (popupContainer) {
    this.popupContainer = popupContainer;

    this.form = document.querySelector('.popup__form');
    this.listener();
}

  open = () => {
    this.popupContainer.classList.add('popup_shown');
    this._addListenerClose(this.popupContainer);
  }

  close = (event) => {
    if (event.target.classList.contains('popup__close')) {
      this._closePopup(event);
    }
    if (event.target.classList.contains('popup')) {
      this._closePopup(event);
    }
    if (event.target.classList.contains('popup__connect_go')) {
      this._closePopup(event);
    }
  }

  _closePopup = (event) => {
    const popup1 = event.target.closest('.popup');
    this._removeListenerClose(popup1);
    popup1.classList.remove('popup_shown');

    this.form.reset(); // Добавила очистку формы и ошибок после закрытия
    FormValidator.prototype.clearErrors();
  }

  _addListenerClose = (popup) => {
    popup.addEventListener('click', this.close);
  }

  _removeListenerClose = (popup) => {
    popup.removeEventListener('click', this.close);
  }

  removePopup = () => {
    this._removeListenerClose(this.popupContainer);
    this.popupContainer.classList.remove('popup_shown');
  }

  listener() {
    this.popupContainer.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
  }

}
