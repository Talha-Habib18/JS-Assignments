// var firstNames = ["Saad", "Sufiyan", "Sattar", "Raja"];
// var lastName = ['ABCD', 'XYZ', 'ghi']

// for(var i=0; i < firstNames.length; i++){ // i=1 suf

//     for(var j=0; j < lastName.length; j++){
//         document.write(firstNames[i] + " " + lastName[j] + "<br>")
//     }

// }

// for(var i=0; i < firstNames.length; i++){
//     document.write(firstNames[i] + " " + lastName + "<br>")
// }

// for(var i=0; i < firstNames.length; i++){
//     document.write(firstNames[i] + "<br>")
// }

// for(var i=1; i<= 100; i = i+10){
//         for(var j=i; j < i+10; j++){
//             document.write(j + " ")
//         }
//         document.write("<br>")
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(var i=1; i<=5; i++){
//     for(var j=1; j <= i; j++){
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// 5 5 5 5 5
// 5 5 5 5 5
// 5 5 5 5 5
// 5 5 5 5 5
// 5 5 5 5 5

// for (var i = 0; i < 5; i++){
//     var row = "";
//     for (let j = 0; j < 5; j++){
//         row += "5 "
//     }
//     document.write(row + "<br>")
// }

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// for (var i=1; i <= 5; i++){
//     for(var j = 1; j <= 5; j++){
//         document.write(j + " ")
//     }
//     document.write("<br>")
// }

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for(var i=5; i >= 1; i--){
//     for(var j=5; j >= i; j--){
//         document.write(j + " ")
//     }
//     document.write("<br>")
// } 






// ************************************** Assignment **************************************

// Chapter 01 

// Answer 1 //
// for (var i=1; i <= 5; i++){
//     document.write("Hello World" + "<br>")
// }

// Answer 2 //
// for (var i=1; i <= 10; i++){
//     document.write(i + "<br>")
// }

// Answer 3 //
// var tableNum = parseInt(prompt("Enter a number to print its multiplication table")) 
// var tablelenght = parseInt(prompt("Enter lenght of multiplication table"))

// for (var i=1; i <= tablelenght; i++){
//     document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`)
// }

// Answer 4 //
// var mobile = ["Nokia", "Samsung", "Apple", "Sony", "Oppo"]

// for (var i=0; i < 5; i++){
//     document.write(mobile [i] + "<br>")
// }

// Answer 5 //
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (var i=0; i < 5; i++){
//      document.write(fruits [i] + "<br>")
//  }

// Answer 6 //
// var items = parseInt(prompt("Enter number of items"))
// var itemsName1 = prompt("Enter value for index 0")
// var itemsName2 = prompt("Enter value for index 1")
// var itemsName3 = prompt("Enter value for index 2");
// var itemsName4 = prompt("Enter value for index 3");

// document.write(`Number of items: 4 <br> items: <br><br>`)

// for (var i=0; i <= 0; i++){
//     document.write(`${itemsName1} <br> ${itemsName2} <br> ${itemsName3} <br> ${itemsName4}`)
// }

// Answer 7 //
// document.write("Counting:" + "<br>")
// for (var i=1; i <= 15; i++){
//     document.write(i + " ")
// }

// document.write("Reverse Counting:" + "<br>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + " "    );
// }

// document.write("Even:" + "<br>")
// for (var i=0; i <= 20; i = i+2){
//     document.write(i + " ")
// } 

// document.write("Odd:" + "<br>");
// for (var i=1; i <= 19; i = i+2) {
//   document.write(i + " ");
//}

// document.write("Series:" + "<br>")
// for (var i=2; i <= 20; i = i+2){
//     document.write(i + "k"  + " ")
// }

// Answer 8 //
// var bakery = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"]
// var userprompt = prompt("Welcom to ABC Bakery. What do you want to order sir/ma'am")

// var index = bakery.indexOf(userprompt)

// if (index !== -1){
//     alert(`${userprompt} is available at index ${index} in this list.`)
// } else {
//     alert(`${userprompt} is not available at the list.`)
// }

// Answer 9 //
// var numbers = [24, 53, 78, 91, 12]
// var largestNumber = numbers[0]

// for (var i=1; i < numbers.length; i++){
//     if (numbers[i] > largestNumber){
//         largestNumber = numbers[i];
//     }
// }

// document.write(`${numbers} <br>`)
// document.write(`The largest number in the array is ${largestNumber}`)

// Answer 10 //
// var numbers = [24, 53, 78, 91, 12];
// var smallestNumber = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// document.write(`${numbers} <br>`);
// document.write(`The smallest number in the array is ${smallestNumber}`);

// Answer 11 //
// var numbers = [24, 53, 78, 91, 12];
// var largestNumber = numbers[0];
// var smallestNumber = numbers[0]

// for (var i=1; i < numbers.length; i++){
//     if (numbers[i] > largestNumber){
//         largestNumber = numbers[i];
//     } 
//     if (numbers[i] < smallestNumber){
//         smallestNumber = numbers[i]
//     }
// }

// document.write(`The array ${numbers} <br>`)
// document.write(`The largest number in the array is ${largestNumber} <br>`);
// document.write(`The smallest number in the array is ${smallestNumber}`);

// Answer 12 //
// for (var i=5; i <= 100; i = i+5){
//     document.write(i + " ")
// } 

// Answer 13 //
  // Given arrays
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// Create table element
// var table = document.createElement("table");
// table.border = "1";
// table.cellPadding = "5";

// Create header row
// var headerRow = table.insertRow();
// var headerCell1 = headerRow.insertCell(0);
// var headerCell2 = headerRow.insertCell(1);
// headerCell1.textContent = "Name";
// headerCell2.textContent = "Score";
// headerCell1.style.fontWeight = "bold";
// headerCell2.style.fontWeight = "bold";

// Loop through arrays and add rows
// for (var i = 0; i < students.length; i++) {
    // var row = table.insertRow(); // Create new row
    
    // var cell1 = row.insertCell(0); // Insert first cell
    // var cell2 = row.insertCell(1); // Insert second cell
    
    // cell1.textContent = students[i]; // Assign student name
    // cell2.textContent = scores[i];  // Assign student score
// }

// Append table to document body
// document.body.appendChild(table);

// Answer 14 //
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value:"))
// var result = [];

// for (var i = 0; i < scores.length; i++){
//     result.push(scores[i]);
//     if (scores[i] === stopValue){
//         break;
//     }
// }

// console.log("Numbers up to stop value:", result.join(", "));

// Answer 15 //
// for (var i = 0; i < 3; i++){
//     for (var j =0; j < 3; j++){
//         document.write((i * 3 + j + 1) + " ")
//     }
//     document.write("<br>")
// }

// Answer 16 //
// var num = parseFloat(prompt("Enter a number:"))

// for (; num > 0; num -= 0.5){
//     document.write(num + " ")
// }

// 
// Answer 17 //
// for (var i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         document.write(i + " " + "is Even" + "<br>")
//     } else {
//         document.write(i + " " + "is Odd" + "<br>")
//     }
// }

// Answer 18 //
// var product = 1;

// for (var i = 1; i <= 7; i++){
//     if (i % 2 !== 0){
//         product *= i;
//     }
// }
// document.write("The product of odd integers from 1 to 7 is:" + product)

// Answer 19 //
// for (var i = 7; i >= 1; i--){
//     document.write("*".repeat(i) + "<br>")
// }

// Answer 20 //
// for (var i = 1; i <= 5; i++){
//     document.write("*".repeat(5) + "<br>");
// }

// AND //
// for (var i = 1; i <= 5; i++){
// document.write("*".repeat(i) + "<br>")
// }

// AND //
// for (var i = 5; i >= 1; i--){
//     document.write("*".repeat(i) + "<br>")
// }