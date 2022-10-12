// function Generate() {
//     var char = prompt("How many characters? min:8, max:15");
//     var special = prompt("Any special characters?(yes/no)");

//     if (char != null) {
//         if (special != null) {
//         document.getElementById("x").innerHTML = Math.floor(Math.random() * char) + 1;
//     }
// }
// }


// function makePassword(length) {
//     var result = " ";
//     var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var specialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&*";
//     var charactersLength = characters.length;
//     var specialCharactersLength = specialCharacters.length;
//     for ( var i = 0; i < length; i++ ) {
//         result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
// }
// return result;
// }

// document.getElementById("x").innerHTML = (makePassword(15));


function Generate() {
    var char = prompt("How many characters? min:8, max:15");
    var special = confirm("Any special characters?(yes/no)");

    if (char >= 8 && char < 16) {
        if (special) {
            function makePassword(length) {
                var result = " ";
                var specialCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%&*";
                var specialCharactersLength = specialCharacters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += specialCharacters.charAt(Math.floor(Math.random() * specialCharactersLength));
            }
            return result;
            }
            document.getElementById("x").innerHTML = (makePassword(char));
    }
}
}