// Question 1
var num1 = 50;
var num2 = 5;
var sum = num1 + num2;
document.write(" The sum of " + num1 +  " and " + num2 + " is "  + sum + "<br>");

// Question 2 
// 1: subraction 

var num1 = 50;
var num2 = 5;
var subraction = num1 - num2;
document.write(" The subraction of " + num1 + " and " + num2 + " is " + subraction + "<br>");




// 2: Multiplication

var num1 = 50;
var num2 = 5;
var multiplication = num1 * num2;
document.write( "The Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");



// 3 : Modulus
var num1 = 50;
var num2 = 5;
var modulus = num1 % num2;
document.write(" The Modulus  of " + num1 + " and " + num2 + " is " + modulus + "<br>"  );




// Question 3 


var num ;
document.write( "  <h3> Value after variable declaration is: " + num  );

  var num = 5;
document.write ("<h1> Initial value : "  + num  );

var num = ++num;
document.write ("<h1> value after increment is : "  + num  );

var num = num + 7;
document.write ("<h1> value after addition is : "  + num  );

 var num = --num ;
 document.write ("<h1> value after decrement is : "  + num  );


 var num = num % 3;
 document.write ("<h1> The Reminder  is : "  + num  );



 // Question 4

 var movieticket = 600;
 var ticket = 5;
 var  totalcost = movieticket * ticket;
 document.write("<h1>  total cost to buy 5 tickets to a movie is " + totalcost);


 // Question 5 

 document.write("<h3> Table of 4 </h1> ")
 document.write( " <h4> 4 x 1 = " +    (4 * 1) + " <br> " );
 document.write( " 4 x 2 = " +    (4 * 2)  + " <br> "  );
 document.write( " 4 x 3 = " +    (4 * 3) + " <br> "  );
 document.write( " 4 x 4 = " +    (4 * 4) + " <br> "  );
 document.write( " 4 x 5 = " +    (4 * 5) + " <br> "  );
 document.write( " 4 x 6 = " +    (4 * 6) + " <br> "  );
 document.write( " 4 x 7 = " +    (4 * 7) + " <br> "  );
 document.write( " 4 x 8 = " +    (4 * 8) + " <br> "  );
 document.write( " 4 x 9 = " +    (4 * 9) + " <br> "  );
 document.write( " 4 x 10 = " +    (4 * 10) + " <br> </h4>"  );



// Question 6 

 document.write(" <h2 > Celsius </h2>")
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");




 
  // Question 7

  document.write (" <h1> Shoping Cart </h1>" )

var itemprice1 = 650;
var Quantityitem1 = 3;
var itemprice2 = 100;
var Quantityitem2 = 7;
var Shipping = 100;
var totalitem1 = ( 650 * 3) ;
var totalitem2 = (7 * 100 ) + 100; 
var alltotal = totalitem1 + totalitem2 ;


document.write(" price of item 1  is  " + itemprice1 + " <br> "  );
document.write(" Quantity of item 1 is " + Quantityitem1 + " <br> "   );
document.write(" price of itme 2 is " + itemprice2 +  " <br> "  );
document.write(" Quantity of item  2 is  " + Quantityitem2 + " <br> "  );
document.write(" Shipping Charges" + Shipping +  " <br> " );


document.write("  Total cost of your order is "  + alltotal );
  


// Question 8 

document.write(" <h1> Mark Sheet </h1>")

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (  obtainedMarks / totalMarks) * 100 ;
document.write("percentage "  + percentage + " % ");



// Questio 9 

document.write("<h1> Currency in PKR </h1> ")

var Us$ = 1048;
var riyal = 700 ;
var total = 1048 + 700;
document.write("Total Currency In PKR :" + total + " <br>" );



// Question 10

document.write("<h2> Number Expression </h2>")
  

var number = 30 + 5 * 10 / 2 ;
document.write(" Result Expression " + number );





// Questio 11

document.write("<h1> Age Calculator</h1>")

var currentyear = 2016;
var birthyear = 1992;
var total = ( currentyear - birthyear);
document.write(" <h4> Current Year :" + currentyear + " <br>");
document.write("Birt Year :" + birthyear + "<br>");
document.write("Your Age is :" + total);




// Questio 12


document.write("<h1> The Geometrizer </h1>")


var radius = 20;
var pi = 3.142;
var circumference = ( 2 * pi )* radius;
var area = ( pi * radius ) * radius;

document.write(" <h4> Radius of a circle: " + radius + "<br>" );
document.write("The circumference is: " + circumference + "<br>"   );
document.write("The area is: " + area + "<br>"  );


// Questio 13


document.write("<h1> The Lifetime Supply Calculator </h1>")

var Snack = "chocolate chip";
var age = 15;
var Maximum = 65;
var amount = 3;
var totalchip = (Maximum - age ) * 3;

document.write("<h4> Favourite Snack : " + Snack + "<br>");
document.write("Current Age :" + age + "<br>");
document.write("Estimated Maximum  "  + 65 + "<br>");
document.write("Amount Of Snack per day :" + 3 +  "<br>");
document.write(" you will need " + totalchip + " chocolate chip to last you until the ripe old age of " + Maximum +  "");


