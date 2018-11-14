/**
 * Represents LogOut
 * 
 */
const logOut = () => {
    closeUserSession();
    enableElement(AUTHORIZATION_BLOCK);
    disableElement(AUTHORIZED_BLOCK);
}
