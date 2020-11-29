export default class UserInfo {
    constructor({userProfileTitleSelector,userProfileDescriptionSelector}) {
        this._userName = document.querySelector(userProfileTitleSelector);
        this._userProfileDescription = document.querySelector(userProfileDescriptionSelector);
    }

    getUserInfo() {
       return {
           name: this._userName.textContent,
           description: this._userProfileDescription.textContent
       }
    }

    setUserInfo({name, description}) {
        this._userName.textContent = name;
        this._userProfileDescription.textContent = description;
    }
}
