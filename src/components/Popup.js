import {KEYBOARD_KEYS} from "../utils/constants.js";

export  default  class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._bindedHandleEscClose = this._handleEscClose.bind(this);
        this._bindedHandlePopupClose = this._handlePopupCLose.bind(this);
    }

    open() {
      this._popupElement.classList.add('popup_is-opened');
      this.setEventListeners();
    }

    close() {
        this._removeEventListeners();
        this._popupElement.classList.remove('popup_is-opened');
    }

    _removeEventListeners() {
        document.removeEventListener('keyup',this._bindedHandleEscClose);
        this._popupElement.removeEventListener('click',this._bindedHandlePopupClose);
    }
    setEventListeners() {
        document.addEventListener('keyup',this._bindedHandleEscClose);
        this._popupElement.addEventListener('click',this._bindedHandlePopupClose);
    }

    _handlePopupCLose (evt) {
        if(evt.target.classList.contains('popup__close')) {
            this.close();
        }
    }

    _handleEscClose(evt){
        if(evt.key === KEYBOARD_KEYS.Escape){
            this.close();
        }
    }

}
