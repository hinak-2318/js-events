// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

// Q # 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
//   function xy(){
//       var x = prompt("Enter the base.");
//       var y = prompt("Enter the power.");
//       var result = Math.pow(x,y);
//       alert("The result is: " + result);
//   }
//    xy();


// Q # 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...
 
// function chk(y){
//    if((y%100!==0) && (y%4==0) || (y%400==0)){
//       alert("Leap Year")
//     }
//     else{
//         alert("Not Leap Year")
//     }
// }
// chk(2016);
// chk(2017);
// chk(2020 );


// Q # 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// var a = 5; 
// var b = 6; 
// var c = 7; 
// var s = (a + b + c)/2;
// var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// document.write("The area of triangle is: " + area);


// Q # 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var English = parseInt(prompt("Enter English Marks"));
// var Maths= parseInt(prompt("Enter Maths Marks"));
// var Physics = parseInt(prompt("Enter Physics Marks"));

// function percentage(num1, num2, num3){
// 	var a =num1 + num2 + num3;
// 	var c = a/300 * 100 //percentage formoula
// 	return c;
    
// }

// var Total = percentage(English, Maths, Physics);
// document.write("Total Percentage is: " + Total + "%")



// Q # 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// String.prototype.character = function() {
//     return this.replace(/[aeiou]+/g, ''); //replace a, e, i, o and u with nothing.
//   }
  
//   function submit() {
//     var input = document.getElementById('input').value;
//     document.getElementById('output').innerHTML = input.character();
//   }
//  Q # 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 2;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 2;
//     }
// }

// var str = findOccurrences();

// console.log(str);

// Q # 8.The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


             //EVENTS
//Q # 1. Show an alert box on click on a link.
// done in html.

// Q# 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.
// Done in html.


// Q# 3.Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function std() {
//     document.getElementById("row1").remove();
    
// }
  


// Q# 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
// Done in html.



// Q# 5.Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// let count = 0;
// const button = document.getElementById("increment");
// const button2 = document.getElementById("decrement");
// const textHolder = document.getElementById("count");
// textHolder.innerHTML = count;

// button.addEventListener("click", function() {
//   textHolder.innerHTML = ++count;
// });

// button2.addEventListener("click", function() {
//   textHolder.innerHTML = --count;
// });

