/**
 * @description taking two parametres from registration form input boxes and checking them with databse
 */
const logIn = () => {
    let login = id(LOGIN).value, password = id(PASSWORD).value;
    if (!checkNamePassword(login, password)) {
        alert('incorrect login / password');
        return;
    }
    disableElement(AUTHORIZATION_BLOCK);
    enableElement(AUTHORIZED_BLOCK);
    LOCALSTORAGE_KEY_NAME = login;
    openUserSession(login);
    id(WELLCOME_LOGOUT_TEXT).innerHTML = `${TEXT_LOGOUT_WELLCOME_EN} ${LOCALSTORAGE_KEY_NAME}.`;
    LOCALSTORAGE_KEY_NAME = login;
}
