// var num = 2
// num *= "abcd"
// num = num + 10
// document.write(num)

// var num1 = 2;
// var num2 = 3;
// var eq = num1 + 10 + num2++ - num2++;
//   2  +10 +   3    -  4
// document.write(eq);

// var value1 = parseInt(prompt("Enter any number"))
// var value1 = Number(prompt("Enter any number"))
// var value1 = +prompt("Enter any number")
// document.write(typeof(value1))

// var value2 = prompt("Enter any number")
// var sum = value1 + value2

// var value1 = +prompt("Enter any value")
// var value2 = +prompt("Enter any value")
// var sum = value1 + value2
// document.write(sum)

// > greater than
// < less than
// <= less than or equals to
// >= greater than or equals to
// == euqals to (sirf value) check krega
// === strictly equals to (datatype or value) dono check krega
// != not equals to
// !== strictly not equals to
// = assignment operator

// if(5 != "4"){
//     document.write("OK")
// }

// if
// if else
// if else if

// var myNum = 5
// var userInp = +prompt("Enter any number")

// if(userInp == myNum){
//     document.write(`i guess ${myNum} and you guess ${userInp}`)
// }
// else if (userInp == 6){
//     document.write(`i guess ${myNum} and you guess ${userInp} thats why you are close enough`)
// }
    // else if(userInp == 4){
//     document.write(`i guess ${myNum} and you guess ${userInp} thats why you are close enough`)
// }
// else{
//     document.write(`i guess ${myNum} and you guess ${userInp} thats why you are wrong`)
// }

// var username = prompt("Enter your name");
// var maths = +prompt("Enter maths marks");
// var eng = +prompt("Enter English marks");
// var urdu = +prompt("Enter Urdu marks");
// var bio = +prompt("Enter Bio marks");
// var cs = +prompt("Enter Computer marks");
// var marksObtained = maths + eng + urdu + bio + cs;
// var perc = (marksObtained / 500) * 100;
// var grade;

// if (perc >= 80) {
//   grade = "A+";
// } else if (perc >= 70) {
//   grade = "A";
// } else if (perc >= 60) {
//   grade = "B";
// } else if (perc >= 50) {
//   grade = "C";
// } else if (perc >= 40) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write(
//   `<table border='2px'>
//     <tr>
//     <th> NAME </th>
//     <th> MATHS </th>
//     <th> ENGLISH </th>
//     <th> URDU </th>
//     <th> BIO </th>
//     <th> CS </th>
//     <th> Obtained Marks </th>
//     <th> PERCENTAGE </th>
//     <th> GRADE </th>
//     </tr>

//     <tr>
//     <td> ${username} </td>
//     <td> ${maths} </td>
//     <td> ${eng} </td>
//     <td> ${urdu} </td>
//     <td> ${bio} </td>
//     <td> ${cs} </td>
//     <td> ${marksObtained} / 500 </td>
//     <td> ${perc.toFixed(2)} </td>
//     <td> ${grade} </td>
//     </tr>
//     </table>`
// );

// ****************************** Assignment ****************************** //

// Chapter 1

// Answer 1 //
// var userName = prompt("Please enter your name")
// alert ("Hi, " + userName)

// Answer 2 //
// Prompt the user for a number
// var userInput = prompt("Enter a number for the multiplication table:");

// Check if the input is empty or invalid
// var number = userInput ? parseInt(userInput) : 5;

// Validate if input is a number
// if (isNaN(number)) {
//   number = 5; // Default to 5 if input is not a valid number
// }

// Display the multiplication table in the browser
// document.write(`<h2>Multiplication Table of ${number}</h2>`);
// for (var i = 1; i <= 10; i++) {
//   document.write(`${number} x ${i} = ${number * i} <br>`);
// }

// Answer 3 //
// var city = prompt ("Please enter your city")
// if (city == "karachi"){
//     alert ("Welcome to the City of Lights")
// }
// else if (city == "Islamabad") {
//     alert ("Welcome to the City of Burgers")
// }    
    
// Answer 4 // 
//  var gender = prompt ("Enter your gender")
//  if (gender == "male"){
//      alert ("Good Morning Sir")
//  }
//  else if (gender == "female") {
//      alert ("Good Morning Ma'am")
//  } 

// Answer 5 //
// var color1 = "Red"
// var color2 = "Yellow";
// var color3 = "Red";

// var messege1 = "Vehicles must stop";
// var messege2 = "Vehicles should get ready to move";
// var messege3 = "Vehicles can move now";

