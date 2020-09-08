import { Popup } from './Popup.js'

export class PopupSignup extends Popup {
  constructor (popupContainer, mainApi, openSuccessForm) {
    super(popupContainer)
    this.mainApi = mainApi;
    this.openSuccessForm = openSuccessForm;
  }

  _register = (event) => {
    event.preventDefault();
    const button = event.currentTarget;
    const form = this.popupContainer.querySelector('#signUp');
    const email = this.popupContainer.querySelector('#emailSignup');
    const password = this.popupContainer.querySelector('#passwordSignup');
    const userName = this.popupContainer.querySelector('#username');

    this._removeEnabled(button, email, password, userName);

    this.mainApi.signup(email.value, password.value, userName.value).then((data) => {
      this._removeDisabled(button, email, password, userName);
      if (data !== undefined) {
        form.reset();
        this.removePopup();
        this.openSuccessForm();
      }
    }).catch((event) => {
      this._removeDisabled(button, email, password, userName);
      this.popupContainer.querySelector('.popup__error-message_server').textContent = event.message;
    })
  }
  _removeDisabled (button, email, password, userName) {
    button.removeAttribute('disabled');
    email.removeAttribute('disabled');
    password.removeAttribute('disabled');
    userName.removeAttribute('disabled');
  }
  _removeEnabled (button, email, password, userName) {
    button.removeAttribute('disabled', true);
    email.removeAttribute('disabled', true);
    password.removeAttribute('disabled', true);
    userName.removeAttribute('disabled', true);
  }
}
