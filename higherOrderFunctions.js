

function currancyFormater(amount){
	return "$"+amount.toFixed(2)
}
currancyFormater(23);


//
function square(num,action){
return "Square :"+ (num*num)+""+action(num);
}
square(2,function(num){
return " Cube :"+num*num*num;
});

//closures
function str(arg){
	return function (arg1){
		return arg+arg1;
	}
}
var strHello=str("Hello");
console.log(strHello(" rahul"));


//closure arithmatic function
function arithmatic(){
	return {
		add:function(a,b){
			return a+b;
		},
		sub:function(a,b){
			return a-b;
		},
		mul:function(a,b){
			return a*b;
		},
		div:function(a,b){
			return a/b;
		}
	};
};
var arithmatic=arithmatic();
console.log(arithmatic.add(2,5));
console.log(arithmatic.sub(5,2));
console.log(arithmatic.mul(2,3));
console.log(arithmatic.div(8,2));


//closure self invoking fun with naming
var arith=(function arithmatic(){
	return {
		add:function(a,b){
			return a+b;
		},
		sub:function(a,b){
			return a-b;
		},
		mul:function(a,b){
			return a*b;
		},
		div:function(a,b){
			return a/b;
		}
	};
})()
console.log(arith.add(2,5));
console.log(arith.sub(7,5));
console.log(arith.mul(2,5));
console.log(arith.div(8,2));


//closure self invoking without naming
var math=(function(){
	return {
		add:function(a,b){
			return a+b;
		},
		sub:function(a,b){
			return a-b;
		},
		mul:function(a,b){
			return a*b;
		},
		div:function(a,b){
			return a/b;
		}
	};
})()
console.log(math.add(2,5));
console.log(math.sub(7,5));
console.log(math.mul(2,5));
console.log(math.div(8,2));


// exact loop closure
for(var i=1;i<6;i++) {
	setTimeout(function(j){
		return function () {
			console.log(j);
		}
	}(i),1000*i);
}


//wrong closure do not write like that
for(var i=1;i<6;i++) {
	setTimeout(function(){
		console.log(i);
	},1000*i);
}