// document.write(
//   `<table border = 2px>
//         <tr>
//             <th>Signal Color</th>
//             <th>Message</th>
//         </tr>
//         <tr>
//             <td>${color1}</td>
//             <td>${messege1}</td>
//         </tr>
//          <tr>
//             <td>${color2}</td>
//             <td>${messege2}</td>
//         </tr>
//          <tr>
//             <td>${color3}</td>
//             <td>${messege3}</td>
//         </tr>
//      </table>`
// );

// Answer 6 //
// var currentAge = prompt("Enter your current age") ;
// var maxAge = prompt("Enter your max age");

// if(maxAge <= currentAge){
//     alert("You are Welcome")
// } 

// Answer 7 //
// var remainingFuel = prompt("Remainig Fuel")

// if(remainingFuel <= "0.25litres"){
//     alert("Please refill the fuel in your car")
// }

// Answer 8 //
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (++b === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (c < 14){
// alert("condition 3 is true");
// }
// if(++c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Answer 9 //
// var username = prompt("Enter your name");
// var maths = +prompt("Enter maths marks");
// var eng = +prompt("Enter English marks");
// var urdu = +prompt("Enter Urdu marks");
// var bio = +prompt("Enter Bio marks");
// var cs = +prompt("Enter Computer marks");
// var marksObtained = maths + eng + urdu + bio + cs;
// var perc = (marksObtained / 500) * 100;
// var grade;

// if (perc >= 80) {
//   grade = "A+";
// } else if (perc >= 70) {
//   grade = "A";
// } else if (perc >= 60) {
//   grade = "B";
// } else if (perc >= 50) {
//   grade = "C";
// } else if (perc >= 40) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write(
//   `<table border = 2px>
//     <tr>
//         <th>User Name</th>
//         <th>Maths</th>
//         <th>English</th>
//         <th>Urdu</th>
//         <th>Bio</th>
//         <th>CS</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//         <th>Grade</th>
//     </tr>
//     <tr>
//         <td>${username}</td>
//         <td>${maths}</td>
//         <td>${eng}</td>
//         <td>${urdu}</td>
//         <td>${bio}</td>
//         <td>${cs}</td>
//         <td> ${marksObtained} / 500 </td>
//         <td> ${perc.toFixed(2)} </td>
//         <td>${grade}</td>
//     </tr>
//  </table>`
// );

// Answer 10 //
// var item1Name = prompt("Enter the name of item 1:");
// var item2Name = prompt("Enter the name of item 2:");
// var item3Name = prompt("Enter the name of item 3:");
// var item1Price = parseInt(prompt(`Enter the price of ${item1Name}:`));
// var item2Price = parseInt(prompt(`Enter the price of ${item2Name}:`));
// var item3Price = parseInt(prompt(`Enter the price of ${item3Name}:`));
// var item1Quatity = parseInt(prompt(`Enter the quatity of ${item1Name}:`));
// var item2Quatity = parseInt(prompt(`Enter the quatity of ${item2Name}:`));
// var item3Quatity = parseInt(prompt(`Enter the quatity of ${item3Name}:`));
// var shippingCharges = 150

// var item1Total = item1Name * item1Quatity
// var item2Total = item2Name * item2Quatity;
// var item3Total = item3Name * item3Quatity;
// var totalCost = item1Total + item2Total + item3Total + shippingCharges;

// var discount = 0
// if (totalCost > 3000){
//   discount = totalCost * 0.03
//   totalCost -= discount
// }
// else if (totalCost > 4000) {
//   discount = totalCost * 0.04;
//   totalCost -= discount;
// }
// if (totalCost > 5000) {
//   discount = totalCost * 0.05;
//   totalCost -= discount;
// }
// document.write(
//   `<table border = 2px> 
//       <tr>
//         <th>Product Name</th>
//         <th>Quatity</th>
//         <th>Price</th>
//       </tr>
//       <tr>
//         <td>${item1Name}</td>
//         <td>${item1Quatity}</td>
//         <td>${item1Price}</td>
//       </tr>
//       <tr>
//         <td>${item2Name}</td>
//         <td>${item2Quatity}</td>
//         <td>${item2Price}</td>
//       </tr>
//       <tr>
//         <td>${item3Name}</td>
//         <td>${item3Quatity}</td>
//         <td>${item3Price}</td>
//       </tr>
//       <tr>
//         <td>Shipping Charges</td>
//         <td>${shippingCharges}</td>
//       </tr>
//       <tr>
//         <td>Total Amount</td>
//         <td>${totalCost}</td>
//       </tr>
//       <tr>
//         <td>Discount</td>
//         <td>${discount}</td>
//       </tr>
//       <tr>
//         <td>Amount after discount</td>
//         <td>${totalCost}</td>
//       </tr>
    
//   </table>`
//);
// Answer 11 //
// var myNum = 8
// var userInp = +prompt("Enter any number")

// if (userInp == myNum) {
//   alert(
//     `My number is ${myNum} and your number is ${userInp} so that's why you win`
//
//   );
// } else if (userInp == 9) {
//   alert(
//     `My number is ${myNum} and your number is ${userInp} thats why you are close enough`
//   );
// } else if (userInp == 7) {
//   alert(
//     `My number is ${myNum} and your number is ${userInp} thats why you are close enough`
//   );
// } else{
//   alert(
//     `My number is ${myNum} and your number is ${userInp} thats why lose`
//   );
// }
 
// Answer 12 //
// var userInp = prompt("Enter a number to check if it is divisible by 3:")

// var number = parseInt (userInp);

// if(isNaN(number)) {
//     document.write("Please enter a valid number.")
// }
// else if (number % 3 === 0) {
//   document.write(`The number ${number} is divisible by 3.`);
// }
// else {
//     document.write(`The number ${number} is not divisible by 3.`)
// }

// Answer 13 //
// var teamAName = prompt("Enter the name of Team A:");
// var teamAScore = parseInt(prompt(`Enter the score of ${teamAName}:`));

// var teamBName = prompt("Enter the name of Team B:");
// var teamBScore = parseInt(prompt(`Enter the score of ${teamBName}:`));

// if (isNaN(teamAScore) ||  isNaN(teamBScore)) {
//     alert("Please enter a valid score for both teams.")
// }
// else if (teamAScore > teamBScore) {
//     alert(`${teamAName} has won the game with the score of ${teamAScore}!`)
// }
// else if (teamBScore > teamAScore) {
//     alert(`${teamBName} has won the game with the score of ${teamBScore}!`)
// }
// else{
//     alert(`It's a tie! Both ${teamAName} and ${teamBName} score ${teamAScore}. `)
// }

// Answer 14 //
// var team = "Pakistan"
// alert(`Pakistan is a ${typeof team}`) 

// var year = 92;
// alert(`92 is a ${typeof year}`); 

// var won = true;
// alert(`true is a ${typeof won}`); 

// Answer 15 //
// var number = parseInt(prompt("Enter a number to check if it's even or odd:"))

// if(isNaN(number)){
//     alert("Please enter a valid number.")
// }
// else if(number % 2 === 0){
//     alert(`The number ${number} is an and even number.`)
// }
// else{
//     alert(`The number ${number} is an odd number.`)
// }

// Answer 16 //
// var temperature = prompt("What is the temperature of Karachi")

// if (temperature > 40){
//     alert('"It is too hot outside."')
// }
// else if(temperature > 30){
//     alert('"The Weather today is Normal"')
// }

// else if(temperature > 20){
//     alert('"Today Weather is Cool"')
// }
// else if(temperature > 10){
//     alert('"OMG! Today weather is so cool"')
// }

// Answer 17 //
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));

