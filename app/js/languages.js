/**
 * @description switching language 
 * @param {string} language constant, with the name of selected language
 */
const switchLanguageTo = (language) => {
    for (let element in ELEMENTS_LANGUAGES) {
        language === element ?
            ELEMENTS_LANGUAGES[element].classList.add('NavigationClicked') :
            ELEMENTS_LANGUAGES[element].classList.remove('NavigationClicked');
    }
    switch (language) {
        case LANGUAGE_EN:
            id(NAVIGATE_HOME).innerHTML = TEXT_HOME_PAGE_EN;
            id(NAVIGATE_NEWS).innerHTML = TEXT_NEWS_EN;
            id(NAVIGATE_CONTACTS).innerHTML = TEXT_CONTACTS_EN;
            id(NAVIGATE_BLOG).innerHTML = TEXT_MY_BLOG_EN;
            id(NAVIGATE_LOGIN).innerHTML = TEXT_LOGIN_EN;
            id(LOGIN_LABEL).innerHTML = TEXT_LOGIN_LABEL_EN;
            id(PASSWORD_LABEL).innerHTML = TEXT_PASSWORD_LABEL_EN;
            id(BUTTON_LOGIN).innerHTML = TEXT_LOGIN_BUTTON_EN;
            id(BUTTON_LOGOUT).innerHTML = TEXT_LOGOUT_BUTTON_EN;
            id(BUTTON_REGISTER).innerHTML = TEXT_REGISTER_BUTTON_EN;
            id(TITLE_LOGIN_TEXT).innerHTML = TEXT_H1_LOGIN_WELLCOME_TITLE_EN;
            id(WELLCOME_LOGIN_TEXT).innerHTML = TEXT_LOGIN_WELLCOME_EN;
            id(WELLCOME_LOGOUT_TEXT).innerHTML = `${TEXT_LOGOUT_WELLCOME_EN}  ${LOCALSTORAGE_KEY_NAME}.`;
            break;
        case LANGUAGE_RU:
            id(NAVIGATE_HOME).innerHTML = TEXT_HOME_PAGE_RU;
            id(NAVIGATE_NEWS).innerHTML = TEXT_NEWS_RU;
            id(NAVIGATE_CONTACTS).innerHTML = TEXT_CONTACTS_RU;
            id(NAVIGATE_BLOG).innerHTML = TEXT_MY_BLOG_RU;
            id(NAVIGATE_LOGIN).innerHTML = TEXT_LOGIN_RU;
            id(LOGIN_LABEL).innerHTML = TEXT_LOGIN_LABEL_RU;
            id(PASSWORD_LABEL).innerHTML = TEXT_PASSWORD_LABEL_RU;
            id(BUTTON_LOGIN).innerHTML = TEXT_LOGIN_BUTTON_RU;
            id(BUTTON_LOGOUT).innerHTML = TEXT_LOGOUT_BUTTON_RU;
            id(BUTTON_REGISTER).innerHTML = TEXT_REGISTER_BUTTON_RU;
            id(TITLE_LOGIN_TEXT).innerHTML = TEXT_H1_LOGIN_WELLCOME_TITLE_RU;
            id(WELLCOME_LOGIN_TEXT).innerHTML = TEXT_LOGIN_WELLCOME_RU;
            id(WELLCOME_LOGOUT_TEXT).innerHTML = `${TEXT_LOGOUT_WELLCOME_RU}  ${LOCALSTORAGE_KEY_NAME}.`;
            break;
        default:
            console.log('language not supported.');
            break;
    }
}
