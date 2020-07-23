export default class Popup {
  constructor(elem) {
    this.elem = elem;
    this.setContent = this.setContent.bind(this);
    this.clearContent = this.clearContent.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.form = document.querySelector('.popup__form');

    this.listener();
}
  setContent() {} // вставляет в попап содержимое,
                // например, форму входа или сообщение об успешной регистрации;

  clearContent() {} // очищает содержимое попапа

  open() {
      this.elem.classList.add('popup_is-opened');
      this.submitButton.disabled = true;
  }

  close() {
      this.elem.classList.remove('popup_is-opened');
      this.submitButton.disabled = false;
      this.form.reset();
      FormValidator.prototype.clearErrors();
  }

  listener() {
      this.elem.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
    }
}