// var operation = prompt("Enter the operation(+, -, *, /, %,):");

// var result;

// if (operation === "+") {
//   result = num1 + num2;
//   alert(`The result of ${num1} + ${num2} is: ${result}`);
// } else if (operation === "-") {
//   result = num1 - num2;
//   alert(`The result of ${num1} - ${num2} is: ${result}`);
// } else if (operation === "*") {
//   result = num1 * num2;
//   alert(`The result of ${num1} * ${num2} is: ${result}`);
// } else if (operation === "/") {
//   if (num2 === 0) {
//     alert("Division by zero is not allowed.");
//   } else {
//     result = num1 / num2;
//     alert(`The result of ${num1} / ${num2} is: ${result}`);
//   }
// } else if (operation === "%") {
//   if (num2 === 0) {
//     alert("Division by zero is not allowed.");
//   } else {
//     result = num1 % num2;
//     alert(`The result of ${num1} % ${num2} is: ${result}`);
//   }
// } else {
//   alert("Invalid operation. Please enter one of +, -, *, /, or %.");
// }

// Answer 18 //
// var dayName = prompt("What is the day today.").toLowerCase();

// if(dayName === "monday" || dayName === "tuesday" || dayName === "wednesday" || dayName === "thursday" || dayName === "friday"){
//     alert("It's a week day.")
// }
// else if(dayName === "saturday"){
//     alert("It's weekend.")
// }
// else if(dayName === "sunday"){
//     alert("Yay! It's a holiday.")
// }

