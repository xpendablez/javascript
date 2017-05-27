//min of two no
function minOfTwoNo(a,b){
	if(a<b)
		return a;
	else
		return b;
	};
minOfTwoNo(25,21);

//max of two no
function maxOfTwoNo(a,b){
	if(a<b)
		return b;
	else
		return a;
};
maxOfTwoNo(25,12);

//avarage of two nos
function avarageOfTwoNo(a,b){
	return (a+b)/2;
};
avarageOfTwoNo(2,8);

//multiplication of two no
function mul(a,b){
	return a*b;
};
mul(2,2);

//function to calculate sum of n to (n+10) no
function sum(num){
var total=0;
for (var i =num; i <(num+10); i++) {
	total+=i;
};
return total;
};
sum (2);

//multiplication of even nos bet n to(n+10)
function mulOfTenNumbers(num){	
	var result =1;
	for(var i=num;i<(num+10);i++){
		if(i%2==0)
			result *=i;
		
	};
	return result;
};
mulOfTenNumbers(2);

//
function mulOfTenNumbers(num){	
	var result =1;
	for(var i=num;i<(num+10);i++){
		if(i%2==0)
			result *=i;//if no is odd their is multiplication is performed
		else
			result /=i;//if no is odd their is division is performed
	};
	return result;
};
mulOfTenNumbers(2);

//function divOfTenNo bet n to (n+10)
function divisionOfTenNo(num){
	var result=1;
	for (var i = 1; i < (num+10); i++) {
		result /=i;
	};

	return result;
};
divisionOfTenNo(5); //result is 1

//avarage of no 
function avarageOfNumberIfNumberIsEven(num){
	var count=0;
	var result=0;
	for (var i =num; i <(num+10); i++) {
		if(i%2==0){
			result += i;
			count++;
		}
	}
	console.log("Result",result,"Count",count);
	return result/count;
};
avarageOfNumberIfNumberIsEven(2);


//function of function
function myConsole(text){
	console.log(text);
};
function myAlert(text){
	alert(text);
};
function myOutput(myFunction,text){
	myFunction(text);
};

myOutput(myAlert,"testing");

