import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css';
import {
  initialCards,
  cardSelector,
  popupEditSelector,
  titleInputValue,
  descriptionInputValue,
  popupWithImageSelector,
  editFormModalWindow,
  openEditFormButton,
  popupNewCardSelector,
  openCardFormButton,
  userProfileTitleSelector,
  userProfileDescriptionSelector,
  cardFormModalWindow,
  defaultFormConfig,
  cardSectionsSelector
} from '../utils/constants.js';

//создание новой карточки
const addNewCard = (card) => {
  const newCard = new Card(card,cardSelector, handleCardClick);
  const newCardElement = newCard.getView();
  cardList.addItem(newCardElement);
};

//карточки
const handleCardClick = (card) => {
  const popupWithImage = new PopupWithImage(popupWithImageSelector);
  popupWithImage.open(card);
};

const cardList = new Section ({
  items: initialCards,
  renderer: (card) => {
    addNewCard(card);
  },
}, cardSectionsSelector);


//пользователь
const user = new UserInfo({userProfileTitleSelector, userProfileDescriptionSelector});

//форма пользователя
const handleUserFormSubmit = (userData) => {
  user.setUserInfo(userData);
};

//значение формы user
const setUserFormValues = (name, description) =>{
  titleInputValue.value = name;
  descriptionInputValue.value = description;
};

const handleOpenEditForm = () =>{
  const {name, description} = user.getUserInfo();
  setUserFormValues(name,description)
  const popupWithForm  = new PopupWithForm(popupEditSelector, handleUserFormSubmit);
  popupWithForm.open();
};

//форма новой карточки
const handleAddCardFormSubmit = (card) => {
  addNewCard(card);
};

const handleAddCardForm = () => {
  const popupWithForm  = new PopupWithForm(popupNewCardSelector, handleAddCardFormSubmit);
  popupWithForm.open();
};

cardList.renderItems();

openEditFormButton.addEventListener('click',  handleOpenEditForm);
openCardFormButton.addEventListener('click', handleAddCardForm);

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
