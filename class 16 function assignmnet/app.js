// function getMore(){
//     let para = document.getElementById("para")
//     let getAnc = document.getElementById("anc")

//     if (para.style.display === "none"){
//         para.style.display = "inline"
//         getAnc.textContent = "Read less"
//     }
//     else{
//         para.style.display = "none"
//         getAnc.textContent = "Read more"
//     }
// }




// **************************************** Assignment **************************************** //

// Answer 1 // 
// function getDate(){
//     document.write(new Date)
// }
// getDate()

// Answer 2 //
// function name(){
//     let firstName = prompt("Enter First Name");
//     let lastName = prompt("Enter Last Name")
//     alert(`Thank you ${firstName} ${lastName} to visiting this site`)
// }
// name()

// Answer 3 //
// function sum(){
//     let num1 = parseInt(prompt("Enter first number"));
//     let num2 = parseInt(prompt("Enter second number"));

//     let add = num1 + num2
//     return add;
// }

// alert(`Sum: ${sum()} `)

// Answer 4 // 
// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));
// let operator = parseInt(prompt("Enter operator (+, -, *, /):"));

// function calculate(num1, num2, operator){
//     let result;

//     if (operator = "+"){
//         result = num1 + num2
//     }
//     else if (operator = "-"){
//         result = num1 - num2
//     }
//     else if (operator = "*"){
//         result = num1 * num2
//     }
//     else if (operator = "/"){
//         if (num2 !== 0){
//          result = num1 / num2
//         }
//         else {
//             return "Error: Division by zero is not allowed!";
//         }
//     }
//     else {
//         return "Invalid Operator!"
//     }
//     document.body.innerHTML = `<h2>Result: ${result}</h2>`
//     return result;
// }


// calculate(num1, num2, operator)
 
// Answer 5 //
// function square(num){
//     return num * num
// }
// console.log(square(5))

// Answer 6 //
// function factorial(n){
//     if (n === 0 || n === 1){
//         return 1;
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5));

// Answer 7 //
//  let userInp = parseInt(prompt("Enter the starting number"));
//  let userInp2 = parseInt(prompt("Enter the ending number"));
 
//  function getNum(start, end){
//     let output = "";

//     for (let i = start; i <= end; i++){
//         output += i + "<br>"
//     }

//     document.body.innerHTML = `Counting: <br> ${output}`
// }
// getNum(userInp, userInp2)

// kuchbhi.toLowerCase()

// Answer 8 //
// let rectWidth = "7"
// let rectHeight = "12"

// function calculateArea(width, height){
//     return width * height;
// }

// console.log(`Area: ${calculateArea(rectWidth, rectHeight)}`)

// Answer 9 //
// let userInp = prompt("Enter any word")
// let result = "";

// function checkPalindrome(){
//     for (let i = userInp.length-1; i >= 0; i--)
//         result += userInp[i]

//     if (result == userInp){
//        alert(`The word ${userInp} is Palindrome`)
//     }
//     else{
//         alert(`The word ${userInp} is not Palindrome`)
//     }
// }

// checkPalindrome()

              //  OR //

// function isPalindrome(str) {
//   let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove spaces & special chars
//   let reversedStr = cleanedStr.split("").reverse().join(""); // Reverse the string

//   return cleanedStr === reversedStr; // Check if original and reversed are same
// }

// let input = prompt("Enter a word to check if it's a palindrome")
// if (isPalindrome(input)){
//     alert(`The word ${input} is Palindrome`)
// }
// else{
//     alert(`The word ${input} is not a Palindrome`);
// }

// Answer 10 //
// function capitalizeWords(str) {
//     return str.replace(/\b\w/g, char => char.toUpperCase());
// }

// console.log(capitalizeWords("the quick brown fox"));

// Answer 11 //
// function findLongestWord(str){
//     let words = str.split(" ")
//     let longest = "";

//     for (let word of words){
//         if (word.length > longest.length){
//             longest = word;
//         }
//     }
//     return longest;
// }

// console.log(findLongestWord("web development tutorial"));

// Answer 13 //
// function countLetterOccurrences(str, letter){
//     let count = 0

//     for (let char of str){
//         if (char === letter){
//             count++;
//         }
//     }
//     return count;
// } 

// console.log((countLetterOccurrences("JSResourceS.com", "o")));


// Answer 14 //
function calcCircumference(r) {
    console.log("The circumference is " + (2 * Math.PI * r).toFixed(2));
}

function calcArea(r) {
    console.log("The area is " + (Math.PI * r * r).toFixed(2));
}

// Example usage
calcCircumference(5); // Output: The circumference is 31.42
calcArea(5); // Output: The area is 78.54
