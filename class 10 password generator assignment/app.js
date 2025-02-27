// RANDOM PASSWORD GENERATOR //

var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(?";
var password = "";
var passwordLength = parseInt(prompt("Enter password length:"))

if (passwordLength > 0){
    for(var i = 0; i < passwordLength; i++){
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    alert("Generate Password: " + password)
}
else("Please enter a valid password length!")




// TOSS //

// var userInp = prompt("Enter Player 1 name:");
// var userInp2 = prompt("Enter Player 2 name:");

// var randomNum = Math.floor(Math.random() * 2)

// if (randomNum === 0){
//     alert(userInp + " Win the toss")
// }
// else{
//     alert(userInp2 + " Win the toss")
// }
