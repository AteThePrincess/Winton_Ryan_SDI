/*
Ryan Winton
SDI Secion 01
Instructor Lee Lewis
Conditionals Assignment
*/

var distance;
var carOwned;
var unitOfMeasureMiles;

var distance = prompt("How far is the store from here?"); //Find out how far the store is.
var unitOfMeasureMiles = confirm("Our calculator needs distance in miles.\nIf your distance is in KM press cancel.\nIf your distance is in MI press OK."); //Ensure unit of measure is Miles
if(unitOfMeasureMiles === false){
    distance*=0.621371;
    console.log("The store is " + distance + " miles away.")
}
else {

}

var carOwned = confirm("Do you own a car? Press OK for yes, cancel for no.");

(distance <= 0) ? console.log("The store is " + distance + "miles from here.") : console.log("Please insert a real distance in miles"); //Ternary Operator for making sure the distance is a properly usable number.



//If the distance is less than 1.5 miles they will walk. If the distance is over 6 miles AND the user owns a car, the car will be taken. Otherwise they will ride their bicycle.
if(Number(distance) < 1.5){
    console.log("User should walk to the store.")
}

else if(carOwned === true && Number(distance) > 6.5){
    console.log("User should drive to the store.")
}

else{
    console.log("User should take their bicycle to the store today.")
}