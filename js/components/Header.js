export default class Header {
  constructor(options) {
    // color - цвет шапки
    const { color, header } = options;
    this.color = color;
    this.header = header;
  }
// метод render перерисовывает шапку в зависимости от
// переданного аргумента - объекта props
// isLoggedIn - залогинен ли пользователь
// userName -имя, отобр. в шапке залогиненного пользователя.
  render(props) {
    const { isLoggedIn, userName } = props;
  }
}
