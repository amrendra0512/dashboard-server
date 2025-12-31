import CryptoJS from "crypto-js";

export const decryptAES = (ciphertext) => {
  const SECRET_KEY = process.env.AUTH_SECRET_KEY;
  const SECRET_IV = process.env.AUTH_SECRET_IV;
  const key = CryptoJS.SHA256(SECRET_KEY);

  const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    iv: CryptoJS.enc.Utf8.parse(SECRET_IV),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

  if (!decryptedText) {
    throw new Error("Decryption failed");
  }

  return JSON.parse(decryptedText);
};
