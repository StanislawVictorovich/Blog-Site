/**
 * @description generete hash-code
 * @param {string} password password from inputbox from login form
 * @returns {string} returns hashcode 
 */
const passwordHash = (password) => {
    let table = `00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 
                 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD 
                 E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 
                 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 
                 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 
                 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C 
                 DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 
                 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 
                 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB 
                 B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 
                 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 
                 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E`;

    let hash = 0, x = 0, y = 0;

    hash = hash ^ (-1);
    for (let i = 0; i < password.length; i++) {
        y = (hash ^ password.charCodeAt(i)) & 0xFF;
        x = "0x" + table.substr(y * 9, 8);
        hash = (hash >>> 8) ^ x;
    }
    return hash ^ (-1);
}

/**
 * @description compare name and hash of users password with same in database 
 * @param {string} name 
 * @param {string} password 
 */
const checkNamePassword = (name, password) => { 
    return localStorage.getItem(name) == passwordHash(password);
}