// Answer 19 //
// var userScore = parseInt(prompt("What's your Score"))

// if(userScore > 50){
//     alert("You are Passed")
// }
// else{
//     alert("Try again!")
// }

// Answer 20 //
// var num1 = parseInt(prompt("Enter any number"));
// var num2 = parseInt(prompt("Enter any number"));  

// if(num1 > num2){
//     alert(`The greater number of ${num1} and ${num2} is ${num1}.`)
// }
// else if(num2 > num1){
//     alert(`The greater number of ${num1} and ${num2} is ${num2}.`);
// }
// else if(num1 == num2){
//     alert("Both are equal.")
// }

// Answer 21 //
// var languageCode = prompt("Enter a language code (e.g., 'en' for English, 'es' for Spanish, 'de' for German):").toLowerCase();

// var greeting;
// if (languageCode === "en"){
//     greeting = "Hello World!";
// }
// else if (languageCode === "es"){
//     greeting = "Halo Mundo!";
// }
// else if (languageCode === "de"){
//     greeting = "Hallo Welt!";
// }
// else {
//     greeting = "Hello World!" ;
// }
// alert(greeting);

// Answer 22 //
// var number = parseFloat(prompt("Enter any number"))

// if (isNaN(number)){
//     alert("Please enter a valid number")
// }
// else if (number > 0) {
//     alert(`The number ${number} is positive.`);
// }
// else if (number < 0) {
//     alert(`The number ${number} is negative.`);
// }
// else {
//     alert("The number is zero.")
// }

// Answer 23 //
// var number = prompt("Please enter a number")
// var noun = prompt("Please enter a noun")

// alert (number + noun)

// Chapter 02 //

// Answer 1 //
// function checkDivisibilityBy3(number) {
//     if (number % 3 === 0) {
//         document.write(`The number ${number} is divisible by 3.`);
//     } else {
//         document.write("Number is not divisible by 3.");
//     }
// }

// // Input from user (using prompt in browser environment)
// const num = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
// if (!isNaN(num)) {
//     checkDivisibilityBy3(num);
// } else {
//     document.write("Please enter a valid number.");
// }

// Answer 2 //
// var age = (prompt("Enter your age:"))

// if (age >= 18){
//     document.write("'Old enough'")
// }
// else if (age < 18){
//     document.write("'Too young'")
// }

// Answer 3 //
// var number = parseInt(prompt("Enter a number to check even or odd:"))
// if (number % 2 == 0) {
//    document.write(`The number ${number} is even`)
// } else {
//    document.write(`The number ${number} is odd`)
// }

// Answer 4 //
// var myName = "Talha"
// var userName = prompt("Enter your name:")

// if (userName == "Talha"){
//     alert("abcd abcd")
// }

// Answer 5 //
// var year = prompt("Enter a year (in a YYYY format):");
// year = parseInt(year);

// if (isNaN(year) || year < 1000 || year > 9999) {
//     alert("Please enter a valid year in the format YYYY.");
// } else if (isLeapYear(year)) {
//     alert(year + "is a leap year.")
// } else {
//     alert(year + "is not a leap year.")
// }

// Answer 6 //
// var password = prompt("Enter your password:");
// var password2 = prompt("Re-Enter your password:")\

// if (password == password2){
//     alert ('"Correct Password"')
// }else {
//     alert ('"Incorrect Password"')
// }

// Answer 7 //
// var firstName = prompt("Enter your firstName")
// if (firstName === "Talha"){
//     alert("Hello Talha")
// }else {
//     alert ("You are not Talha")
// }

// Answer 8 //
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }

// Answer 9 //
// var num1 = parseInt(prompt("Enter a number 1"))
// var num2 = parseInt(prompt("Enter a number 12"))

// if (num1 > num2){
//     alert(`${num1} is larger than ${num2}`)
// } else if (num2 > num1){
//     alert(`${num2} is larger than ${num1}`)
// }else {
//     alert(`${num1} and ${num2} both are equal`)
// } 

// Answer 10 //
// var number = parseInt(prompt("Enter a number"))

// if (number < 0){
//     alert(`${number} is negative`)
// } else {
//     alert(`${number} is positive`)
// }

