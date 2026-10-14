'use strict';
const genPwd = (length, addSonderzeichen) => {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const sonderzeichen = '§$%&?<>*#+-'
    let pwd = '';

    if(addSonderzeichen){
        alphabet += sonderzeichen;
    }

    for(let i = 0; i < length; i++){
        const index = Math.floor(Math.random() * alphabet.length);
        pwd += alphabet[index];
    }
    return pwd;
};

module.exports = genPwd;

//console.log(genPwd(8, true));