// var car = ['Mehran', 'Bmw', 'Alto', 'Foxi', 'Audi']
// var userInp = prompt("Enter any car")

// var firstAlpha = userInp.slice(0,1).toUpperCase()
// var remainAlpha = userInp.slice(1).toLowerCase()
// var final = firstAlpha + remainAlpha
// var match = false;

// for (var i=0; i <= car.length; i++){
//     if(final == car[i]){
//         match = true
//         document.write(final +  " car found")
//         break;
//     }
// }

// if(match == false){
//     document.write(final + " car not found")
// }


// var str = 'SAYLANI'
// var convert = str[0].toUpperCase()
// var convert2 = str.slice(1).toLowerCase()
// var final = convert + convert2
// document.write(final)

// var convert = str.toLowerCase()
// document.write(convert)

// var userWord = prompt("Enter any word")
// var firstAlpha = userWord.slice(0,1).toUpperCase()
// var remainAlpha = userWord.slice(1).toLowerCase()
// var final = firstAlpha + remainAlpha
// document.write(final)

// var cars = ['audi','bmw','mehran','alto','foxi','mehran']

// var check = cars.lastIndexOf('mehran')

// console.log(check)



// for(var i=0; i < cars.length; i++){
//     var a = cars[i][0].toUpperCase()
//     var b = cars[i].slice(1).toLowerCase()
//     var final = a + b 
//     document.write( final + "<br>")
// }


// var userInp = prompt('Enter any car')
// var firstAlpha = userInp.slice(0,1).toUpperCase()
// var remainAlpha = userInp.slice(1).toLowerCase()
// var final = firstAlpha + remainAlpha
// var match = false

// for(var i=0; i < cars.length; i++){
//     if(final == cars[i]){
//         match = true
//         document.write(final + " car found")
//         break
//     }
// }
// if(match == false){
//     document.write(final + ' car not found')
// }

// var mobile = prompt("Enter mobile name Or Model")
// document.write(mobile.length)


// var naam = 'pakistani'
// var check = naam.charAt(3)
// document.write(check)


// var naam = 'smit '
// var naam2 = 'saylani'
// var check = naam.concat(naam2)

// document.write(check)

// var str = 'hello world hello'
// var naya = str.replaceAll('hello', 'hyder')
// document.write(naya)





//***************************************** Assignment *****************************************


// Answer 1 //
// var firstName = "Talha ";
// var lastName = "Habib";
// var fullName = firstName + lastName

// document.write(fullName)

// Answer 2 //
// var userInp = prompt("Enter your favorite mobile Or model")

// document.write(`My favorite phone is: ${userInp} <br> Length of string: ${userInp.length}`)

// Answer 3 //
// var country = "Pakistani"
// var index = country.indexOf("n")

// document.write(`String: Pakistani <br> Index of 'n': ${index}`)

// Answer 4 //
// var word = "Hello World"
// var lastIndex = word.lastIndexOf("l")

// document.write(`String: Hello World <br> Last Index of 'l': ${lastIndex}`)

// Answer 5 //
// var country = "Pakistani"
// var index = country.charAt("3")

// document.write(`String: Pakistani <br> Character at index '3': ${index}`)

// Answer 6 //
// var firstName = "Talha ";
// var lastName = "Habib";
// var fullName = firstName.concat(lastName)

// document.write(fullName)

// Answer 7 //
// var word = "Hyderabad"
// var final = word.replace("Hyder", "Islam")

// document.write(`City: Hyderabad <br> After replacement: ${final}`)

// Answer 8 //
// var message = "Ali and Sami are best friends. They play cricket and football together"
// var afterReplace = message.replaceAll("and", "&")

// document.write(`Message: ${message} <br> After Replace: ${afterReplace}`)

// Answer 9 //
// var string = "472"
// var typeOf = typeof(string)
// var number = parseInt(472)
// var typeOf1 = typeof(number )

// document.write(`Value: ${string} <br> Type: ${typeOf} <br> Value: ${number} <br> Type: ${typeOf1}`)

// Answer 10 //
// var userInp = prompt("Enter the URL")
// var Domain = userInp.slice(4)

