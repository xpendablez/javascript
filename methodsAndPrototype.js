//methods
function speak(line) {
    console.log("The " + this.type + " rabbit says '" +line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +"how late it's getting!");

speak.apply(fatRabbit, ["Burp!"]);  //to use apply method

speak.call({type: "old"}, "Oh my."); //to use call method

Object.getPrototypeOf(whiteRabbit) == Object.prototype


// Object prototypes 
var empty={};
empty;
console.log(empty.toString);  //return function
console.log(empty.toString()); //returns object
Object.getPrototypeOf(empty);  //returns the object prototype empty
Object.getPrototypeOf(Object.prototype);

//array prototype
var myArr=[];
myArr
Object.getPrototypeOf(myArr);  //returns the array prototype empty
Object.getPrototypeOf(myArr) == Object.prototype  
//false

Object.getPrototypeOf(myArr) == Array.prototype  
//true

Object.getPrototypeOf(Array.prototype) == Array.prototype  
//false

Object.getPrototypeOf(Array.prototype) == Object.prototype
//true

Object.getPrototypeOf(isNaN) == Function.prototype
//true

Object.getPrototypeOf(Function.prototype) == Object.prototype
//true


// rabbit prototype
var protoRabbit = {
	speak : function speak(line) {
        console.log("The " + this.type + " rabbit says '" +line + "'");
    }
}
var killerRabbit = Object.create(protoRabbit);
//undefined
killerRabbit.type = "killer";
//"killer"
killerRabbit.speak("hello")
//The killer rabbit says 'hello'
Object.getPrototypeOf(killerRabbit) == protoRabbit
//true
Object.getPrototypeOf(protoRabbit) == Object.prototype
//true
Object.getPrototypeOf(killerRabbit) == Object.prototype
//false

//math prototype
var myMath=Object.create(Math);
Object.getPrototypeOf(myMath)


//constructors
function Rabbit(type) {
               this.type = type;

}

var killerRabbit = new Rabbit("killer"); 

var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);

Rabbit.prototype.speak=function(line){
 console.log("The " + this.type + " rabbit says '" +line + "'");
}
killerRabbit.speak("jiiii");
