import Popup from "./Popup.js";
import {popupFormSelector,popupInputSelector} from "../utils/constants.js";

export  default class PopupWithForm extends Popup {
    constructor(popupSelector,handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._bindedOnFormSubmit = this._onFormSubmit.bind(this)
    }

    _getInputsValues() {
        const inputsValues = {};
         this._getInputList().forEach((el) => {
            inputsValues[el.name] = el.value;
        });

        return inputsValues;
    }

    _getInputList() {
        const inputList = Array.from(this._popupElement.querySelectorAll(popupInputSelector));

        return inputList;
    }

    _getFormElement() {
        const formElement = this._popupElement.querySelector(popupFormSelector);

        return formElement;
    }

    _onFormSubmit() {
        const inputsValues = this._getInputsValues();
        this._handleFormSubmit(inputsValues);
        this.close();
    }

    setEventListeners(){
        this._getFormElement().addEventListener('submit',this._bindedOnFormSubmit);
        super.setEventListeners();
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._getFormElement().removeEventListener('submit',this._bindedOnFormSubmit);
    }

    close () {
        this._popupElement.querySelector(popupFormSelector).reset();
        super.close();
    }
}
