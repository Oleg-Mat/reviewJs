import Popup from "./Popup.js";
import {popupImageCaption, popupImageSelector} from "../utils/constants.js";

//Так же в задании указали только link и text как аргумент.Так бы селектор прокинуть.
//Не знаю спкциально так для студентов сделано и они должны додумать.
export default class PopupWithImage extends  Popup {
    open ({link, text}){
    this._setImageData(link,text);
    super.open();
    }
    //Не совсем понятно можно ли было создавать метод, если в задании сказано
    // чётко какие должны быть.
    _setImageData(link, text) {
        this._imageElement = this._popupElement.querySelector(popupImageSelector);
        this._imageElementCaption = this._popupElement.querySelector(popupImageCaption);
        this._imageElement.src = link;
        this._imageElementCaption.textContent = text;
    }
}
