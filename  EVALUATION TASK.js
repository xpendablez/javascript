//  task 1 this expression equals 4, change it to equal 42
console.log(6*8-6);

//task 2 To convert Celsius to Fahrenheit
var F;
F=C×1.8+32;
function convertFahrenheitToCelsius(c){
	return F=C*1.8+32;
}
convertFahrenheitToCelsius(12);

// task 3 Create a string with the name of your favorite sport. The first letter of the string should be capitalized.
console.log("Swimming");

// task 4 Fix the right side expression so it evaluates to true.
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";

console.log(answer);

//task 5 Build a single string that resembles the following joke.
var answer ="Why couldn't the shoes go out and play? \n They were all \"tied\" up!";
console.log(answer);

//task 6 Look at the picture below and identify which data type (Numbers, Strings, Booleans) would best represent the highlighted areas.
LETTER                                                          TYPE

A - NASA - National Aeronautics and Space Administration        strings                            

B - Apply now to go behind-the-scenes at a #NASASocial May 31-Jun 1, 2017 for the launch of SpaceX's #Dragon cargo spacecraft carrying science and supplies to the International Space Station: 
-                                                               strings

C - http://go.nasa.gov/2qPSh9w                                   strings

D - Whether something was "liked" or not.                        boolean


E - 995                                                          numbers

//task 7 statement using concatenation
var  thingOne= "red";
var thingtwo="blue";
var thingThree=thingOne.concat(thingtwo);
console.log(thingThree);

//task  8/1
var fullName= "Bharat chopkar";
console.log(fullName);

//task 8/2
var bill=10.25 + 3.99 + 7.15;
var tip=bill*0.15;
var total=tip+bill;
console.log(total);

//task 8/3
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var midLib= "The Intro to JavaScript course is "+adjective1+". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+" content!";
console.log(midLib);

//task 9
var firstName="julia";
var interest="cats";
var hobby ="play video games";
	
var awesomeMessage="Hi, my name is "+firstName+". I love "+interest+". In my spare time, I like to "+hobby+".";
console.log(awesomeMessage);

//task 10/1
boolean

//task 10/2
A dragon appears and attacks
 
//task 11/1
var num=2;
if(num%2==0){
	console.log("number :"+num+" is even.");
}else{
	console.log("number :"+num+" is odd");
}

//task 11/2
var musicians=4;
if(musicians ==0){
	console.log( "not a group");
}else if(musicians ==1){
	console.log("solo");
}else if(musicians ==2){
	console.log("duet");
}else if(musicians ==3){
	console.log( "trio");
}else if(musicians  ==4){
	console.log("quartet");
}else{
	console.log("this is a large group");

}

//task 12 murder mystery
var room = "gallery";
var suspect = "Ms. Van Cleve";
var weapon = "";
var solved=false;
if(room=="dining room", suspect=="Mr.Parkes"){
	solved=true;
	weapon="knief";
}else if(room=="gallery", suspect=="Ms. Van Cleve"){
	solved=true;
	weapon="trophy";
}else if(room=="billiards room", suspect=="Mrs. Sparr"){
	solved=true;
	weapon="pool stick"
}else if(room=="ballroom", suspect=="Mr. Kalehoff"){
	solved=true;
	weapon="poison";
}if(solved=true){
console.log("The"+suspect+" did it in the "+room+" with the "+weapon+".");
}else{
	console.log("murder mystery is unsolved");
}

//task 13 Using the flowchart below checking your balance at the ATM.
var balance = 325.00;
var checkBalance = true;
var isActive = false;
if(checkBalance = true){
	if(isActive= true){
		console.log("balance:"+balance);
	}else if(isActive=false){
		console.log("your account is no longer active");
	}else if(balance=0){
		console.log("your account is empty");
	}
}else{
	console.log("your balance is negative pls contact bank");
}

//task 14 
var flavor = " vanilla";
var vessel = "cone";
var toppings = "peanuts";
if(flavor== "chocolate"||"vanilla"){
	console.log("flavor :"+flavor);
}else if(vessel=="cone"||"bowl"){
	console.log("vessel :"+vessel);
}else if(toppings=="sprinkles"||"peanuts"){
	console.log("toppings :"+toppings);
}else{
	console.log("only plain ice cream");
}
console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".");
//task 15




//task 16
var eatsPlants = true;
var eatsAnimals = true;
if(eatsAnimals==true){
	console.log("carnivore");
}else if(eatsPlants==true){
	console.log("herbivore");
}if(eatsPlants==true && eatsAnimals==true){
	console.log("omnivore" );
}else{
	console.log("undefined");
}


//task 17




//task 18/1
var num=1 ;
while(num<20){
if(num % 3==0 && num % 5==0){
		console.log("juliajames");
	}else if(num % 5 == 0){
		console.log("james");
	}else if(num % 3 ==0){
		console.log("julia");
	}else {
			console.log(num);
	}
	num=num+1;
}	

//task 19/1
for (var i = 9;i >= 1 ; i--) {
	console.log("hello"+i);
}

//task 19/2
for (var x=5;x < 10; x++) { 
    console.log(x); 
}

//task 19/3
for (var k = 0; k < 200; k++) { 
   console.log(k); 
}

//task 19/4












