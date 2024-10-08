class FormValidator{
    constructor(settings, formEl) { 
        this._inputSelector = settings.inputSelector; 
        this._formSelector = settings.formSelector;
        this._submitButtonSelector = settings.submitButtonSelector; 
        this._errorClass = settings.errorClass; 
        this._inputErrorClass = settings.inputErrorClass; 
        this._inactiveButtonClass = settings.inactiveButtonClass; 
        this._formEl = formEl;
    }

    _checkInputValidity() {

    }

    _setEventListeners() {
        const setEventListeners = (formElement, settings) => {
            this._inputList = Array.from(
              this._formEl.querySelectorAll(this._inputSelector),
            );
            const buttonElement = formElement.querySelector(
              settings.submitButtonSelector,
            );
          
            toggleButtonState(inputList, buttonElement, settings);
          
            this._inputList.forEach((inputElement) => {
              inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                toggleButtonState(inputList, buttonElement, settings);
              });
            });
        };
    };

    enableValidation() {
        this._formEl.addEventListener("submit", (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
    };
};

    export default FormValidator;
