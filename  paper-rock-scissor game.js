/* paper rock scissor*/

var a = "paper";
var b = "rock";
var c = "scissor";
var user1Score = 0;
var user2Score = 0;
var detail = "Enter your choice \n a."+a+"\n b."+b+"\n c."+c+"\n d. Score \n e.Exit";

var user1 = prompt("User 1\n"+detail,"");
var user2 = prompt("User 2\n"+detail,"");

if(user1 == "a") {
	if(user2 == "a") {
		alert("Match draw.");
	} else if(user2 == "b"){
		user1Score++;
		alert("User 1 wins.");
	}else {
		user2Score++;
		alert("User 2 wins.");
	}
} else if(user1 == "b"){
	if(user2 == "a") {
		user2Score++;
		alert("User 2 wins.");
	} else if(user2 == "b"){
		alert("Match draw.");
	}else {
		user1Score++;
		alert("User 1 wins.");
	}
}else {
	if(user2 == "a") {
		user1Score++;
		alert("User 1 wins.");
	} else if(user2 == "b"){
		user2Score++;
		alert("User 2 wins.");
	}else {
		alert("Match draw.");
	}
}

alert("Scores \n User1 : "+user1Score+" User2 : "+user2Score);
console.log(user1,user2); 






















