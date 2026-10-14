'use strict';

/*
Aufgabe:
function, ohne parameter -> "6Gnu9Del" ... 8 stellig aus klein-/Großbuchstaben und ziffern
 */

/*
//Schüler Lösung
function keyGen(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for(let i = 0; i < 8; i++){
        key += chars[Math.floor(Math.random() * chars.length)]
    }
    return key;
}

console.log('Random Passwort: ' + keyGen());
*/

//Lehrer Lösung:
const genPwd = () => {
    const length = 8;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let pwd = '';

    for(let i = 0; i < length; i++){
        const index = Math.floor(Math.random() * alphabet.length);
        pwd += alphabet[index];
    }
    return pwd;
};

module.exports = genPwd;

console.log(genPwd());