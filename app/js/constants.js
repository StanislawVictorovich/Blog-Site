const id = document.getElementById.bind(document);
// ***** Content block *****
const HOME_PAGE = 'idHomePage';
const NEWS = 'idNews';
const CONTACTS = 'idContacts';
const MY_BLOG_PAGE = 'idMyBlogPage';
const LOGIN_PAGE = 'idLogInPage';
// ***** Navigate block *****
const NAVIGATE_HOME = 'NavHomePage';
const NAVIGATE_NEWS = 'NavNews';
const NAVIGATE_CONTACTS = 'NavContacts';
const NAVIGATE_BLOG = 'NavMyBlogPage';
const NAVIGATE_LOGIN = 'NavLogInPage';
// ***** Language interface switching elements *****
const LANGUAGE_RU = 'RU';
const LANGUAGE_EN = 'EN';
const TITLE_MY_BLOG_EN = 'My blog site';
const TITLE_MY_BLOG_RU = 'Мой блог';
const TEXT_HOME_PAGE_EN = 'Home Page';
const TEXT_HOME_PAGE_RU = 'Домашняя страница';
const TEXT_NEWS_EN = 'News';
const TEXT_NEWS_RU = 'Новости';
const TEXT_CONTACTS_EN = 'Our contacts';
const TEXT_CONTACTS_RU = 'Наши контакты';
const TEXT_MY_BLOG_EN = 'My blog';
const TEXT_MY_BLOG_RU = 'Мой блог';
const TEXT_COMMENTS_EN = 'Comments';
const TEXT_COMMENTS_RU = 'Комментарии';
const TEXT_LOGIN_EN = 'Log In';
const TEXT_LOGIN_RU = 'Вход';
const TEXT_LOGIN_LABEL_EN = 'Login';
const TEXT_LOGIN_LABEL_RU = 'Логин';
const TEXT_PASSWORD_LABEL_EN = 'Password';
const TEXT_PASSWORD_LABEL_RU = 'Пароль';
const TEXT_LOGIN_BUTTON_EN = 'Accept';
const TEXT_LOGIN_BUTTON_RU = 'Принять';
const TEXT_LOGOUT_BUTTON_EN = 'Logout';
const TEXT_LOGOUT_BUTTON_RU = 'Выход';
const TEXT_REGISTER_BUTTON_EN = 'Register';
const TEXT_REGISTER_BUTTON_RU = 'Зарегистрироваться';
const TEXT_H1_LOGIN_WELLCOME_TITLE_EN = 'Log in';
const TEXT_LOGIN_WELLCOME_EN = 'To enter the site, please enter login and password    ';
const TEXT_H1_LOGIN_WELLCOME_TITLE_RU = 'Личный кабинет';
const TEXT_LOGIN_WELLCOME_RU = 'Чтоб войти на сайт, пожалуйста, введите логин и пароль';
const TEXT_LOGOUT_WELLCOME_EN = `Hello, `;
const TEXT_LOGOUT_WELLCOME_RU = `Привет, `;
// ***** Object of id-elements *****
const ELEMENTS_MAIN = { // main page elements
    HOME_PAGE_ELEMENT: id(HOME_PAGE),
    NEWS_ELEMENT: id(NEWS),
    CONTACTS_ELEMENT: id(CONTACTS),
    MY_BLOG_PAGE_ELEMENT: id(MY_BLOG_PAGE),
    LOGIN_ELEMENT: id(LOGIN_PAGE)
}
const ELEMENTS_NAVIGATE = { // navigate elements
    NAVIGATE_HOME_ELEMENT: id(NAVIGATE_HOME),
    NAVIGATE_NEWS_ELEMENT: id(NAVIGATE_NEWS),
    NAVIGATE_CONTACTS_ELEMENT: id(NAVIGATE_CONTACTS),
    NAVIGATE_BLOG_ELEMENT: id(NAVIGATE_BLOG),
    NAVIGATE_LOGIN_ELEMENT: id(NAVIGATE_LOGIN)
}
const ELEMENTS_LANGUAGES = {
    RU: id(LANGUAGE_RU),
    EN: id(LANGUAGE_EN)
}
// ***** other constants *****
const LOGIN_LABEL = 'LoginLabel';
const PASSWORD_LABEL = 'PasswordLabel';
const LOGIN = 'LoginInput';
const PASSWORD = 'PasswordInput';
const TITLE_LOGIN_TEXT = 'TitleLogin';
const WELLCOME_LOGIN_TEXT = 'TextLogin';
const WELLCOME_LOGOUT_TEXT = 'TextLogout';
const BUTTON_LOGIN = 'ButtonLogin';
const BUTTON_LOGOUT = 'ButtonLogout';
const BUTTON_REGISTER = 'ButtonRegister';
const AUTHORIZATION_BLOCK = 'AuthorizationBlock';
const AUTHORIZED_BLOCK = 'AuthorizedBlock';
const ARTICLE = 'article';
const COMMENTS_SECTION = 'CommentsSection';
const SESSION_NAME = '_userLogined'; // name of logged user
let LOCALSTORAGE_KEY_NAME = ''; // key of name logged user
