// using prompt find whether the number is even or odd 
var num = Number(prompt("Enter any number","")); 
if(num % 2 == 0) {
	console.log("Number "+num+" is even.");
} else {
	console.log("Number "+num+" is odd.");
}

// using prompt find cube of a number 
var num = Number(prompt("enter any number",""));
console.log("Cube of number "+num+" is "+(num*num*num));

//using confiorm box ask user to countinue to find square of a number with the help of prompt
var proceed = confirm("Are you sure you want to calculate square of a number?");
if(proceed){
	var num = Number(prompt("Enter your number",""));
	if(num>0){
		alert("Square of "+num+" is : "+(num*num));
	} else {
		alert("Enter a valid number.");
	}
} else {
	alert("Program terminated.");
}


//write a program to accept values of two numbers and print their addition
var num1 = Number(prompt("Enter num 1 ",""));
var num2 = Number(prompt("Enter num 2 ",""));
console.log("Num1 : "+num1+" Num2 : "+num2);
alert("Result is "+(num1+num2));

//write a program to accept values of two numbers and print their subtraction
var num1 = Number(prompt("Enter num 1 ",""));
var num2 = Number(prompt("Enter num 2 ",""));
console.log("Num1 : "+num1+" Num2 : "+num2);
alert("Result is "+(num1-num2));

//Write a program to accept values of two numbers and print their multiplication
var num1 = Number(prompt("enter num1",""));
var num2 = Number(prompt("enter num2",""));
console.log("num1 : "+num1+" num2 :"+num2);
alert("result is "+(num1*num2));

//Write a program to accept values of two numbers and print their division
var num1 =Number(prompt("enter num1",""));
var num2 =Number(prompt("enter num2",""));
console.log("num1 :"+num1+" num2 :"+num2);
alert("result is "+(num1/num2));

//Write a program to print area of a circle
var pi=3.14;
var radius = Number(prompt("enter radius",""));
console.log("pi :"+pi+" radius :"+num);
alert("area of circle is "+(pi*radius*radius));

//Write a program to print area of a triangle
var base =Number(prompt("enter base",""));
var height =Number(prompt("enter height",""));
console.log("base :"+base+" height :"+height);
alert("area og triangle is "+(0.5*base*height));

//Write a program to print simple interest
var principle_amount =Number(prompt("Enter amount",""));
var rate =Number(prompt("Enter rate of interest",""));
var time =Number(prompt("enter time",""));
console.log("principle_amount :"+principle_amount+" rate :"+rate+"time :"+time);
alert("simple interest is"+((principle_amount*rate*time)/100));

//Write a program to accept a number from user and print it’s square & cube
var num =Number(prompt("enter any number",""));
console.log("num :"+num);
alert("The squqre is" +(num*num)+"the cube is" +(num*num*num));

//Write a program to accept two values a & b and interchange their values
var a =Number(prompt("enter any value for a",""));
var b =Number(prompt("enter any value for b",""));
console.log("a :"+a+" b:"+b);
a=a+b;
b=a-b;
a=a-b;
alert("The interchange values are"+"a :"+a+" b:"+b);

//Write a program to accept roll no and marks of 3 subjects of a student, Calculate total of 3 subjects and average
var student_roll_no =Number(prompt("Enter a student roll no",""));
var subject_1 =Number(prompt("enter the marks of subject_1",""));
var subject_2 =Number(prompt("enter the marks of subject_2",""));
var subject_3 =Number(prompt("enter the marks of subject_3",""));
console.log("student_roll_no :"+student_roll_no+" subject_1 :"+subject_1+" subject_2 :"+subject_2+" subject_3 :"+subject_3)
alert("the total of three subjects is " +(subject_1+subject_2+subject_3)+ "the average is "+((subject_1+subject_2+subject_3)/3));

//Write a program to accept two number and print largest among them
var a =Number(prompt("enter the value for a",""));
var b =Number(prompt("enter the value for b",""));
console.log("a:"+a+"b:"+b); 
if(a>b)
{
	alert("a is largest");
}
else
{
     alert("b is largest");
}

//Write a program to accept a number and print if the number is Positive/Negative
var num =Number(prompt("Entera number"));
console.log("num :"+num);
if(num>0)
{
	alert("number is positive");
}
else
{
	alert("Number is negative");
}

