// var days = ["sun", "mon", "tue", "thu", "fri", "sat"]
// var day = new Date().getDay()

// document.write(days[day])

// document.write(`<center><h1>AGE CALCULATOR</h1></center>`)

// var present = new Date().getTime()
// var dob = new Date (prompt("Enter your date of birth")).getTime()
// var age = present - dob
// var finalAge = age / (1000 * 60 * 60 * 24 * 365)

// document.write(`Your age is: ${Math.floor(finalAge)}`)

// ********************************* ASSIGNMENT *********************************

// Answer 1 //
// var userInp = parseInt(prompt("Enter any number in positive"))

// document.write(`Number: ${userInp} <br> Round of Value: ${Math.round(userInp)} <br> Floor Value: ${Math.floor(userInp)} <br> Ceil Value: ${Math.ceil(userInp)}`);

// Answer 2 //
// var userInp = parseInt(prompt("Enter any number in negative"))

// document.write(`Number: ${userInp} <br> Round of Value: ${Math.round(userInp)} <br> Floor Value: ${Math.floor(userInp)} <br> Ceil Value: ${Math.ceil(userInp)}`);

// Answer 3 //
// var userInp = parseFloat(prompt("Enter any number in positive"))

// document.write(`Number: ${userInp} <br> Round of Value: ${Math.round(userInp)} <br> Floor Value: ${Math.floor(userInp)} <br> Ceil Value: ${Math.ceil(userInp)}`);

// Answer 4 //
// var userInp = parseFloat(prompt("Enter any number in negative"))


// document.write(`Number: ${userInp} <br> Round of Value: ${Math.round(userInp)} <br> Floor Value: ${Math.floor(userInp)} <br> Ceil Value: ${Math.ceil(userInp)}`);

// Answer 5 //
// var number = -4
// var final  = Math.abs(number)

// document.write(`The absolute value of ${number} is ${final}`)

// Answer 6 //
// document.write("Random dice value: " + (Math.floor(Math.random() * 6 ) + 1))

// Answer 7 //
// var toss = (Math.floor(Math.random() * 2) + 1);

// if (toss == 1){
//     alert(`its ${toss} so Heads win`)
// }
// else{
//     alert(`its ${toss} so tails win`)
// }

// Answer 8 //
// var randomNumber = (Math.floor(Math.random() * 100) + 1);

// document.write(`Random number between 1 and 100 is: ${randomNumber}`)

// Answer 9 //
// var weight = parseFloat(prompt("Enter your weight in kilograms"));

// document.write(`The weight of user is ${weight} kilograms`)

// Answer 10 //
// var secretNum = 7;
// var userInp = parseInt(prompt("Enter a number between 1 to 10"))

// if (userInp == secretNum){
//     alert("Congraculation you enter the right number")
// }
// else{
//     alert("Try again!")
// }

// Answer 11 //
// var date = new Date()
// document.write(date)

// Answer 12 //
// const month = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"]

// alert (month[new Date().getMonth()])

// Answer 13 //
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// alert (days[new Date().getDay()])

// Answer 14 //
// var days = new Date().getDay()

// if (days === 0 || days === 6){
//     alert ("It's fun day")
// }

// Answer 15 //
// const date = new Date().getDate();

// if (date < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// Answer 16 //
// var currentDate = new Date().getDate()
// var currentmilliseconds = new Date ().getTime()
// var minutes = new Date ().getTime()
// currentMinutes = Math.floor(minutes / 1000 * 60);

// document.write(
//   `Current Date: ${currentDate} <br> Elapsed milliseconds since January 1, 1970: ${currentmilliseconds} <br> Elapsed minutes since January 1, 1970: ${currentMinutes}` );

// Answer 17 //
// var time = new Date().getHours()

// if (time > "12pm"){
//     alert("It's AM")
// }
// else {
//     alert("It's PM")
// }

// Answer 18 //
// var laterDate = new Date (2020, 11, 31);

// alert("Later Date: " + laterDate)

// Answer 19 //
// Create a Date object for 1st Ramadan (May 18, 2024)
// let ramadanStart = new Date(2024, 3, 18); // Month index 4 = May

// Get the current date
// let today = new Date();

// Calculate the difference in milliseconds
// let difference = today.getTime() - ramadanStart.getTime(); // Ensures milliseconds

// Convert milliseconds to days (1 day = 1000ms * 60s * 60min * 24hrs)
// let daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

// Alert the correct result
// alert("Days passed since 1st Ramadan: " + daysPassed);

// Answer 20 //
// Reference date: December 25, 2024
// let referenceDate = new Date(2024, 11, 25); // Month index 11 = December

// // Start of 2024: January 1, 2024
// let startOf2024 = new Date(2024, 0, 1); // Month index 0 = January

// // Calculate the difference in milliseconds
// let difference = referenceDate - startOf2024

// // Convert milliseconds to seconds (1 second = 1000 ms)
// let elapsedSeconds = Math.floor(difference / 1000);

// // Display result in the browser
// alert("Seconds elapsed between Jan 1, 2024, and Dec 25, 2024: " + elapsedSeconds);

// Answer 21 //
// var currentDate = new Date()
// var currentHours = currentDate.getHours()
// currentDate.setHours(currentHours - 1)

// alert("Updated Date and Time (1 hour ahead): " + currentDate);

// Answer 22 //
// var currentDate = new Date()
// var currentHours = currentDate.getFullYear()
// currentDate.setFullYear(currentHours - 100)

// alert("Updated Date and Time (1 hour ahead): " + currentDate);

// Answer 23 // 
// var currentAge = prompt("Enter your age: ")
// var currentYear = new Date ().getFullYear()
// var birthYear = currentYear - currentAge; 

// alert("Your birth year is: " + birthYear)

// Answer 24//
// let customerName = prompt("Enter Customer Name:");
// let currentMonth = new Date().toLocaleString('default', { month: 'long' });
// let numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
// let chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));

// let latePaymentSurcharge = 350; 

// let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2); 
// let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
// document.write("<p><b>Current Month:</b> " + currentMonth + "</p>");
// document.write("<p><b>Number of Units:</b> " + numberOfUnits + "</p>");
// document.write("<p><b>Charges per Unit:</b> " + chargesPerUnit.toFixed(2) + " PKR</p>");
// document.write("<p><b>Net Amount Payable (within Due Date):</b> " + netAmountPayable + " PKR</p>");
// document.write("<p><b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + " PKR</p>");
// document.write("<p><b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable + " PKR</p>");
