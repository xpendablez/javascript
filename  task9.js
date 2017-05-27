//simple users crud by data structure
var user = {};

function addUser(name,age,phone,pincode) {
	user.name = name;
	user.age = age;
	user.phone = phone;
	user.pincode = pincode;
}

function editUser(key,value) {
	user[key] = value;
}

function viewUser() {
	var result = "Name : "+user.name+" Age : "+user.age+" Phone : "+user.phone+" Pincode : "+user.pincode;
	return result;
}

function deleteUser() {
	user = {};
}

addUser("Shais",25,9822012345,440013);
addUser("Bharat",25,9822012345,440013);
console.log("User",user);

editUser("name","Mohammad Shais Sheikh");
console.log("User",user);

console.log(viewUser());

deleteUser();
console.log("User",user);


//updated users crud by data structure
var user = [];

function addUser(name,age,phone,pincode) {
	var tempUser = {};
	tempUser.name = name;
	tempUser.age = age;
	tempUser.phone = phone;
	tempUser.pincode = pincode;

	user.push(tempUser);
}

function editUser(id,key,value) {
	user[id][key] = value;
}

function viewUser(id) {
	var result = "Name : "+user[id].name+" Age : "+user[id].age+" Phone : "+user[id].phone+" Pincode : "+user[id].pincode;
	return result;
}

function deleteUser(id) {
	 user.splice(id, 1);
}

addUser("Shais",25,9822012345,440013);
addUser("Bharat",25,9822012345,440013);
console.log("User",user);

editUser(0,"name","Mohammad Shais Sheikh");
editUser(1,"name","Bharat Chopkar");
console.log("User",user);

console.log(viewUser(0));
console.log(viewUser(0));

deleteUser(0);
console.log("User",user);
deleteUser(1);
console.log("User",user);


