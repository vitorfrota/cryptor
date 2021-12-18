import { AES, enc } from 'crypto-js';

function encryptText(message: string, key: string){
    return AES.encrypt(message, key).toString();
}

function decryptText(message: string, key: string){
    return AES.decrypt(message, key).toString(enc.Utf8);
}

export {
    encryptText,
    decryptText
};
