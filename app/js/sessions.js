const openUserSession = (userName) => {
    LOCALSTORAGE_KEY_NAME = userName;
    localStorage.setItem(SESSION_NAME, LOCALSTORAGE_KEY_NAME);
    enableCRUD();
}

const closeUserSession = () => {
    LOCALSTORAGE_KEY_NAME = ' ';
    localStorage.removeItem(SESSION_NAME);
    disableCRUD();
}
