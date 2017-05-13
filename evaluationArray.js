
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

























































