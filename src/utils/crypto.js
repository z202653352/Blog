import CryptoJS from 'crypto-js'

/**
 * AES 加密
 * @param word: 需要加密的文本
 * KEY: // 需要前后端保持一致
 * mode: ECB // 需要前后端保持一致
 * pad: Pkcs7 //前端 Pkcs7 对应 后端 Pkcs5
 */
const KEY = CryptoJS.enc.Utf8.parse('WhyAreYouTranslating')

export const AESEncrypt = (plaintext) => {
  let data = JSON.stringify(plaintext)
  let ciphertext = CryptoJS.AES.encrypt(data, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString()
  return ciphertext
}

/**
 * AES 解密
 * @param jsonStr
 */
export const AESDecrypt = (jsonStr) => {
  let plaintext = CryptoJS.AES.decrypt(jsonStr, KEY, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8)
  console.log('plaintext', plaintext);
  var decryptedData = JSON.parse(plaintext);
  return decryptedData
}
