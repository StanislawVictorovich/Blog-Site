/**
 * @description Registration new user. Information of login and password from input boxes.
 */
const register = () => {
    if (id(LOGIN).value == '' || id(PASSWORD).vale == '') {
        alert('Incorrect input data.');
        return;
    }
    let login = id(LOGIN).value, passHash = passwordHash(id(PASSWORD).value);
    if (localStorage.getItem(login) == passHash) {
        alert('User has been already registered.');
    } else {
        console.log('User not registered. Registration...');
        localStorage.setItem(login, passHash);
        console.log('Done.');
    }
}

