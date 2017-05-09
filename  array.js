var fruits=["apple","grapes","mango","orange"];
fruits.length;
fruits[2];
fruits.toString();
fruits.join("+");
var animals=["tiger","elephant","dog"];
var joining=fruits.concat(animals);
joining.sort();
joining.push("cat");
joining.pop();
joining.shift();
joining.unshift("apple");
Array.isArray(joining);
joining.reverse();
fruits.fill("lemon");
var person={firstName:"rahul",lastName:"chopkar",age:25};
person["firstName"];
var fruits=["apple","grapes","mango","orange"];
fruits.indexOf("apple");
fruits.slice(1,3);
fruits.splice(2,0,"kiwi","banana");
fruits.splice(2,2);

//function using toString arrayfunction

function myToString(array){
	return array.toString();
};
var myArray=["shais","rahul","khursid"];
var str=myToString(myArray);
console.log(str);

function myToString(array){
	return array.toString();
};
var myArray=[15,20,55,28,31,18];
var str=myToString(myArray);
console.log(str);

//length
function myLength(array){
	return array.length;
}
var myarray =["15","20","25","30"];
var str=myarray.length;
myLength(myarray);

//join #
var myArray=[5,15,25,35,45];
function myJoin(array,seprator){
	return array.join(seprator);
}
myJoin(myarray,"*");

//concat
var animal=["tiger","dog","elephant"];
var fruits=["apple","banana","orange"];
function myConcat(arg1,arg2){
	return arg1.concat(arg2);
}
myConcat(animal,fruits);

//sort
var animal=[15,20,80,50];
function mySort(arg){
	return arg.sort();
}
mySort(animal);

//push
var animal=["tiger","elephant","rahino"];
function myPush(arg1,arg2){
	return arg1.push(arg2); 
}
myPush(animal,cat);
























