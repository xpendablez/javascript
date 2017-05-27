//task 1
function range(start,end){
	var result=[];
	for(var i=start;i<=end;i++){
		result.push(i);
	}	
	return result;
}

function sum (arg){
	var temp =0;
	for(var i=0;i<arg.length;i++){
		temp+=arg[i];
	}
	return temp;
}
console.log(sum(range(1,10)));


//bonus task
function range(start,end,step){
	var result=[];
	if(step==undefined){
		step=1;
	}
	for(var i=start;i<=end;i+=step){
		result.push(i);
	}	
	return result;
}

function sum (arg){
	var temp =0;
	for(var i=0;i<arg.length;i++){
		temp+=arg[i];
	}
	return temp;
}
console.log(sum(range(1,10)));





