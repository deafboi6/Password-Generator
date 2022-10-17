///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "*&^%$#@!~";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";

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
    var char = prompt("How many characters? min:8, max:128");
    var string = "";
    if (char >= 8 && char <= 128) {
        var funSpecial = confirm("Any special characters?(yes = OK/no = cancel)");
        var funUpper = confirm("Any upper characters?(yes = OK/no = cancel)");
        var funLower = confirm("Any lowercase characters?(yes = OK/no = cancel)");
        var funNumbers = confirm("Any numbers?(yes = OK/no = cancel)");
        for (var i = 0; i < char; i++) {
            if (funSpecial && string.length < char) {
                string = string + makePassword(specialCharacters);
            } if (funUpper && string.length < char) {
                string = string + makePassword(upper);
            } if (funLower && string.length < char) {
                string = string + makePassword(lower);
            } if (funNumbers && string.length < char) {
                string = string + makePassword(numbers);
            } 
        }
        if (string.length === 0) {
            alert("Must choose atleast one option!");
        }
    } else {
        alert("Must choose between 8 and 128 characters!!");
    }
    return string;
}

// function makePasswordSpecial(length, type) {
//     var result = "";
//     var specialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&*";
//     var specialCharactersLength = specialCharacters.length;
//     for (var i = 0; i < length; i++) {
//         result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
//     }
//     return result;
// }
function makePassword(string) {
    var result = "";
    // var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = string.length;

    result += string.charAt(Math.floor(Math.random() * charactersLength));

    return result;
}

