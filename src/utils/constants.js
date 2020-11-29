export const KEYBOARD_KEYS = {
    Escape : 'Escape'
};

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//моадльные окна
export const editFormModalWindow = document.querySelector('.popup_type_edit');
export const cardFormModalWindow = document.querySelector('.popup_type_new-card');

// Кнопки добавление карточки и редактирования профайла
export const openEditFormButton = document.querySelector('.profile__edit-button');
export const openCardFormButton = document.querySelector('.profile__add-button');

// Элементы профайла
export const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_name');
export const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');

//селекторы
export const cardSelector = '.card-template';
export const cardSectionsSelector = '.places__list';
export const popupWithImageSelector = '.popup_type_image';
export const popupEditSelector = '.popup_type_edit';
export const popupNewCardSelector = '.popup_type_new-card';
export const popupImageSelector = '.popup__image';
export const popupImageCaption = '.popup__caption';
export const popupFormSelector = '.popup__form';
export const popupInputSelector = '.popup__input';
export const userProfileTitleSelector = '.profile__title';
export const userProfileDescriptionSelector = '.profile__description';

export const defaultFormConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};
