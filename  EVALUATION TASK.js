//  task 1 this expression equals 4, change it to equal 42
console.log(6*6+12-6);


//task 2 To convert Celsius to Fahrenheit
var fahrenheit;
var celsius=12;
fahrenheit=celsius*1.8+32;
console.log(fahrenheit);


// task 3 Create a string with the name of your favorite sport. The first letter of the string should be capitalized.
var mySport="swimming";
mySport.charAt(0).toUpperCase()+mySport.slice(1);

// task 4 Fix the right side expression so it evaluates to true.
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";

console.log(answer);


//task 5 Build a single string that resembles the following joke.
var answer ="Why couldn't the shoes go out and play? \n They were all \"tied\" up!";
console.log(answer);


//task 6 Look at the picture below and identify which data type (Numbers, Strings, Booleans) would best represent the highlighted areas.
LETTER                                                          TYPE

A - NASA - National Aeronautics and Space Administration        string                           

B - Apply now to go behind-the-scenes at a #NASASocial May 31-Jun 1, 2017 for the launch of SpaceX's #Dragon cargo spacecraft carrying science and supplies to the International Space Station: 
-                                                               string

C - http://go.nasa.gov/2qPSh9w                                   string

D - Whether something was "liked" or not.                        boolean


E - 995                                                          number


//task 7 statement using concatenation
var  thingOne= "red";
var thingTwo="blue";
console.log(thingOne+" "+thingTwo);

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
	console.log("even");
}else{
	console.log("odd");
}


//task 11/2
var musicians=4;
if(musicians <=0){
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
if(room=="dining room" && suspect=="Mr.Parkes"){
	solved=true;
	weapon="knief";
}else if(room=="gallery" && suspect=="Ms. Van Cleve"){
	solved=true;
	weapon="trophy";
}else if(room=="billiards room" && suspect=="Mrs. Sparr"){
	solved=true;
	weapon="pool stick"
}else if(room=="ballroom" && suspect=="Mr. Kalehoff"){
	solved=true;
	weapon="poison";
}if(solved){
console.log(suspect+" did it in the "+room+" with the "+weapon+".");
}else{
	console.log("murder mystery is unsolved");
}


//task 13 Using the flowchart below checking your balance at the ATM.
var balance = 325.00;
var checkBalance = true;
var isActive = false;
if(checkBalance){
	if(isActive && balance >0){
		console.log("your balance is $"+balance.tofix+".");
	}else if(!isActive){
		console.log("your account is no longer active");
	}else if(balance==0){
		console.log("your account is empty");
	}else {
		console.log("your balance is in negative . please contact bank");
	}
}else{
	console.log("Have a nice day Thank you");
}


//task 14 
var flavor = " vanilla";
var vessel = "cone";
var toppings = "peanuts";
if((flavor == "vanilla" || flavor == "chocolate") && (vessel == "cone" || vessel == "bowl") && (toppings == "sprinkles" || toppings == "peanuts")) {
	console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".")
}

//task 15
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;
if((shirtWidth==18||shirtWidth==19)&&(shirtLength==28)&&(shirtSleeve==8.13||shirtSleeve<=8.37)){
	console.log("s");
}else if((shirtWidth==20||shirtWidth==21)&&(shirtLength==29)&&(shirtSleeve==8.38||shirtSleeve<=8.62)){
	console.log("m");
}else if((shirtWidth==22||shirtWidth==23)&&(shirtLength==30)&&(shirtSleeve==8.63||shirtSleeve<=8.87)){
	console.log("l");
}else if((shirtWidth==24||shirtWidth==25)&&(shirtLength==31||shirtLength==32)&&(shirtSleeve==8.88||shirtSleeve<=9.62)){
	console.log("xl");
}else if((shirtWidth==26||shirtWidth==27)&&(shirtLength==33)&&(shirtSleeve==9.63||shirtSleeve<=10.12)){
	console.log("2xl");
}else if((shirtWidth==28)&&(shirtLength==34)&&(shirtSleeve==10.13)){
	console.log("3xl");
}else{
	console.log("not available");
}


//task 16
var eatsPlants = false;
var eatsAnimals = false;

var category = "";

if (eatsPlants && !eatsAnimals) {
	category = "herbivore";
} else if (eatsAnimals && !eatsPlants) {
	category = "carnivore";
} else if (eatsPlants && eatsAnimals) {
	category = "omnivore";
} else {
	category = "undefined";
}
console.log(category);



//task 17
var education = "no high school diploma";
var salary;
var choice =Number(prompt('Enter your choice \n 1.no high school diploma \n 2.a high school diploma \n 3.an Associate\'s\' degree \n 4.a Bachelor\'s\' degree \n 5.a Master\'s\' degree \n 6.a Professional degree \n 7.a Doctoral degree'));
	console.log("choice : "+choice);
switch(choice){
case 1:
	salary="$25,636";
	salary.toLocaleString("en-US");
	education="no high school diploma";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break;
case 2:
	salary="$35,256";
	salary.toLocaleString("en-US");
	education="a high school diploma";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break; 
case 3:
	salary="$41,496";
	salary.toLocaleString("en-US");
	education="an Associate's degree";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break;    
case 4:
	salary="$59,124";
	salary.toLocaleString("en-US");
	education="a Bachelor's degree";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break;
case 5:
	salary="$69,732";
	salary.toLocaleString("en-US");
	education="a Master's degree";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break;      
case 6:
	salary="$89,960";
	salary.toLocaleString("en-US");
	education="a Professional degree";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break;      
case 7:
	salary=" $84,396";
	salary.toLocaleString("en-US");
	education=" a Doctoral degree";
	console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.");
    break;                    
 }	




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
	num+=1;
}	

//task 18/2 
var num = 99;

while(num >= 1) {
	var bottle = (num>1)? "bottles" : "bottle";
	console.log(num+" "+bottle+" of juice on the wall! "+num+" "+bottle+" of juice! Take one down, pass it around... "+(num-1)+" "+((num-1 > 1)? "bottles" : "bottle")+" of juice on the wall!");	
	num--;
}

//task 18/3
var time=60;
while(time>=0){
	if (time==50){
		console.log("Orbiter transfers from ground to internal power.");
	}else if(time==31){
		console.log("Ground launch sequencer is go for auto sequence start.");
	}else if(time==16){
		console.log("Activate launch pad sound suppression system.");
	}else if(time==10){
		console.log("Activate main engine hydrogen burnoff system");
	}else if(time==6){
		console.log("Main engine start ");
	}else if(time==0){
		console.log("Solid rocket booster ignition and liftoff!");
	}else{
	console.log("T-minus "+time+" seconds.");
	}
	time--;
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
var num=12;
fact=1;
for (var i=num;i<=num;i--) {
	fact=fact*i
}



//task 19/5
var seatNo="0-2";
for (var i=0; i >= 25; i++) {
	for (var j =1 ; i >= 99; i++) {
		
	}
}


//task 20/1
function laugh(){
	return "hahahahahahahahahaha!";
}
laugh();

//task 20/2
function laugh(num){
	var num=1;
	for (var i =1; i <=num ; i++) {
		num+=i;
	}
	return "hi";
}
console.log(laugh(3));








































