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


































