export class Header {
  constructor(arrayMenusHeaderHide, menuAuthItem, mainApi) {

    this.arrayMenusHeaderHide = arrayMenusHeaderHide;
    this.menuAuthItem = menuAuthItem;
    this.mainApi = mainApi;
  }

  render() {
    this.mainApi.getUserById().then((data) => {
      if (data === undefined) {
        return;
      }
      const userName = data.name;
      this.menuAuthItem.classList.add('menu__item_logoff');
      const menuButtonLength = this.arrayMenusHeaderHide.length - 1;
      this.arrayMenusHeaderHide.forEach((element, index) => {
        element.classList.remove('menu__item_logoff');
        if (index === menuButtonLength) {
          element.querySelector('.menu__button').textContent = userName;
          this._addListenerLogout(element);
        }
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  renderSecondPage() {
    this.mainApi.getUserById().then((data) => {
      if (data === undefined) {
        return location = './';
      }
      this._addListenerLogout(this.menuAuthItem);
      this.menuAuthItem.textContent = data.name;
    })
    .catch((err) => {
      console.log(err);
      return location = './';
    })
  }

  _addListenerLogout = (element) => {
    element.addEventListener('click', this._removeListenerLogout)
  }

  _removeListenerLogout = (event) => {
    if (event.target.classList.contains('menu__button')) {
      event.preventDefault();
      const itemButton = event.currentTarget;
      this.mainApi.signout().then(() => {
        itemButton.removeEventListener('click', this._addListenerLogout);
        location.reload(); // перезагрузка страницы
      })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}
// метод render перерисовывает шапку в зависимости от переданного аргумента - объекта
// userName -имя, отобр. в шапке залогиненного пользователя.

