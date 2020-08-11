import { Popup } from './Popup.js';

export class PopupLogin extends Popup {
  constructor (popupContainer, myApi, header) {
    super(popupContainer)
    this.myApi = myApi;
    this.header = header;
  }

  _login(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const form = this.popupContainer.querySelector('#login');
    const email = this.popupContainer.querySelector('#emailSignin');
    const password = this.popupContainer.querySelector('#passwordSignin');

    this._myApi.signIn(email.value, password.value).then((data) => {
      this._removeDisabled(button, email, password);
      if (data === undefined) {
        return;
      }
      form.reset();
      this.removePopup();
      this.header.render();
    }).catch((e) => {
      this._removeDisabled(button, email, password);
      this.popupContainer.querySelector('.popup__error-message_server').textContent = e.message;
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