// Answer 11 //
// var firstName = "Talha"
// var number = 39
// var kuchbhi;
// var name2 = true

// document.write(typeof (firstName))
// document.write(typeof (number))
// document.write(typeof (kuchbhi))
// document.write(typeof (name2))

// Answer 12 //
// var hour = prompt("What is the current hour?");

// if (hour >= "6am" && hour < "9am") {
//     alert("Breakfast is Served!");
// }
// else if (hour >= "11am" && hour < "1pm") {
//     alert("Time for Lunch.");
// }
// else if (hour >= "5pm" && hour < "8pm") {
//     alert("It's dinner time");
// }
// else {
//     alert("'Sorry, you'll have to wait, or go get some snack. '");
// }

// Answer 13 //
// var num1 = parseFloat(prompt("Enter the first number:"))
// var num2 = parseFloat(prompt("Enter the second number:"))
// var operator = (prompt("Enter the operation(+, -, *, /, %):"))

// var result;
// switch (operator){
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break; 
//   case "*":
//     result = num1 * num2;
//     break;  
//   case "/":
//     if (num2 !== 0){
//     result = num1 / num2;
// } else{
//   result = "Error! Division by zero is not allowed.";
// }  
//     break;  
//   case "%":
//     if (num2 !== 0){
//     result = num1 / num2;
// } else{
//   result = "Error! Division by zero is not allowed."
// } 
//   break;
// defult:
//   result = "Invalid operator! Please enter one of +, -, *, /, %.";
// }

// document.write(`<h2>Calculator Result</h2>`)
// document.write(`First Number: ${num1} <br>`);
// document.write(`Second Number: ${num2} <br>`);
// document.write(`Operator: ${operator} <br>`);
// document.write(`<strong>Result: ${result}</strong>`);

// Answer 14 //
// var char = prompt("Enter a single character (number or letter):")

// if (char.length !== 1){
//     alert("Please enter a single character only.")
// } else {
//   var asciicode = char.charCodeAt(0);
// }

// if (asciicode >= 48 && asciicode <= 57) {
//   alert(`The character "${char}" is a numebr`);
// } else if (asciicode >= 65 && asciicode <= 90) {
//   alert(`The character "${char}" is an uppercase letter.`);
// } else if (asciicode >= 97 && asciicode <= 122) {
//   alert(`The character "${char}" is an lowercase letter.`);
// } else {
//   alert(`The character "${char}" is neither a number nor a letter.`)
// }

// Answer 15 //
// var number = parseInt(prompt("Enter a numebr:"))

// switch (number % 3){
//   case 0:
//     alert(`The number ${number} is divisble by 3.`);
//     break;
//   default:
//     alert(`The number ${number} is not divisible by 3.`)
// } 

// // Answer 16 //
// let char = prompt("Enter a single character:");

// if (char.length !== 1) {
//     document.write("Please enter only one character.");
// } else {
//     let lowerChar = char.toLowerCase();

// let isVowel = lowerChar === "a" || lowerChar === "e" || lowerChar === "i" ||  lowerChar === "o" || lowerChar === "u";
//     document.write(`Is "${char}" a vowel? ${isVowel}`);
// }  

// Answer 17 //
// var comparison = 10 <= 8 && 10 >= 8
// alert(comparison)

// var comparison2 = 13 > 8 || 11 < 14;
// alert (comparison2)

// Answer 18 //
// var monthNumber = parseInt(prompt("Enter the number of a month (1-12):"))

// switch (monthNumber) {
//     case 1:
//         alert("January");
//         break;
//     case 2:
//         alert("February");
//         break; 
//     case 3:
//         alert("March");
//         break;
//     case 4:
//         alert("April");
//         break; 
//     case 5:
//         alert("May");
//         break;
//     case 6:
//         alert("June");
//         break;
//     case 7:
//         alert("July");
//         break;
//     case 8:
//         alert("August");
//         break;
//     case 9:
//         alert("September");
//         break;
//     case 10:
//         alert("October");
//         break;
//     case 11:
//         alert("November");
//         break;
//     case 12:
//         alert("December");
//         break;                        
//     default:
//         alert("Invalid input. Please enter a number between 1 and 12.")    
// }   

// Answer 19 //
// var age = parseInt(prompt("Enter your age:"))

// var voteable = (age < 18) ? "Too young" : "Old enough";

// alert(`Age: ${age} \nVoting Eligiblity: ${voteable}`)