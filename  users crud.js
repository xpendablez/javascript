


//users crud 
var userName = ""; // user's name
var userAge = "";  // user's age
var userCrud = function() {
	console.log('Inside userCrud....');
	var choice = Number(prompt('Enter your choice \n 1.Add new user \n 2.View user details \n 3.Update existing user \n 4.Exit'));
	console.log("Choice : "+choice);
	
	switch(choice){
		case 1:
				var name = prompt("Enter user's name","");
				var age = Number(prompt("Enter user's age",""));
				addUser(name,age);
				userCrud(); // restart app
				break;
		case 2:
				var details = viewUser();
				alert(details);
				userCrud(); // restart app
				break;
		case 3:
				var name = prompt("Enter user's name",userName);
				var age = Number(prompt("Enter user's age",userAge));
				updateUser(name,age);
				userCrud(); // restart app
				break;
		case 4:
				break;
		default : 
				alert("Please enter a correct choice.");
				userCrud(); // restart app
				break;
	};
	// Add user function
	function addUser(name,age) {
		userName = name;
		userAge = age;
		return true;
	}
	// Add user function
	function viewUser() {
		return "Name : "+userName+" Age : "+userAge;
	}
	// update user function
	function updateUser(name,age) {
		userName = name;
		userAge = age;
		return true;
	}
};

userCrud(); // start App

















































