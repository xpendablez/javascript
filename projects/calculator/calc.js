
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
function clearText(num1,num2){
	document.getElementById("num1").value="";
	document.getElementById("num2").value="";
	document.getElementById("num3").value="";
}
function clearScreen(num1,num2){
	//printResult(num1=="",num2=="");
	printResult("");
}
function printResult(result){
	document.getElementById('num3').value=result
}