//1)
function addition(a,b){

console.log(a+b);
}

addition(3,5);

//2)
function addition(a,b){
	console.log(arguments);
	console.log(a+b);
}

addition(3,5);

//3)
function addition(a,b){
	console.log(arguments);
	console.log(a+b);
}

addition(3,5,4,6,7,8,9,100);

//4)
function addition(a,b){
	console.log(arguments.length);
	console.log(a+b);
}

addition(3,5,4,6,7,8,9,100);

//5)
function addition(a,b){
	var result = 0;
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}

addition(3,5,4,6,7,8,9,100);

//6)
function addition(a,b){
	var result = 0;
	for(var i=0;i<arguments.length;i++){
		//console.log(arguments[i]);
		result += arguments[i];
	}
	return result;
}

addition(3,5,4,6,7,8,9,100);

//7)
 function addition(a,b){
	var result = 0;
	for(var i=0;i<arguments.length;i++){
		//console.log(arguments[i]);
		result += arguments[i];
	}
	return result;
}

addition(3,5);

//8)
function addition(a,b){
	var result = 0;
	for(var i=0;i<arguments.length;i++){
		//console.log(arguments[i]);
		result += arguments[i];
	}
	return result;
}

addition(3,5,88,9,7,65,45,32,90,700,234,776,34);

//9)
function addition(proceed){
	var result = 0;
	//console.log(typeof arguments[1],arguments[1]);
	if (proceed) {
		for(var i=0;i<arguments[1].length;i++){
            
            result += arguments[1][i];
        }
	}
	return result;
}

addition(true,[3,5,88,9,7,65,45,32,90,700,234,776,34]);

//10)
 addition(false,[3,5,88,9,7,65,45,32,90,700,234,776,34]);