// document.write(`URL: ${userInp} <br> Domain: ${Domain}`)

// Answer 11 //
// var userInp = prompt("Enter any word")
// var final = userInp.toUpperCase()

// document.write(`User input: ${userInp} <br> Upper case: ${final}`)

// Answer 12 //
// var userInp = prompt("Enter any word");
// var final = userInp.toLowerCase();

// document.write(`User input: ${userInp} <br> Lower case: ${final}`);

// Answer 13 //
// var userInp = prompt("Enter any word")
// var firstAlpha = userInp.slice(0,1).toUpperCase();
// var remainAlpha = userInp.slice(1).toLowerCase();
// var final = firstAlpha + remainAlpha

// document.write(`User input: ${userInp} <br> Title case: ${final}`);

// Answer 14 //
// var num = 35.36; // Given number
// var strNum = num.toString(); // Convert number to string
// var result = strNum.replace(".", ""); // Remove the dot

// document.write(`Number: ${num} <br> Result: ${result}`); // Output: 3536

// Answer 15 //
// var a = "3" 
// var b = "3" 
// var x = a + b

// document.write(`a is ${a} <br> b is ${b} <br> a + b is ${x} `)

// Answer 16 //
// var a = "3" 
// var b = "3" 
// var x = a - b

// document.write(`a is ${a} <br> b is ${b} <br> a - b is ${x} `)

// // Answer 17 //
// function isValidUsername(username){
//     var invalidChars = ['@', '.', ',', '!'];
    
//     for(var i = 0; i < username.length; i++){
//         if (invalidChars.includes(username[i])){
//             return false;
//         }
//     }
//     return true; 
// }

// var username = prompt("Enter your username");

// while(!isValidUsername(username)){
//     alert("Invalid username! Please avoid using @, ., , or !");
//     username = prompt("Enter a valid username")
// }

// alert ("Username saved successfully:", username)

// Answer 18 //
// var array = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInp = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase()
// var found = false;

// for (var i = 0; i < array.length; i++){
//     if (array[i].toLowerCase() === userInp){
//         found = true;
//         break;
//     }
// }

// if (found){
//     alert(userInp + " is available in our bakery.");
// }
// else {
//     alert("We are sorry, " + userInp + " is not available in our bakery.");
// }

// Answer 19 //
// var userInp = prompt("Enter the first string");
// var userInp1 = prompt("Enter the second string");

// if (userInp == userInp1){
//     alert("Both strings are equal")
// }
// else if (userInp > userInp1){
//     alert('"' + userInp + '" is greater than "' + userInp1 + '".');
// }
// else{
//     alert('"' + userInp1 + '" is greater than "' + userInp + '".');
// }

// Answer 20 //
// var university = "University of Karachi"
// var final = university.split("");

// for (var i = 0; i < final.length; i++){
//     document.write(final[i] + "<br>")
// }

// Answer 21 //
// var userInp = prompt("Enter any word")

// if (userInp.length > 0){
//     var lastChar = userInp.charAt(userInp.length - 1);
//     alert("The last character is: " + lastChar);
// }
// else{
//     alert("You entered an empty string!")
// }

// Answer 22 //
// var sentence = "The quick brown fox jumps over the lazy dog"
// var word = sentence.toLowerCase().split(" ");
// var count = 0

// for (var i = 0; i < word.length; i++){
//     if (word[i] === "the"){
//         count++;
//     }
// }
// document.write(`Text ${sentence} <br>` + 'The word "the" appears ' + count + ' times in the given text ')

// Answer 23 //
// var str = "Pakistan"
// str  = str.toLowerCase();

// var vowels = 'aeiou'
// var vowelCount = 0
// var consonantCount = 0

// for (var i = 0; i < str.length; i++){
//    if (vowels.includes(str[i])){
//      vowelCount++;
//    }
//    else if (str[i] >= 'a' && str[i] <= 'z'){
//      consonantCount++;
//    }
// }
// alert("Pakistan: " +  "\nVowels: " + vowelCount + " Consonants: " + consonantCount);

// Answer 24 //
