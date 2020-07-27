export class Popup {
  constructor(elem) {
    this.elem = elem;
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.form = document.querySelector('.popup__form');
 //   this.setContent = this.setContent.bind(this);
 //   this.clearContent = this.clearContent.bind(this);
}
 // setContent() {} // вставляет в попап содержимое,
                // например, форму входа или сообщение об успешной регистрации;
 // clearContent() {} // очищает содержимое попапа
  open() {
    this.form.reset();
    this.elem.classList.add('popup_shown');
  }

  close() {
    this.elem.classList.remove('popup_shown');
  }
}
