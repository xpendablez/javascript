var car_profile={
	"car_id":[
		{
			"id":1,
			"make":"honda",
			"model":"civic",
			"milage":"29,360"
		},
		{
			"id":2,
			"make":"toyota",
			"model":"corolla",
			"milage":"15,956"
		},
		{
			"id":3,
			"make":"jeep",
			"model":"compass",
			"milage":"114,885"
		},
		{
			"id":4,
			"make":"honda",
			"model":"pilot",
			"milage":"3830"
		},
		{
			"id":5,
			"make":"subaru",
			"model":"outback",
			"milage":"20424"
		}
	]
};

function getCarById(id){
	var carArr = car_profile.car_id;
	for (var i = 0; i < carArr.length; i++) {
		if(carArr[i].id == id){
			return carArr[i];
		}
	}
	return "car not found";
}
function getCarById(id,fields) {
	for (var i = 0; i < cars.length; i++) {
		//console.log(cars[i]);
		if(cars[i].id == id) {
			//return cars[i][fields];
			var result = "";
			fields.forEach(function(field){
				result += field + " : " + cars[i][field]+"\n";
			});
			return result;
		}
	}
	return "Car not found!";
}
getCarById(3,["mileage","make"]);

//get all cars whose mileage greater than 20000.
//get all cars whose mileage greater than 30000.

function getCarsByMileage(mileage,greater) {
	var temp = [];
	for (var i = 0; i < cars.length; i++) {
		var OP = (greater)? cars[i].mileage > mileage : cars[i].mileage < mileage; // operator based on condition
		if (OP) {
			temp.push(cars[i]);
		}
	}
	return temp;
}
getCarsByMileage(20000,false)

