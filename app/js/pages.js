/**
 * @description Activating element blocks by navigating
 * @param {string} page constant, with the name of page
 */
const activatePage = (page) => {
    document.title = `${TITLE_MY_BLOG_EN} | ${page.substr(2)}`; //switching title
    for (let element in ELEMENTS_MAIN) {
        page == ELEMENTS_MAIN[element].id ? ELEMENTS_MAIN[element].style.display = 'flex' : ELEMENTS_MAIN[element].style.display = 'none';
    }
    for (let element in ELEMENTS_NAVIGATE) {
        page.substr(2) == ELEMENTS_NAVIGATE[element].id.substr(3) ? //truncate prefix 'nav' from id's of navigate elements
            ELEMENTS_NAVIGATE[element].classList.add('NavigationClicked') :
            ELEMENTS_NAVIGATE[element].classList.remove('NavigationClicked');
    }
};

/**
 * @description Enables element by it's id
 * @param {string} element id 
 */
const enableElement = (element) => {
    id(element).style.display = 'block';
}

/**
 * @description Disables element by it's id
 * @param {string} element id 
 */
const disableElement = (element) => {
    id(element).style.display = 'none';
}

/**
 * @description Enables CRUD's elements
 */
const enableCRUD = () => {
    let elements = document.getElementsByClassName('CRUDElement'), i = elements.length;
    while (i--) {
        elements[i].style.visibility = 'visible'; 
    }
}

/**
 * @description Disables CRUD's elements
 */
const disableCRUD = () => {
    let elements = document.getElementsByClassName('CRUDElement'), i = elements.length;
    while (i--) {
        elements[i].style.visibility = 'hidden'; 
    }
}

/**
 * Represents a fillContentFromDatabase
 * Reading data from virtual database and fill the site content
 */
const fillContentFromDatabase = () => {
    for (let i = 0; i < DATA_NEWS.length; i++) { // read and fill news from database
        generateHtmlElement(ARTICLE, NEWS, `<h1>${DATA_NEWS[i].TITLE}</h1> <img src="${DATA_NEWS[i].IMAGE}"/>${DATA_NEWS[i].CONTENT}`);
    }
    generateHtmlElement(ARTICLE, CONTACTS, `<h1>${TEXT_CONTACTS_EN}:</h1><p>${DATA_CONTACTS.ADRESS}</p>
        <p>${DATA_CONTACTS.PHONE}</p><p>${DATA_CONTACTS.EMAIL}</p>`);// read and fill contacts from database
    // read and fill homepage content from database
    generateHtmlElement(ARTICLE, HOME_PAGE, `<h1>${DATA_HOME.TITLE}</h1><br>${DATA_HOME.CONTENT}`);

    for (let i = 0; i < DATA_BLOG.length; i++) { // read and fill blog content from database
        let blogContainer = `<h1>${DATA_BLOG[i].TITLE}</h1><img src="${DATA_BLOG[i].IMAGE}"/>

        <p>${DATA_BLOG[i].CONTENT}</p><p class="Tags">${DATA_BLOG[i].TAGS}<p><p class="AuthorBlogContainer">
            <img src="${DATA_BLOG[i].AVATAR}"/ class="Avatar"> <b class="NickName">${DATA_BLOG[i].AUTHOR}</b> 👍${DATA_BLOG[i].LIKES}</p>
        <hr><p id=${COMMENTS_SECTION}><center>${TEXT_COMMENTS_EN}<center/></p>
        
            <div id="ContainerBlog${i}">`;

        for (let j = 0; j < DATA_BLOG[i].COMMENTS.length; j++) {

            blogContainer += `<div id="CommentBlock${j + i}"><hr><p class="AuthorBlogContainer"><img src="${DATA_BLOG[i].COMMENTS[j].AVATAR}" class="Avatar"/> 
            <b class="NickName CommentBox">${DATA_BLOG[i].COMMENTS[j].AUTHOR}</b><p>
            <p class="CRUDBox">
                <div class="CRUDElement" onclick="editComment('CommentText${i + j}')">📝</div> 

                <div class="CRUDElement" onclick="removeComment('CommentBlock${i + j}')">❌</div>
            </p>
            <p class="CommentBox" id="CommentText${i + j}">${DATA_BLOG[i].COMMENTS[j].COMMENT}</p>
            <p class="CommentBox">👍 ${DATA_BLOG[i].COMMENTS[j].LIKES}</p></div>`;
        }

        blogContainer += `
        
            </div>
        
            <hr>
            <p class="CRUDBox">
                <div class="CRUDElement" onclick="newComment(ContainerBlog${i})">New comment</div> 
            </p>`;

        generateHtmlElement(ARTICLE, MY_BLOG_PAGE, blogContainer);
    } 
    
    generateHtmlElement(ARTICLE, LOGIN_PAGE, `<h1 id=${TITLE_LOGIN_TEXT} > ${TEXT_H1_LOGIN_WELLCOME_TITLE_EN} </h1> 

        <div id=${AUTHORIZATION_BLOCK} >
            <p id=${WELLCOME_LOGIN_TEXT} > ${TEXT_LOGIN_WELLCOME_EN} </p> 
            <label for=${LOGIN} class="required" id=${LOGIN_LABEL} >Login</label>
                <input type="text" class="inputs" id=${LOGIN} />
            <label for=${PASSWORD} class="required" id=${PASSWORD_LABEL} >Password</label>
                <input type="password" maxlength=16 class="inputs" id=${PASSWORD} />
            <div id=${BUTTON_LOGIN} class="Button" onclick="logIn()">${TEXT_LOGIN_BUTTON_EN}</div>
            <div id=${BUTTON_REGISTER} class="Button" onclick="register()">${TEXT_REGISTER_BUTTON_EN}</div>
        </div>

        <div id=${AUTHORIZED_BLOCK} >
            <p id=${WELLCOME_LOGOUT_TEXT} > ${TEXT_LOGOUT_WELLCOME_EN} </p> 
            <div id=${BUTTON_LOGOUT} class="Button" onclick="logOut()">${TEXT_LOGOUT_BUTTON_EN}
            </div>
        </div>
        `);
}

