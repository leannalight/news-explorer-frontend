export class Form {

}

// setServerError — добавляет форме ошибку, пришедшую с сервера;
// _validateInputElement — валидирует переданный в качестве аргумента инпут;
// _validateForm — валидирует всю форму;
// _clear — вспомогательный метод, очищает поля формы;
// _getInfo — вспомогательный метод, возвращает данные формы.

export class FormValidator {
  constructor(form, button) {
    this.form = form;
    this.button = button;

    this.setEventListeners();
  }

  checkInputValidity(event) {
    this.event = event;

    const errorMessage = { validLenght: 'Должно быть от 2 до 30 символов', validInput: 'Это обязательное поле', validLink: 'Здесь должна быть ссылка' };

    let message = "";

    if (this.event.target.validity.valueMissing) {
      message = errorMessage.validInput;
    } else if (this.event.target.validity.typeMismatch) {
      message = errorMessage.validLink;
    } else if (this.event.target.validity.tooShort) {
      message = errorMessage.validLenght;
    }
    this.event.target.nextElementSibling.textContent = message;
}

  setSubmitButtonState() {
    if (!this.form.checkValidity()) {
      this.button.disabled = true;

    } else {
      this.button.disabled = false;
      }
  }

  setEventListeners() {
    this.form.addEventListener('input', this.checkInputValidity.bind(this));
    this.form.addEventListener('input', this.setSubmitButtonState.bind(this));

  }

  clearErrors() {
    const errorText = Array.from(document.querySelectorAll('.popup__error-message'));
    errorText.forEach((element) => {
      element.textContent = '';
    });
  }
}
