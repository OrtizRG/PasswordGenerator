// Assignment code here

//variables

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var symbols = ["!","@","#","$","%","^","&","*",",",".","?"]
var finalPasswordGen = []
var result = []

function generatePassword() {
var pswdLength = window.prompt('How many characters would you like to have? (choose between 8 and 128')

while (pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {

    var pswdLength = window.prompt("How many characters would you like to have? (choose between 8 and 128.")
    
}

var confirmLen = window.confirm('You entered ' + pswdLength + '. Hit OK to confirm or cance to try again.')

//lowercase prompt

if (confirmLen) {
    var lowerCaseConfirm = confirm('Would you like to use lowercase letters? Ok for yes, Cancel for no.')
    if(lowerCaseConfirm) {
        result = result.concat(lowerCase);
        console.log(result);
        var randoLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        console.log(randoLower);
        finalPasswordGen.push(randoLower);
        console.log(finalPasswordGen)
        alert('The password will include lowercase letters.')
    }
//uppercase prompt
    var upperCaseConfirm = confirm('Would you like to use uppercase letters? Ok for yes, Cancel for no.')
    if(upperCaseConfirm) {
        result = result.concat(upperCase);
        console.log(result);
        var randoUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
        console.log(randoUpper);
        finalPasswordGen.push(randoUpper);
        console.log(finalPasswordGen)
        alert('The password will include uppercase letters.')
    }
//numbers prompt
    var numbersConfirm = confirm('Would you like to use numbers? Ok for yes, Cancel for no.')
    if(numbersConfirm) {
        result = result.concat(numbers);
        console.log(result);
        var randoNumbers = numbers[Math.floor(Math.random() * numbers.length)];
        console.log(randoNumbers);
        finalPasswordGen.push(randoNumbers);
        console.log(finalPasswordGen)
        alert('The password will include numbers.')
    }
//symbols prompt
    var symbolsConfirm = confirm('Would you like to use symbols? Ok for yes, Cancel for no.')
    if(symbolsConfirm) {
        result = result.concat(symbols);
        console.log(result);
        var randoSymbols = symbols[Math.floor(Math.random() * symbols.length)];
        console.log(randoSymbols);
        finalPasswordGen.push(randoSymbols);
        console.log(finalPasswordGen)
        alert('The password will include symbols.')
    }
   
}

console.log(result);

//randomizes password output based on the criteria selected

var resultsRandomizer = ""

for (var i = 0; i < pswdLength; i++) {
    resultsRandomizer = resultsRandomizer + result[Math.floor(Math.random() * result.length)];
}

console.log(resultsRandomizer);
return resultsRandomizer;

}

//password & password output on screen

var generateButton = document.querySelector("#generate");

function writePasswrd() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateButton.addEventListener("click", writePasswrd)
