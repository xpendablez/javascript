
function add(num1,num2){
	printResult(num1+num2);
}
function sub(num1,num2){
	printResult(num1-num2);
}
function mul(num1,num2){
	printResult(num1*num2);
}
function div(num1,num2){
	printResult(num1/num2);
}
function clearScreen(num1,num2){
	printResult(reset(num1,num2))
}

function printResult(result){
	document.getElementById('num3').value=result
}