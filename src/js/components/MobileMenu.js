export class MobileMenu {
  constructor (mobMenuButton, nav, menuSection, menu, arrayMenuItem, overflow, bodyOverflow, headerLogo) {
    this.mobMenuButton = mobMenuButton;
    this.nav = nav;
    this.menuSection = menuSection;
    this.menu = menu;
    this.arrayMenuItem = arrayMenuItem;
    this.overflow = overflow;
    this.bodyOverflow = bodyOverflow;
    this.headerLogo = headerLogo;
  }

  addListenersMobMenu = () => {
    this.mobMenuButton.addEventListener('click', this.mobMenuOpen);
  }

  mobMenuOpen = (event) => {
    event.preventDefault();
    this._swapHeaderTheme(); // поменять стиль Хэдера
  }

  _swapHeaderTheme = () => {
    this.mobMenuButton.classList.toggle('header__menu-mob-icon_exit');
    this.nav.classList.toggle('header__section_mob');
    this.menuSection.classList.toggle('header__nav_mob');
    this.menu.classList.toggle('menu_mob');
    this.overflow.classList.toggle('overflow_mob');
    this.bodyOverflow.classList.toggle('body-theme_overflowHidden');
    this.arrayMenuItem.forEach((element) => {
      element.classList.toggle('menu__item_mob');
    })

    this.headerLogo.classList.toggle('header__logo_mob');
  }
}
