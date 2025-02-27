// arrays.

// var username = "Saad"
// var userAge = 25
// var userRoll = "12345"

// var student = ['Asad', 25, 'asad@gmail.com']
// console.log(student[0], student[1])

// array methods
// push: akhir se daalega.
// pop:  akhir se nikalega.
// shift: shru se nikalega.
// unshift: shru se dalega.
// slice:
// splice: kahin se bhi dalo ya kahin se bhi nikalo

// var sabzi = ['tindey','aloo','loki','kheery','Gajar','abcd','def','tindey','aloo','loki','kheery','Gajar','abcd','def','tindey','aloo','loki','kheery','Gajar','abcd','def']
// var copy = sabzi.slice(1)
// document.write(copy)

// sabzi.splice(3,3,"hello")
// document.write(sabzi)

// sabzi.splice(1,4,"abcd")
// sabzi.push("bhindi","piyaaz","turaiyi")
// sabzi.unshift("habibi","abcd")
// sabzi.shift()
// sabzi.shift()
// sabzi.shift()

// sabzi.pop()
// sabzi.pop()
// sabzi.pop()
// sabzi.pop()
// sabzi.push("hello")

// var fruits = ["apple", "banana", "kiwi", "orange", "mango"];

// document.write(
//   `<select>
//     <option> ${fruits[0]} </option>
//     <option> ${fruits[1]} </option>
//     <option> ${fruits[2]} </option>
//     </select>`
// );

// var copy = fruits.slice(2)
// console.log(copy)

// var a = 10;
// var b = 20;

// if (a == 10) {
//   if (b == 30) {
//     document.write("dono theak");
//   } else {
//     document.write("inner galat");
//   }
// } else {
//   document.write("outer galat");
// }

// var multi = [
//   [1, 2, 3 + "<br>"],
//   [2, 3, 4 + "<br>"],
//   [3, 4, 5 + "<br>"],
// ];

// document.write(multi);

// ******************************* Assignment *******************************

// Chapter 01 //

// Answer 1 //
// var studentNames = [];

// studentNames.push("Talha");
// studentNames.push("Saad");
// studentNames.push("Ahmed");

// document.write(studentNames)

// Answer 2 //
// var studentNames1 = new Array()

// studentNames1.push("Wasim");
// studentNames1.push("Akram");
// studentNames1.push("Sohail");

// document.write(studentNames1)

// Answer 3 //
// var stringsArray = [];
// stringsArray = ["Talha", "Amir", "Saqib", "Meesum", "Qazi"];
// document.write(stringsArray)

// // Answer 4 //
// var numbersArray = [];
// numbersArray = [30, 30, 29, 21, 11, 90]
// document.write(numbersArray)

// // Answer 5 //
// var booleanArray = [];
// booleanArray = [true, false, false, true, true]
// document.write(booleanArray);
 
// // Answer 6 //
// var mixedArray = [];
// mixedArray = ["Talha", 30, true]
// document.write(mixedArray)

// Answer 7 //
// var mobileNetworks = [];
// mobileNetworks = ["Zong", "Jazz", "Telenor", "Ufone"];
// document.write(mobileNetworks)

// Answer 8 //
// var qualifications = [];
// qualifications = ["SSC <br> HSC <br> BCS <br> BS <br>  BCOM <br>  MS <br> M.Phil. <br> PhD"];

// document.write("<h1>Qualification:</h1>" + qualifications);

// Answer 9 //
  // Declare and initialize an empty array
// let topMovies2015 = [];

// // Add movies to the array one by one
// topMovies2015.push("Mad Max: Fury Road");
// topMovies2015.push("Inside Out");
// topMovies2015.push("The Martian");
// topMovies2015.push("Avengers: Age of Ultron");
// topMovies2015.push("Jurassic World");

// // Display the elements of the array
// document.write("<h3>Top Movies of 2015:</h3>");
// document.write("<ul>");
// for (let i = 0; i < topMovies2015.length; i++) {
// document.write(`<li>${topMovies2015[i]}</li>`);
// }
// document.write("</ul>");
 
// // Display the length of the array
// document.write(`<p>Total Movies: ${topMovies2015.length}</p>`);

