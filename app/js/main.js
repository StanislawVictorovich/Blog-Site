/**
 * @description document ready function
 * @callback callback function, that is making up DOM elements
 */
const ready = (callback) => {
    if (document.readyState != 'loading') callback(); // in case the document is already rendered    
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);// modern browsers    
    else document.attachEvent('onreadystatechange', () => {// IE <= 8
        document.readyState == 'complete' && callback();
    });
}

ready(() => {
    activatePage(HOME_PAGE);
    fillContentFromDatabase();
    switchLanguageTo(LANGUAGE_EN);
    LOCALSTORAGE_KEY_NAME = localStorage.getItem(SESSION_NAME);
    if (LOCALSTORAGE_KEY_NAME) {
        id(WELLCOME_LOGOUT_TEXT).innerHTML = `${TEXT_LOGOUT_WELLCOME_EN}  ${LOCALSTORAGE_KEY_NAME} .`;
        enableElement(AUTHORIZED_BLOCK); 
        disableElement(AUTHORIZATION_BLOCK); 
        enableCRUD();
    } else { 
        enableElement(AUTHORIZATION_BLOCK);
        disableElement(AUTHORIZED_BLOCK);
        disableCRUD();
    }
});
