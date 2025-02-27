                                              

// Chapter 01 //

// Answer 1 //
//var username;   

// Answer 2 //
// var myname = "Talha"

// Answer 3 //
// var messege;
// messege = "Hello World"
// alert (messege)

// Answer 4 //
// var studentName = "Talha Habib"
// var studentRollno = "12029"
// var studentCNIC = 333035

// alert(studentName)
// alert(studentRollno)
// alert(studentCNIC)

// Answer 5 //
//var eat = "PIZZA \nPIZZ \nPIZ \nPI \nP" 
//alert(eat)

// Answer 6 //
// var numOfChildren = 5
// var PartnerName = "abcd"
// var Loc = "GreenCity"
// var JobTitle = "Berozgar"

// alert(numOfChildren)
// alert(PartnerName)
// alert(Loc);
// alert(JobTitle);

        // or //

// var numOfChildren = prompt("Enter no of childs")
// var PartnerName = prompt("Enter Your Partner Name")
// var Loc = prompt("Enter Your Location")
// var JobTitle = prompt("Enter Your Job/Bussiness")

// document.write(
//   `<table border=''>
//         <tr>
//             <th>No of Childs</th>
//             <th>Partner Name</th>
//             <th>Location</th>
//             <th>Job Title</th>
//         </tr>
//         <tr>
//             <td>${numOfChildren}</td>
//             <td>${PartnerName}</td>
//             <td>${Loc}</td>
//             <td>${JobTitle}</td>
//         </tr>
//      </table>`
// )

// Answer 7 //
// var email;
// email = "talha390@gmail.com"
// alert("My email address is " + email)

// Answer 8 //
// var book;
// book = "'A Smarter way to learn JavaScript'"
// alert("I am trying to learn from the book " + book )

// Answer 9 //
// var name1 = "My name is Talha Habib"
// var age = "I am 18 years old"
// var CenterName = "I Study in SMIT"
// var learning = "I take Web&App Developmet"

// alert(name1)
// alert(age)
// alert(CenterName)
// alert(learning)

// Answer 10 //
// document.write("Yay! I can write HTML content through JavaScript")




// Chapter 02 //

// Answer 1 //
// var age = 18                               
// alert("I am " + age + " Years old")     

// Answer 2 //
// var visits;
// var visits = "You have visited this site 1 times"
// alert(visits)

// Answer 3 //
// var birthyear;
// birthyear = 2006
// document.write("My birth year is " + birthyear + "<br>Data type of my declared variable is number")

// Answer 4 //
// var Vistorsname = "Safdar khan"
// var ProductTitle = "Shirts"
// var Quatity = 5
// document.write(Vistorsname + " ordered " + Quatity + ProductTitle + " on Shopify clothing store")




// Chapter 03 //

// Answer 1 //
// var firstname = "Talha", lastname = "Habib", age = 18

// Answer 2 //
// Legal variable
// var userName;
// var _age;
// var $salary;
// var first_name;
// var totalScore;

//Illegal variable
//var 1name;    (Cannot start with a number)
// var user-name;  (Hyphens are not allowed)
// var var;        (Reserved keyword)
// var my name;    (Spaces are not allowed)
// var #value;     (Special characters like # are not allowed except $ and _)

// Answer 3 //




// Chapter 04 //

// Answer 1 //                                       
// var num1 = 19
// var num2 = 11
// document.write(num1 + num2)

// Answer 2 //  
// var num1 = 19 
// var num2 = 11
// document.write(num1 - num2);
//document.write(num1 * num2);
// document.write(num1 / num2);
// document.write(num1 % num2);

// Answer 3 // 
// var num;
// document.write("Value after variable decleration is: " + num + "<br><br>");
// num = 6;
// document.write("Initial value: " + num + "<br><br>");
// num++;
// document.write("Value after increment is: " + num + "<br><br>");
// num += 7;
// document.write("Value after addition is: " + num + "<br><br>");
// num--;
// document.write("Value after decrement is: " + num + "<br><br>");
// var reminder = num % 3
// document.write("The reminder is: " + reminder + "<br><br>");

