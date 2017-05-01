var menuDriven=function(){
	var pi =3.14;
	console.log('Inside menuDriven');
	var choice =Number(prompt('Enter your choice \n 1. Square \n 2. Cube \n 3. Area of circle \n 4. Area of traingle \n 5.Exit'));
	console.log("choice : "+choice);
	var square = function(num) {
		alert("Square of "+num+" is "+(num*num));
	};	
	var cube = function(num) {
		alert("cube of "+num+" is "+(num*num*num));
	};	
	var areaOfCircle = function(num){
		alert("areaOfCircle"+num+"is"+(pi*radius*radius));
	};
	var areaOfTriangle =function(num){
		alert("areaOfTriangle"+num+"is"+(0.5*base*height));
	};	

			
	
	switch(choice){
		case 1:
				var num = Number(prompt("Enter number",""));
				square(num);
				menuDriven(); // restart app
				break;
		case 2:
				var num = Number(prompt("Enter number",""));
				cube(num);
				menuDriven(); // restart app
				break;
		case 3:
		        var radius = Number(prompt("Enter radius",""));
		        areaOfCircle(num);
		        menuDriven(); // restart app
		        break;
		case 4:
		        var base =Number(prompt("enter base",""));
		        var height =Number(prompt("enter height",""));
		        areaOfTriangle(num);
		        menuDriven(); // restart app
		        break;
		case 5: 
				break;
		default : 
				alert("Please enter a correct choice.");
				menuDriven(); // restart app
				break;         
		                		
	};

};
menuDriven(); //start app


//menuDriven program for convert one form to another

var menuDriven=function(){
console.log('Inside menuDriven');
	var choice =Number(prompt('Enter your choice for convert \n 1.feet to inches \n 2.Kilograms to pounds  \n 3.km/hr to miles/hr \n 4.liters to US liquid gallons \n 5.Exit'));
		console.log("choice : "+choice);
		var feetToInches = function(num){
			alert("feet"+num+"is inches"+(12*num));
        };
        var KilogramsToPounds =function(num){
        	alert("Kilograms"+num+"is pounds"+(2.204*num));
        };
        var kilometerToMiles =function(num){
            alert("kilometer"+num+"is miles"+(0.621*num));
        };
        var literToUsLiquidGallion =function(num){
            alert("liter"+num+"is US liquid gallion"+(0.264*num));

        };

        switch(choice){
        	case 1:
        	       var num =Number(prompt("Enter foot",""));
        	       feetToInches(num);
        	       menuDriven(); // restart app
        	       break;
        	case 2:
        	       var num =Number(prompt("Enter Kilograms",""));
        	       KilogramsToPounds(num);
        	       menuDriven(); // restart app
        	       break;
        	case 3:
        	       var num =Number(prompt("Enter kilometers",""));
        	       kilometerToMiles(num);
        	       menuDriven(); // restart app
        	       break;
        	case 4:
        	       var num =Number(prompt("Enter liters ",""));
        	       literToUsLiquidGallion(num);
        	       menuDriven(); // restart app
        	       break;
        	case 5: 
				   break;
		    default : 
				   alert("Please enter a correct choice.");
				   menuDriven(); // restart app
				   break;
        };
};
menuDriven(); //start app


// users crud
switch (choice){
	case 1:
	 	var name =(prompt("Enter name",""));
	 	var age =Number(prompt("Enter age",""));
	 	break;
};
var user cruds =function(){
	
};










































