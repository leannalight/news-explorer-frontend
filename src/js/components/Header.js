export class Header {
  constructor(options) {
    // color - цвет шапки
    const {
      color,
      header,
      authButton,
      usernameButton,
      mobMenuButton,
      mobMenu,
      headerAuthText,
      iconLogout,
      signupPopup,
      savednewsLink,
    } = options;

    this.header = header;
    this.color = color;
    this.authButton = authButton;
    this.mobMenuButton = mobMenuButton;
    this.mobMenu = mobMenu;
    this.signupPopup = signupPopup;
    this.headerAuthText = headerAuthText;
    this.iconLogout = iconLogout;
    this.savednewsLink = savednewsLink;
    this.usernameButton = usernameButton;
  }

  setEventListeners() {
    this.mobMenuButton.addEventListener('click', () => {
      this.mobMenu.classList.toggle('.menu_shown');
      this.mobMenuButton.classList.toggle('header__menu-mob-icon_active');
      this.header.classList.toggle('header_black');
    });
    this.authButton.addEventListener('click', () => {
      if (this.headerAuthText.textContent === 'Авторизоваться') {
        this.login();
      } else {
        this.iconLogout();
      }
    });
  }

  logout() {
    this.headerAuthText.textContent = 'Авторизоваться';
    this.iconLogout.classList.remove('menu__icon-logout_shown');
    this.savednewsLink.classList.add('menu__link_hidden');
    this.mobMenu.classList.remove('menu_auth');
  }

  login() {
    this.signupPopup.classList.remove('popup_hidden');
    this.signupPopup.classList.add('popup_shown');
  }
// метод render перерисовывает шапку в зависимости от
// переданного аргумента - объекта props
// isLoggedIn - залогинен ли пользователь
// userName -имя, отобр. в шапке залогиненного пользователя.
  render(props) {
    const { isLoggedIn, userName } = props;
    if (isLoggedIn) {
      this.iconLogout.classList.add('menu__icon-logout_shown');
      this.headerAuthText.innerText = userName;
      this.savednewsLink.classList.remove('menu__link_hidden');
      this.mobMenu.classList.add('menu_auth');
    } else {
      this.logout();
    }
  }
}

