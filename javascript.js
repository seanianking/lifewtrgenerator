var lengthEl = document.getElementById("length");
var upperEl = document.getElementById("uppercase");
var lowerEl = document.getElementById("lowercase");
var specialEl = document.getElementById("specials");
var numberEl = document.getElementById("numbers");
var submitEl = document.getElementById("generate");
var copyEl = document.getElementById("copy");
var passwordEl = document.getElementById("password");

//datasets to pull from
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var numbSet = "0123456789";
var specSet = "`~!@#$%^&*()_-+=|}{[]';:/?><,.";

//password generate function
passwordEl.addEventListener("click", function (){

var passwordSelector = "";
var length = parseInt(lengthEl.value);
var lowerCase = lowerEl.checked;
var upperCase = upperEl.checked;
var specials = specialEl.checked;
var numbers = numberEl.checked;

//reading if boxes are checked, which characters will be used

if (lowerCase){
    passwordSelector += lowerSet
};
if (upperCase){
    passwordSelector += upperSet
};
if (specials){
    passwordSelector += specSet
};
if (numbers){
    passwordSelector += numbSet
};
if (length < 8 || length > 100 ) {
    alert("Password must be between 8 and 100 characters long");
};
passwordEl.value = passwordGenerate(length, passwordSelector)

})
passwordGenerate = function (length, passwordSelector){
    let createdPassword = "";
    for (i=0; i<length; i++){
        createdPassword = passwordSelector.charAt(Math.floor(Math.random() * passwordSelector.length));  
};
passwordEl.innerHTML = createdPassword;
}