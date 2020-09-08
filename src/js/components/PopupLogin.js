import { Popup } from './Popup.js';

export class PopupLogin extends Popup {
  constructor (popupContainer, mainApi, header) {
    super(popupContainer);
    this.mainApi = mainApi;
    this.header = header;
  }

  _login = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    const form = this.popupContainer.querySelector('#logIn');
    const email = this.popupContainer.querySelector('#emailSignin');
    const password = this.popupContainer.querySelector('#passwordSignin');

    this._removeEnabled(button, email, password);

    this.mainApi.signin(email.value, password.value).then((data) => {
      this._removeDisabled(button, email, password);
      if (data === undefined) {
        return;
      }
      form.reset();
      this.removePopup();
      this.header.render();
    }).catch((event) => {
      this._removeDisabled(button, email, password);
      this.popupContainer.querySelector('.popup__error-message_server').textContent = event.message;
    })
  }

  _removeDisabled (button, email, password) {
    button.removeAttribute('disabled');
    email.removeAttribute('disabled');
    password.removeAttribute('disabled');
  }

  _removeEnabled (button, email, password) {
    button.setAttribute('disabled', true);
    email.setAttribute('disabled', true);
    password.setAttribute('disabled', true);
  }
}