//Write a program to accept a number and check if it is >10, <10 or =10
var num =Number(prompt("enter number"));
console.log("num :"+num);
if(num>10)
{
	alert("number is greater than 10");
}
if(num<10)
{
	alert("number is less than 10");
}
if(num==10)
{
	alert("number is equal to 10");
}

//Write a program to accept a number from user and print if it is even or odd
var num = Number(prompt("Enter any number","")); 
console.log("num:"+num);
if(num % 2 ==0)
 {
	alert("Number is even");
 } 
 else 
 {
	alert("Number is odd");
 }

//Write a program to accept a number from user and print if it is divisible by 5
var num =Number(prompt("enter a number",""));
console.log("num:"+num);
if(num % 5 ==0)
 {
	alert("Number is divisible by 5");
 } 
 else 
 {
	alert("Number is not divisible by 5");
 }

//Write a program to accept a number from user and print if it is multiple of 7
var num =Number(prompt("enter a number"));
console.log("num:"+num);
alert("the result is"+(num*7));

//Write a program to accept two numbers from user and compare them
var num1 =Number(prompt("enter a num1",""));
var num2 =Number(prompt("enter a num2",""));
console.log("num1:"+num1+"num2:"+num2);
if(num1>num2)
{
	alert("num1 is greater");
}
if(num1<num2)
{
	alert("num2 is greater");
}
if(num1==num2)
{
	alert("both numbers are equal");
}

//Write a program to accept three numbers from user and print them in ascending and decending order
var num1 = Number(prompt('Enter number1',''));
var num2 = Number(prompt('Enter number2',''));
var num3 = Number(prompt('Enter number3',''));
var asc = "";
var desc = "";
if(num1 < num2 && num1 < num3) {
	if(num2 < num3) { 
		asc = num1+","+num2+","+num3;
		desc = num3+","+num2+","+num1;
	} else { 
		asc = num1+","+num3+","+num2;
		desc = num2+","+num3+","+num1;
	}
} else if(num2 < num1 && num2 < num3){
	if(num1 < num3) { 
		asc = num2+","+num1+","+num3;
		desc = num3+","+num1+","+num2;
	} else { 
		asc = num2+","+num3+","+num1;
		desc = num1+","+num3+","+num2;
	}
}else if(num3 < num1 && num3 < num2){
	if(num1 < num2) { 
		asc = num3+","+num1+","+num2;
		desc = num2+","+num1+","+num3;
	} else { 
		asc = num3+","+num2+","+num1;
		asc = num1+","+num2+","+num3;
	}
}
alert("Ascending : "+asc+" Descending : "+desc);

/* Write a loop that makes seven calls to console.log to output the following triangle:

 #
 ##
 ###
 ####
 #####
 ######
 #######   */

var result = "";
for (var i=0;i<7;i++){
	//console.log("I : "+i);
	for (var hash = 0; hash < i+1; hash++) {
		//console.log("HASH : "+hash);
		result +="# ";
	}
	console.log(result);
	result = "";
}

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.*/
var num=1 ;
while(num<100){
	console.log('testing :'+num);
	if(num % 3==0 && num % 5==0){
		console.log("FizzBuzz");
	}else if(num % 5 == 0){
		console.log("buzz");
	}else if(num % 3 ==0){
		console.log("fizz");
	}else {
			console.log(num);
	}
	num = num+1;
}

//by using for
for (var num = 1; num < 100; num++) {
	if(num % 3==0 && num % 5==0){
		console.log("FizzBuzz");
	}else if(num % 5 == 0){
		console.log("buzz");
	}else if(num % 3 ==0){
		console.log("fizz");
	}else {
			console.log(num);
	}
}

/*Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

# # # # 

 # # # #

# # # # 

 # # # #

# # # # 

 # # # #

# # # # 

 # # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/ 

var result = "";
var size = Number(prompt("Enter size",""));
for(var i=0;i<size;i++) {
	for(var j=i+1;j<i+(size+1);j++) {
		if(j%2!=0) {
			result+="#";
		} else {
			result+=" ";
		}
	}
	result+="\n";
}
console.log(result);