// Answer 4 //
// var costofmovieticket = 600
// document.write("Total cost to buy 5 tickets to a movie is " + costofmovieticket * 5 + " PKR")

// Answer 5 //
// document.write("<h3>Multiplication table of 4</h3>")
// let number = 4;
// for (let i = 1; i <= 10; i++) {
// document.write(number + " x " + i + " = " + number * i + "<br>");
// }

// Answer 6 //



// Answer 7 //
// document.write("<h3>Shopping Cart</h3>")
// var price1 = 250
// var Quatity1 = 3
// var price2 = 200
// var Quatity2 = 6
// var shippingcharges = 160

// document.write("Price of item 1 is " + price1 + "<br>"); 
// document.write("Quatity of item 1 is " + Quatity1 + "<br>");
// document.write("Price of item 2 is " + price2 + "<br>");
// document.write("Quatity of item 2 is " + Quatity2 + "<br><br>");
// document.write("Shipping Charges " + shippingcharges + "<br><br>");

// var totalcost = (price1 * Quatity1) + (price2 * Quatity2) + shippingcharges

// document.write("Total cost of your order is " + totalcost)

// Answer 8 //
// document.write("<h3>Marks Sheet</h3>")
// var totalmarks = 1200
// var marksobtained = 900

// var percentage = (marksobtained / totalmarks) * 100;

// document.write("Total marks: " + totalmarks + "<br>");
// document.write("Marks obtained: " + marksobtained + "<br>");
// document.write("Percentage: " + percentage + "%");

// Answer 9 //
// const usdToPkr = 278
// const sarToPkr = 74

// var usd = 10 
// var sar = 25

// var totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

// document.write("<h3>Currency to PKR</h3>")
// document.write("Total currency in PKR: " + totalPkr)

// Answer 10 //
// var number = 10
// var result = ((number + 5) * 10) / 2;
// alert(result)

// Answer 11 //
// var currentyear = 2025
// var birthyear = 2006

// var age = currentyear - birthyear
// var age2 = age - 1;

// document.write("<h3>The Age Calculator</h3>")
// document.write("Current Year: " + currentyear + "<br>");
// document.write("Birth Year: " + birthyear + "<br><br>");
// document.write("They are either " + age2 + " or " + age + " years old.");

// Answer 12 //
// var radius = 12;
// const pi = 3.142;       
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius

// document.write("<h3>The Geometrizer</h3>")
// document.write("Radius of the circle: " + radius + "<br>")
// document.write("The circumference is " + circumference + "<br>")
// document.write("The area is: " + area)

// Answer 13 //
// var a = 10;
// document.write("Result: <br>")
// document.write("The value of a is: " + a + "<br><br>")
// ++a
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a++ is: " + a + "<br>");
// a++;
// document.write("Now the value of a is: " + a + "<br><br>");
// --a;
// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");
// document.write("The value of a-- is: " + a + "<br>");
// a--;
// document.write("Now the value of a is: " + a);

// Answer 14 //
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");

// Answer 15 //
// var favSnacks = "Oreo biscuits";
// var currentage = 15;   
// var maximumage = 85;
// var estimatedamount = 2;
// var totalSnacks = (maximumage - currentage) * 365 * estimatedamount;

// document.write("<h3>The Lifetime Supply Calculator </h3>")
// document.write("Favorite Snack: " + favSnacks + "<br>");
// document.write("Current Age: " + currentage + "<br>");
// document.write("Estimated Maximum Age: " + maximumage + "<br>");
// document.write("Amount of Snacks per day: " + estimatedamount + "<br><br>");
// document.write("You will need " + totalSnacks + " Oreo biscuits to last you until the rip old age of 85");

        