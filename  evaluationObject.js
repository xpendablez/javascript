//task 1
var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
   close:function(){
    umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
};

//task 2
var breakfast={name:"The Lumberjack", price:"$9.95", ingredients:["eggs", "sausage", "toast", "hashbrowns", "pancakes"]}
console.log(breakfast);
for(var i=0;i<=breakfast.ingredients.length;i++){
  console.log(breakfast.ingredients[i]);
}


//task 3
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary:function(){
  
    console.log("Welcome! \n Your balance is currently $"+savingsAccount.balance+ " and your interest rate is "+savingsAccount.interestRatePercent+".")
  } 
};
savingsAccount.printAccountSummary();


//task 4
Followings are the valid ways to access properties and call methods
1.savingsAccount.balance
2.savingsAccount["balance"]
3.savingsAccount.withdraw = 50;
4.savingsAccount.withdraw(50);


//task 5

var facebookProfile={
  name:"Bharat",
  friends:5,
  message:[],
  postMessage:function(message){
      facebookProfile.message.push(message);
  },
  deleteMessage:function(index){
      facebookProfile.message.splice(index);
  },
  addFriend:function(){
      facebookProfile.friends++;
  },
  removeFriend:function(){
      facebookProfile.friends--;
  }
};


//task 6
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(element){
  console.log(element.type+" cost $"+element.cost+" each.");
});


//task 7

var arithmaticOperations={
  a:5,
  b:2,
  
  addition:function(){
      return arithmaticOperations.a + arithmaticOperations.b;
  },
  substraction:function(){
      return arithmaticOperations.a - arithmaticOperations.b;
  },
  multiplication:function(){
      return arithmaticOperations.a * arithmaticOperations.b;
  },
  division:function(){
      return arithmaticOperations.a / arithmaticOperations.b;
  }
};