/**
 * Represents a generateHtmlElement
 * Genereting HTML element
 * @param {object} childElement object to a child element, that appends in parent element
 * @param {object} parentElement object to a parent element, that contents appended child objects in it
 * @param {string} statement html content, that appends in selected block
 */
const generateHtmlElement = (childElement, parentElement, statement) => {
    let newElement = document.createElement(childElement); 
    newElement.innerHTML = statement;
    id(parentElement).appendChild(newElement);
}

/**
 * Block of DOM-listiners functions
 */
const loadHomePage = () => activatePage(HOME_PAGE);
const loadNewsPage = () => activatePage(NEWS);
const loadContatcsPage = () => activatePage(CONTACTS);
const loadMyBlogPage = () => activatePage(MY_BLOG_PAGE);
const loadLogInPage = () => activatePage(LOGIN_PAGE);
const loadLanguageRussianInterface = () => switchLanguageTo(LANGUAGE_RU);
const loadLanguageEnglishInterface = () => switchLanguageTo(LANGUAGE_EN);

/**
 * CRUD's functions below
 */
const removeComment = (element) => id(element).remove();
const editComment = (element) => id(element).innerHTML = prompt('Editing comment. Enter new text here.');

const newComment = (parentElement) => {
    let newCommentText = prompt('Writing new comment. Enter new text below.');
    if (!newCommentText) {
        alert('Your message is empty.');
        return
    }
    let indexOfNextElement = ++parentElement.children[parentElement.children.length-1].id.split('CommentBlock')[1];
    
    parentElement.innerHTML += `<div id="CommentBlock${indexOfNextElement}"><hr><p class="AuthorBlogContainer"><img src="img/default-avatar.jpg" class="Avatar"/> 
    <b class="NickName CommentBox">${LOCALSTORAGE_KEY_NAME}</b><p>
    <p class="CRUDBox">
        <div class="CRUDElement" onclick="editComment('CommentText${indexOfNextElement}')">📝</div> 

        <div class="CRUDElement" onclick="removeComment('CommentBlock${indexOfNextElement}')">❌</div>
    </p>
    <p class="CommentBox" id="CommentText${indexOfNextElement}">${newCommentText}</p>
    <p class="CommentBox">👍 ${0}</p></div>`;
}
