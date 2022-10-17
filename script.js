///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////


function generatePassword() {
    var char = prompt("How many characters? min:8, max:15");

    if (char >= 8 && char <= 128) {
        var special = confirm("Any special characters?(yes = OK/no = cancel)");
        if (special) {
            return makePasswordSpecial(char);
        } else {
            return makePassword(char);
        }
    } else {
        alert("Must choose between 8 and 128 characters!!");
    }
}

function makePasswordSpecial(length) {
    var result = "";
    var specialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&*";
    var specialCharactersLength = specialCharacters.length;
    for (var i = 0; i < length; i++) {
        result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
    }
    return result;
}
function makePassword(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}