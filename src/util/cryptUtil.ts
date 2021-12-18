import { AES, enc } from 'crypto-js';

function encryptText(message: string, key: string){
    return AES.encrypt(message, key).toString();
}

function decryptText(message: string, key: string){
    const result = AES.decrypt(message, key);

    return result.sigBytes < 0
            ? 'invalidKey'
            : result.toString(enc.Utf8)
}

export {
    encryptText,
    decryptText
};
