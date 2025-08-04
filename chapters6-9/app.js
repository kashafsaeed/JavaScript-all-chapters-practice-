// Question 1


var a = 15;
document.write("<h4> The value ia is :" + a + "<br>");

++a
document.write(" Thhe value of ++a is : " + a + "<br>");

a++
document.write(" Thhe value of a++ is : " + a + "<br>");


--a
document.write(" Thhe value of --a is : " + a + "<br>");

a--
document.write(" Thhe value of a-- is : " + a + "<br>");



// Question 2

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<h4>  a is " + a + "<br>");
document.write("  b is " + b + "<br>");
document.write(" result  is " + result + "<br>");


// question 3

var username = prompt("Enter your name:");
alert(" Hello " + username + " Welcome ");


// question 4

document.write(" <h1> Subject Total Marks Obtained Marks Percentage ");

var Subject1 = "English";
var Subject2 = "computer";
var Subject3 = "P.s.t";

var totalMarksPerSubject = 100;


var marks1 = 54;
var marks2 = 54;
var marks3 = 48;

var totalMarks = totalMarksPerSubject * 3;
var totalObtained = marks1 + marks2 + marks3;
var percentage = Math.round((totalObtained / totalMarks) * 100);



document.write("<table border='1' cellpadding='5' cellspacing='0'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + Subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + Math.round((marks1 / 100) * 100) + "%</td></tr>");
document.write("<tr><td>" + Subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + Math.round((marks2 / 100) * 100) + "%</td></tr>");
document.write("<tr><td>" + Subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + Math.round((marks3 / 100) * 100) + "%</td></tr>");

document.write("<tr><th></th><th>" + totalMarks  + "</th><th>" + totalObtained + "</th><th>" + percentage + "%</th></tr>");
document.write("</table>");
