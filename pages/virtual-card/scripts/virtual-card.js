/// All this just to hide my email and phone number from crawlers at Github
// Cypher class: CaesarCipher
var CaesarCipher = /** @class */ (function () {
    function CaesarCipher(key) {
        this.key = key;
    }
    CaesarCipher.prototype.encrypt = function (plaintext) {
        return this.cipherUnicode(plaintext, this.key);
    };
    CaesarCipher.prototype.decrypt = function (ciphertext) {
        return this.cipherUnicode(ciphertext, -this.key);
    };
    CaesarCipher.prototype.cipher = function (text, key) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if (c >= 65 && c <= 90) {
                result += String.fromCharCode(((c - 65 + key) % 26) + 65);
            }
            else if (c >= 97 && c <= 122) {
                result += String.fromCharCode(((c - 97 + key) % 26) + 97);
            }
            else {
                result += text.charAt(i);
            }
        }
        return result;
    };
    // Cipher function that supports unicode
    CaesarCipher.prototype.cipherUnicode = function (text, shift) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                // uppercase letters
                charCode = ((charCode - 65 + shift) % 26) + 65;
            }
            else if (charCode >= 97 && charCode <= 122) {
                // lowercase letters
                charCode = ((charCode - 97 + shift) % 26) + 97;
            }
            else {
                // non-alphabetic characters
                charCode = (charCode + shift) % 65536;
            }
            result += String.fromCharCode(charCode);
        }
        return result;
    };
    return CaesarCipher;
}());
// Cypher key (Caesar shift)
var key = 3;
// The cipher object
var cipher = new CaesarCipher(key);
// Email
var emailEncrypted = "phCmrujhiuldv1hx";
var email;
// Phone
var phone;
var phoneEncrypted = ".67#9;<#49#79#49";
// Decrypt email and phone
email = cipher.decrypt(emailEncrypted);
phone = cipher.decrypt(phoneEncrypted);
// On document ready without JQuery
document.addEventListener("DOMContentLoaded", function (event) {
    // Set email and phone
    document.getElementById("email").innerHTML = email;
    document.getElementById("phone").innerHTML = phone;
    // Change href
    document.getElementById("email-button").setAttribute("href", "mailto:" + email);
});
