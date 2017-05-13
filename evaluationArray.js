
//task 1
var myFamily=["jon","sam","bharat"];

//task 1/2
var myFamily=[];
myFamily[0]="jon";
myFamily[1]="sam";
myFamily[2]="bharat";
console.log(myFamily);

//task 1/3
var myFamily=[];
myFamily.push("jon","sam","bharat");
console.log(myFamily);

//task 2
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"purple");
console.log(rainbow);

//task 3/1
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var crew=[captain,second,pilot,companion,mercenary,mechanic];

console.log(crew);

//task 4
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0]=1.255;
prices[2]=90.909;
prices[6]=1.808;
console.log(prices);

//task 5
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"purple");
console.log(rainbow);

//task 6

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team){
	if(team==7){
		return true;
	}else{
		return false;
	}
}
console.log(hasEnoughPlayers(7));

//task 7

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor,sister,shepherd);
console.log(crew);

//task 8
reverse();   //is the best method to reverse an element in the array.


var reverseMe = ["h", "e", "l", "l", "o"];
reverseMe.reverse();

//task 9
sort(compareFunction);//it is the best method to sort an array

var sortMe = [2, 1, 10, 7, 6];
function compareNumbers(a, b) {
  return a - b;
}
console.log(sortMe.sort(compareNumbers));

//task 10

shift(),splice()  //are the methods to remove the first element in array

var removeFirstElement = ["a", "b", "c"];
removeFirstElement.shift();

var removeFirstElement = ["a", "b", "c"];
removeFirstElement.splice(0,1);

//task 11
join();//join() is best for changing this array into a string.

var turnMeIntoAString = ["X", "p", "e", "n", "d", "a", "b", "l", "e", "z"];
turnMeIntoAString.join();

//task 12

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(element){
	if(element % 3 ==0){
		console.log(element+100);
	}else{
		console.log(element);
	}
	return test;
});

//task 13

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var totals = bills.map(function(x) {
   return x * 0.15;
});
console.log(totals);

//task 14

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];



























































































