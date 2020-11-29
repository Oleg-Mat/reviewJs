import {KEYBOARD_KEYS} from "../utils/constants.js";

export  default  class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
      this._popupElement.classList.add('popup_is-opened');
      this.setEventListeners();
    }

    close() {
        this._popupElement.classList.remove('popup_is-opened');
    }

    setEventListeners() {
        document.addEventListener('keyup',(evt)=>this._handleEscClose(evt));
        this._popupElement.addEventListener('click',(evt)=>this._handlePopupCLose(evt));
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