// Answer 10 //
// var favoriteCars = [];
// favoriteCars = ["Audi", "Lamborghini", "Tesla", "Rolls Royce"];

// document.write("<h3>Favorite Cars</h3>" + "first index of the array" + favoriteCars[0])

// Answer 11 //
// let studentNames = ["Ali", "Sara", "Ahmed"];
// let studentScores = [450, 400, 350];

// // Total marks for each student
// const totalMarks = 500;

// // Display the scores and percentages of students
// document.write("<h3>Student Scores and Percentages</h3>");
// for (let i = 0; i < studentNames.length; i++) {
// let percentage = (studentScores[i] / totalMarks) * 100;
// document.write(`<p>${studentNames[i]} scored ${studentScores[i]} marks. Percentage: ${percentage.toFixed(2)}%</p>`);
//  }

// Answer 12 //
// var colorNames = ["Black", "White", "Green", "Yellow"]
// document.write(colorNames);

// var newColor = prompt("Enter a color to at the start of the array:");
// colorNames.unshift(newColor);
// document.write(colorNames);

// var newColor2 = prompt("Enter a color to at the end of the array:");
// colorNames.push(newColor2);
// document.write(colorNames)

// colorNames.unshift("Brown", "Pink");
// document.write(colorNames);

// colorNames.shift();
// document.write(colorNames);

// colorNames.pop();
// document.write(colorNames);

// var index = parseInt(prompt("Enter the index where you want to add a color(0 to " + colorNames.length + "):"))
// var newColor3 = prompt("Enter the name of the color to add:");

// if (index >= 0 && index <= colorNames.length){
//    colorNames.splice(index, 0, newColor3);
// } else {
//   alert("Invalid index! No change made to the array.")
// }
// document.write(colorNames);

// var index1 = parseInt(prompt("Enter the index where you want to delete a color(0 to " + colorNames.length + "):"));
// var deleteColor = prompt("Enter how many he want to delete:");

// if (index1 >= 0 && index1 <= colorNames.length) {
//   colorNames.splice(index1, deleteColor);
// } else {
//   alert("Invalid index! No change made to the array.");
// }
// document.write(colorNames);

// Answer 13 //
// var studentScores = ["320", "130", "230", "420"]
// document.write(studentScores + "<br>")

// studentScores.sort(function(a, b) {
//   return a - b;
// })
// document.write(studentScores)

// Answer 14 //
// var fruitsName = ["strawberry", "apple", "orange", "banana"];
// document.write(fruitsName)

// fruitsName.sort();
// document.write("<br><br>" + fruitsName)

// Answer 15 //
// var cityNames = ["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"]
// document.write(cityNames + "<br>")

// var selectedCities = cityNames.slice(1, 4)
// document.write(selectedCities)

// Answer 16 //
// var array = ["This", "is", "my", "cat"]
// document.write("Array:" + "<br>" + array + "<br><br>")
// document.write("String:" + "<br>" + array.join(" "))

// Answer 17 //
// var devices = [];
// devices.push("Keyboard")
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Moniter");
// document.write("Devices:" + "<br>" + devices + "<br><br>");

// while (devices.length > 0) {
//   var value = devices.shift();
//   document.write("Out" + "<br>" + value + "<br>")
// }

// Answer 18 //
// var devices = [];
// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Moniter");
// document.write("Devices:" + "<br>" + devices + "<br><br>");

// while (devices.length > 0) {
//   var value = devices.pop();
//   document.write("Out" + "<br>" + value + "<br>");
// }

// Answer 19 //
// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Oppo"]

// document.write(
//   `<select>
//       <option>${phones[0]}</option>
//       <option>${phones[1]}</option>
//       <option>${phones[2]}</option>
//       <option>${phones[3]}</option>
//       <option>${phones[4]}</option>
//   </select>`
// );

// Answer 20 //
// var multiArray = [
//   [],
//   [],
//   [],
//   []
// ]
// document.write(JSON.stringify(multiArray));

// Answer 21 //
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (var i = 0; i < matrix.length; i++) {
//   document.write(matrix[i].join(" ") + "<br>");
// }