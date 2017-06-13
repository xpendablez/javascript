Operation: Addition

Connecting Server : Russia
Connected......
Value Fetched  a:10

Ready for next fetch cycle...


Connecting Server : China
Connected......
Value Fetched  b:20

Ready for operation....
Initiating......
Operation Completed c:30
Closed


// simple call back function

function getA(callback){
	callback(10);
}

function getB(callback) {
	callback(20);
}

getA(function(a) {
	console.log("A = "+a);
	getB(function(b) {
		console.log("B = "+b);

	});

});

// where to put the below code, line 13 or line 15 ?
// console.log("C = "+ (a+b));
//Expected output
// A = 10
// B = 20
// C = 30


//Program

console.log("Operation: Addition");

function connectServerInRussia(callback){
	console.log("Connecting Server : Russia");
	setTimeout(function(){
		console.log("Connected......");
		console.log("Value Fetched  a:10");
		callback(10); //value of a
	},10000);
}

function connectServerInChina(callback){
	console.log("Connecting Server : China");
	setTimeout(function(){
		console.log("Connected......");
		console.log("Value Fetched  b:20");
		callback(20);  //value of b
	},10000);
}

connectServerInRussia(function(a){               // calling russia server
	connectServerInChina(function(b){            //calling china server  
		console.log("Ready for operation....");
        console.log("Initiating......");
        console.log("Operation Completed c:"+(a+b));  //operation performed
        console.log("Closed");
	});
});



//Modified program included secret key

console.log("Operation: Addition");

function connectServerInRussia(secretKey,callback){
	console.log("Connecting Server : Russia");
	setTimeout(function(){
		console.log("Connected......");
		console.log("Value Fetched  a:"+(10*secretKey));
		callback(10*secretKey);
	},10000);
}

function connectServerInChina(secretKey,callback){
	console.log("Connecting Server : China");
	setTimeout(function(){
		console.log("Connected......");
		console.log("Value Fetched  b:"+(20*secretKey));
		callback(20*secretKey);
	},10000);
}

connectServerInRussia(3,function(a){      //passing secret key and calling russia 
	connectServerInChina(4,function(b){   //passing secret key and calling china
		console.log("Ready for operation....");
        console.log("Initiating......");
        console.log("Operation Completed c:"+(a+b));
        console.log("Closed");
	});
});


